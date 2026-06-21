function BackgroundMarquee({ text }) {
  const marqueeContent = `${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className="background-marquee">
      <div className="marquee-track track-1">
        <span>{marqueeContent}</span>
        <span>{marqueeContent}</span>
      </div>
      <div className="marquee-track track-2">
        <span>{marqueeContent}</span>
        <span>{marqueeContent}</span>
      </div>
    </div>
  );
}

export default BackgroundMarquee;
