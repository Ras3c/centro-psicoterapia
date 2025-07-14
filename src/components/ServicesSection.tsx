"use client";

import Image from "next/image";
import { FC } from "react";
import { User, Users, Building2, VenusAndMars } from "lucide-react";
import { StaticImageData } from "next/image";
import img_serv_1 from "@/assets/images/terapia_individual.jpg";
import img_serv_2 from "@/assets/images/terapia_pareja.jpg";
import img_serv_3 from "@/assets/images/taller.jpg";
import img_serv_4 from "@/assets/images/educacion.jpg";
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
      "Acompañamiento terapéutico desde una perspectiva contextual-conductual y antipatriarcal, orientado a hombres, mujeres y personas en disidencias sexuales de género que buscan herramientas para el bienestar emocional y el crecimiento personal.",
    icon: <User className="w-8 h-8" />,
    background: img_serv_1,
  },
  {
    text: "Terapia de pareja y otras formas de vinculaciones no monogámicas y personas en disidencias sexuales de género",
    description:
      "Espacio terapéutico inclusivo para trabajar la comunicación, los acuerdos y los conflictos en relaciones sexo-afectivas diversas, con enfoque en género, vínculos éticos y respeto a las identidades no normativas.",
    icon: <Users className="w-8 h-8" />,
    background: img_serv_2,
  },
  {
    text: "Acompañamiento psico-organizacional para empresas y organizaciones",
    description:
      "Procesos de formación y acompañamiento enfocados en salud mental, prevención de violencia de género y transformación de prácticas organizacionales desde una perspectiva crítica de las masculinidades.",
    icon: <Building2 className="w-8 h-8" />,
    background: img_serv_3,
  },
  {
    text: "Acompañamiento en sexualidades con perspectiva de género",
    description:
      "Educación y exploración sexual en un entorno respetuoso y libre de prejuicios, dirigido a personas de todas las identidades, con enfoque en diversidad, placer, vínculos y derechos sexuales.",
    icon: <VenusAndMars className="w-8 h-8" />,
    background: img_serv_4,
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
            Soluciones psicológicas personalizadas para cada necesidad
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
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white bg-black/10 rounded-xl">
                    {service.text}
                  </h3>
                </div>

                <p className="text-white text-base md:text-lg bg-black/25 backdrop-blur-sm p-6 rounded-xl max-w-4xl">
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