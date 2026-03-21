
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luz do Céu Kids - 35 Livros de Colorir Cristãos',
  description: 'Transforme momentos especiais com sua família, célula e escola dominical com nossos livros de colorir cristãos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30">{children}</body>
    </html>
  );
}
