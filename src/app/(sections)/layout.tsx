import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SectionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className="font-raleway antialiased"
            >
                <Header />
                <main className="flex-grow container ">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}