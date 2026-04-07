'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    await new Promise((res) => setTimeout(res, 1500));

    setStatus({
      type: 'success',
      message: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'alex@example.com',
      href: 'mailto:alex@example.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
    {
      icon: '💬',
      label: 'Discord',
      value: 'alexdev#1234',
      href: '#',
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>Contact</div>
        <h2 className={styles.sectionTitle}>Let&apos;s Work Together</h2>
        <p className={styles.sectionDesc}>
          Have a project in mind or just want to chat? I&apos;d love to hear from you.
        </p>

        <div className={styles.content}>
          <div className={styles.infoPanel}>
            <h3 className={styles.infoTitle}>Get in Touch</h3>
            <p className={styles.infoText}>
              I&apos;m currently available for freelance work and open to full-time opportunities.
              Let&apos;s build something amazing together!
            </p>

            <div className={styles.contactList}>
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{info.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{info.label}</div>
                    <div className={styles.contactValue}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialRow}>
              {[
                { href: 'https://github.com', label: 'GitHub' },
                { href: 'https://linkedin.com', label: 'LinkedIn' },
                { href: 'https://twitter.com', label: 'Twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={styles.textarea}
                rows={6}
                required
              />
            </div>

            {status.type === 'success' && (
              <div className={styles.successMsg}>
                <span>✅</span> {status.message}
              </div>
            )}

            {status.type === 'error' && (
              <div className={styles.errorMsg}>
                <span>❌</span> {status.message}
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? (
                <>
                  <span className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
