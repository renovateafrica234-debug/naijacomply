// lib/theme.js
// design tokens for NaijaComply
// Import this in any component: import { C, font } from '../lib/theme'

export const C = {
  bg:        "#050A0E",
  surface:   "#0A1628",
  card:      "#0D1F35",
  cardHover: "#112240",
  border:    "rgba(0,255,136,0.10)",
  borderHi:  "rgba(0,255,136,0.35)",
  green:     "#00FF88",
  greenDim:  "#00CC6A",
  greenGlow: "rgba(0,255,136,0.15)",
  cyan:      "#00E5FF",
  violet:    "#7B2FFF",
  violetDim: "#9B6FFF",
  amber:     "#FFB800",
  red:       "#FF3B5C",
  white:     "#F0F6FF",
  muted:     "#4A6080",
  text:      "#C8D8EC",
  textDim:   "rgba(200,216,236,0.55)",
};

export const font = {
  display: "'Orbitron', sans-serif",
  body:    "'Space Grotesk', sans-serif",
  mono:    "'JetBrains Mono', monospace",
};

// Reusable inline style objects
export const card = {
  background:    C.card,
  border:        "1px solid " + C.border,
  borderRadius:  "4px",
  transition:    "all 0.35s cubic-bezier(.22,1,.36,1)",
};

export const btnPrimary = {
  background:    "linear-gradient(135deg, #00FF88, #00CC6A)",
  color:         "#050A0E",
  fontFamily:    font.display,
  fontSize:      "0.75rem",
  fontWeight:    700,
  letterSpacing: "0.08em",
  border:        "none",
  cursor:        "pointer",
  padding:       "12px 28px",
  borderRadius:  "3px",
  display:       "inline-flex",
  alignItems:    "center",
  gap:           8,
  transition:    "all 0.25s",
};

export const btnGhost = {
  border:        "1px solid rgba(0,255,136,0.25)",
  color:         "#00FF88",
  fontFamily:    font.display,
  fontSize:      "0.72rem",
  fontWeight:    700,
  letterSpacing: "0.08em",
  background:    "transparent",
  cursor:        "pointer",
  padding:       "11px 24px",
  borderRadius:  "3px",
  display:       "inline-flex",
  alignItems:    "center",
  gap:           8,
  transition:    "all 0.25s",
};

export const sectionTag = {
  fontFamily:    font.mono,
  fontSize:      "0.65rem",
  color:         "#00FF88",
  letterSpacing: "0.2em",
  marginBottom:  "14px",
  opacity:       0.8,
  display:       "block",
};

export const sectionTitle = {
  fontFamily:    font.display,
  fontSize:      "clamp(1.6rem, 3.5vw, 2.6rem)",
  fontWeight:    900,
  color:         "#F0F6FF",
  lineHeight:    1.1,
  marginBottom:  "16px",
};

