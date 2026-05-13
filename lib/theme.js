// lib/theme.js
// NaijaComply Design Tokens — Light Theme (Agent-Ready)
// Brand: Green (#00E676) + Deep Forest (#0A1F14) on Warm White

export const C = {
  bg: "#F8FAF7",
  surface: "#FFFFFF",
  surfaceHover: "#F0F5EE",
  surfaceActive: "#E8F5E9",
  green: "#00E676",
  greenDark: "#00C853",
  greenLight: "#E8F5E9",
  greenGlow: "rgba(0,230,118,0.12)",
  text: "#0A1F14",
  textSecondary: "#4A5568",
  textMuted: "#718096",
  textInverse: "#FFFFFF",
  cyan: "#0891B2",
  violet: "#7C3AED",
  amber: "#D97706",
  red: "#DC2626",
  border: "#E2E8F0",
  borderLight: "#EDF2F7",
  borderGreen: "rgba(0,230,118,0.25)",
  shadowSm: "0 1px 2px rgba(10,31,20,0.05)",
  shadowMd: "0 4px 6px -1px rgba(10,31,20,0.08), 0 2px 4px -1px rgba(10,31,20,0.04)",
  shadowLg: "0 10px 15px -3px rgba(10,31,20,0.08), 0 4px 6px -2px rgba(10,31,20,0.03)",
  shadowGreen: "0 0 0 3px rgba(0,230,118,0.15)",
};

export const font = {
  display: "'Space Grotesk', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const card = {
  background: C.surface,
  border: "1px solid " + C.border,
  borderRadius: "12px",
  boxShadow: C.shadowSm,
  transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
};

export const btnPrimary = {
  background: "linear-gradient(135deg, #00E676, #00C853)",
  color: C.textInverse,
  fontFamily: font.display,
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  border: "none",
  cursor: "pointer",
  padding: "12px 28px",
  borderRadius: "10px",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  transition: "all 0.2s",
  boxShadow: "0 4px 14px rgba(0,230,118,0.25)",
};

export const btnSecondary = {
  background: C.surface,
  color: C.text,
  fontFamily: font.display,
  fontSize: "0.85rem",
  fontWeight: 600,
  border: "1px solid " + C.border,
  cursor: "pointer",
  padding: "12px 28px",
  borderRadius: "10px",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  transition: "all 0.2s",
};

export const sectionTag = {
  fontFamily: font.mono,
  fontSize: "0.7rem",
  color: C.green,
  letterSpacing: "0.15em",
  marginBottom: "12px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  textTransform: "uppercase",
};

export const sectionTitle = {
  fontFamily: font.display,
  fontSize: "clamp(1.8rem, 4vw, 3rem)",
  fontWeight: 700,
  color: C.text,
  lineHeight: 1.15,
  marginBottom: "16px",
  letterSpacing: "-0.02em",
};

export const statusColors = {
  compliant: { bg: "#DCFCE7", border: "#86EFAC", dot: "#22C55E", text: "#166534" },
  "due-soon": { bg: "#FEF3C7", border: "#FCD34D", dot: "#D97706", text: "#92400E" },
  overdue: { bg: "#FEE2E2", border: "#FCA5A5", dot: "#DC2626", text: "#991B1B" },
  processing: { bg: "#E0F2FE", border: "#7DD3FC", dot: "#0891B2", text: "#0C4A6E" },
};

export const agentColors = {
  cac: { primary: "#00E676", bg: "#E8F5E9", icon: "🏛️" },
  firs: { primary: "#0891B2", bg: "#E0F2FE", icon: "💰" },
  state: { primary: "#7C3AED", bg: "#EDE9FE", icon: "📍" },
  deadline: { primary: "#D97706", bg: "#FEF3C7", icon: "⏰" },
  document: { primary: "#059669", bg: "#D1FAE5", icon: "📄" },
  penalty: { primary: "#DC2626", bg: "#FEE2E2", icon: "🛡️" },
  whatsapp: { primary: "#22C55E", bg: "#DCFCE7", icon: "💬" },
};
