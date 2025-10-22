import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Sidekick — Your lightning-fast Sales Assistant',
  description:
    'Real-time insights, smarter calls, and instant follow-ups. Before, During, and After the call.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
