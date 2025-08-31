import { Clock, Phone, Mail } from 'lucide-react';
import Image from "next/image";
import acercaDeImagen from "@/assets/images/acerca_imagen.jpg";

export default function About() {

  return (
    <section className="max-w-6xl mx-auto py-24">
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Sobre Nosotros</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto p-2.5">
          Centro especializado en psicoterapia con enfoque de género y sexualidad humana
        </p>
      </div>

      <div className="grid gap-8 md:gap-12 md:grid-cols-2">
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-3">Nuestra Misión</h2>
            <p className="text-center text-gray-700 text-sm sm:text-base leading-relaxed">
              En el Centro de Psicoterapia y Sexología Basado en Estudios de Género, nos dedicamos a brindar atención psicológica especializada con perspectiva de género, promoviendo el bienestar emocional y sexual de nuestros pacientes en un espacio seguro, libre de prejuicios y confidencial.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <h2 className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-3">Nuestro Enfoque</h2>
            <p className="text-center text-gray-700 text-sm sm:text-base leading-relaxed">
              Trabajamos desde una perspectiva feminista e interseccional, reconociendo cómo las construcciones sociales de género impactan en la salud mental. Nuestro equipo está capacitado en terapia con enfoque de género, diversidad sexual y derechos humanos.
            </p>
          </div>
        </div>
        
        {/* Image Section - Hidden on mobile, shown on desktop */}
        <div className="relative hidden md:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-700/10 z-10"></div>
            <Image
              src={acercaDeImagen}
              alt="Acerca de Nosotros"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="mt-12 sm:mt-16">
        {/* Mobile Layout (stacked) */}
        <div className="md:hidden space-y-4 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-md mr-3 flex-shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 text-sm sm:text-base">Horario de atención</h3>
              <div className="text-gray-600 text-sm sm:text-base mt-1 space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes-Viernes:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">&nbsp;</span>
                  <span>4:00 PM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between text-red-600">
                  <span className="font-medium">Domingo:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start pt-3">
            <div className="bg-blue-100 p-2 rounded-md mr-3 flex-shrink-0">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 text-sm sm:text-base">Teléfonos</h3>
              <a href="tel:+523335068342" className="text-blue-600 text-sm sm:text-base block mt-1 hover:underline">
                +52 33 3506 8342
              </a>
               <a href="tel:+523330667246" className="text-blue-600 text-sm sm:text-base block mt-1 hover:underline">
                +52 33 3066 7246
              </a>
            </div>
          </div>

          <div className="flex items-start pt-3">
            <div className="bg-blue-100 p-2 rounded-md mr-3 flex-shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 text-sm sm:text-base">Correo electrónico - Educativo</h3>
              <a href="mailto:psicoterapia.genero.edu@gmail.com" className="text-blue-600 text-sm sm:text-base block mt-1 hover:underline break-all">
                psicoterapia.genero.edu@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start pt-3">
            <div className="bg-blue-100 p-2 rounded-md mr-3 flex-shrink-0">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 text-sm sm:text-base">Correo electrónico - Consulta</h3>
              <a href="mailto:psicoterapiageneroconsulta@gmail.com" className="text-blue-600 text-sm sm:text-base block mt-1 hover:underline break-all">
                psicoterapiageneroconsulta@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout (3 columns) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
          {/* Schedule Column */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-800 text-lg mb-4">Horario de atención</h3>
            <div className="text-gray-600 space-y-2">
              <div>
                <div className="font-medium">Lunes a Viernes</div>
                <div>9:00 AM - 2:00 PM</div>
                <div>4:00 PM - 8:00 PM</div>
              </div>
              <div>
                <div className="font-medium">Sábado</div>
                <div>9:00 AM - 3:00 PM</div>
              </div>
              <div className="text-red-600">
                <div className="font-medium">Domingo</div>
                <div>Cerrado</div>
              </div>
            </div>
          </div>
          
          {/* Phone Column */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-800 text-lg mb-4">Teléfonos</h3>
            <a href="tel:+523335068342" className="text-blue-600 text-lg hover:underline">
              +52 33 3506 8342
            </a>
            <a href="tel:+523330667246" className="text-blue-600 text-lg hover:underline">
              +52 33 3066 7246
            </a>
          </div>
          
          {/* Email Column */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-gray-800 text-lg mb-4">Correos electrónicos</h3>
            <div className="space-y-3">
              <div>
                <div className="font-medium text-gray-700 text-sm">Educativo</div>
                <a href="mailto:psicoterapia.genero.edu@gmail.com" className="text-blue-600 text-sm hover:underline break-all">
                  psicoterapia.genero.edu@gmail.com
                </a>
              </div>
              <div>
                <div className="font-medium text-gray-700 text-sm">Consulta</div>
                <a href="mailto:psicoterapiageneroconsulta@gmail.com" className="text-blue-600 text-sm hover:underline break-all">
                  psicoterapiageneroconsulta@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}