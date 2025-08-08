import { Heart, Users, AlertTriangle, CalendarCheck, Brain } from 'lucide-react';

const services = [
  {
    title: "Terapia individual",
    description: "Sesiones personalizadas para adolescentes y adultos enfocadas en tus necesidades específicas. Trabajamos en un espacio seguro donde podrás explorar tus emociones, pensamientos y comportamientos para lograr un mayor bienestar emocional y crecimiento personal.",
    icon: <Heart className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Terapia de pareja",
    description: "Espacio terapéutico diseñado para ayudar a las parejas a mejorar su comunicación, resolver conflictos y fortalecer su relación. Nuestro enfoque promueve la comprensión mutua y el desarrollo de herramientas para una convivencia más armoniosa.",
    icon: <Users className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Apoyo psicológico en crisis emocionales",
    description: "Intervención profesional inmediata para situaciones de crisis emocional, proporcionando herramientas de afrontamiento y acompañamiento durante momentos difíciles. Ayudamos a estabilizar emociones intensas y a recuperar el equilibrio psicológico.",
    icon: <AlertTriangle className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Talleres de desarrollo personal",
    description: "Programas grupales diseñados para fomentar el autoconocimiento, mejorar habilidades sociales y desarrollar herramientas para manejar el estrés y las emociones. Estos espacios combinan teoría y práctica para un aprendizaje experiencial.",
    icon: <CalendarCheck className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Terapia sexual",
    description: "Enfoque especializado para abordar preocupaciones relacionadas con la sexualidad, incluyendo disfunciones sexuales, problemas de intimidad o identidad sexual. Proporcionamos un espacio libre de juicios para explorar estos temas.",
    icon: <Heart className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Terapia basada en estudios de género",
    description: "Abordaje terapéutico que considera las construcciones sociales de género y su impacto en la salud mental. Trabajamos temas de identidad de género, roles sociales y desigualdades desde una perspectiva feminista e inclusiva.",
    icon: <Brain className="w-8 h-8 text-blue-600" />
  }
];

export default function Services() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-title">Nuestros Servicios</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ofrecemos diversas modalidades de terapia adaptadas a tus necesidades personales
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index}
            className="p-8 border rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white group"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 mr-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}