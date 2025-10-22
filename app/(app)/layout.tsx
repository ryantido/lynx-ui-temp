import { WhatsAppButton } from "@/components/ui/button/WhatsAppButton";
import { Navbar } from "@/components/ui/nav/NavBar";
import { Poppins, Inter } from "next/font/google";
import { Footer } from "@/components/ui/Footer";
import type { Metadata } from "next";
import "../globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lynx AI",
  description: "Lynx AI - The AI Chatbot for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
