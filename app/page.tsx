"use client";

import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import PasscodeGate from "@/components/PasscodeGate";
import TikTokEmbed from "@/components/TikTokEmbed";

const VIDEOS = [
  {
    id: "7682859267354987796",
    caption: "the way you move when you think no one's watching \u2014 iyawo mi.",
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
    caption: "\ud83d\ude4c\ud83d\ude4f\ud83d\ude4c \u2014 exactly. thank you, always.",
  },
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
              my wife, before the word is official \u2014 this is just for you.
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
                you \u2014 not as something I'm hoping for, but something I
                already have and don't take for granted. You. The way you
                laugh at your own jokes before you finish telling them.
                The way you show up for the people you love, no
                exceptions.
              </p>
              <p>
                This little site is just a place to keep some of you \u2014
                the videos that make me smile when I miss you, and the
                words I don't say often enough. Scroll down.
              </p>
              <p style={styles.signature}>always yours,</p>
            </div>
          </section>

          {/* ---------- gallery ---------- */}
          <section style={styles.gallerySection}>
            <h2 style={styles.galleryTitle}>a few of my favorites</h2>
            <div style={styles.grid}>
              {VIDEOS.map((v) => (
                <div key={v.id} style={styles.videoCard}>
                  <TikTokEmbed videoId={v.id} />
                  <p style={styles.videoCaption}>{v.caption}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- closing ---------- */}
          <section style={styles.closing}>
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
  gallerySection: {
    padding: "60px 0",
  },
  galleryTitle: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: 34,
    color: "var(--gold-soft)",
    textAlign: "center",
    marginBottom: 44,
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
  closing: {
    textAlign: "center",
    padding: "80px 0 20px",
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