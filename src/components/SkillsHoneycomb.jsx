import { useEffect, useRef, useState } from 'react';
import BackgroundMarquee from './BackgroundMarquee';

const ICON_BASE = 'https://img.icons8.com/ios-filled/100/000000/';

function SkillsHoneycomb({ title, marqueeText, skills }) {
  const viewportRef = useRef(null);
  const clusterRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateNodeStyles = () => {
      if (!viewportRef.current || !clusterRef.current) return;

      const viewportRect = viewportRef.current.getBoundingClientRect();
      const centerX = viewportRect.left + viewportRect.width / 2;
      const centerY = viewportRect.top + viewportRect.height / 2;

      clusterRef.current.querySelectorAll('.watch-node').forEach((node) => {
        const nodeRect = node.getBoundingClientRect();
        const nodeCenterX = nodeRect.left + nodeRect.width / 2;
        const nodeCenterY = nodeRect.top + nodeRect.height / 2;
        const distance = Math.sqrt((centerX - nodeCenterX) ** 2 + (centerY - nodeCenterY) ** 2);
        const proximity = Math.max(0, 1 - distance / 250);
        const smooth = proximity * proximity * (3 - 2 * proximity);
        const brightness = Math.floor(15 + 240 * smooth);

        node.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
        node.style.transform = `scale(${0.8 + 0.5 * smooth})`;

        const img = node.querySelector('img');
        const label = node.querySelector('span');

        if (smooth > 0.5) {
          label.style.color = '#000000';
          img.style.filter = 'grayscale(100%) brightness(0%)';
        } else {
          label.style.color = '#ffffff';
          img.style.filter = 'grayscale(100%) brightness(200%)';
        }
      });
    };

    updateNodeStyles();
    window.addEventListener('scroll', updateNodeStyles);
    return () => window.removeEventListener('scroll', updateNodeStyles);
  }, [position]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    setPosition({
      x: event.clientX - dragOffset.current.x,
      y: event.clientY - dragOffset.current.y,
    });
  };

  const stopDragging = () => setIsDragging(false);

  const handleTouchStart = (event) => {
    setIsDragging(true);
    dragOffset.current = {
      x: event.touches[0].clientX - position.x,
      y: event.touches[0].clientY - position.y,
    };
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    setPosition({
      x: event.touches[0].clientX - dragOffset.current.x,
      y: event.touches[0].clientY - dragOffset.current.y,
    });
  };

  return (
    <section className="skills-section">
      <BackgroundMarquee text={marqueeText} />

      <h2 className="section-title">{title}</h2>
      <p className="instruction-text">Drag the honeycomb to explore</p>

      <div
        className="watch-viewport"
        ref={viewportRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
      >
        <div
          className="honeycomb-cluster"
          ref={clusterRef}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          {skills.map((row, rowIndex) => (
            <div className="hex-row" key={`row-${rowIndex}`}>
              {row.map((skill) => (
                <div className="watch-node" key={skill.name}>
                  <img src={`${ICON_BASE}${skill.icon}`} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsHoneycomb;
