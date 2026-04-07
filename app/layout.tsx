import type { Metadata } from 'next';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'Personal portfolio showcasing my work, skills, and experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
