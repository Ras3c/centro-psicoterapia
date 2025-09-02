import { Heart, Users, UserRoundPen, CalendarCheck, Brain, Speech, VenusAndMars, BookOpen, GraduationCap } from 'lucide-react';

const services = [
  {
    title: "Psicoterapia individual",
    description: (
      <>
        La psicoterapia con <b>perspectiva de género</b> y <b>enfoque antipatriarcal</b> se construye sobre una base teórica que reconoce y cuestiona las estructuras de poder que han normalizado la desigualdad de género en nuestra sociedad. Este enfoque terapéutico parte del reconocimiento de que el sistema patriarcal ha generado patrones de comportamiento, pensamiento y relación que afectan profundamente el bienestar emocional de todas las personas, independientemente de su género.
      </>
    ),
    icon: <UserRoundPen className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Acompañamiento psicoterapéutico para parejas",
    description: (
      <>
        Nuestro enfoque terapéutico se caracteriza por una metodología flexible que se adapta a las necesidades específicas de cada pareja, manteniendo siempre como eje central la <b>perspectiva antipatriarcal</b> y los <b>estudios de género</b>. El proceso terapéutico se desarrolla en un ambiente de respeto, horizontalidad y colaboración, donde las personas consultantes son reconocidas como expertas en su propia experiencia y con el potencial de construir un modelo de pareja que les haga sentido a sus vidas.
      </>
    ),
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Acompañamiento psicoterapéutico para vinculaciones dentro del espectro de la disidencia sexual y de género y de vinculaciones no monogámicas éticas.",
    description: (
      <>
        Este servicio está diseñado para quienes exploran sus <b>vínculos erótico-afectivos</b> desde la <b>disidencia sexual y de género</b> y las <b>relaciones no monógamas éticas</b>. Ofrezco un espacio para que puedas navegar los desafíos únicos de estas dinámicas. El objetivo es acompañarte a fortalecer la comunicación, gestionar emociones como los celos y establecer acuerdos claros, para que vivas tus relaciones de una manera auténtica, responsable y plena. Aquí, tu forma de amar es valorada y respetada, y el trabajo se centra en tu bienestar emocional y en el crecimiento de tus vínculos.
      </>
    ),
    icon: <VenusAndMars className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Cursos, talleres, conferencias y diagnósticos",
    description: (
      <>
        Ofrecemos una amplia gama de servicios formativos especializados en <b>masculinidades</b>, <b>prevención de violencia de género</b> y <b>perspectiva de género</b> para entornos laborales. Nuestros cursos, talleres, conferencias y diagnósticos están diseñados específicamente para empresas, instituciones y organizaciones que buscan crear espacios más equitativos, seguros y conscientes. A través de metodologías participativas y contenidos actualizados, proporcionamos las herramientas necesarias para transformar culturas organizacionales y promover relaciones laborales más saludables.
      </>
    ),
    icon: <CalendarCheck className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Acompañamiento en educación de la sexualidad",
    description: (
      <>
        Exploración de la sexualidad más allá de los mandatos <b>heteronormativos</b>, promoviendo el <b>autoconocimiento</b>, el <b>consentimiento</b>, el <b>placer</b> y la <b>autonomía</b>.
      </>
    ),
    icon: <Heart className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Terapia Grupal",
    description: (
      <>
        Espacios colectivos que permiten compartir experiencias, aprender de otros/as/es y construir <b>redes de apoyo</b>. Pueden organizarse en torno a temáticas específicas (como <b>masculinidades</b>, <b>violencias</b>, <b>sexualidad</b>, etc.) o como grupos de crecimiento personal con perspectiva de género.
      </>
    ),
    icon: <Speech className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Acompañamiento para Personas en Disidencias Sexuales y de Género",
    description: (
      <>
        El acompañamiento psicoterapéutico para personas en <b>disidencias sexuales y de género</b> desde una <b>perspectiva antipatriarcal</b> reconoce y valida la diversidad de identidades, expresiones y orientaciones que existen más allá del sistema binario y heteronormativo. Este espacio terapéutico está diseñado para acompañar procesos de <b>autoconocimiento</b>, <b>afirmación</b> y <b>bienestar emocional</b> en un contexto que respeta y celebra la diversidad.
      </>
    ),
    icon: <VenusAndMars className="w-6 h-6 text-blue-600" />
  },
  {
    title: "Acompañamiento psicoterapéutico en masculinidades",
    description: (
      <>
        El trabajo psicoterapéutico con hombres desde una <b>perspectiva antipatriarcal</b> ofrece un espacio único para explorar y cuestionar las <b>masculinidades hegemónicas</b> que han limitado su desarrollo emocional pleno. Este proceso permite a los hombres reconocer cómo la <b>socialización masculina tradicional</b> ha restringido su capacidad para conectar con sus emociones, establecer vínculos íntimos significativos y desarrollar una identidad auténtica más allá de los mandatos de la masculinidad tradicional.
      </>
    ),
    icon: <Brain className="w-6 h-6 text-blue-600" />
  },
];

const educationalServices = [
  {
    title: "Diplomado en psicoterapia basada en estudios de género",
    description: "",
    icon: <BookOpen className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Diplomado en acompañamiento en las diversidades y disidencias sexuales y de género",
    description: "",
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Diplomado en acompañamiento de las vinculaciones románticas, afectivas y eróticas",
    description: "",
    icon: <Heart className="w-6 h-6 text-purple-600" />
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
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group border-gray-100"
            >
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
      <div>
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-purple-600">
          Servicios Educativos
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationalServices.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group border-gray-100 flex flex-col"
            >
              <div className="p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors mb-4 self-start">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 text-justify leading-relaxed flex-grow">
                {service.description}
              </p>
              <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-colors text-sm self-start flex items-center cursor-pointer">
                Más información
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}