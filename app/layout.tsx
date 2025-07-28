// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Escola de Música Harmonia',
  description: 'Desperte o talento musical com nossos cursos para todas as idades.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800 font-sans">{children}</body>
    </html>
  );
}



