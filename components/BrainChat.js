"use client"
import { useState, useRef, useEffect } from 'react';
import { C, font } from '../lib/theme';

const QUICK_ACTIONS = [
  { label: 'Check my CAC status', agent: 'cac', action: 'status_check' },
  { label: 'Calculate penalty', agent: 'penalty', action: 'penalty_detection' },
  { label: 'Generate e-invoice', agent: 'firs', action: 'e_invoice' },
  { label: 'Monthly report', agent: 'whatsapp', action: 'monthly_report' },
];

const AGENT_RESPONSES = {
  cac: {
    'status_check': `✅ **CAC Status Check Complete**\n\nBusiness: TechStart Nigeria Ltd\nRC: RC1234567\nStatus: **ACTIVE**\nLast filing: 2024\nCompliance score: 42% (CRITICAL)\n\n⚠️ **Action needed:** Annual return 2025 is overdue. Base fee: ₦3,000 | Penalty: ₦6,000 | **Total: ₦9,000**\n\nWould you like me to queue the auto-filing?`,
    'annual_returns': `📄 **CAC Annual Return Pre-filled**\n\nForm CAC 2.1 ready for TechStart Nigeria Ltd (RC1234567)\n- Base fee: ₦3,000\n- Penalty (1 year late): ₦6,000\n- **Total payable: ₦9,000**\n\nPayment method: Paystack\nStatus: Awaiting your approval to auto-submit.`,
    'default': `🏛️ **CAC Agent here.**\n\nI can help you with:\n• Annual return filing\n• BN-1 registration\n• Director changes\n• RC status checks\n\nWhat would you like to do?`
  },
  firs: {
    'e_invoice': `🧾 **FIRS E-Invoice Generated**\n\nInvoice #: INV-2026-0042\nDate: 13 May 2026\nAmount: ₦500,000\nVAT (7.5%): ₦37,500\n**Total: ₦537,500**\n\nStatus: FIRS-compliant stamp applied ✅\nReady for download or direct submission to TaxPro-Max.`,
    'vat_returns': `📊 **Q2 2026 VAT Return Prepared**\n\nBusiness: African Logistics Co.\nTIN: 12345678-0001\n\nTaxable supplies: ₦2,400,000\nOutput VAT: ₦180,000\nInput VAT: ₦45,000\n**Net VAT payable: ₦135,000**\n\nDue date: 21 July 2026\nStatus: Ready for TaxPro-Max submission.`,
    'default': `💰 **FIRS Agent at your service.**\n\nI handle:\n• VAT returns (monthly/quarterly)\n• CIT filing\n• WHT returns\n• TIN management\n• E-invoice generation\n\nWhat do you need?`
  },
  penalty: {
    'penalty_detection': `⚠️ **Penalty Analysis Complete**\n\n**OVERDUE DETECTED:**\nBusiness: TechStart Nigeria Ltd\nRC: RC1234567\nViolation: CAC Annual Return 2025\n\nBreakdown:\n• Base fee: ₦3,000\n• Penalty (1 year): ₦6,000\n• **Total liability: ₦9,000**\n\nRisk: If not filed by 30 June 2026, penalty doubles to ₦12,000.\n\n🛡️ **Rescue plan:** I can auto-file this today with one click. Approve?`,
    'default': `🛡️ **Penalty Rescue Agent active.**\n\nI can:\n• Detect penalties across all your businesses\n• Calculate exact liability under CAMA 2020\n• Build appeal strategies\n• Auto-file to clear penalties\n\nWhich business should I scan?`
  },
  deadline: {
    'default': `⏰ **Deadline Agent monitoring.**\n\nUpcoming deadlines for your portfolio:\n• **TechStart Nigeria** — CAC Annual Return (14 days left) 🔴\n• **African Logistics** — VAT Return (56 days left) 🟡\n• **Green Energy** — Permit renewal (148 days left) 🟢\n\nI can auto-queue filings and send WhatsApp reminders.`
  },
  whatsapp: {
    'monthly_report': `📊 **May 2026 Compliance Report**\n\n**Portfolio Summary:**\n✅ 3 filings completed\n⚠️ 2 deadlines approaching\n❌ 1 penalty detected\n\n**Overall Score: 78%**\n\nBreakdown by business:\n• TechStart Nigeria: 42% (CRITICAL)\n• African Logistics: 78% (DUE SOON)\n• Green Energy: 97% (COMPLIANT)\n\n📱 This report has been sent to your WhatsApp (+234...).`
  },
  brain: {
    'default': `🧠 **Compliance Brain online.**\n\nI orchestrate 7 specialized agents across your portfolio:\n• 47 active tasks running\n• 12 businesses monitored\n• 3 penalties flagged for rescue\n\nHow can I help you today?`
  }
};

function getResponse(agentId, action) {
  const agent = AGENT_RESPONSES[agentId] || AGENT_RESPONSES.brain;
  return agent[action] || agent['default'] || AGENT_RESPONSES.brain.default;
}

function detectAgentAndAction(text) {
  const lower = text.toLowerCase();
  if (lower.includes('cac') || lower.includes('annual return') || lower.includes('rc')) return { agent: 'cac', action: 'status_check' };
  if (lower.includes('penalty') || lower.includes('late') || lower.includes('overdue')) return { agent: 'penalty', action: 'penalty_detection' };
  if (lower.includes('invoice') || lower.includes('vat') || lower.includes('firs')) return { agent: 'firs', action: 'e_invoice' };
  if (lower.includes('report') || lower.includes('whatsapp') || lower.includes('monthly')) return { agent: 'whatsapp', action: 'monthly_report' };
  if (lower.includes('deadline') || lower.includes('due')) return { agent: 'deadline', action: 'default' };
  return { agent: 'brain', action: 'default' };
}

export default function BrainChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'brain', text: '🧠 Welcome to NaijaComply. I am your Compliance Brain. How can I help you today?', time: 'Just now' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text, agentOverride = null) => {
    if (!text.trim()) return;
    const userMsg = { role: 'user', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const { agent, action } = agentOverride || detectAgentAndAction(text);
      const response = getResponse(agent, action);
      const brainMsg = { role: 'brain', text: response, agent, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages(prev => [...prev, brainMsg]);
      setTyping(false);
    }, 1200 + Math.random() * 800);
  };

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="agent-pulse"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 200,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #00E676, #00C853)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,230,118,0.35)',
          fontSize: '1.5rem'
        }}>
        🧠
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 200,
      width: 380, maxWidth: 'calc(100vw - 32px)', height: 560, maxHeight: 'calc(100vh - 48px)',
      background: C.surface, borderRadius: 20,
      boxShadow: '0 25px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.05)',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      border: '1px solid ' + C.border
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px', background: 'linear-gradient(135deg, #0A1F14, #1a3a2a)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 12,
            background: 'linear-gradient(135deg, #00E676, #00C853)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'
          }}>
            🧠
          </div>
          <div>
            <div style={{ fontFamily: font.display, fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>Compliance Brain</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
              <span className="agent-dot active" style={{ width: 7, height: 7 }} />
              <span style={{ fontFamily: font.mono, fontSize: '0.6rem', color: '#22C55E', fontWeight: 600 }}>ONLINE — 47 AGENTS ACTIVE</span>
            </div>
          </div>
        </div>
        <button onClick={() => setOpen(false)} style={{
          background: 'rgba(255,255,255,0.08)', border: 'none', borderRadius: 8,
          width: 32, height: 32, color: '#fff', cursor: 'pointer', fontSize: '1.1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          ✕
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%',
            display: 'flex', flexDirection: 'column', gap: 4
          }}>
            <div style={{
              padding: '12px 16px', borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: msg.role === 'user' ? 'linear-gradient(135deg, #00E676, #00C853)' : '#F1F5F9',
              color: msg.role === 'user' ? '#fff' : C.text,
              fontFamily: font.body, fontSize: '0.88rem', lineHeight: 1.6,
              whiteSpace: 'pre-wrap'
            }}>
              {msg.text}
            </div>
            <span style={{
              fontFamily: font.mono, fontSize: '0.6rem',
              color: msg.role === 'user' ? C.textMuted : '#94A3B8',
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
            }}>
              {msg.role === 'brain' && msg.agent && (
                <span style={{ color: C.green, fontWeight: 600, marginRight: 6 }}>
                  {AGENT_RESPONSES[msg.agent]?.['default'] ? msg.agent.toUpperCase() + ' AGENT' : 'BRAIN'}
                </span>
              )}
              {msg.time}
            </span>
          </div>
        ))}

        {typing && (
          <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#F1F5F9', borderRadius: '16px 16px 16px 4px' }}>
            <div style={{ display: 'flex', gap: 3 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'pulse 1s infinite 0s' }} />
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'pulse 1s infinite 0.2s' }} />
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, animation: 'pulse 1s infinite 0.4s' }} />
            </div>
            <span style={{ fontFamily: font.body, fontSize: '0.8rem', color: C.textMuted }}>Brain is thinking...</span>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div style={{ padding: '0 20px 12px', display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none' }}>
        {QUICK_ACTIONS.map((qa, i) => (
          <button key={i} onClick={() => sendMessage(qa.label, { agent: qa.agent, action: qa.action })}
            style={{
              flexShrink: 0, padding: '6px 12px', borderRadius: 20,
              background: 'rgba(0,230,118,0.08)', border: '1px solid rgba(0,230,118,0.2)',
              color: C.green, fontFamily: font.body, fontSize: '0.75rem', fontWeight: 500,
              cursor: 'pointer', whiteSpace: 'nowrap'
            }}>
            {qa.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={{ padding: '12px 20px 20px', borderTop: '1px solid ' + C.borderLight, display: 'flex', gap: 10 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
          placeholder="Ask the Brain anything..."
          style={{
            flex: 1, padding: '12px 16px', borderRadius: 12,
            border: '1px solid ' + C.border, background: '#fff',
            fontFamily: font.body, fontSize: '0.9rem', color: C.text,
            outline: 'none'
          }}
          onFocus={e => e.target.style.borderColor = C.green}
          onBlur={e => e.target.style.borderColor = C.border}
        />
        <button onClick={() => sendMessage(input)} disabled={!input.trim() || typing}
          style={{
            width: 44, height: 44, borderRadius: 12,
            background: input.trim() && !typing ? 'linear-gradient(135deg, #00E676, #00C853)' : '#E2E8F0',
            border: 'none', color: '#fff', cursor: input.trim() && !typing ? 'pointer' : 'not-allowed',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
            transition: 'all 0.2s'
          }}>
          ➤
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
