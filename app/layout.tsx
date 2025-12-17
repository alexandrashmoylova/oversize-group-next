import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Перевозка негабаритных и грузов | Oversize",
  description:
    "Мы занимаемся перевозкой негабаритных и тяжеловесных грузов по России и странам СНГ, а также в Китае. Наша компания уже более 10 лет на рынке зарекомендовала себя как надежный перевозчик",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
