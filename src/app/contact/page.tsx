export default function Contact() {
  const estadosMexico = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas"
  ];


  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-title">Contáctanos</h1>
        <p className="text-gray-600">Completa el formulario y nos pondremos en contacto contigo</p>
      </div>

      <form className="space-y-6 bg-white p-8 rounded-xl shadow-md">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Nombre completo*</label>
            <input 
              type="text" 
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Tu nombre" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Correo electrónico*</label>
            <input 
              type="email" 
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="tu@correo.com" 
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Edad</label>
            <input 
              type="number" 
              min="12"
              max="99"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Tu edad" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Ubicación</label>
            <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="online">Consulta online</option>
              <option value="">Selecciona tu estado</option>
              {estadosMexico.map((estado, index) => (
                <option key={index} value={estado.toLowerCase().replace(/\s+/g, '-')}>
                  {estado}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Motivo de consulta*</label>
          <select 
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Selecciona una opción</option>
            <option value="individual">Terapia individual</option>
            <option value="pareja">Terapia de pareja</option>
            <option value="sexual">Terapia sexual</option>
            <option value="crisis">Apoyo en crisis</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Mensaje*</label>
          <textarea 
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            rows={5} 
            placeholder="Describe brevemente tu situación o consulta..."
          ></textarea>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="newsletter" 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
              />
            </div>
            <label htmlFor="newsletter" className="ml-3 text-sm text-gray-700">
              Deseo suscribirme al boletín de noticias y promociones
            </label>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                id="terms" 
                type="checkbox" 
                required
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
              />
            </div>
            <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
              Acepto los términos y condiciones y la política de privacidad*
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shadow-sm"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}