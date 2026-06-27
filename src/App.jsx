import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HorizontalCards from './components/HorizontalCards';
import SkillsOrbit from './components/SkillsOrbit';
import Contact from './components/Contact';
import ProgressBar from './components/ProgressBar';
import { portfolioData } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const refs = {
    Home: useRef(null),
    Education: useRef(null),
    Experience: useRef(null),
    Projects: useRef(null),
    TechSkills: useRef(null),
    NonTechSkills: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    document.title = portfolioData.siteTitle;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section-name'));
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      },
    );

    Object.values(refs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <ProgressBar />

      {activeSection !== 'Home' && activeSection && (
        <div className="sticky-section-banner">{activeSection}</div>
      )}

      <div
        className="snap-wrapper"
        ref={refs.Home}
        data-section-name="Home"
        id="home-section"
      >
        <Hero />
      </div>

      <div
        className="snap-wrapper"
        ref={refs.Education}
        data-section-name="Education"
      >
        <HorizontalCards
          id="education"
          title="Education"
          marqueeText="Education"
          items={portfolioData.education}
          renderContent={(item) => (
            <>
              <h3>{item.institute}</h3>
              <p className="role-degree">{item.degree}</p>
              {item.score && <p className="score">{item.score}</p>}
              <span className="year-badge">{item.year}</span>
            </>
          )}
        />
      </div>

      <div
        className="snap-wrapper"
        ref={refs.Experience}
        data-section-name="Experience"
      >
        <HorizontalCards
          id="experience"
          title="Experience"
          marqueeText="Experience"
          items={portfolioData.experience}
          renderContent={(item) => (
            <>
              <h3>{item.company}</h3>
              <p className="role-degree">{item.role}</p>
              <span className="year-badge">{item.timeline}</span>
            </>
          )}
        />
      </div>

      <div
        className="snap-wrapper"
        ref={refs.Projects}
        data-section-name="Projects"
      >
        <HorizontalCards
          id="projects"
          title="Projects"
          marqueeText="Projects"
          items={portfolioData.projects}
          renderContent={(item) => (
            <>
              <h3>{item.title}</h3>
              <p className="role-degree">{item.role}</p>
              <span className="year-badge">{item.timeline}</span>
            </>
          )}
        />
      </div>

      <div
        className="snap-wrapper"
        ref={refs.TechSkills}
        data-section-name="Technical Skills"
      >
        <SkillsOrbit
          title="Technical Skills"
          marqueeText="Technical Skills"
          skills={portfolioData.technicalSkills}
        />
      </div>

      <div
        className="snap-wrapper"
        ref={refs.NonTechSkills}
        data-section-name="Non-Technical Skills"
      >
        <SkillsOrbit
          title="Non-Technical Skills"
          marqueeText="Non-Tech Skills"
          skills={portfolioData.nonTechnicalSkills}
        />
      </div>

      <div
        className="snap-wrapper"
        ref={refs.Contact}
        data-section-name="Contact"
      >
        <Contact />
      </div>
    </div>
  );
}

export default App;
