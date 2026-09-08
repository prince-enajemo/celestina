"use client";

import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PasscodeGate from "@/components/PasscodeGate";
import TikTokEmbed from "@/components/TikTokEmbed";

const VIDEOS = [
  {
    id: "7682859267354987796",
    caption: "the way you move when you think no one's watching — iyawo mi.",
  },
  {
    id: "7681297536698797333",
    caption: "you, in motion. this one lives in my head on repeat.",
  },
  {
    id: "7670610743909289237",
    caption: "this is the version of you I fell for all over again.",
  },
  {
    id: "7668739062118845716",
    caption: "so much light in one small video.",
  },
  {
    id: "7666898095350779156",
    caption: "🙌🙏🙌 — exactly. thank you, always.",
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
          {/* ---------- hero ---------- */}
          <section style={styles.hero}>
            <p style={styles.heroEyebrow}>for Celestina</p>
            <h1 style={styles.heroTitle}>iyawo mi</h1>
            <p style={styles.heroSub}>
              my wife, before the word is official — this is just for you.
            </p>
          </section>

          {/* ---------- love letter ---------- */}
          <section style={styles.letterSection}>
            <div style={styles.letter}>
              <p>
                I don't know how to say this without it sounding smaller
                than it is, so I'll just say it plainly: you are the
                calmest, warmest thing in my life. Every ordinary day
                becomes something worth remembering the moment you're in
                it.
              </p>
              <p>
                I call you iyawo mi because that's how I already think of
                you — not as something I'm hoping for, but something I
                already have and don't take for granted. You. The way you
                laugh at your own jokes before you finish telling them.
                The way you show up for the people you love, no
                exceptions.
              </p>
              <p>
                People talk about love like it's one big feeling, but for
                me it's mostly made of small ones — the relief of a text
                back, the specific way my shoulders drop when you walk
                into a room, the quiet decision every single day to keep
                choosing you. I wanted somewhere to put all of that down,
                instead of just carrying it around in my head.
              </p>
              <p>
                So this little site is a place to keep some of you — the
                videos that make me smile when I miss you, the reasons I
                love you when I actually sit down and count them, and the
                words I don't say often enough out loud. Scroll down, take
                your time.
              </p>
              <p style={styles.signature}>always yours,</p>
            </div>
          </section>

          {/* ---------- reasons I love you ---------- */}
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

          {/* ---------- little things ---------- */}
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

          {/* ---------- gallery ---------- */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>a few of my favorites</h2>
            <p style={styles.sectionIntro}>
              These are yours — moments you probably posted without a
              second thought, that I've watched more times than I'll
              admit.
            </p>
            <div style={styles.grid}>
              {VIDEOS.map((v) => (
                <div key={v.id} style={styles.videoCard}>
                  <TikTokEmbed videoId={v.id} />
                  <p style={styles.videoCaption}>{v.caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- promises ---------- */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>what I promise you</h2>
            <div style={styles.promiseBox}>
              <ul style={styles.promiseList}>
                {PROMISES.map((p, i) => (
                  <li key={i} style={styles.promiseItem}>
                    <span style={styles.promiseMark}>&#10084;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- closing ---------- */}
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
            <p style={styles.closingHeart}>&#10084;</p>
          </section>
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
  hero: {
    minHeight: "92vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 14,
  },
  heroEyebrow: {
    fontSize: 15,
    letterSpacing: "0.06em",
    color: "var(--ivory-dim)",
    margin: 0,
  },
  heroTitle: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: "clamp(56px, 12vw, 108px)",
    margin: 0,
    color: "var(--gold-soft)",
    lineHeight: 1,
  },
  heroSub: {
    maxWidth: 420,
    fontSize: 16,
    color: "var(--ivory-dim)",
    lineHeight: 1.6,
    margin: 0,
  },
  letterSection: {
    padding: "60px 0",
  },
  letter: {
    fontFamily: "var(--font-display)",
    fontSize: 24,
    lineHeight: 1.6,
    color: "var(--ivory)",
    maxWidth: 620,
    margin: "0 auto",
  },
  signature: {
    fontStyle: "italic",
    color: "var(--gold-soft)",
    marginTop: 30,
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
    borderRadius: 4,
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
    background: "rgba(36,16,20,0.6)",
    border: "1px solid rgba(201,162,75,0.22)",
    borderRadius: 4,
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
    background: "rgba(122,31,43,0.14)",
    border: "1px solid rgba(201,162,75,0.28)",
    borderRadius: 4,
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
    color: "var(--wine)",
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
    color: "var(--wine)",
  },
};