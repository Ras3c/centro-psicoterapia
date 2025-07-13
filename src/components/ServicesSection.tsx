"use client";

import Image from "next/image";
import { FC } from "react";
import { Heart, Users, AlertTriangle, Calendar } from "lucide-react";
import { StaticImageData } from "next/image";
import img_serv_1 from "@/assets/images/terapia_individual.jpg";
import img_serv_2 from "@/assets/images/terapia_pareja.jpg";
import img_serv_3 from "@/assets/images/crisis_emocional.jpg";
import img_serv_4 from "@/assets/images/taller.jpg";
import { JSX } from "react/jsx-runtime";

type ServiceItem = {
  text: string;
  description: string;
  icon: JSX.Element;
  background: StaticImageData;
};

const services: ServiceItem[] = [
  {
    text: "Terapia individual para adolescentes y adultos",
    description:
      "Sesiones personalizadas diseñadas para abordar las necesidades específicas de cada individuo, ya sea adolescente o adulto. Trabajamos en problemas como ansiedad, depresión, estrés, manejo emocional y desarrollo personal. Utilizamos enfoques terapéuticos basados en evidencia para ayudar a los pacientes a entender sus patrones de pensamiento, mejorar sus relaciones y desarrollar herramientas para enfrentar los desafíos de la vida. Cada sesión es un espacio seguro y confidencial para el crecimiento personal, y otras formas de vinculaciones monogámicas y en diversidades, disidencia sexual y de género.",
    icon: <Heart className="w-8 h-8" />,
    background: img_serv_1,
  },
  {
    text: "Terapia de pareja",
    description:
      "Terapia especializada para parejas que buscan mejorar su relación, resolver conflictos o superar crisis. Trabajamos en comunicación efectiva, resolución de problemas, intimidad emocional y reconstrucción de confianza. Nuestro enfoque ayuda a las parejas a entender dinámicas disfuncionales, establecer límites saludables y redescubrir la conexión emocional. Ideal para parejas en cualquier etapa de su relación, ya sea que estén pasando por dificultades específicas o simplemente quieran fortalecer su vínculo.",
    icon: <Users className="w-8 h-8" />,
    background: img_serv_2,
  },
  {
    text: "Apoyo psicológico en crisis emocionales",
    description:
      "Intervención profesional inmediata para situaciones de crisis emocional como pérdidas traumáticas, ataques de pánico, ideación suicida o eventos impactantes. Ofrecemos herramientas de emergencia para manejar emociones abrumadoras, técnicas de grounding para ansiedad aguda y estrategias para recuperar el equilibrio emocional. Este servicio está diseñado para proporcionar contención y orientación en momentos de máxima vulnerabilidad, ayudando a estabilizar la situación y planificar los siguientes pasos hacia la recuperación.",
    icon: <AlertTriangle className="w-8 h-8" />,
    background: img_serv_3,
  },
  {
    text: "Talleres de desarrollo personal",
    description:
      "Programas grupales interactivos enfocados en el crecimiento personal y el bienestar emocional. Cubrimos temas como inteligencia emocional, manejo del estrés, autoestima, comunicación asertiva y establecimiento de metas. Estos talleres combinan teoría psicológica con ejercicios prácticos, proporcionando a los participantes herramientas concretas para su vida diaria. Ideal para quienes buscan desarrollo personal en un ambiente grupal de apoyo mutuo, con la guía de profesionales especializados.",
    icon: <Calendar className="w-8 h-8" />,
    background: img_serv_4,
  },
];

const ServicesSection: FC = () => {
  return (
    <div className="w-full h-screen">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 text-center">
            ¿Qué servicios ofrecemos?
        </h2>
        {services.map((service, index) => (
            <div key={index} className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={service.background}
                    alt={`Fondo para ${service.text}`}
                    fill
                    className="object-cover opacity-30"
                />

                <div className="relative z-10 w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
                    <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 servicios-title w-full md:w-1/3">
                        {service.text}
                    </h2>

                    <p className="w-full md:w-2/3 text-sm md:text-base text-gray-900 p-4 rounded-lg shadow backdrop-blur-sm">
                        {service.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default ServicesSection;