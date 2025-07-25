"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export default function ConocenosSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white py-20">
      {/* Imagen de fondo con overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/70">
        <Image
          src="/images/conocenos.jpg"
          alt="Conocenos"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Capa de contenido */}
      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Texto a la izquierda */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-indigo-200 font-medium uppercase tracking-wider text-xs mb-6">
            <Info className="w-4 h-4 mr-2"/>
            Conócenos
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Psicología con <span className="titulo">perspectiva de Genero</span>
          </h2>
          <p className="text-lg sm:text-xl text-white bg-black/30 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-2xl mx-auto lg:mx-0">
            Centro de psicoterapia con enfoque contextual-conductual, antipatriarcal y con perspectiva de género. Ofrecemos acompañamiento terapéutico individual, de pareja y a vínculos diversos; educación sexual integral; y procesos psico-organizacionales, con especial atención a las masculinidades, las disidencias sexuales y la prevención de la violencia de género. Atención presencial en Guadalajara y en línea.
          </p>
        </div>

        {/* Botón a la derecha con decorative elements */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end relative">
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-500/30 blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-blue-500/20 blur-xl"></div>
          
          <Link href="/about" className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <button className="relative px-8 py-5 flex items-center space-x-3 text-lg font-semibold tracking-wide">
              <span>Leer más sobre nosotros</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}