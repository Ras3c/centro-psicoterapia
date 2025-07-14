import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Centro de Psicoterapia",
  description: "Sitio web informativo del centro de psicoterapia",
};

export default function RootLayout({ 
  children, 
}: { 
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="max-w-8xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}