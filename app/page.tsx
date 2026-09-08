"use client";

import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PasscodeGate from "@/components/PasscodeGate";
import Reveal from "@/components/Reveal";

const VIDEOS = [
  {
    src: "/celesti589 - 7666898095350779156.mp4",
    caption: "🙌🙏🙌 — exactly. thank you, always.",
  },
  {
    src: "/celesti589 - 7668739062118845716.mp4",
    caption: "so much light in one small video.",
  },
  {
    src: "/celesti589 - 7670610743909289237.mp4",
    caption: "this is the version of you I fell for all over again.",
  },
];

const REASONS = [
  "the way you say my name when you're trying not to laugh at me",
  "how seriously you take taking care of the people you love",
  "your voice note rambles that somehow always end with something wise",
  "the face you make when food is really good",
  "how you remember small things I mention once, weeks later",
  "your stubbornness — even when it's aimed at me",
  "the way you make any room feel less heavy just by being in it",
  "how honest you are, even when it would be easier not to be",
];

const LITTLE_THINGS = [
  {
    title: "the way you text",
    body: "in bursts, half-finished thoughts, three messages where one would do. I read every single one twice.",
  },
  {
    title: "your laugh",
    body: "the real one, not the polite one — the one that sneaks out when you're not trying to be cute about it.",
  },
  {
    title: "how you love people",
    body: "loudly, protectively, without keeping score. I've watched you do it for everyone around you, including me.",
  },
  {
    title: "your patience with me",
    body: "on the days I'm distracted or difficult, you don't leave. you just wait for me to come back to myself.",
  },
];

const PROMISES = [
  "to keep choosing you, on the easy days and the hard ones",
  "to say what I mean instead of making you guess",
  "to keep learning you — you're not a puzzle I ever want to finish solving",
  "to build a life with you slowly and on purpose, not by accident",
  "to always give you a place to land",
];

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <FloatingHearts />

      {!unlocked && <PasscodeGate onUnlock={() => setUnlocked(true)} />}

      {unlocked && (
        <main style={styles.main}>
          <div style={styles.pageGlowOne} />
          <div style={styles.pageGlowTwo} />

          {/* ---------- hero ---------- */}
          <section style={styles.hero}>
            <div style={styles.heroVideoWrap}>
              <video
                src="/THOMPSON.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={styles.heroVideo}
              />
              <div style={styles.heroVideoShade} />
            </div>

            <Reveal direction="up" delay={120}>
              <div style={styles.heroInner}>
                <p style={styles.heroEyebrow}>for Celestina</p>
                <h1 style={styles.heroTitle}>iyawo mi</h1>
                <p style={styles.heroSub}>
                  my wife, before the word is official — this is just for you.
                </p>
                <div style={styles.heroDivider}>
                  <span style={styles.heroDividerLine} />
                  <span style={styles.heroDividerHeart}>♥</span>
                  <span style={styles.heroDividerLine} />
                </div>
              </div>
            </Reveal>
          </section>

          {/* ---------- love letter ---------- */}
          <Reveal direction="up" delay={160}>
            <section style={styles.letterSection}>
              <div style={styles.letterGlass}>
                <div style={styles.letter}>
                  <div style={styles.letterParagraph}>
                    <span style={styles.letterLead}>
                      I don't know how to say this without it sounding smaller
                      than it is, so I'll just say it plainly: you are the
                      calmest, warmest thing in my life. Every ordinary day
                      becomes something worth remembering the moment you're in
                      it.
                    </span>
                  </div>

                  <div style={styles.letterParagraph}>
                    <span style={styles.letterLead}>
                      I call you iyawo mi because that's how I already think of
                      you — not as something I'm hoping for, but something I
                      already have and don't take for granted. You. The way you
                      laugh at your own jokes before you finish telling them.
                      The way you show up for the people you love, no
                      exceptions.
                    </span>
                  </div>

                  <div style={styles.letterParagraph}>
                    <span style={styles.letterLead}>
                      People talk about love like it's one big feeling, but for
                      me it's mostly made of small ones — the relief of a text
                      back, the specific way my shoulders drop when you walk
                      into a room, the quiet decision every single day to keep
                      choosing you. I wanted somewhere to put all of that down,
                      instead of just carrying it around in my head.
                    </span>
                  </div>

                  <div style={styles.letterParagraph}>
                    <span style={styles.letterLead}>
                      So this little site is a place to keep some of you — the
                      videos that make me smile when I miss you, the reasons I
                      love you when I actually sit down and count them, and the
                      words I don't say often enough out loud. Scroll down, take
                      your time.
                    </span>
                  </div>

                  <div style={styles.signatureWrap}>
                    <p style={styles.signature}>always yours,</p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ---------- reasons I love you ---------- */}
          <Reveal direction="left" delay={80}>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>reasons, in no particular order</h2>
              <p style={styles.sectionIntro}>
                I could keep this list going forever, but here's where it
                starts.
              </p>
              <div style={styles.reasonsGrid}>
                {REASONS.map((r, i) => (
                  <div key={i} style={styles.reasonBox}>
                    <p style={styles.reasonText}>{r}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ---------- little things ---------- */}
          <Reveal direction="right" delay={80}>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>the little things</h2>
              <p style={styles.sectionIntro}>
                Not the big romantic gestures — just the ordinary parts of
                you I've come to love most.
              </p>
              <div style={styles.thingsList}>
                {LITTLE_THINGS.map((t) => (
                  <div key={t.title} style={styles.thingBox}>
                    <h3 style={styles.thingTitle}>{t.title}</h3>
                    <p style={styles.thingBody}>{t.body}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ---------- gallery ---------- */}
          <Reveal direction="up" delay={80}>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>a few of my favorites</h2>
              <p style={styles.sectionIntro}>
                These are yours — moments you probably posted without a
                second thought, that I've watched more times than I'll
                admit.
              </p>
              <div style={styles.grid}>
                {VIDEOS.map((v) => (
                  <div key={v.src} style={styles.videoCard}>
                    <div style={styles.videoFrame}>
                      <video
                        src={v.src}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        style={styles.videoElement}
                      />
                    </div>
                    <p style={styles.videoCaption}>{v.caption}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ---------- promises ---------- */}
          <Reveal direction="left" delay={60}>
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>what I promise you</h2>
              <div style={styles.promiseBox}>
                <ul style={styles.promiseList}>
                  {PROMISES.map((p, i) => (
                    <li key={i} style={styles.promiseItem}>
                      <span style={styles.promiseMark}>♥</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>

          {/* ---------- closing ---------- */}
          <Reveal direction="up" delay={80}>
            <section style={styles.closing}>
              <p style={styles.closingBody}>
                Whatever today looked like for you, I hope this reminded you
                of something you already know but deserve to hear again:
                you are loved, completely, by someone who isn't going
                anywhere.
              </p>
              <p style={styles.closingText}>
                thank you for letting me love you, iyawo mi.
              </p>
              <p style={styles.closingHeart}>♥</p>
            </section>
          </Reveal>
        </main>
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    position: "relative",
    zIndex: 1,
    maxWidth: 760,
    margin: "0 auto",
    padding: "0 24px 120px",
  },
  pageGlowOne: {
    position: "fixed",
    width: 260,
    height: 260,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(232,180,188,0.34), transparent 72%)",
    filter: "blur(80px)",
    opacity: 0.7,
    left: "-100px",
    top: "80px",
    pointerEvents: "none",
    animation: "pulseGlow 5s ease-in-out infinite",
  },
  pageGlowTwo: {
    position: "fixed",
    width: 340,
    height: 340,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(201,162,75,0.24), transparent 72%)",
    filter: "blur(90px)",
    opacity: 0.8,
    right: "-160px",
    top: "420px",
    pointerEvents: "none",
    animation: "pulseGlow 6s ease-in-out infinite 0.4s",
  },
  hero: {
    minHeight: "92vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 14,
    padding: "40px 0",
    position: "relative",
    overflow: "hidden",
  },
  heroVideoWrap: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    zIndex: 0,
  },
  heroVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.34,
    transform: "scale(1.08)",
  },
  heroVideoShade: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(26,10,13,0.2), rgba(26,10,13,0.78)), radial-gradient(circle at center, transparent, rgba(26,10,13,0.65))",
  },
  heroInner: {
    width: "min(680px, calc(100vw - 48px))",
    margin: "0 auto",
    padding: "56px 20px",
    borderRadius: 30,
    border: "1px solid rgba(232,180,188,0.34)",
    background: "linear-gradient(135deg, rgba(122,31,43,0.36), rgba(201,162,75,0.08))",
    boxShadow: "0 30px 90px rgba(0,0,0,0.42), inset 0 0 30px rgba(232,180,188,0.08), inset 0 0 80px rgba(255,255,255,0.06)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    position: "relative",
    zIndex: 1,
  },
  heroEyebrow: {
    fontSize: 15,
    letterSpacing: "0.08em",
    color: "var(--ivory-dim)",
    margin: "0 0 20px",
    textTransform: "uppercase",
  },
  heroTitle: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: "clamp(58px, 12vw, 118px)",
    margin: 0,
    color: "var(--gold-soft)",
    lineHeight: 1,
    textShadow: "0 0 26px rgba(232,180,188,0.18)",
  },
  heroSub: {
    maxWidth: 420,
    fontSize: 16,
    color: "var(--ivory-dim)",
    lineHeight: 1.6,
    margin: "26px auto 0",
  },
  heroDivider: {
    marginTop: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  heroDividerLine: {
    display: "block",
    width: 60,
    height: 1,
    background: "rgba(232,180,188,0.55)",
  },
  heroDividerHeart: {
    color: "var(--blush)",
    fontSize: 15,
    animation: "floatHeart 2s ease-in-out infinite",
  },
  letterSection: {
    padding: "60px 0",
  },
  letterGlass: {
    padding: "1px",
    borderRadius: 28,
    background: "linear-gradient(135deg, rgba(232,180,188,0.24), rgba(201,162,75,0.12))",
    boxShadow: "0 20px 80px rgba(122,31,43,0.2)",
  },
  letter: {
    fontFamily: "var(--font-display)",
    fontSize: 20,
    lineHeight: 1.7,
    color: "var(--ivory)",
    maxWidth: 620,
    margin: "0 auto",
    padding: "42px 36px",
    borderRadius: 26,
    background: "rgba(36,16,20,0.5)",
    border: "1px solid rgba(232,180,188,0.2)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  },
  letterParagraph: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: 20,
    lineHeight: 1.72,
    color: "var(--ivory)",
    margin: "0 0 24px",
    padding: "0 0 12px",
    borderBottom: "1px solid rgba(232,180,188,0.14)",
  },
  letterLead: {
    display: "block",
  },
  signatureWrap: {
    marginTop: 26,
  },
  signature: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: 26,
    color: "var(--gold-soft)",
    margin: 0,
    textAlign: "right",
  },
  section: {
    padding: "60px 0",
    borderTop: "1px solid rgba(201,162,75,0.15)",
  },
  sectionTitle: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: 34,
    color: "var(--gold-soft)",
    textAlign: "center",
    margin: "0 0 12px",
  },
  sectionIntro: {
    textAlign: "center",
    color: "var(--ivory-dim)",
    fontSize: 15,
    lineHeight: 1.6,
    maxWidth: 480,
    margin: "0 auto 44px",
  },
  reasonsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
  },
  reasonBox: {
    padding: "22px 20px",
    background: "rgba(122,31,43,0.14)",
    border: "1px solid rgba(232,180,188,0.2)",
    borderRadius: 16,
    boxShadow: "inset 0 0 20px rgba(232,180,188,0.03)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "transform 420ms ease, border-color 420ms ease, background 420ms ease",
  },
  reasonText: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.55,
    color: "var(--ivory)",
  },
  thingsList: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    maxWidth: 620,
    margin: "0 auto",
  },
  thingBox: {
    padding: "26px 28px",
    background: "rgba(36,16,20,0.45)",
    border: "1px solid rgba(201,162,75,0.22)",
    borderRadius: 16,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
    transition: "transform 420ms ease, box-shadow 420ms ease",
  },
  thingTitle: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: 22,
    color: "var(--blush)",
    margin: "0 0 8px",
  },
  thingBody: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.65,
    color: "var(--ivory-dim)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 40,
  },
  videoCard: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    alignItems: "center",
    padding: "16px",
    borderRadius: 20,
    background: "rgba(36,16,20,0.34)",
    border: "1px solid rgba(232,180,188,0.14)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    transition: "transform 420ms ease, box-shadow 420ms ease",
  },
  videoFrame: {
    width: "100%",
    aspectRatio: "9 / 16",
    maxWidth: 325,
    minHeight: 320,
    borderRadius: 14,
    overflow: "hidden",
    background: "rgba(0,0,0,0.8)",
    border: "1px solid rgba(201,162,75,0.26)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
  },
  videoElement: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    background: "#000",
  },
  videoCaption: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: 18,
    color: "var(--blush)",
    textAlign: "center",
    maxWidth: 300,
    lineHeight: 1.4,
    margin: 0,
  },
  promiseBox: {
    maxWidth: 560,
    margin: "0 auto",
    padding: "36px 40px",
    background: "rgba(122,31,43,0.16)",
    border: "1px solid rgba(201,162,75,0.28)",
    borderRadius: 20,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    boxShadow: "0 20px 70px rgba(0,0,0,0.22)",
  },
  promiseList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  promiseItem: {
    fontFamily: "var(--font-display)",
    fontSize: 20,
    lineHeight: 1.5,
    color: "var(--ivory)",
    display: "flex",
    gap: 12,
    alignItems: "baseline",
  },
  promiseMark: {
    fontSize: 12,
    color: "var(--gold-soft)",
    flexShrink: 0,
  },
  closing: {
    textAlign: "center",
    padding: "80px 0 20px",
  },
  closingBody: {
    maxWidth: 480,
    margin: "0 auto 28px",
    fontSize: 15,
    lineHeight: 1.7,
    color: "var(--ivory-dim)",
  },
  closingText: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: 28,
    color: "var(--gold-soft)",
  },
  closingHeart: {
    fontSize: 22,
    color: "var(--blush)",
  },
};