import Link from "next/link";
import { Heart, Users, AlertTriangle, Calendar, ArrowRight, Phone } from "lucide-react";

const services = [
  {
    text: "Terapia individual para adolescentes y adultos",
    icon: <Heart className="w-5 h-5 text-blue-600" />
  },
  {
    text: "Terapia de pareja",
    icon: <Users className="w-5 h-5 text-blue-600" />
  },
  {
    text: "Apoyo psicológico en crisis emocionales",
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />
  },
  {
    text: "Talleres de desarrollo personal",
    icon: <Calendar className="w-5 h-5 text-blue-600" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center"  >
      <section className="min-h-screen w-full flex items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-5xl font-semibold mb-4 text-center">
            Centro de Psicoterapia y Sexología basado en estudios de Género
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mx-auto md:mx-0 text-center">
            Acompañamos tu proceso de crecimiento y bienestar emocional. Nuestro equipo de profesionales está comprometido con brindarte un espacio seguro, confidencial y empático.
          </p>
        </div>
      </section>

      <section className="min-h-screen w-full flex items-center">
        <div className="rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 flex items-center">
            ¿Qué ofrecemos?
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="mt-0.5">{service.icon}</span>
                <span className="text-gray-700">{service.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="min-h-screen w-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">Conócenos</h2>
            <p className="text-gray-700 mb-6 text-lg">
              Nuestro centro está formado por psicólogos con amplia experiencia en distintas áreas de la salud mental. Trabajamos desde un enfoque humano, ético y profesional con perspectiva de género.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Leer más sobre nosotros <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="bg-blue-50 rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-blue-600 font-medium">Equipo profesional especializado</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">¿Listo para agendar tu primera sesión?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Da el primer paso hacia tu bienestar emocional. Nuestros especialistas están listos para acompañarte.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-md">
              <Phone className="w-5 h-5 mr-2" />
              Contáctanos
            </button>
          </Link>
        </div>
      </section>
    </div>
 
  );
}