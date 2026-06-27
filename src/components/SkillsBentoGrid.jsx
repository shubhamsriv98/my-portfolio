import BackgroundMarquee from './BackgroundMarquee';

const ICON_BASE = 'https://img.icons8.com/ios-filled/100/000000/';

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
          <div
            className={`bento-cell bento-${getBentoSize(skill, index, flatSkills.length)}`}
            key={skill.name}
          >
            <img src={`${ICON_BASE}${skill.icon}`} alt="" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsBentoGrid;
