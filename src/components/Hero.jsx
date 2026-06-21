import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentLine = portfolioData.typingLines[lineIndex % portfolioData.typingLines.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentLine.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText === currentLine) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentLine.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setLineIndex((prev) => prev + 1);
          setTypingSpeed(500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, lineIndex, typingSpeed]);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-name">{portfolioData.name}</h1>
        <h2 className="hero-subtitle">
          {displayText}
          <span className="cursor">|</span>
        </h2>
        <div className="hero-buttons">
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToId('education')}
          >
            Know More About Me
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => scrollToId('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src={portfolioData.profileImage}
          alt={portfolioData.name}
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
