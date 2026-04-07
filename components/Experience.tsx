import styles from './Experience.module.css';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  type: 'work' | 'education';
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    location: 'San Francisco, CA',
    description:
      'Lead developer for a team of 8 engineers, architecting scalable microservices and mentoring junior developers.',
    achievements: [
      'Reduced application load time by 60% through performance optimizations',
      'Led migration from monolith to microservices architecture',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Mentored 4 junior developers to senior level',
    ],
    tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    type: 'work',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2021 – 2022',
    location: 'Remote',
    description:
      'Built and maintained core product features for a B2B SaaS platform serving 50k+ users.',
    achievements: [
      'Developed 15+ features from concept to production',
      'Improved test coverage from 40% to 90%',
      'Optimized database queries reducing costs by 35%',
    ],
    tech: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'GCP'],
    type: 'work',
  },
  {
    id: 3,
    role: 'Frontend Developer Intern',
    company: 'Digital Agency Co.',
    period: '2020 – 2021',
    location: 'Boston, MA',
    description:
      'Created responsive web applications and landing pages for various client projects.',
    achievements: [
      'Delivered 10+ client projects on time',
      'Built reusable component library used across projects',
      'Improved Lighthouse scores to 95+ across all projects',
    ],
    tech: ['React', 'SCSS', 'WordPress', 'JavaScript'],
    type: 'work',
  },
  {
    id: 4,
    role: 'B.S. Computer Science',
    company: 'Massachusetts Institute of Technology',
    period: '2016 – 2020',
    location: 'Cambridge, MA',
    description:
      'Graduated with honors. Focused on algorithms, distributed systems, and human-computer interaction.',
    achievements: [
      'GPA: 3.9/4.0, Dean\'s List all semesters',
      'President of Web Development Club',
      'Winner of MIT Hackathon 2019',
    ],
    tech: ['Java', 'Python', 'C++', 'ML', 'Algorithms'],
    type: 'education',
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>Experience</div>
        <h2 className={styles.sectionTitle}>My Professional Journey</h2>
        <p className={styles.sectionDesc}>
          A timeline of my career progression and educational background.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.timelineDot}>
                <div
                  className={styles.dotInner}
                  style={{
                    background:
                      exp.type === 'education'
                        ? 'var(--accent-tertiary)'
                        : 'var(--accent-primary)',
                  }}
                />
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <span
                      className={styles.typeTag}
                      style={{
                        background:
                          exp.type === 'education'
                            ? 'rgba(67,233,123,0.1)'
                            : 'rgba(108,99,255,0.1)',
                        color:
                          exp.type === 'education'
                            ? 'var(--accent-tertiary)'
                            : 'var(--accent-primary)',
                      }}
                    >
                      {exp.type === 'education' ? '🎓 Education' : '💼 Work'}
                    </span>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className={styles.achievement}>
                      <span className={styles.achievementDot} />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className={styles.techTags}>
                  {exp.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className={styles.timelineLine} />
        </div>
      </div>
    </section>
  );
}
