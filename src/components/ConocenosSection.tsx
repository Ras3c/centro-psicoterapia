"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export default function ConocenosSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      {/* Imagen de fondo */}
      <Image
        src="/images/psico_2.png"
        alt="Psicología y Sexología"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Capa de contenido */}
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-left">
          <div className="flex items-center text-indigo-500 font-semibold uppercase tracking-wide text-sm mb-4">
            <Info className="w-5 h-5 mr-2" />
            Conócenos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Psicología con perspectiva humana
          </h2>
          <p className="text-lg text-gray-800 bg-white/80 p-4 rounded-lg shadow">
            Nuestro centro está formado por psicólogos con amplia experiencia en distintas áreas de la salud mental. Trabajamos desde un enfoque ético y profesional, con perspectiva de género.
          </p>
        </div>

        {/* Botón a la derecha */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Link href="/about">
            <button className="px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
              Leer más sobre nosotros
              <ArrowRight className="inline ml-3 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
