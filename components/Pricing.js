// components/Pricing.js
"use client"
import { C, font } from '../lib/theme';

const PLANS = [
  {
    name:    'Starter',
    price:   'N5,000',
    period:  '/month',
    desc:    'For solo founders and small businesses managing one entity.',
    color:   C.text,
    features: [
      '1 registered entity',
      'CAC annual return reminders',
      'Penalty calculator',
      'Basic e-invoice generation',
      'Email support',
    ],
    cta:     'Get Started',
    popular: false,
  },
  {
    name:    'Business',
    price:   'N15,000',
    period:  '/month',
    desc:    'For growing companies that need full compliance automation.',
    color:   C.green,
    features: [
      'Up to 5 entities',
      'AI auto-filing engine',
      'FIRS e-invoicing — unlimited',
      'CAC + TaxPro-Max integration',
      'WhatsApp + email alerts',
      'Compliance score dashboard',
      'Priority support',
    ],
    cta:     'Start Free Trial',
    popular: true,
  },
  {
    name:    'Enterprise',
    price:   'Custom',
    period:  '',
    desc:    'For law firms, consultants and corporate groups.',
    color:   C.cyan,
    features: [
      'Unlimited entities',
      'Dedicated AI agent pool',
      'Full MCP API access',
      'Custom portal integrations',
      'SLA guarantee',
      'White-label option',
      'Onboarding and training',
    ],
    cta:     'Contact Us',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.2em', display: 'block', marginBottom: 14, opacity: 0.8 }}>
            07 &mdash; PRICING
          </span>
          <h2 style={{ fontFamily: font.display, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: C.white, lineHeight: 1.1, marginBottom: 14 }}>
            Transparent Pricing.<br />
            <span style={{ color: C.green }}>No Surprises.</span>
          </h2>
          <p style={{ fontSize: '0.92rem', color: C.textDim, maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
            All plans include CAC penalty calculation and FIRS e-invoicing. 14-day free trial. Cancel any time.
          </p>
        </div>

        {/* Plans grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="nc-card"
              style={{
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                border: plan.popular ? '1px solid rgba(0,255,136,0.35)' : '1px solid rgba(0,255,136,0.10)',
                background: plan.popular ? 'rgba(0,255,136,0.04)' : C.card,
              }}
            >
              {/* Top glow line on popular */}
              {plan.popular && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, #00FF88, #00E5FF)' }} />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div style={{ position: 'absolute', top: 16, right: 16 }}>
                  <span className="badge badge-green">MOST POPULAR</span>
                </div>
              )}

              {/* Plan name */}
              <div style={{ fontFamily: font.display, fontSize: '1rem', fontWeight: 700, color: plan.color, letterSpacing: '0.06em', marginBottom: 6 }}>
                {plan.name}
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginBottom: 8 }}>
                <span style={{ fontFamily: font.display, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: C.white }}>{plan.price}</span>
                <span style={{ fontFamily: font.mono, fontSize: '0.78rem', color: C.muted }}>{plan.period}</span>
              </div>

              {/* Desc */}
              <p style={{ fontSize: '0.82rem', color: C.textDim, lineHeight: 1.6, marginBottom: 24 }}>{plan.desc}</p>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(0,255,136,0.08)', marginBottom: 22 }} />

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: plan.color, marginTop: 1, fontSize: '0.8rem', flexShrink: 0 }}>&#10003;</span>
                    <span style={{ fontSize: '0.83rem', color: C.textDim, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button style={{
                width: '100%', padding: '13px',
                background: plan.popular ? 'linear-gradient(135deg, #00FF88, #00CC6A)' : 'transparent',
                border: plan.popular ? 'none' : '1px solid rgba(0,255,136,0.25)',
                color: plan.popular ? '#050A0E' : C.green,
                fontFamily: font.display, fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.08em', cursor: 'pointer', borderRadius: 3,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'all 0.25s',
              }}>
                <span>{plan.cta}</span>
                <span>&#8599;</span>
              </button>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <p style={{ textAlign: 'center', marginTop: 28, fontFamily: font.mono, fontSize: '0.68rem', color: C.muted, letterSpacing: '0.08em' }}>
          ALL PLANS INCLUDE 14-DAY FREE TRIAL &nbsp;&#9642;&nbsp; NO CREDIT CARD REQUIRED &nbsp;&#9642;&nbsp; CANCEL ANYTIME
        </p>
      </div>
    </section>
  );
}
