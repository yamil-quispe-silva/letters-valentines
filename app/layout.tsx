import { Dancing_Script, Crimson_Text } from 'next/font/google';
import './globals.css';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing'
});

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson'
});

export const metadata = {
  title: '{{SITE_TITLE}}',
  // Example: "For My Love", "Sarah's Valentine", "A Special Message"

  description: '{{SITE_DESCRIPTION}}',
  // Example: "A romantic surprise for someone special"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="{{LANGUAGE_CODE}}" className={`${dancingScript.variable} ${crimsonText.variable}`}>
      {/* Language code examples: "en" (English), "es" (Spanish), "fr" (French) */}
      <body>{children}</body>
    </html>
  );
}
