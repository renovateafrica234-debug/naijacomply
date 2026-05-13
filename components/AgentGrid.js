"use client"
import { useState } from 'react';
import { C, font, agentColors, sectionTag, sectionTitle, card } from '../lib/theme';

const AGENTS = [
  { id: 'cac', name: 'CAC Agent', role: 'Annual returns, BN-1, director changes', model: 'Nvidia Llama 3.3 70B', status: 'active', tasks: ['File annual returns', 'Update directors', 'RC status check'], businesses: 12 },
  { id: 'firs', name: 'FIRS Agent', role: 'Tax returns, VAT, TIN management', model: 'Nvidia Llama 3.3 70B', status: 'active', tasks: ['VAT filing', 'CIT returns', 'TIN verification'], businesses: 8 },
  { id: 'state', name: 'State Agent', role: 'Permits, signage fees, local levies', model: 'Nvidia Llama 3.3 70B', status: 'idle', tasks: ['Permit renewal', 'Signage fees', 'Local levies'], businesses: 5 },
  { id: 'deadline', name: 'Deadline Agent', role: 'Predictive alerts, auto-queue, risk scoring', model: 'Nvidia Nemotron 70B', status: 'active', tasks: ['Deadline tracking', 'Risk scoring', 'Auto-queue'], businesses: 20 },
  { id: 'document', name: 'Document Agent', role: 'Form generation, validation, submission', model: 'Nvidia Llama 3.3 70B', status: 'active', tasks: ['Form generation', 'Data validation', 'Auto-submit'], businesses: 15 },
  { id: 'penalty', name: 'Penalty Rescue', role: 'Penalty detection, appeal strategy, auto-filing', model: 'Nvidia Nemotron 70B', status: 'busy', tasks: ['Penalty detection', 'Appeal strategy', 'Auto-filing'], businesses: 3 },
  { id: 'whatsapp', name: 'WhatsApp Agent', role: 'Alerts, approvals, monthly reports', model: 'Fast Llama 3.1 8B', status: 'active', tasks: ['WhatsApp alerts', 'Approval requests', 'Monthly reports'], businesses: 20 },
];

const statusConfig = {
  active: { dot: 'active', label: 'LIVE', color: '#22C55E' },
  idle: { dot: 'idle', label: 'STANDBY', color: '#94A3B8' },
  busy: { dot: 'busy', label: 'PROCESSING', color: '#D97706' },
};

export default function AgentGrid() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="agents" style={{ padding: '100px 24px', background: C.bg }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="fu" style={{ textAlign: 'center', marginBottom: 60 }}>
          <span style={{ ...sectionTag, justifyContent: 'center' }}>
            <span className="agent-dot active" style={{ width: 6, height: 6 }} />
            02 — SPECIALIZED AI AGENTS
          </span>
          <h2 style={{ ...sectionTitle, textAlign: 'center' }}>
            Seven Agents. <span style={{ color: C.green }}>One Brain.</span>
          </h2>
          <p style={{ fontFamily: font.body, fontSize: '1.05rem', color: C.textSecondary, maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Each agent is a specialized compliance expert powered by Nvidia AI. The Compliance Brain orchestrates them all.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {AGENTS.map((agent, i) => {
            const colors = agentColors[agent.id];
            const status = statusConfig[agent.status];
            const isHovered = hovered === i;
            return (
              <div key={agent.id} className={`fu${Math.min(i + 1, 5)}`}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{
                  ...card, padding: '28px', cursor: 'pointer',
                  borderColor: isHovered ? colors.primary + '40' : C.border,
                  boxShadow: isHovered ? `0 0 0 1px ${colors.primary}20, 0 12px 40px rgba(10,31,20,0.08)` : C.shadowSm,
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: colors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                    {colors.icon}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px', background: agent.status === 'active' ? '#DCFCE7' : agent.status === 'busy' ? '#FEF3C7' : '#F1F5F9', borderRadius: 20, fontFamily: font.mono, fontSize: '0.6rem', fontWeight: 700, color: status.color, letterSpacing: '0.08em' }}>
                    <span className={`agent-dot ${status.dot}`} style={{ width: 6, height: 6 }} />
                    {status.label}
                  </div>
                </div>
                <h3 style={{ fontFamily: font.display, fontSize: '1.1rem', fontWeight: 700, color: C.text, marginBottom: 6 }}>{agent.name}</h3>
                <p style={{ fontFamily: font.body, fontSize: '0.82rem', color: C.textSecondary, lineHeight: 1.5, marginBottom: 16, minHeight: 40 }}>{agent.role}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', background: '#F1F5F9', borderRadius: 6, fontFamily: font.mono, fontSize: '0.6rem', color: C.textMuted, marginBottom: 16 }}>
                  🧠 {agent.model}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {agent.tasks.map(t => (
                    <span key={t} style={{ padding: '4px 10px', background: colors.bg, color: colors.primary, fontFamily: font.body, fontSize: '0.72rem', fontWeight: 500, borderRadius: 6 }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid ' + C.borderLight }}>
                  <span style={{ fontFamily: font.body, fontSize: '0.8rem', color: C.textMuted }}>
                    <strong style={{ color: C.text, fontWeight: 600 }}>{agent.businesses}</strong> businesses
                  </span>
                  <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: colors.primary, fontWeight: 600 }}>View →</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="fu5" style={{ marginTop: 40, padding: '24px 32px', background: 'linear-gradient(135deg, #0A1F14, #1a3a2a)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #00E676, #00C853)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              🧠
            </div>
            <div>
              <div style={{ fontFamily: font.display, fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 2 }}>Compliance Brain</div>
              <div style={{ fontFamily: font.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Nvidia Nemotron 70B · Orchestrates all 7 agents · Real-time prioritization</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'rgba(0,230,118,0.15)', borderRadius: 20, fontFamily: font.mono, fontSize: '0.7rem', color: '#00E676', fontWeight: 600 }}>
            <span className="agent-dot active" />
            47 AGENTS RUNNING
          </div>
        </div>
      </div>
    </section>
  );
}
