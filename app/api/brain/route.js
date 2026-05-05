// app/api/brain/route.js
// Single API endpoint for all NaijaComply AI brain actions
// Called from frontend components via fetch('/api/brain', { method: 'POST', body: ... })

import { NextResponse } from "next/server";
import {
  askComplianceQuestion,
  explainPenalty,
  autoFillCACForm,
  generateInvoiceDescription,
  explainComplianceScore,
} from "../../../lib/brain";

export async function POST(request) {
  try {
    const body   = await request.json();
    const action = body.action;

    if (!action) {
      return NextResponse.json({ error: "Missing action" }, { status: 400 });
    }

    if (!process.env.NVIDIA_API_KEY) {
      return NextResponse.json({ error: "NVIDIA_API_KEY not set" }, { status: 500 });
    }

    let result;

    switch (action) {

      // Ask a compliance question
      // body: { action: "ask", question: "Am I overdue?", business: { ... } }
      case "ask":
        if (!body.question) return NextResponse.json({ error: "Missing question" }, { status: 400 });
        result = await askComplianceQuestion(body.question, body.business || {});
        break;

      // Explain a penalty calculation
      // body: { action: "explain_penalty", penalty: { companyType, shareCapital, yearsLate, annualFee, penalty, total } }
      case "explain_penalty":
        if (!body.penalty) return NextResponse.json({ error: "Missing penalty data" }, { status: 400 });
        result = await explainPenalty(body.penalty);
        break;

      // Auto-fill CAC form fields
      // body: { action: "autofill", profile: { rcNumber, companyName, address, ... } }
      case "autofill":
        if (!body.profile) return NextResponse.json({ error: "Missing business profile" }, { status: 400 });
        result = await autoFillCACForm(body.profile);
        break;

      // Generate an e-invoice description
      // body: { action: "invoice_desc", invoice: { serviceType, businessName, period, amount } }
      case "invoice_desc":
        if (!body.invoice) return NextResponse.json({ error: "Missing invoice data" }, { status: 400 });
        result = await generateInvoiceDescription(body.invoice);
        break;

      // Explain a compliance score
      // body: { action: "score", scoreData: { score, overdueCount, pendingFilings, ... } }
      case "score":
        if (!body.scoreData) return NextResponse.json({ error: "Missing score data" }, { status: 400 });
        result = await explainComplianceScore(body.scoreData);
        break;

      default:
        return NextResponse.json({ error: "Unknown action: " + action }, { status: 400 });
    }

    return NextResponse.json({ success: true, result });

  } catch (err) {
    console.error("Brain API error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
