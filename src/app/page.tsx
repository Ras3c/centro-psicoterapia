"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, Users, AlertTriangle, Calendar, ArrowRight, Phone, ChevronDown, ChevronUp } from "lucide-react";

interface ServiceItem {
  text: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    text: "Terapia individual para adolescentes y adultos",
    description: "Sesiones personalizadas diseñadas para abordar las necesidades específicas de cada individuo, ya sea adolescente o adulto. Trabajamos en problemas como ansiedad, depresión, estrés, manejo emocional y desarrollo personal. Utilizamos enfoques terapéuticos basados en evidencia para ayudar a los pacientes a entender sus patrones de pensamiento, mejorar sus relaciones y desarrollar herramientas para enfrentar los desafíos de la vida. Cada sesión es un espacio seguro y confidencial para el crecimiento personal.",
    icon: <Heart className="w-5 h-5 text-blue-600" />
  },
  {
    text: "Terapia de pareja",
    description: "Terapia especializada para parejas que buscan mejorar su relación, resolver conflictos o superar crisis. Trabajamos en comunicación efectiva, resolución de problemas, intimidad emocional y reconstrucción de confianza. Nuestro enfoque ayuda a las parejas a entender dinámicas disfuncionales, establecer límites saludables y redescubrir la conexión emocional. Ideal para parejas en cualquier etapa de su relación, ya sea que estén pasando por dificultades específicas o simplemente quieran fortalecer su vínculo.",
    icon: <Users className="w-5 h-5 text-blue-600" />
  },
  {
    text: "Apoyo psicológico en crisis emocionales",
    description: "Intervención profesional inmediata para situaciones de crisis emocional como pérdidas traumáticas, ataques de pánico, ideación suicida o eventos impactantes. Ofrecemos herramientas de emergencia para manejar emociones abrumadoras, técnicas de grounding para ansiedad aguda y estrategias para recuperar el equilibrio emocional. Este servicio está diseñado para proporcionar contención y orientación en momentos de máxima vulnerabilidad, ayudando a estabilizar la situación y planificar los siguientes pasos hacia la recuperación.",
    icon: <AlertTriangle className="w-5 h-5 text-blue-600" />
  },
  {
    text: "Talleres de desarrollo personal",
    description: "Programas grupales interactivos enfocados en el crecimiento personal y el bienestar emocional. Cubrimos temas como inteligencia emocional, manejo del estrés, autoestima, comunicación asertiva y establecimiento de metas. Estos talleres combinan teoría psicológica con ejercicios prácticos, proporcionando a los participantes herramientas concretas para su vida diaria. Ideal para quienes buscan desarrollo personal en un ambiente grupal de apoyo mutuo, con la guía de profesionales especializados.",
    icon: <Calendar className="w-5 h-5 text-blue-600" />
  }
];


export default function Home() {

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>

    <div className="min-h-screen w-full flex flex-col items-center justify-center">
    <section className=" h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/fondo_tras.png" // Ensure this is in your public folder
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 max-w-4xl">
            Centro de Psicoterapia y Sexología basado en estudios de Género
          </h1>
          <p className="text-xl md:text-2xl text-blue/90 drop-shadow-md max-w-3xl leading-relaxed">
            Acompañamos tu proceso de crecimiento y bienestar emocional. Nuestro equipo de profesionales está comprometido con brindarte un espacio seguro, confidencial y empático.
          </p>
        </div> */}
    </section>
    </div>
    <div className="min-h-screen w-full flex flex-col items-center justify-center">

    <section className="min-h-screen w-full flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 text-center">
            ¿Qué ofrecemos?
          </h2>
          <div className="w-full">
            <ul className="space-y-4 w-full max-w-4xl mx-auto">
              {services.map((service, index) => (
                <li 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 w-full"
                >
                  <button
                    onClick={() => {
                      // Close all other items when opening this one
                      const newState: Record<number, boolean> = {};
                      services.forEach((_, i) => {
                        newState[i] = i === index ? !expandedItems[index] : false;
                      });
                      setExpandedItems(newState);
                    }}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={expandedItems[index]}
                    aria-controls={`service-desc-${index}`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="flex-shrink-0">{service.icon}</span>
                      <span className="font-medium text-gray-800 text-lg">{service.text}</span>
                    </div>
                    {expandedItems[index] ? (
                      <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  <div
                    id={`service-desc-${index}`}
                    className={`px-6 pb-6 pt-2 text-gray-600 transition-all duration-200 ${expandedItems[index] ? 'block' : 'hidden'}`}
                  >
                    <p className="pl-10 text-base leading-relaxed">{service.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              src="/images/psico_2.png"
              width={400}
              height={300}
              alt="Psicología y Sexología"
              />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Conócenos</div>
            <Link 
              href="/about" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Leer más sobre nosotros <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <p className="mt-2 text-gray-500">
              Nuestro centro está formado por psicólogos con amplia experiencia en distintas áreas de la salud mental. Trabajamos desde un enfoque humano, ético y profesional con perspectiva de género.
            </p>
          </div>
        </div>
      </div>

     

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
    </div>
 
  );
}