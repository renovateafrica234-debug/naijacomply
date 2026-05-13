// lib/brain.js
// NaijaComply Compliance Brain — Multi-Agent Orchestration Engine

const AGENTS = {
  cac: { name: 'CAC Agent', model: 'nvidia/llama-3.3-70b-instruct', capabilities: ['annual_returns', 'bn1_filing', 'director_changes', 'status_check'] },
  firs: { name: 'FIRS Agent', model: 'nvidia/llama-3.3-70b-instruct', capabilities: ['vat_returns', 'cit_filing', 'tin_management', 'e_invoice'] },
  state: { name: 'State Agent', model: 'nvidia/llama-3.3-70b-instruct', capabilities: ['permits', 'signage_fees', 'local_levies'] },
  deadline: { name: 'Deadline Agent', model: 'nvidia/nemotron-70b', capabilities: ['predictive_alerts', 'auto_queue', 'risk_scoring'] },
  document: { name: 'Document Agent', model: 'nvidia/llama-3.3-70b-instruct', capabilities: ['form_generation', 'validation', 'submission'] },
  penalty: { name: 'Penalty Rescue', model: 'nvidia/nemotron-70b', capabilities: ['penalty_detection', 'appeal_strategy', 'auto_filing'] },
  whatsapp: { name: 'WhatsApp Agent', model: 'nvidia/llama-3.1-8b-instruct', capabilities: ['alerts', 'approvals', 'monthly_reports'] },
};

function buildContext(agentId, business, action) {
  const agent = AGENTS[agentId];
  if (!agent) return null;
  return `You are the ${agent.name}, a specialized AI compliance agent for Nigerian businesses.
Model: ${agent.model}
Capabilities: ${agent.capabilities.join(', ')}
Business: ${business.name || 'Unknown'} | RC: ${business.rc || 'N/A'} | Type: ${business.type || 'Unknown'}
Action: ${action}
Respond in clear Nigerian business English with specific steps, deadlines, and penalty amounts.`.trim();
}

export async function dispatchAgent({ agentId, action, business = {}, data = {} }) {
  const agent = AGENTS[agentId];
  if (!agent) return { success: false, error: `Agent "${agentId}" not found` };

  const responses = {
    cac: { 'annual_returns': `CAC Annual Return filing for ${business.rc || 'RC1234567'}:\n1. Pre-filled Form CAC 2.1 ready\n2. ₦3,000 base fee + ₦6,000 penalty\n3. Auto-submit queued — awaiting approval\nDeadline: 15 Apr 2026`, 'status_check': `CAC Status: ACTIVE\nLast filing: 2024\nCompliance score: 42% (CRITICAL)` },
    firs: { 'vat_returns': `Q1 2026 VAT return prepared:\nTaxable supplies: ₦2.4M\nVAT payable: ₦360,000\nReady for TaxPro submission.`, 'e_invoice': `FIRS e-invoice generated:\nAmount: ₦${data.amount || '500,000'}\nStatus: FIRS-compliant. Ready.` },
    deadline: { 'risk_scoring': `Risk Score: ${business.score || 65}%\nUpcoming: CAC (14 days), VAT (29 days), Permit (80 days)` },
    penalty: { 'penalty_detection': `⚠️ OVERDUE: CAC Annual Return 2025\nBase: ₦3,000 | Penalty: ₦6,000\nTotal: ₦9,000 — File immediately!` },
    whatsapp: { 'monthly_report': `📊 Monthly Report\n✅ 3 filings | ⚠️ 2 deadlines | ❌ 1 penalty\nScore: ${business.score || 78}%` },
  };

  const agentResponses = responses[agentId] || {};
  const result = agentResponses[action] || `[${agent.name}] Processing ${action}...`;

  return { success: true, agent: agent.name, model: agent.model, action, result, timestamp: new Date().toISOString() };
}

export async function orchestrate({ businesses = [], priority = 'risk' }) {
  const sorted = [...businesses].sort((a, b) => (a.score || 100) - (b.score || 100));
  const queue = sorted.map(biz => ({
    business: biz,
    recommendedAgents: biz.score < 50 ? ['penalty', 'cac', 'deadline'] : biz.score < 80 ? ['deadline', 'cac', 'firs'] : ['deadline', 'whatsapp'],
    priority: biz.score < 50 ? 'CRITICAL' : biz.score < 80 ? 'HIGH' : 'NORMAL',
  }));
  return { success: true, brain: 'Compliance Brain', orchestration: priority, queue, totalBusinesses: businesses.length, criticalCount: queue.filter(q => q.priority === 'CRITICAL').length, timestamp: new Date().toISOString() };
}

export async function brainAsk(question) {
  const q = question.toLowerCase();
  if (q.includes("penalty") || q.includes("cac")) return await dispatchAgent({ agentId: 'cac', action: 'status_check', business: { rc: 'RC1234567' } });
  if (q.includes("firs") || q.includes("vat") || q.includes("invoice")) return await dispatchAgent({ agentId: 'firs', action: 'vat_returns', business: { rc: 'RC1234567' } });
  if (q.includes("score") || q.includes("risk")) return await dispatchAgent({ agentId: 'deadline', action: 'risk_scoring', business: { score: 65 } });
  if (q.includes("overdue") || q.includes("late")) return await dispatchAgent({ agentId: 'penalty', action: 'penalty_detection', business: { rc: 'RC1234567' } });
  if (q.includes("report") || q.includes("whatsapp")) return await dispatchAgent({ agentId: 'whatsapp', action: 'monthly_report', business: { name: 'Your Business', score: 78 } });
  return { success: true, result: `I can help with:\n🏛️ CAC Agent | 💰 FIRS Agent | 📍 State Agent\n⏰ Deadline Agent | 📄 Document Agent\n🛡️ Penalty Rescue | 💬 WhatsApp Agent\n\nWhat do you need?` };
}

export { AGENTS };
