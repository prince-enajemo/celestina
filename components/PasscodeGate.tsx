"use client";

import { useState, FormEvent } from "react";

const PASSCODE = "celestina";

export default function PasscodeGate({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);
  const [unlocking, setUnlocking] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSCODE) {
      setUnlocking(true);
      // let the unlock animation play before revealing the site
      setTimeout(onUnlock, 900);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }

  return (
    <div style={styles.wrap} data-unlocking={unlocking}>
      <div style={styles.glow} />
      <form
        onSubmit={handleSubmit}
        style={{
          ...styles.card,
          transform: unlocking
            ? "scale(1.04)"
            : shake
            ? undefined
            : "scale(1)",
          opacity: unlocking ? 0 : 1,
          transition: unlocking
            ? "opacity 0.85s ease, transform 0.85s ease"
            : "transform 0.2s ease",
        }}
        className={shake ? "shake" : ""}
      >
        <p style={styles.eyebrow}>a private place</p>
        <h1 style={styles.title}>enter her name</h1>
        <input
          autoFocus
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="passcode"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          unlock
        </button>
      </form>

      <style>{`
        @keyframes shakeKeys {
          10%, 90% { transform: translateX(-1px); }
          20%, 80% { transform: translateX(2px); }
          30%, 50%, 70% { transform: translateX(-4px); }
          40%, 60% { transform: translateX(4px); }
        }
        .shake {
          animation: shakeKeys 0.5s ease;
          border-color: var(--wine) !important;
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at 50% 40%, #2a1116 0%, #1a0a0d 70%)",
    zIndex: 10,
  },
  glow: {
    position: "absolute",
    width: 480,
    height: 480,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(201,162,75,0.12) 0%, rgba(201,162,75,0) 70%)",
    filter: "blur(10px)",
  },
  card: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
    padding: "56px 44px",
    border: "1px solid rgba(201,162,75,0.35)",
    borderRadius: 4,
    background: "rgba(36,16,20,0.55)",
    backdropFilter: "blur(6px)",
    width: "min(90vw, 380px)",
  },
  eyebrow: {
    margin: 0,
    fontFamily: "var(--font-body)",
    fontSize: 13,
    letterSpacing: "0.08em",
    color: "var(--ivory-dim)",
  },
  title: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: 34,
    color: "var(--gold-soft)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    fontSize: 16,
    fontFamily: "var(--font-body)",
    background: "rgba(0,0,0,0.25)",
    border: "1px solid rgba(232,180,188,0.35)",
    borderRadius: 3,
    color: "var(--ivory)",
    outline: "none",
    textAlign: "center",
  },
  button: {
    marginTop: 6,
    padding: "11px 28px",
    fontSize: 14,
    letterSpacing: "0.04em",
    background: "var(--gold)",
    color: "#1a0a0d",
    border: "none",
    borderRadius: 3,
    cursor: "pointer",
    fontWeight: 500,
  },
};
