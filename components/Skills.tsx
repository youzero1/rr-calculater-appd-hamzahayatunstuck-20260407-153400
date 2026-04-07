import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95, color: '#61dafb' },
      { name: 'TypeScript', level: 90, color: '#3178c6' },
      { name: 'CSS / SCSS', level: 88, color: '#cc6699' },
      { name: 'Vue.js', level: 75, color: '#42b883' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 90, color: '#68a063' },
      { name: 'Python', level: 82, color: '#3776ab' },
      { name: 'PostgreSQL', level: 80, color: '#336791' },
      { name: 'MongoDB', level: 78, color: '#47a248' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '🔧',
    skills: [
      { name: 'Docker', level: 85, color: '#2496ed' },
      { name: 'AWS', level: 78, color: '#ff9900' },
      { name: 'Git / CI/CD', level: 92, color: '#f05032' },
      { name: 'Linux', level: 80, color: '#fcc624' },
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL',
  'Redis', 'Prisma', 'TailwindCSS', 'Git', 'Figma',
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>Skills</div>
        <h2 className={styles.sectionTitle}>My Technical Arsenal</h2>
        <p className={styles.sectionDesc}>
          A comprehensive set of tools and technologies I use to bring ideas to life.
        </p>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{category.icon}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                          boxShadow: `0 0 10px ${skill.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Also familiar with</h3>
          <div className={styles.techTags}>
            {techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
