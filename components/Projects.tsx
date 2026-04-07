'use client';

import { useState } from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  gradient: string;
  github: string;
  demo: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory, payment processing via Stripe, and a custom CMS for product management.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Prisma'],
    category: 'fullstack',
    gradient: 'linear-gradient(135deg, #6c63ff, #ff6584)',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description:
      'Real-time AI-powered chat app with WebSocket support, multiple AI model integrations, and persistent conversation history.',
    tech: ['React', 'Node.js', 'WebSocket', 'OpenAI', 'MongoDB'],
    category: 'fullstack',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualization dashboard with real-time metrics, customizable charts, and automated reporting features.',
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    category: 'frontend',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    id: 4,
    title: 'DevOps Pipeline Tool',
    description:
      'CLI tool for automating CI/CD pipelines with support for multiple cloud providers and deployment strategies.',
    tech: ['Python', 'Docker', 'AWS', 'GitHub Actions', 'Terraform'],
    category: 'devops',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Social Media App',
    description:
      'Feature-rich social platform with stories, live streaming, end-to-end encrypted messaging, and algorithmic feed.',
    tech: ['React Native', 'GraphQL', 'Node.js', 'PostgreSQL'],
    category: 'mobile',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Blockchain Wallet',
    description:
      'Multi-chain cryptocurrency wallet with DeFi integrations, NFT support, and hardware wallet compatibility.',
    tech: ['React', 'Web3.js', 'Solidity', 'TypeScript'],
    category: 'web3',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
];

const categories = ['all', 'fullstack', 'frontend', 'devops', 'mobile', 'web3'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>Projects</div>
        <h2 className={styles.sectionTitle}>Things I&apos;ve Built</h2>
        <p className={styles.sectionDesc}>
          A selection of projects that showcase my skills and passion for building great products.
        </p>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${
                activeCategory === cat ? styles.activeFilter : ''
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <div key={project.id} className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
              <div className={styles.cardImage} style={{ background: project.gradient }}>
                <div className={styles.cardImageInner}>
                  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="90" height="50" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <rect x="10" y="12" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
                    <rect x="10" y="18" width="50" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
                    <rect x="10" y="23" width="40" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
                    <rect x="10" y="32" width="80" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
                    <circle cx="80" cy="15" r="8" fill="rgba(255,255,255,0.15)" />
                  </svg>
                </div>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.techTags}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.demoBtn}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
