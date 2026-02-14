import { Dancing_Script, Crimson_Text, Nunito, Caveat } from 'next/font/google';
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

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caveat'
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-fredoka'
});

export const metadata = {
  title: "Sarah's Valentine",
  description: "A romantic surprise for someone special",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${crimsonText.variable} ${nunito.variable} ${caveat.variable}`}>
      {/* Language code examples: "en" (English), "es" (Spanish), "fr" (French) */}
      <body>{children}</body>
    </html>
  );
}
