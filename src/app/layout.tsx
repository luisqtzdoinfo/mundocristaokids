import type {Metadata} from 'next';
import { Inter, Alegreya } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mundo Cristão Kids - 35 Livros de Colorir Cristãos',
  description: 'Transforme momentos especiais com sua família, célula e escola dominical com nossos livros de colorir cristãos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${alegreya.variable}`}>
      <body className="font-body antialiased selection:bg-accent/30">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
