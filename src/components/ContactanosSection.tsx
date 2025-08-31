"use client";

import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactanosSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content (Left Side) */}
          <div className="lg:w-1/2 space-y-6 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              ¿Listo para agendar tu <span className="text-blue-600">primera sesión</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Da el primer paso hacia tu bienestar emocional. Nuestros especialistas están listos para acompañarte.
            </p>

            <div className="pt-4">
              <Link href="https://wa.me/523335068342" target="_blank" rel="noopener noreferrer">
                <button className="group relative inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden cursor-pointer">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <FaWhatsapp className="w-5 h-5 mr-3 z-10" />
                  <span className="z-10">Contáctanos</span>
                  <span className="absolute inset-0 border-2 border-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </Link>
            </div>
          </div>

          {/* Image (Right Side) - Modern Frame Effect */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-700/10 z-10"></div>
              <Image
                src='/images/contacto.jpg'
                alt="Profesional de psicología listo para ayudarte"
                fill
                className="object-cover"
                quality={90}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-400/20 blur-xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-indigo-400/20 blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}