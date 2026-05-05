// components/AIBrain.js
"use client"
import { useState, useEffect } from 'react';
import { C, font } from '../lib/theme';

const CAPABILITIES = [
  {
    icon: '⚡',
    title: 'Real-Time Monitoring',
    desc: 'AI agents watch all your registered businesses 24/7. Deadline approaching? The brain auto-alerts and queues filing actions before you even notice.',
    color: C.green,
  },
  {
    icon: '🧠',
    title: 'Predictive Compliance',
    desc: 'Trained on CAMA 2020, FIRS directives and CAC circulars. The brain predicts your compliance risk score and recommends actions before penalties occur.',
    color: C.cyan,
  },
  {
    icon: '🔗',
    title: 'Auto-Filing Engine',
    desc: 'Once you pre-save your business data, the AI agent auto-fills CAC forms, generates e-invoices and submits returns — with zero manual input.',
    color: C.violet,
  },
  {
    icon: '📡',
    title: 'Portal Sync',
    desc: 'Nvidia-powered NLP reads raw government portal responses and translates them into plain-English status updates inside your dashboard.',
    color: C.amber,
  },
];

const AGENT_LOG = [
  { time: '08:14:32', event: 'Scanned CAC portal — 2 businesses due in 14 days', type: 'info' },
  { time: '08:14:33', event: 'Pre-filled annual return form for RC1234567', type: 'success' },
  { time: '08:14:35', event: 'FIRS e-invoice INV-2026-0041 submitted and stamped', type: 'success' },
  { time: '08:14:36', event: 'Penalty detected: RC7654321 — N85,000 exposure', type: 'warning' },
  { time: '08:14:38', event: 'Queued auto-filing for RC7654321 pending approval', type: 'info' },
  { time: '08:14:41', event: 'TaxPro-Max VAT return submitted — Q1 2026', type: 'success' },
  { time: '08:14:44', event: 'Compliance score updated: 94% across all entities', type: 'success' },
];

const NODES = [
  { x: 50,  y: 50,  label: 'BRAIN CORE',  color: C.green,  size: 14 },
  { x: 20,  y: 20,  label: 'CAC API',     color: C.cyan,   size: 9  },
  { x: 80,  y: 18,  label: 'FIRS API',    color: C.cyan,   size: 9  },
  { x: 15,  y: 55,  label: 'NAFDAC',      color: C.violet, size: 7  },
  { x: 85,  y: 52,  label: 'TaxPro',      color: C.violet, size: 7  },
  { x: 25,  y: 82,  label: 'AGENTS',      color: C.amber,  size: 8  },
  { x: 75,  y: 80,  label: 'e-INVOICE',   color: C.amber,  size: 8  },
  { x: 50,  y: 88,  label: 'DASHBOARD',   color: C.green,  size: 7  },
];

const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [0, 5], [0, 6], [0, 7],
  [1, 3], [2, 4], [5, 7], [6, 7],
];

export default function AIBrain() {
  const [activeLog, setActiveLog] = useState(0);
  const [pulseNode, setPulseNode] = useState(0);

  useEffect(() => {
    const logTimer = setInterval(() => {
      setActiveLog(i => (i + 1) % AGENT_LOG.length);
    }, 2200);
    const nodeTimer = setInterval(() => {
      setPulseNode(i => (i + 1) % NODES.length);
    }, 800);
    return () => { clearInterval(logTimer); clearInterval(nodeTimer); };
  }, []);

  const logColor = { success: C.green, warning: C.amber, info: C.cyan };

  return (
    <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,47,255,0.07), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.2em', display: 'block', marginBottom: 14, opacity: 0.8 }}>
            05 &mdash; NVIDIA AI BRAIN ENGINE
          </span>
          <h2 style={{ fontFamily: font.display, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: C.white, lineHeight: 1.1, marginBottom: 16 }}>
            Not Just Software.<br />
            <span style={{ color: C.green }}>An Intelligence Layer.</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: C.textDim, maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            NaijaComply is powered by an Nvidia-accelerated AI brain that reads government portals, interprets regulations, and acts on your behalf — autonomously.
          </p>
        </div>

        {/* Two-column main block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }} className="mob-col">

          {/* Left: Neural network SVG */}
          <div className="nc-card" style={{ padding: 28, position: 'relative', overflow: 'hidden', minHeight: 360 }}>
            <div className="scan-line" />

            {/* Top label */}
            <div style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.15em', opacity: 0.8, marginBottom: 16 }}>
              NEURAL NETWORK &mdash; LIVE
            </div>

            {/* SVG graph */}
            <svg viewBox="0 0 100 100" style={{ width: '100%', maxHeight: 260 }}>
              {/* Edges */}
              {EDGES.map(([a, b], i) => (
                <line
                  key={i}
                  x1={NODES[a].x} y1={NODES[a].y}
                  x2={NODES[b].x} y2={NODES[b].y}
                  stroke="rgba(0,255,136,0.12)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Nodes */}
              {NODES.map((n, i) => (
                <g key={i}>
                  {/* Glow ring on active node */}
                  {pulseNode === i && (
                    <circle cx={n.x} cy={n.y} r={n.size * 1.8}
                      fill="none"
                      stroke={n.color}
                      strokeWidth="0.4"
                      opacity="0.35"
                    />
                  )}
                  <circle
                    cx={n.x} cy={n.y} r={n.size * 0.7}
                    fill={pulseNode === i ? n.color : 'rgba(0,255,136,0.15)'}
                    stroke={n.color}
                    strokeWidth="0.5"
                    style={{ transition: 'fill 0.3s' }}
                  />
                  <text
                    x={n.x} y={n.y + n.size * 0.7 + 3.5}
                    textAnchor="middle"
                    style={{ fontFamily: font.mono, fontSize: '2.8px', fill: n.color, opacity: 0.7, letterSpacing: '0.04em' }}
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Nvidia badge */}
            <div style={{ position: 'absolute', bottom: 20, right: 20, padding: '5px 10px', background: 'rgba(118,185,0,0.1)', border: '1px solid rgba(118,185,0,0.3)', borderRadius: 3 }}>
              <span style={{ fontFamily: font.mono, fontSize: '0.6rem', color: '#76B900', letterSpacing: '0.1em', fontWeight: 700 }}>NVIDIA ACCELERATED</span>
            </div>
          </div>

          {/* Right: Live agent log */}
          <div className="nc-card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.cyan, letterSpacing: '0.15em', opacity: 0.8, marginBottom: 20 }}>
              AGENT ACTIVITY LOG &mdash; LIVE
            </div>

            {/* Log entries */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {AGENT_LOG.map((log, i) => (
                <div key={i} style={{
                  padding: '10px 12px',
                  background: activeLog === i ? 'rgba(0,255,136,0.05)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeLog === i ? 'rgba(0,255,136,0.15)' : 'transparent',
                  borderRadius: 3,
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  gap: 10,
                  alignItems: 'flex-start',
                }}>
                  <span style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.muted, whiteSpace: 'nowrap', marginTop: 1 }}>{log.time}</span>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: logColor[log.type], flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontFamily: font.mono, fontSize: '0.7rem', color: activeLog === i ? C.white : C.textDim, lineHeight: 1.5, transition: 'color 0.4s' }}>
                    {log.event}
                  </span>
                </div>
              ))}
            </div>

            {/* Processing indicator */}
            <div style={{ marginTop: 16, padding: '8px 12px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: 3, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: C.green }} />
              <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.1em' }}>BRAIN ACTIVE &mdash; 47 AGENTS RUNNING</span>
            </div>
          </div>
        </div>

        {/* Capabilities grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {CAPABILITIES.map((cap, i) => (
            <div key={i} className="nc-card" style={{ padding: '24px 22px' }}>
              <div style={{
                width: 44, height: 44,
                background: cap.color + '12',
                border: '1px solid ' + cap.color + '25',
                borderRadius: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: 16,
              }}>
                {cap.icon}
              </div>
              <div style={{ fontFamily: font.display, fontSize: '0.95rem', fontWeight: 700, color: C.white, marginBottom: 8, letterSpacing: '0.03em' }}>
                {cap.title}
              </div>
              <p style={{ fontSize: '0.82rem', color: C.textDim, lineHeight: 1.65 }}>
                {cap.desc}
              </p>
              <div style={{ marginTop: 14, height: 2, background: 'linear-gradient(90deg, ' + cap.color + ', transparent)', opacity: 0.4, borderRadius: 1 }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 40, padding: '28px 32px', background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontFamily: font.display, fontSize: '1.1rem', fontWeight: 900, color: C.white, marginBottom: 6 }}>
              Let the Brain Handle Your Compliance.
            </div>
            <p style={{ fontSize: '0.85rem', color: C.textDim }}>
              Activate your AI brain today. First 14 days free, no card required.
            </p>
          </div>
          <button style={{
            background: 'linear-gradient(135deg, #00FF88, #00CC6A)',
            color: '#050A0E',
            fontFamily: font.display, fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.08em', border: 'none', cursor: 'pointer',
            padding: '14px 32px', borderRadius: 3,
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 0 24px rgba(0,255,136,0.2)',
            whiteSpace: 'nowrap',
          }}>
            <span>Activate AI Brain</span>
            <span>&#8599;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
