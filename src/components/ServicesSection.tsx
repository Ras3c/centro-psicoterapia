"use client";

import Image from "next/image";
import { FC } from "react";
import { User, Users, Building2, NonBinary, VenusAndMars } from "lucide-react";
import { StaticImageData } from "next/image";
import img_terapia_individual from "@/assets/images/terapia_individual.jpg";
import img_terapia_pareja from "@/assets/images/terapia_pareja.jpg";
import img_otras_formas from "@/assets/images/otras_formas.jpg";
import img_organizaciones from "@/assets/images/taller.jpg";
import img_educacion from "@/assets/images/educacion.jpg";
import { JSX } from "react/jsx-runtime";

type ServiceItem = {
  text: string;
  description: string;
  icon: JSX.Element;
  background: StaticImageData;
};

const services: ServiceItem[] = [
  {
    text: "Terapia individual",
    description:
      "Nuestro Modelo está diseñado para acompañar a hombres, mujeres y personas en disidencias sexuales y de género que buscan un espacio seguro para reflexinar sobre su bienerstar emocional, impulsar su crecimiento personal y encontrar caminos hacia la libertad. Utilizamos una prespectiva basada en derechos humanos, estudios de género y una vision antipatriarcal.",
    icon: <User className="w-8 h-8" />,
    background: img_terapia_individual,
  },
  {
    text: "Terapia de pareja",
    description:
      "Espacio de acompañamiento psicoterapéutico inclusivo para trabajar la comunicación, los acuerdos y los conflictos en relaciones sexo-afectivas, con enfoque en género y vínculos éticos e igualitarios.",
    icon: <Users className="w-8 h-8" />,
    background: img_terapia_pareja,
  },
    {
    text: "Acompañamiento en vinculaciones no monogámicas y personas en disidencia sexual y de género",
    description:
      "Brindamos acompañamiento a personas que exploran formas de vinculación no monógamas. También, creamos un espacio seguro para quienes se identifican como parte de la disidencia sexual y de género, siempre guiados por principios éticos y de respeto mutuo.",
    icon: <NonBinary className="w-8 h-8" />,
    background: img_otras_formas,
  },
  {
    text: "Acompañamiento psico-organizacional para empresas, instituciones y organizaciones",
    description:
      "Nuestro servicio de acompañamiento psico-organizacional se enfoca en el bienestar de las personas dentro del entorno laboral y en  la prevención de la violencia de género al interior  de la organización. Ofrecemos herramientas y estrategias que van más allá de la gestión tradicional, abordando las dinámicas humanas y emocionales que influyen directamente en la productividad, la motivación y el clima laboral.",
    icon: <Building2 className="w-8 h-8" />,
    background: img_organizaciones,
  },
  {
    text: "Acompañamiento en educación de las sexualidades humanas con perspectiva de género",
    description:
      "Educación y autoconocimiento de la sexualidades humanas en un entorno respetuoso y libre de prejuicios patriarcales, dirigido a personas de todas las identidades, con enfoque en diversidad, placer, vínculos, derechos sexuales y reproductivos.",
    icon: <VenusAndMars className="w-8 h-8" />,
    background: img_educacion,
  },
];

const ServicesSection: FC = () => {
  return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ¿Qué servicios ofrecemos?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones en acompañamiento psicoterapéutico personalizado para cada necesidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70">
                <Image
                  src={service.background}
                  alt={`Fondo para ${service.text}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                />
              </div>

              {/* Service Content */}
              <div className="relative z-10 min-h-[250px] md:min-h-[300px] flex flex-col justify-center p-8 md:p-12 text-white">
                {/* Icon with decorative background */}
                <div className="flex items-center mb-6">
                  <div className="bg-black/20 backdrop-blur-sm p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white p-2 bg-black/20 rounded-xl">
                    {service.text}
                  </h3>
                </div>

                <p className="text-white text-base md:text-lg bg-black/25 backdrop-blur-sm p-4 rounded-xl max-w-5xl">
                  {service.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-indigo-400/20 blur-xl"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;