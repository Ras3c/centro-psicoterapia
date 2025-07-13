"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function ContactanosSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">¿Listo para agendar tu primera sesión?</h2>
        <p className="text-gray-700 text-lg">
          Da el primer paso hacia tu bienestar emocional. Nuestros especialistas están listos para acompañarte.
        </p>
        <Link href="/contact">
          <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition-colors shadow-md">
            <Phone className="w-5 h-5 mr-2" />
            Contáctanos
          </button>
        </Link>
      </div>
    </section>
  );
}
