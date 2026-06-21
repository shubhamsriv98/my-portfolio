import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function Navbar({ scrollToSection, refs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  const openResume = () => {
    window.open(portfolioData.resumePath, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className="navbar">
      <div className="logo">{portfolioData.logo}</div>

      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
        onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(!menuOpen)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => handleNav(refs.Home)}>Home</li>
        <li onClick={() => handleNav(refs.Education)}>Education</li>
        <li onClick={() => handleNav(refs.Experience)}>Experience</li>
        <li onClick={() => handleNav(refs.Projects)}>Projects</li>
        <li onClick={() => handleNav(refs.TechSkills)}>Tech Skills</li>
        <li onClick={() => handleNav(refs.NonTechSkills)}>Non-Tech Skills</li>
        <li className="resume-list-item">
          <button type="button" className="resume-btn" onClick={openResume}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
