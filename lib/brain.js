// lib/brain.js
// NaijaComply AI Brain — powered by Nvidia NIM API
// Used by: /app/api/brain/route.js
// Handles: compliance Q&A, form auto-fill, penalty explanation, e-invoice generation

const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const MODEL          = "meta/llama-3.1-8b-instruct";

// ── Core request function ──────────────────────────────────────
async function askBrain(systemPrompt, userMessage, temperature = 0.3) {
  const res = await fetch(NVIDIA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": "Bearer " + process.env.NVIDIA_API_KEY,
    },
    body: JSON.stringify({
      model:       MODEL,
      temperature: temperature,
      max_tokens:  1024,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user",   content: userMessage  },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Nvidia API error: " + err);
  }

  const data = await res.json();
  return data.choices[0].message.content.trim();
}

// ── 1. Compliance Q&A ─────────────────────────────────────────
// User asks a plain-English compliance question about their business
export async function askComplianceQuestion(question, businessContext) {
  const system = `
You are NaijaComply's AI compliance assistant for Nigerian businesses.
You have deep knowledge of:
- CAMA 2020 (Companies and Allied Matters Act)
- CAC annual return requirements and penalties
- FIRS tax filing rules (CIT, VAT, WHT)
- FIRS e-invoicing mandate (Finance Act 2023)
- NAFDAC, NERC and SON compliance requirements

Business context you are advising:
${JSON.stringify(businessContext, null, 2)}

Rules:
- Answer in plain, clear English
- Be specific — name exact forms, deadlines, amounts where possible
- If the business is overdue, say so directly and give the penalty amount
- Never give vague answers
- End every answer with one clear recommended action
- Keep answers under 150 words
`.trim();

  return await askBrain(system, question, 0.2);
}

// ── 2. Penalty Explanation ────────────────────────────────────
// Takes a penalty calculation result and explains it in plain English
export async function explainPenalty(penaltyData) {
  const system = `
You are a Nigerian compliance expert explaining CAC penalties to a business owner.
Be clear, direct and helpful. Explain WHY the penalty exists, WHAT law applies,
and WHAT they should do right now. Keep it under 120 words.
Use simple language — no legal jargon.
`.trim();

  const message = `
Explain this penalty to the business owner:
- Company type: ${penaltyData.companyType}
- Share capital: N${penaltyData.shareCapital?.toLocaleString() || "500,000"}
- Years late: ${penaltyData.yearsLate}
- Annual filing fee: N${penaltyData.annualFee?.toLocaleString()}
- Late penalty: N${penaltyData.penalty?.toLocaleString()}
- Total exposure: N${penaltyData.total?.toLocaleString()}

Give them:
1. Why this penalty applies (one sentence)
2. What law governs it (one sentence)  
3. What they must do right now (one sentence)
`.trim();

  return await askBrain(system, message, 0.2);
}

// ── 3. CAC Form Auto-Fill ─────────────────────────────────────
// Takes business profile data and returns pre-filled form fields
export async function autoFillCACForm(businessProfile) {
  const system = `
You are a Nigerian corporate compliance assistant.
Your job is to prepare CAC Annual Return form data from a business profile.
Always return ONLY a valid JSON object — no explanation, no markdown, no extra text.
The JSON must have exactly these fields:
{
  "rcNumber": "",
  "companyName": "",
  "registeredAddress": "",
  "natureOfBusiness": "",
  "authorisedShareCapital": "",
  "paidUpCapital": "",
  "numberOfDirectors": "",
  "financialYearEnd": "",
  "returnPeriod": "",
  "filingFeeEstimate": ""
}
`.trim();

  const message = `
Business profile:
${JSON.stringify(businessProfile, null, 2)}

Return the filled JSON object only.
`.trim();

  const raw = await askBrain(system, message, 0.1);

  // Safely parse JSON — strip any markdown fences if present
  try {
    const cleaned = raw.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return { error: "Could not parse form data", raw };
  }
}

// ── 4. E-Invoice Description Generator ───────────────────────
// Generates a professional invoice description line from raw inputs
export async function generateInvoiceDescription(invoiceData) {
  const system = `
You are a Nigerian business document assistant.
Generate a professional, FIRS-compliant invoice line item description.
Return only the description text — no extra words, no quotes.
Keep it under 20 words. Make it specific and professional.
`.trim();

  const message = `
Generate an invoice description for:
- Service/Product: ${invoiceData.serviceType}
- Business: ${invoiceData.businessName}
- Period: ${invoiceData.period || "current"}
- Amount: N${invoiceData.amount?.toLocaleString()}
`.trim();

  return await askBrain(system, message, 0.4);
}

// ── 5. Compliance Risk Score Explainer ────────────────────────
// Takes a compliance score and explains what is dragging it down
export async function explainComplianceScore(scoreData) {
  const system = `
You are NaijaComply's AI risk analyst for Nigerian business compliance.
Analyse the compliance score data and explain:
1. What the score means (one sentence)
2. The top 2 things dragging the score down (specific)
3. The single most important action to take this week
Keep the total response under 100 words. Be direct and actionable.
`.trim();

  const message = `
Compliance score data:
${JSON.stringify(scoreData, null, 2)}
`.trim();

  return await askBrain(system, message, 0.2);
}
