import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "300", "600", "700", "800", "900"],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Creación de mi portafolio usando Next con TypeScript",
  keywords: "Portafolio, desarrolladora web, html, css, javascript, react, next, typescript, Luisa Fernanda Ramirez Cardona, luisaramicar11",
  authors: [{ name: "Luisa Fernanda Ramírez Cardona" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "./favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}`}>
        {children}
      </body>
    </html>
  );
}
