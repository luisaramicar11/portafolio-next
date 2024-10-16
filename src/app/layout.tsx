import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi portafolio",
  description: "Creación de mi portafolio usando Next con typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portafolio"
        />
        <meta
          name="keywords"
          content="Portafolio, desarrolladora web, html, css, javasript, react, next, typescript, Luisa Fernanda Ramirez Cardona, luisaramicar11"
        />
        <meta name="sitedomain" content="" />
        <meta name="organization" content="portafolio!, riwi" />
        <meta name="author" content="Luisa Fernanda Ramírez Cardona" />
        <meta name="designer" content="Luisa Fernanda Ramírez Cardona" />
        <meta name="copyright" content="© 2024 Portafolio, Inc. Todos los derechos reservados." />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="revisit-after" content="15days" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <body
        className="font-raleway antialiased"
      >
        {children}
      </body>
    </html>
  );
}
