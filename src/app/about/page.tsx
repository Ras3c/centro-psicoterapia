import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function About() {
  const location = {
    address: 'Calle Independencia 1083, Colonia Americana, Zona Centro, CP. 44200, Guadalajara, México',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.441262448203!2d-103.36172292433837!3d20.68431198088112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb52fd39b%3A0x5a56d155ec6de4a1!2sCalle%20Independencia%201083%2C%20Col%20Americana%2C%2044100%20Guadalajara%2C%20Jal.!5e0!3m2!1sen!2smx!4v1717199999999!5m2!1sen!2smx'
  };

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-title">Sobre Nosotros</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Centro especializado en psicoterapia con enfoque de género y sexualidad humana
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Nuestra Misión</h2>
          <p className="text-gray-700">
            En el Centro de Psicoterapia y Sexología Basado en Estudios de Género, nos dedicamos a brindar atención psicológica especializada con perspectiva de género, promoviendo el bienestar emocional y sexual de nuestros pacientes en un espacio seguro, libre de prejuicios y confidencial.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Nuestro Enfoque</h2>
          <p className="text-gray-700">
            Trabajamos desde una perspectiva feminista e interseccional, reconociendo cómo las construcciones sociales de género impactan en la salud mental. Nuestro equipo está capacitado en terapia con enfoque de género, diversidad sexual y derechos humanos.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className=" text-gray-800">Dirección</h3>
                <p className="text-gray-600">{location.address}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className=" text-gray-800">Horario de atención</h3>
                <p className="text-gray-600">Lunes a Viernes: Solo con cita<br />Domingo: Cerrado</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className=" text-gray-800">Teléfono</h3>
                <p className="text-gray-600">+52 33 3066 7246</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className=" text-gray-800">Correo electrónico</h3>
                <p className="text-gray-600">psicoterapiageneroconsulta@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full">
          <div className="rounded-xl overflow-hidden shadow-md h-full">
            <iframe
              src={location.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[400px]"
              title="Ubicación del Centro de Psicoterapia"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              <MapPin className="w-4 h-4 mr-1" />
              Abrir en Google Maps para indicaciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}