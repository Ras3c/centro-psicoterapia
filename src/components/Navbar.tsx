"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {

  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };

  }, []);
  
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre Nosotros" },
    { href: "/services", label: "Servicios" },
  ];

  return (
    <nav className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${
      isVisible
        ? "take-y-0"
        : "-translate-y-full"
      }`}
      style={{ backgroundColor: "#222651" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#222651" }}>
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo_navbar.png" alt="Logo" width={250} height={220} className="inline-block ml-2 p-6 pb-7" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`text-white hover:text-blue-400 px-3 py-2 rounded-md text-md font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : ''
                  }`}
                >
                {link.label}
              </Link>
            ))}
            {/* add whatsapp button */}
            <Link href="https://wa.me/523335068342" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-md font-semibold transition-colors"
            >
              WhatsApp <FaWhatsapp className="inline-block ml-2"/>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!ismobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {!ismobileMenuOpen ? (
                <BiMenu className="text-3xl"/>
              ) : (
                <BiX className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-transform duration-300 ease-in-out ${
          ismobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="https://wa.me/523335068342" target="_blank" rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-md font-semibold transition-colors"
            >
              WhatsApp <FaWhatsapp className="inline-block ml-2"/>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
}