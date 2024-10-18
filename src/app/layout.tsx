import type { Metadata } from "next";
import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "300", "600", "700", "800", "900"],
  variable: '--font-urbanist',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "300", "600", "700", "800", "900"],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Creation of my portfolio using Next with TypeScript. You can see the deployed project [here](https://portafolio-next-beige.vercel.app/portfolio).",
  keywords: "Portfolio, web developer, html, css, javascript, react, next, typescript, Luisa Fernanda Ramirez Cardona, luisaramicar11",
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
      <body className={`${urbanist.variable} ${poppins.variable}`} >
        {children}
      </body>
    </html>
  );
}
