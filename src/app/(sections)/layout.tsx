import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "500", "300", "600", "700", "800", "900"],
    variable: '--font-urbanist',
  });

export default function SectionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${urbanist.variable}`}
            >
                <Header />
                <main >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}