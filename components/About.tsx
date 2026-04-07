import styles from './About.module.css';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '5+', label: 'Awards Won' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>About Me</div>
        <h2 className={styles.sectionTitle}>The Story Behind the Code</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageCard}>
              <svg viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                <rect width="300" height="350" rx="20" fill="url(#aboutGrad)" />
                <circle cx="150" cy="120" r="60" fill="rgba(255,255,255,0.15)" />
                <circle cx="150" cy="120" r="40" fill="rgba(255,255,255,0.2)" />
                <ellipse cx="150" cy="290" rx="100" ry="70" fill="rgba(255,255,255,0.1)" />
                <text x="150" y="130" textAnchor="middle" fill="white" fontSize="48" fontWeight="bold">AJ</text>
                <defs>
                  <linearGradient id="aboutGrad" x1="0" y1="0" x2="300" y2="350">
                    <stop offset="0%" stopColor="#6c63ff" />
                    <stop offset="100%" stopColor="#ff6584" />
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.imageDecor1} />
              <div className={styles.imageDecor2} />
            </div>
          </div>

          <div className={styles.text}>
            <p className={styles.paragraph}>
              I&apos;m a passionate full-stack developer with over 3 years of experience crafting
              digital experiences that are both beautiful and functional. My journey started
              with a curiosity for how things work on the web.
            </p>
            <p className={styles.paragraph}>
              I specialize in building modern web applications using React, Next.js, Node.js,
              and various other cutting-edge technologies. I believe great software is built
              at the intersection of technical excellence and thoughtful design.
            </p>
            <p className={styles.paragraph}>
              When I&apos;m not coding, you can find me exploring new technologies, contributing
              to open source projects, or hiking in the mountains. I&apos;m always looking for
              new challenges and opportunities to grow.
            </p>

            <div className={styles.highlights}>
              {[
                { icon: '🎓', text: 'B.S. Computer Science, MIT' },
                { icon: '📍', text: 'Based in San Francisco, CA' },
                { icon: '💼', text: 'Open to full-time & freelance' },
                { icon: '🌐', text: 'English & Spanish speaker' },
              ].map((item) => (
                <div key={item.text} className={styles.highlight}>
                  <span className={styles.highlightIcon}>{item.icon}</span>
                  <span className={styles.highlightText}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
