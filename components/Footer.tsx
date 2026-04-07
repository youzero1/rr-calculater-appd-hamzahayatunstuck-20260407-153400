import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
      ],
    },
    {
      title: 'Work',
      links: [
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Resume', href: '/resume.pdf' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
        { label: 'Email', href: 'mailto:alex@example.com' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span>Alex</span>
            <span className={styles.logoDot}>.</span>
            <span className={styles.logoSub}>dev</span>
          </div>
          <p className={styles.tagline}>
            Building digital experiences that matter.
            <br />
            Available for new projects.
          </p>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot} />
            Open to opportunities
          </div>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title} className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>{group.title}</h4>
            <ul className={styles.linkList}>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {year} Alex Johnson. All rights reserved.
        </p>
        <p className={styles.madeWith}>
          Made with ❤️ using Next.js
        </p>
      </div>
    </footer>
  );
}
