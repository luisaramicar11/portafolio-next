import Header from "../../components/Header"
import Footer from "../../components/Footer"
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
                {children}
                <Footer />
            </body>
        </html>
    );
}