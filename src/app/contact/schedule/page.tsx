export default function AppointmentForm() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-title">Agenda tu Cita</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Completa el formulario para reservar tu sesión con uno de nuestros profesionales.
        </p>
      </div>
      
      <form className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-sm">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
          <input type="text" id="name" name="name" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
          <input type="email" id="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
          <input type="tel" id="phone" name="phone" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors">
          Reservar Cita
        </button>
      </form>
    </section>
  );
}