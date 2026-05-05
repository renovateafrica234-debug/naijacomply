// components/BrainChat.js
// Floating AI compliance chat widget powered by Nvidia brain
"use client"
import { useState, useRef, useEffect } from "react";
import { C, font } from "../lib/theme";

const SUGGESTED = [
  "Am I overdue for CAC filing?",
  "What is my penalty if I file 2 years late?",
  "How do I issue a FIRS e-invoice?",
  "What documents do I need for annual returns?",
];

export default function BrainChat() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState([
    { role: "brain", text: "Hello. I am your NaijaComply AI Brain. Ask me anything about your business compliance, penalties, CAC filings or FIRS e-invoicing." }
  ]);
  const [input,    setInput]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const send = async (text) => {
    const question = text || input;
    if (!question.trim()) return;

    setMessages(m => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/brain", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          action:   "ask",
          question: question,
          business: {},
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessages(m => [...m, { role: "brain", text: data.result }]);
      } else {
        setMessages(m => [...m, { role: "brain", text: "Sorry, I could not process that. Please try again.", error: true }]);
      }
    } catch {
      setMessages(m => [...m, { role: "brain", text: "Connection error. Please check your internet and try again.", error: true }]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position:     "fixed",
          bottom:       28,
          right:        28,
          zIndex:       1000,
          width:        56,
          height:       56,
          borderRadius: "50%",
          background:   "linear-gradient(135deg, #00FF88, #00CC6A)",
          border:       "none",
          cursor:       "pointer",
          display:      "flex",
          alignItems:   "center",
          justifyContent: "center",
          boxShadow:    "0 0 0 4px rgba(0,255,136,0.15), 0 8px 24px rgba(0,0,0,0.4)",
          fontSize:     "1.3rem",
          transition:   "all 0.25s",
        }}
        title="Ask AI Brain"
      >
        {open ? "✕" : "🧠"}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{
          position:     "fixed",
          bottom:       96,
          right:        28,
          zIndex:       999,
          width:        360,
          maxWidth:     "calc(100vw - 48px)",
          background:   C.card,
          border:       "1px solid rgba(0,255,136,0.2)",
          borderRadius: 6,
          overflow:     "hidden",
          display:      "flex",
          flexDirection:"column",
          boxShadow:    "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,136,0.08)",
        }}>

          {/* Header */}
          <div style={{
            padding:      "14px 18px",
            borderBottom: "1px solid rgba(0,255,136,0.08)",
            display:      "flex",
            alignItems:   "center",
            gap:          10,
            background:   "rgba(0,255,136,0.04)",
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.green }} className="pulse" />
            <div>
              <div style={{ fontFamily: font.display, fontSize: "0.8rem", fontWeight: 700, color: C.white, letterSpacing: "0.04em" }}>
                NAIJA COMPLY AI BRAIN
              </div>
              <div style={{ fontFamily: font.mono, fontSize: "0.58rem", color: C.green, opacity: 0.7, letterSpacing: "0.1em" }}>
                NVIDIA POWERED — LIVE
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", maxHeight: 320, display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display:      "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth:     "82%",
                  padding:      "10px 14px",
                  borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background:   msg.role === "user"
                    ? "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,204,106,0.1))"
                    : "rgba(0,0,0,0.3)",
                  border:       "1px solid",
                  borderColor:  msg.role === "user"
                    ? "rgba(0,255,136,0.2)"
                    : msg.error ? "rgba(255,59,92,0.2)" : "rgba(0,255,136,0.06)",
                }}>
                  {msg.role === "brain" && (
                    <div style={{ fontFamily: font.mono, fontSize: "0.55rem", color: C.green, letterSpacing: "0.1em", marginBottom: 5, opacity: 0.7 }}>
                      AI BRAIN
                    </div>
                  )}
                  <p style={{
                    fontSize:   "0.82rem",
                    color:      msg.error ? "#FF3B5C" : msg.role === "user" ? C.white : C.text,
                    lineHeight: 1.6,
                  }}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div style={{ display: "flex", gap: 5, padding: "8px 14px" }}>
                {[0, 1, 2].map(j => (
                  <div key={j} style={{
                    width: 6, height: 6,
                    borderRadius: "50%",
                    background: C.green,
                    animation: `pulse-dot 1s ease-in-out ${j * 0.2}s infinite`,
                    opacity: 0.6,
                  }} />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {messages.length === 1 && (
            <div style={{ padding: "0 14px 12px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {SUGGESTED.map((q, i) => (
                <button
                  key={i}
                  onClick={() => send(q)}
                  style={{
                    fontFamily:   font.mono,
                    fontSize:     "0.6rem",
                    color:        C.green,
                    padding:      "4px 10px",
                    border:       "1px solid rgba(0,255,136,0.2)",
                    borderRadius: 2,
                    background:   "transparent",
                    cursor:       "pointer",
                    letterSpacing:"0.04em",
                    transition:   "all 0.2s",
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding:      "12px 14px",
            borderTop:    "1px solid rgba(0,255,136,0.08)",
            display:      "flex",
            gap:          8,
          }}>
            <input
              className="nc-input"
              placeholder="Ask your compliance question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !loading && send()}
              style={{ flex: 1, padding: "9px 12px", fontSize: "0.83rem" }}
              disabled={loading}
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              style={{
                background:   input.trim() && !loading ? "linear-gradient(135deg, #00FF88, #00CC6A)" : "rgba(0,255,136,0.1)",
                border:       "none",
                borderRadius: 3,
                cursor:       input.trim() && !loading ? "pointer" : "not-allowed",
                padding:      "0 14px",
                color:        input.trim() && !loading ? "#050A0E" : C.muted,
                fontFamily:   font.display,
                fontSize:     "0.8rem",
                fontWeight:   700,
                transition:   "all 0.25s",
              }}
            >
              &#9654;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
