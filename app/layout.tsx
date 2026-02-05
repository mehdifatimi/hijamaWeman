import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: '--font-poppins',
    display: 'swap',
});

const playfair = Playfair_Display({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ["latin"],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Hijama Femmes - Centre de Bien-être et Hijama Thérapeutique",
    description: "Centre de hijama thérapeutique exclusivement réservé aux femmes. Bien-être, équilibre et soins naturels dans un espace bienveillant et professionnel.",
    keywords: ["hijama", "hijama femmes", "cupping therapy", "bien-être", "thérapie naturelle", "détox", "relaxation"],
    authors: [{ name: "Hijama Femmes" }],
    openGraph: {
        title: "Hijama Femmes - Centre de Bien-être et Hijama Thérapeutique",
        description: "Centre de hijama thérapeutique exclusivement réservé aux femmes. Bien-être, équilibre et soins naturels.",
        type: "website",
        locale: "fr_FR",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${poppins.variable} ${playfair.variable}`}>
            <body className="antialiased">
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
