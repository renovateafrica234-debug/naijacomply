// components/EInvoicing.js
"use client"
import { useState } from 'react';
import { C, font } from '../lib/theme';

const INVOICE_FIELDS = [
  { label: 'Invoice Number', placeholder: 'INV-2026-0001', type: 'text' },
  { label: 'Business TIN',   placeholder: 'e.g. 12345678-0001', type: 'text' },
  { label: 'Customer Name',  placeholder: 'e.g. Dangote Industries Ltd', type: 'text' },
  { label: 'Amount (NGN)',   placeholder: 'e.g. 500000', type: 'number' },
];

export default function EInvoicing() {
  const [form, setForm] = useState({ invoice: '', tin: '', customer: '', amount: '' });
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setGenerated(true); }, 1800);
  };

  const amount    = parseFloat(form.amount) || 0;
  const vat       = amount * 0.075;
  const total     = amount + vat;
  const stamp     = 'NC-FIRS-' + Date.now().toString(36).toUpperCase();

  const row = (label, val, highlight) => (
    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
      <span style={{ fontSize: '0.8rem', color: C.muted }}>{label}</span>
      <span style={{ fontFamily: highlight ? font.display : font.mono, fontSize: highlight ? '1.1rem' : '0.82rem', color: highlight ? C.green : C.text, fontWeight: highlight ? 700 : 400 }}>{val}</span>
    </div>
  );

  return (
    <section style={{ padding: '80px 24px', background: 'rgba(0,255,136,0.02)', borderTop: '1px solid rgba(0,255,136,0.06)', borderBottom: '1px solid rgba(0,255,136,0.06)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48 }}>
          <div>
            <span style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.green, letterSpacing: '0.2em', display: 'block', marginBottom: 12, opacity: 0.8 }}>
              03 &mdash; FIRS E-INVOICING MODULE
            </span>
            <h2 style={{ fontFamily: font.display, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', fontWeight: 900, color: C.white, lineHeight: 1.1, marginBottom: 12 }}>
              E-Invoicing Is Now<br />
              <span style={{ color: C.amber }}>Nigerian Law.</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: C.textDim, maxWidth: 480, lineHeight: 1.7 }}>
              The Finance Act 2023 and FIRS directive now require all businesses to issue electronic invoices. NaijaComply generates, stamps and submits FIRS-compliant e-invoices instantly.
            </p>
          </div>
          <div>
            <span className="badge badge-amber" style={{ display: 'block', marginBottom: 8, textAlign: 'center' }}>FIRS MANDATE</span>
            <span className="badge badge-green" style={{ display: 'block', textAlign: 'center' }}>EFFECTIVE 2024</span>
          </div>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="mob-col">

          {/* Left: Form */}
          <div className="nc-card" style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
            <div className="scan-line" />
            <div style={{ fontFamily: font.mono, fontSize: '0.7rem', color: C.green, letterSpacing: '0.12em', marginBottom: 20, opacity: 0.8 }}>
              &#9650; GENERATE E-INVOICE
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
              <div>
                <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>INVOICE NUMBER</label>
                <input className="nc-input" placeholder="INV-2026-0001" value={form.invoice}
                  onChange={e => setForm({ ...form, invoice: e.target.value })} />
              </div>
              <div>
                <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>BUSINESS TIN</label>
                <input className="nc-input" placeholder="12345678-0001" value={form.tin}
                  onChange={e => setForm({ ...form, tin: e.target.value })} />
              </div>
              <div>
                <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>CUSTOMER NAME</label>
                <input className="nc-input" placeholder="e.g. Dangote Industries Ltd" value={form.customer}
                  onChange={e => setForm({ ...form, customer: e.target.value })} />
              </div>
              <div>
                <label style={{ fontFamily: font.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em', display: 'block', marginBottom: 6 }}>INVOICE AMOUNT (NGN)</label>
                <input className="nc-input" type="number" placeholder="e.g. 500000" value={form.amount}
                  onChange={e => setForm({ ...form, amount: e.target.value })} />
              </div>
            </div>

            {/* VAT preview */}
            {amount > 0 && (
              <div style={{ padding: '12px 16px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.1)', borderRadius: 3, marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.muted }}>Subtotal</span>
                  <span style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.text }}>N{amount.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.muted }}>VAT (7.5%)</span>
                  <span style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.amber }}>N{vat.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0,255,136,0.08)', paddingTop: 6 }}>
                  <span style={{ fontFamily: font.display, fontSize: '0.75rem', color: C.green }}>TOTAL</span>
                  <span style={{ fontFamily: font.display, fontSize: '1rem', color: C.green, fontWeight: 700 }}>N{total.toLocaleString()}</span>
                </div>
              </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={loading}
              style={{
                width: '100%', padding: '13px',
                background: loading ? 'rgba(0,255,136,0.15)' : 'linear-gradient(135deg, #00FF88, #00CC6A)',
                color: loading ? C.green : '#050A0E',
                fontFamily: font.display, fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.08em', border: 'none', cursor: 'pointer',
                borderRadius: 3, transition: 'all 0.25s',
              }}
            >
              {loading ? 'SUBMITTING TO FIRS...' : 'GENERATE + SUBMIT TO FIRS'}
            </button>
          </div>

          {/* Right: Generated invoice preview */}
          <div className="nc-card" style={{ padding: 28 }}>
            <div style={{ fontFamily: font.mono, fontSize: '0.7rem', color: C.cyan, letterSpacing: '0.12em', marginBottom: 20, opacity: 0.8 }}>
              &#9654; INVOICE PREVIEW
            </div>

            {!generated ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 280, gap: 12 }}>
                <div style={{ width: 56, height: 56, border: '1px solid rgba(0,255,136,0.15)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', opacity: 0.4 }}>&#9776;</div>
                <p style={{ fontFamily: font.mono, fontSize: '0.72rem', color: C.muted, textAlign: 'center', letterSpacing: '0.08em' }}>FILL FORM AND GENERATE<br />TO SEE FIRS E-INVOICE</p>
              </div>
            ) : (
              <div style={{ animation: 'countIn 0.5s ease' }}>
                {/* FIRS stamp */}
                <div style={{ padding: '10px 16px', background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)', borderRadius: 3, marginBottom: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: font.mono, fontSize: '0.6rem', color: C.muted, letterSpacing: '0.1em' }}>FIRS STAMP ID</div>
                    <div style={{ fontFamily: font.display, fontSize: '0.85rem', color: C.green, fontWeight: 700 }}>{stamp}</div>
                  </div>
                  <span className="badge badge-green">VALIDATED</span>
                </div>

                {row('Invoice No.', form.invoice || 'INV-2026-0001')}
                {row('Issued By (TIN)', form.tin || 'XX-XXXXXXXX-0001')}
                {row('Customer', form.customer || 'Customer Name')}
                {row('Date', new Date().toLocaleDateString('en-NG', { day: '2-digit', month: 'short', year: 'numeric' }))}
                {row('Subtotal', 'N' + amount.toLocaleString())}
                {row('VAT 7.5%', 'N' + vat.toLocaleString())}
                {row('TOTAL DUE', 'N' + total.toLocaleString(), true)}

                <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
                  <button style={{ flex: 1, padding: '10px', background: 'linear-gradient(135deg,#00FF88,#00CC6A)', color: '#050A0E', border: 'none', cursor: 'pointer', fontFamily: font.display, fontSize: '0.7rem', fontWeight: 700, borderRadius: 3 }}>
                    DOWNLOAD PDF
                  </button>
                  <button style={{ flex: 1, padding: '10px', border: '1px solid rgba(0,229,255,0.25)', color: C.cyan, background: 'transparent', cursor: 'pointer', fontFamily: font.display, fontSize: '0.7rem', fontWeight: 700, borderRadius: 3 }}>
                    SEND TO CUSTOMER
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
