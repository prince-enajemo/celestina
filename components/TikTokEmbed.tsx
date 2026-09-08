"use client";

export default function TikTokEmbed({ videoId }: { videoId: string }) {
  return (
    <div style={styles.frameWrap}>
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        allow="encrypted-media;"
        allowFullScreen
        style={styles.iframe}
        loading="lazy"
        title={`TikTok video ${videoId}`}
      />
    </div>
  );
}

/*
  Note: TikTok's iframe player (embed/v2/{id}) renders just the video
  player itself, without the caption/hashtag/username section that the
  official <blockquote class="tiktok-embed"> snippet adds beneath the
  video. That's why this component uses the iframe directly instead of
  the blockquote + embed.js approach.
*/

const styles: Record<string, React.CSSProperties> = {
  frameWrap: {
    position: "relative",
    width: "100%",
    aspectRatio: "9 / 16",
    maxWidth: 325,
    margin: "0 auto",
    borderRadius: 6,
    overflow: "hidden",
    border: "1px solid rgba(201,162,75,0.25)",
    boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
    background: "#000",
  },
  iframe: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    border: "none",
  },
};
