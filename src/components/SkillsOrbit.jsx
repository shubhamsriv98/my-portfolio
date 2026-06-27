import BackgroundMarquee from './BackgroundMarquee';

const ICON_BASE = 'https://img.icons8.com/ios-filled/100/000000/';

const RING_CONFIG = [
  { radius: 115, duration: 42 },
  { radius: 195, duration: 58 },
  { radius: 275, duration: 74 },
];

function flattenSkills(skills) {
  return skills.flat();
}

function buildOrbitLayout(skills) {
  const flat = flattenSkills(skills);

  if (flat.length <= 4) {
    return {
      center: flat[0],
      rings: flat.length > 1 ? [{ ...RING_CONFIG[0], direction: 1, skills: flat.slice(1) }] : [],
    };
  }

  const featured = flat.filter((skill) => skill.size === 'hero');
  const center = featured[0] || flat[0];
  const orbitSkills = flat.filter((skill) => skill.name !== center.name);
  const perRing = Math.ceil(orbitSkills.length / RING_CONFIG.length);

  const rings = RING_CONFIG.map((config, index) => ({
    ...config,
    direction: index % 2 === 0 ? 1 : -1,
    skills: orbitSkills.slice(index * perRing, (index + 1) * perRing),
  })).filter((ring) => ring.skills.length > 0);

  return { center, rings };
}

function OrbitRing({ skills, radius, duration, direction }) {
  const angleStep = 360 / skills.length;

  return (
    <div
      className="orbit-ring"
      style={{
        width: radius * 2,
        height: radius * 2,
        '--orbit-duration': `${duration}s`,
        '--orbit-direction': direction === -1 ? 'reverse' : 'normal',
      }}
    >
      {skills.map((skill, index) => {
        const angle = index * angleStep;

        return (
          <div
            className="orbit-node"
            key={skill.name}
            style={{ transform: `rotate(${angle}deg) translateY(-${radius}px)` }}
          >
            <div className="orbit-node-counter" style={{ transform: `rotate(-${angle}deg)` }}>
              <div className={`orbit-node-inner${skill.size === 'hero' ? ' orbit-node-featured' : ''}`}>
                <img src={`${ICON_BASE}${skill.icon}`} alt="" />
                <span>{skill.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SkillsOrbit({ title, marqueeText, skills }) {
  const { center, rings } = buildOrbitLayout(skills);

  return (
    <section className="skills-section">
      <BackgroundMarquee text={marqueeText} />

      <h2 className="section-title">{title}</h2>
      <p className="orbit-hint">Hover to pause · explore the orbit</p>

      <div className="orbit-scene">
        <div className="orbit-rings">
          {rings.map((ring, index) => (
            <OrbitRing
              direction={ring.direction}
              duration={ring.duration}
              key={`ring-${index}`}
              radius={ring.radius}
              skills={ring.skills}
            />
          ))}
        </div>

        <div className="orbit-center">
          <img src={`${ICON_BASE}${center.icon}`} alt="" />
          <span>{center.name}</span>
        </div>
      </div>
    </section>
  );
}

export default SkillsOrbit;
