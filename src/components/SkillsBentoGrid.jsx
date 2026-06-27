import BackgroundMarquee from './BackgroundMarquee';

const skillImg = (name) => `${import.meta.env.BASE_URL}images/skills/${name}`;

const SIZE_PATTERN = ['default', 'wide', 'default', 'tall', 'default', 'default', 'wide'];

function flattenSkills(skills) {
  const flat = skills.flat();
  const featured = flat.filter((skill) => skill.size);
  const rest = flat.filter((skill) => !skill.size);
  return [...featured, ...rest];
}

function getBentoSize(skill, index, total) {
  if (skill.size) return skill.size;
  if (total <= 3) {
    return index === 0 ? 'hero' : 'default';
  }
  return SIZE_PATTERN[index % SIZE_PATTERN.length];
}

function SkillsBentoGrid({ title, marqueeText, skills }) {
  const flatSkills = flattenSkills(skills);
  const isCompact = flatSkills.length <= 3;

  return (
    <section className="skills-section">
      <BackgroundMarquee text={marqueeText} />

      <h2 className="section-title">{title}</h2>

      <div className={`bento-grid${isCompact ? ' bento-grid-compact' : ''}`}>
        {flatSkills.map((skill, index) => (
          <article
            className={`bento-cell bento-${getBentoSize(skill, index, flatSkills.length)}`}
            key={skill.name}
            style={{ '--bento-delay': `${index * 40}ms` }}
          >
            <div className="bento-cell-glow" aria-hidden="true" />
            <div className="bento-cell-content">
              <img src={skillImg(skill.icon)} alt="" loading="lazy" />
              <span>{skill.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsBentoGrid;
