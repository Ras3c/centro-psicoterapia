import React from 'react';
import { Heart, Users, UserRoundPen, CalendarCheck, Brain, Speech, VenusAndMars, BookOpen, GraduationCap, Calendar, Clock } from 'lucide-react';
import terapiaIndividual from "@/assets/images/terapia_individual.jpg";
import terapiaPareja from "@/assets/images/terapia_pareja.jpg";
import otrasFormas from "@/assets/images/otras_formas.jpg";
import terapiaGrupal from "@/assets/images/terapia_grupal.jpg";
import conferencia from "@/assets/images/conferencia.jpg";
import masculinidad from "@/assets/images/masculinidad.jpg";
import educacion from "@/assets/images/educacion_2.jpg";
import genero from "@/assets/images/genero.jpg";
import Image from 'next/image';
import Link from "next/link";

const services = [
  {
    title: "Psicoterapia individual",
    description: (
      <>
        La psicoterapia con <b>perspectiva de género</b> y <b>enfoque antipatriarcal</b> se construye sobre una base teórica que reconoce y cuestiona las estructuras de poder que han normalizado la desigualdad de género en nuestra sociedad. Este enfoque terapéutico parte del reconocimiento de que el sistema patriarcal ha generado patrones de comportamiento, pensamiento y relación que afectan profundamente el bienestar emocional de todas las personas, independientemente de su género.
      </>
    ),
    icon: <UserRoundPen className="w-6 h-6 text-blue-600" />,
    image: terapiaIndividual
  },
  {
    title: "Acompañamiento psicoterapéutico para parejas",
    description: (
      <>
        Nuestro enfoque terapéutico se caracteriza por una metodología flexible que se adapta a las necesidades específicas de cada pareja, manteniendo siempre como eje central la <b>perspectiva antipatriarcal</b> y los <b>estudios de género</b>. El proceso terapéutico se desarrolla en un ambiente de respeto, horizontalidad y colaboración, donde las personas consultantes son reconocidas como expertas en su propia experiencia y con el potencial de construir un modelo de pareja que les haga sentido a sus vidas.
      </>
    ),
    icon: <Users className="w-6 h-6 text-blue-600" />,
    image: terapiaPareja
  },
  {
    title: "Acompañamiento psicoterapéutico para vinculaciones dentro del espectro de la disidencia sexual y de género y de vinculaciones no monogámicas éticas.",
    description: (
      <>
        Este servicio está diseñado para quienes exploran sus <b>vínculos erótico-afectivos</b> desde la <b>disidencia sexual y de género</b> y las <b>relaciones no monógamas éticas</b>. Ofrezco un espacio para que puedas navegar los desafíos únicos de estas dinámicas. El objetivo es acompañarte a fortalecer la comunicación, gestionar emociones como los celos y establecer acuerdos claros, para que vivas tus relaciones de una manera auténtica, responsable y plena. Aquí, tu forma de amar es valorada y respetada, y el trabajo se centra en tu bienestar emocional y en el crecimiento de tus vínculos.
      </>
    ),
    icon: <VenusAndMars className="w-6 h-6 text-blue-600" />,
    image: otrasFormas

  },
  {
    title: "Cursos, talleres, conferencias y diagnósticos",
    description: (
      <>
        Ofrecemos una amplia gama de servicios formativos especializados en <b>masculinidades</b>, <b>prevención de violencia de género</b> y <b>perspectiva de género</b> para entornos laborales. Nuestros cursos, talleres, conferencias y diagnósticos están diseñados específicamente para empresas, instituciones y organizaciones que buscan crear espacios más equitativos, seguros y conscientes. A través de metodologías participativas y contenidos actualizados, proporcionamos las herramientas necesarias para transformar culturas organizacionales y promover relaciones laborales más saludables.
      </>
    ),
    icon: <CalendarCheck className="w-6 h-6 text-blue-600" />,
    image: conferencia
  },
  {
    title: "Acompañamiento en educación de la sexualidad",
    description: (
      <>
        Exploración de la sexualidad más allá de los mandatos <b>heteronormativos</b>, promoviendo el <b>autoconocimiento</b>, el <b>consentimiento</b>, el <b>placer</b> y la <b>autonomía</b>.
      </>
    ),
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    image: educacion
  },
  {
    title: "Terapia Grupal",
    description: (
      <>
        Espacios colectivos que permiten compartir experiencias, aprender de otros/as/es y construir <b>redes de apoyo</b>. Pueden organizarse en torno a temáticas específicas (como <b>masculinidades</b>, <b>violencias</b>, <b>sexualidad</b>, etc.) o como grupos de crecimiento personal con perspectiva de género.
      </>
    ),
    icon: <Speech className="w-6 h-6 text-blue-600" />,
    image: terapiaGrupal
  },
  {
    title: "Acompañamiento para Personas en Disidencias Sexuales y de Género",
    description: (
      <>
        El acompañamiento psicoterapéutico para personas en <b>disidencias sexuales y de género</b> desde una <b>perspectiva antipatriarcal</b> reconoce y valida la diversidad de identidades, expresiones y orientaciones que existen más allá del sistema binario y heteronormativo. Este espacio terapéutico está diseñado para acompañar procesos de <b>autoconocimiento</b>, <b>afirmación</b> y <b>bienestar emocional</b> en un contexto que respeta y celebra la diversidad.
      </>
    ),
    icon: <VenusAndMars className="w-6 h-6 text-blue-600" />,
    image: genero
  },
  {
    title: "Acompañamiento psicoterapéutico en masculinidades",
    description: (
      <>
        El trabajo psicoterapéutico con hombres desde una <b>perspectiva antipatriarcal</b> ofrece un espacio único para explorar y cuestionar las <b>masculinidades hegemónicas</b> que han limitado su desarrollo emocional pleno. Este proceso permite a los hombres reconocer cómo la <b>socialización masculina tradicional</b> ha restringido su capacidad para conectar con sus emociones, establecer vínculos íntimos significativos y desarrollar una identidad auténtica más allá de los mandatos de la masculinidad tradicional.
      </>
    ),
    icon: <Brain className="w-6 h-6 text-blue-600" />,
    image: masculinidad
  },
];

const educationalServices = [
  {
    id: "psicoterapia-genero",
    title: "Diplomado en psicoterapia basada en estudios de género",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />,
    activo: true
  },
  {
    id: "diversidades-sexuales",
    title: "Diplomado en acompañamiento en las diversidades y disidencias sexuales y de género",
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
    activo: false
  },
  {
    id: "vinculaciones-afectivas",
    title: "Diplomado en acompañamiento de las vinculaciones románticas, afectivas y eróticas",
    icon: <Heart className="w-6 h-6 text-purple-600" />,
    activo: false
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto lg:py-24">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Nuestros Servicios</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ofrecemos diversas modalidades de terapia adaptadas a tus necesidades personales
        </p>
      </div>
      
      {/* Main Services Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600">
          Servicios de Psicoterapia
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group border-gray-100 overflow-hidden"
            >
              {service.image && (
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              
              <div className="flex items-start mb-4">
                <div className="p-3 mr-4 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Educational Services Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600">
          Servicios Educativos
        </h2>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {educationalServices.map((service, index) => (
            <Link
              key={index}
              href={`/diplomados/${service.id}`}
              className="group block h-full"
            >
              <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 border border-gray-100 hover:border-purple-300 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 md:hover:-translate-y-2">
                {/* Icon Container */}
                  <div className="p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 group-hover:from-purple-100 group-hover:to-indigo-100 transition-colors mb-4 self-start">
                    <div className="w-5 h-5 md:w-6 md:h-6 text-purple-600">
                    {React.cloneElement(service.icon, {
                      className: "w-full h-full"
                    })}
                  </div>
                </div>

                {/* Title */}
                <div className="flex-grow mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl lg:text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Status Badge */}
                <div className="mb-3 md:mb-4">
                  {service.activo ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mr-1.5"></div>
                      Disponible
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Próximamente
                    </span>
                  )}
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1.5 flex-shrink-0 text-purple-500" />
                    <span>
                      {service.id === "psicoterapia-genero"
                        ? "8 meses"
                        : "Por definir"
                      }
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1.5 flex-shrink-0 text-blue-500" />
                    <span>
                      {service.id === "psicoterapia-genero"
                        ? "Híbrida"
                        : "Por definir"
                      }
                    </span>
                  </div>
                  {service.id === "psicoterapia-genero" && (
                    <>
                      <div className="sm:col-span-2 flex items-center text-xs text-gray-500 mt-1">
                        <Users className="w-3 h-3 mr-1.5 flex-shrink-0 text-green-500" />
                        <span>Cupo limitado</span>
                      </div>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-100">
                  <div className="inline-flex items-center text-purple-600 font-medium text-sm md:text-base group-hover:text-purple-800 transition-colors">
                    <span>Ver detalles</span>
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2 transform group-hover:translate-x-1 transition-transform" 
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}