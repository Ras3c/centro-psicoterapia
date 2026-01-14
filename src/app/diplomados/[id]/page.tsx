import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, Heart, Clock, Calendar, Users, DollarSign, FileText, CheckCircle, AlertCircle, ChevronRight, ArrowLeft, Phone} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


// Interfaces TypeScript (se mantienen igual)
interface Diplomado {
    title: string | ReactNode;
    titlePlain: string;
    simpleTitle: string;
    description: string | ReactNode;
    duracion: string | ReactNode;
    modalidad: string | ReactNode
    contenido: { modulo: string; fechas: string; descripcion: string }[];
    requisitos: string[];
    objetivos: string[];
    documentos: string[];
    inversion?: {
        inscripcion: string;
        mensualidad: string;
    };
    opcionesPago?: {
        opcion1?: string | ReactNode;
        opcion2?: string;
        opcion3?: string;
    };
    horarios: string[];
    proceso: string[];
    activo: boolean;
}

interface DiplomadosData {
    [key: string]: Diplomado;
}

const diplomadosData: DiplomadosData = {
    "psicoterapia-genero": {
        activo: true,
        title:
            "Diplomado en Psicoterapia basada en Estudios de Género.",
        titlePlain:
            "Diplomado en Psicoterapia basada en Estudios de Género",
        simpleTitle: "Diplomado en Psicoterapia basada en Estudios de Género",
        description: (
            <>
                En un contexto donde las desigualdades estructurales y las violencias de
                género impactan profundamente la salud mental, este diplomado ofrece a
                terapeutas, psicólogas y psicólogos una formación integral desde una
                teoría feminista y con perspectiva de género. La propuesta se fundamenta
                en la necesidad urgente de revisar y transformar las prácticas
                psicoterapéuticas tradicionales que, muchas veces, reproducen roles y
                estereotipos patriarcales, invisibilizando las experiencias y
                sufrimientos específicos vinculados al género.
                <br />
                <br />
                A través de un enfoque crítico, esta formación profundiza en el análisis
                de la socialización de género, la interseccionalidad y las estructuras
                de poder que atraviesan la subjetividad, para promover intervenciones
                terapéuticas que no solo reparen el malestar individual, sino que
                también contribuyan al empoderamiento y la justicia social. Se abordan
                temas clave como la violencia de género, el trauma, los mandatos y
                sesgos tradicionales del género y la deconstrucción de estigmas
                sociales, con el objetivo de formar profesionales capaces de generar
                espacios seguros, libres de juicios y revictimización.
                <br />
                <br />
                Este diplomado responde a la creciente demanda de una psicoterapia que
                integre la teoría feminista como herramienta terapéutica y política,
                reconociendo que la salud mental no puede separarse de las condiciones
                sociales y culturales que moldean la vida de las personas. Al concluir,
                las y los participantes estarán preparados para aplicar modelos clínicos
                innovadores, sensibles a las desigualdades de género, que fomenten
                procesos de transformación personal y colectiva, contribuyendo a una
                práctica profesional ética, inclusiva y comprometida con la equidad.
                <br />
                <br />
                Invitamos a profesionales comprometidos con la justicia social y la
                salud integral a sumarse a esta experiencia formativa que abre caminos
                para una psicoterapia más consciente, crítica y transformadora.
            </>
        ),
        duracion: (<><span className="font-bold">8 meses <br/>(16 módulos de fin de semana)</span></>),
        modalidad: (<><span className="font-bold">Híbrida sincrónica <br/>(No habrá grabaciones).</span></>),
        requisitos: [
            "Estudiantes de 2 últimos semestres de Licenciatura en Psicología con Orientación en Clínica, que haya o estén acompañando casos.",
            "Licenciatura concluida en Psicología.",
            "Maestría en Psicoterapia (cualquier Enfoque).",
            "Asistencia mínima del 90% a clases presenciales o virtual y entrega completa de actividades asignadas en plataforma, y realización de un trabajo final de aplicación de conocimientos (los lineamientos serán entregados en el primer módulo, así como las fechas de asesorías) para obtener el certificado de nuestro diplomado.",
            "Contar con acceso y manejo de plataforma Classroom y Meet.",
            "Agendar y asistir a una entrevista presencial o virtual, la cuál será acordada y llevada a cabo por alguna de las docentes del Diplomado.",
        ],
        documentos: [
            "Cardex de último semestre (PDF, no es necesario sea firmado por las autoridades universitarias)",
            "Carta de pasante o terminación.",
            "Título de licenciatura.",
            "Comprobante de domicilio reciente.",
            "Identificación Oficial",
            "Carta de motivos personal de media a 1 cuartilla.",
            "Extracto de C.V.",
        ],
        contenido: [
            {
                modulo: "Modulo 1",
                fechas: "18 y 19 de abril",
                descripcion:
                "Contexto Socio Histórico: Teoria de conformación del patriarcado.",
            },
            {
                modulo: "Modulo 2",
                fechas: "16 y 17 de mayo",
                descripcion: "Feminismos y Estudios de Género.",
            },
            {
                modulo: "Modulo 3",
                fechas: "20 y 21 de junio",
                descripcion:
                "Psicopatologización de las mujeres y lo considerado femenino.",
            },
            {
                modulo: "Modulo 4",
                fechas: "18 y 19 de julio",
                descripcion:
                "La necesidad de la Psicoterapia Basada en Estudios de Género",
            },
            {
                modulo: "Modulo 5",
                fechas: "15 y 16 de agosto",
                descripcion:
                "Metodologías para el acompañamiento en Psicoterapia con Perspectiva de Género.",
            },
            {
                modulo: "Modulo 6",
                fechas: "12 y 13 de septiembre",
                descripcion:
                "Acompañamiento Integral en situaciones de violencia de género.",
            },
            {
                modulo: "Modulo 7",
                fechas: "10 y 11 de octubre",
                descripcion:
                "Introducción a Masculinidades y acompañamiento a ofensores de violencia de género.",
            },
            {
                modulo: "Modulo 8",
                fechas: "7 y 8 de noviembre",
                descripcion:
                "Comunidad terapéutica, autocuidado y ética.",
            },
        ],
        horarios: [
            "Sábados de 16:00 a 20:00 hrs.",
            "Domingos de 10:00 a 14:00 hrs.",
            "En presencial y/o plataforma. (Hora Centro de México).",
        ],
        objetivos: [
            "Capacitar en la aplicación de perspectiva de género en psicoterapia.",
            "Transformar prácticas terapéuticas tradicionales que reproducen estereotipos patriarcales.",
            "Desarrollar intervenciones que reparen el malestar individual y contribuyan al empoderamiento.",
            "Formar profesionales capaces de generar espacios seguros y libres de juicios.",
            "Integrar la teoría feminista como herramienta terapéutica y política.",
            "Promover procesos de transformación personal y colectiva.",
        ],
        inversion: {
            inscripcion: "$500.00 pesos (fecha límite una semana antes de iniciar el diplomado o agotar cupo). Este concepto no es parte de las mensualidades.",
            mensualidad: "$2,000.00 o $2,320.00 ya con IVA, si requieres factura, este concepto se cubre máximo 5 días anteriores a cada módulo.",
        },
        opcionesPago: {
            opcion1: (<>
                El costo total del diplomado es $ 16,000.00 pesos o ($ 18,560.00 con iva, si requieres facturar)
                <strong> Si pagas en una sola exhibición con fecha límite 01 de febrero de 2026 o agotar cupo</strong>, el costo total será de
                $14,000.00 pesos y excentas el pago de inscripción o ($16,240.00 pesos si requieres facturar)
            </>),
            opcion2: "Pago mensual: Se requiere pagar inscripción, $ 500.00 pesos y la colegiatura mensual es de $ 2,000.00 (sin factura), el pago se realiza máximo 5 días antes de la fecha acordada para cada módulo.",
            opcion3: "Si requieres factura, el pago mensual es de $ 2,320.00 pesos (IVA incluido) y te pasaremos de manera personal la cuenta bancaria para transferencia)",
        },
        proceso: [
            "Envía Whatsapp al 3335068342 con los siguiente: Diplomado 1, tu nombre completo y la modalidad de pago que te interesa, ahí daremos seguimiento a pago de inscripción y demás pagos.",
            "Una vez realizado tu pago de inscripción, acordaremos fecha y nombre de quien te entrevistará, te sumamos a un grupo de Diplomado 2026 para avisos, dudas y por supuesto integración grupal.",
            "Envía al correo psicoterapia.genero.edu@gmail.com lo documentos mencionados en requisitos de ingreso y petición de beca (si aplicas)",
            "Una vez inscrita/o te proporcionaremos la contraseña de acceso a plataforma antes del primer módulo."
        ],
    },
    "diversidades-sexuales": {
        activo: false,
        title:
            "Introducción al Diplomado en Acompañamiento en las Diversidades y Disidencias Sexuales y de Género.",
        titlePlain:
            "Introducción al Diplomado en Acompañamiento en las Diversidades y Disidencias Sexuales y de Género.",
        simpleTitle:
            "Diplomado en acompañamiento en las diversidades y disidencias sexuales y de género.",
        description: (
            <>
                En un contexto social que demanda cada vez más comprensión, respeto y acción frente a las diversidades y disidencias sexuales y de género, este diplomado se presenta como una oportunidad formativa esencial para terapeutas, psicólogas y psicólogos comprometidos con una práctica profesional inclusiva y transformadora. Desde una sólida base en teorías feministas y con perspectiva de género, esta formación especializada ofrece herramientas conceptuales y metodológicas para acompañar de manera ética, crítica y sensible a personas y comunidades diversas.
                <br />
                <br />
                El programa aborda los fundamentos teóricos contemporáneos sobre género, sexualidad y disidencia sexual y de género, integrando análisis históricos, sociales y culturales que permiten comprender las múltiples expresiones identitarias y las desigualdades estructurales que enfrentan las poblaciones en disidencia sexual. Además, se enfatiza la importancia de una intervención profesional que reconozca y desafíe los estereotipos, la discriminación y las violencias basadas en el género y la sexualidad, promoviendo ambientes seguros y respetuosos.
                <br />
                <br />
                Al concluir este diplomado, las y los participantes estarán capacitados para diseñar y aplicar estrategias de acompañamiento psicológico y social que favorezcan la equidad, la inclusión y el bienestar integral, contribuyendo a la construcción de espacios libres de opresión y exclusión. Esta formación es un llamado a la responsabilidad profesional y social para avanzar hacia una sociedad más justa, plural y respetuosa de las diversidades humanas.
            </>
        ),
        duracion: "Por definir",
        modalidad: "En línea y Presencial",
        contenido: [
            { modulo: "Por definir", fechas: "", descripcion: "" },
        ],
        horarios: [
            "Por definir",
        ],
        requisitos: ["Por definir"],
        documentos: ["Por definir"],
        objetivos: [
            "Brindar herramientas conceptuales y metodológicas para el acompañamiento ético.",
            "Comprender las múltiples expresiones identitarias y desigualdades estructurales.",
            "Capacitar en intervenciones sensibles y libres de prejuicios.",
            "Promover ambientes terapéuticos seguros e inclusivos.",
            "Desarrollar estrategias de acompañamiento psicológico y social.",
            "Contribuir a la construcción de espacios libres de opresión y exclusión.",
            "Fomentar la equidad, inclusión y bienestar integral.",
        ],
        inversion: { inscripcion: "Por definir", mensualidad: "Por definir" },
        opcionesPago: {
            opcion1: "Por Definir",
            opcion2: "Por Definir",
            opcion3: "Por Definir",
        },
        proceso: ["Por definir"]
    },
    "vinculaciones-afectivas": {
        activo: false,
        title: (
            <>
                Diplomado en Acompañamiento de Vinculaciones Románticas, Afectivas y
                Eróticas
                <br />
                Desde una Teoría Feminista y Perspectiva de Género
            </>
        ),
        titlePlain:
            "Diplomado en Acompañamiento de Vinculaciones Románticas, Afectivas y Eróticas Desde una Teoría Feminista y Perspectiva de Género.",
        simpleTitle:
            "Diplomado en acompañamiento de las vinculaciones románticas, afectivas y eróticas.",
        description: (
            <>
                En un mundo donde las relaciones humanas se viven con mayor complejidad y diversidad, el acompañamiento profesional en los vínculos románticos, afectivos y eróticos se vuelve una herramienta esencial para promover relaciones sanas, conscientes y libres de violencia. Este diplomado está diseñado especialmente para terapeutas, psicólogas y psicólogos que desean profundizar en el entendimiento y la intervención desde una mirada crítica, feminista y con perspectiva de género.
                <br />
                <br />
                A través de un enfoque integral, el programa ofrece fundamentos teóricos actualizados y metodologías prácticas que permiten abordar las dinámicas de poder, los estereotipos de género y las construcciones sociales que influyen en las relaciones íntimas. Se busca formar profesionales capaces de acompañar procesos de autoconocimiento, empoderamiento y transformación personal, promoviendo vínculos basados en el respeto, la equidad y la diversidad afectiva y sexual.
                <br />
                <br />
                Este diplomado responde a la creciente demanda social y profesional de espacios formativos que integren la teoría feminista con la práctica clínica, aportando herramientas para intervenir en contextos donde las vinculaciones afectivas y eróticas son fuente de bienestar o, por el contrario, de conflicto y sufrimiento. Al concluir, las y los participantes estarán preparados para generar un impacto positivo en sus consultorios y comunidades, contribuyendo a la construcción de relaciones más justas, equitativas y libres de violencia.
                <br />
                <br />
                Invitamos a terapeutas y psicólogos comprometidos con la justicia social y la salud emocional a sumarse a esta experiencia formativa que transforma la manera de acompañar las relaciones humanas desde una perspectiva crítica, ética y profundamente humana.
            </>
        ),
        duracion: "Por definir",
        modalidad: "En línea y Presencial",
        requisitos: ["Por definir"],
        documentos: ["Por definir"],
        contenido: [
                        { modulo: "Por definir", fechas: "", descripcion: "" },
        ],
        horarios: [
            "Por definir",
        ],
        objetivos: [
            "Profundizar en el entendimiento e intervención de vínculos afectivos.",
            "Abordar dinámicas de poder y construcciones sociales en relaciones íntimas.",
            "Formar profesionales para acompañar procesos de transformación personal.",
            "Promover vínculos basados en respeto, equidad y diversidad.",
            "Desarrollar herramientas para intervenir en contextos de conflicto relacional.",
            "Integrar teoría feminista con práctica clínica en relaciones humanas.",
            "Contribuir a la construcción de relaciones justas y equitativas.",
        ],
        inversion: { inscripcion: "Por definir", mensualidad: "Por definir" },
        opcionesPago: {
            opcion1: "Por Definir",
            opcion2: "Por Definir",
            opcion3: "Por Definir",
        },
        proceso: ["Por definir"]
    },
};


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function DiplomadoPage(props: PageProps) {
    const params = await props.params;
    const diplomado = diplomadosData[params.id];

    if (!diplomado) {
        notFound();
    }

    const otrosDiplomados = Object.entries(diplomadosData)
        .filter(([id]) => id !== params.id)
        .map(([id, data]) => ({ id, ...data }));

    // Función para obtener el icono según el id
    const getIcon = (id: string, size: 'sm' | 'md' = 'md') => {
        const sizeClass = size === 'sm' ? "w-4 h-4" : "w-5 h-5";
        const iconProps = { className: `${sizeClass}` };
        switch (id) {
            case "psicoterapia-genero":
                return <BookOpen {...iconProps} />;
            case "diversidades-sexuales":
                return <GraduationCap {...iconProps} />;
            case "vinculaciones-afectivas":
                return <Heart {...iconProps} />;
            default:
                return <BookOpen {...iconProps} />;
        }
    };

    // Breadcrumb navigation
    const Breadcrumb = () => (
        <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-sm">
                <li>
                    <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
                        Inicio
                    </Link>
                </li>
                <li className="text-gray-400">
                    <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                    <Link href="/services" className="text-gray-500 hover:text-purple-600 transition-colors">
                        Servicios
                    </Link>
                </li>
                <li className="text-gray-400">
                    <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-purple-700 font-medium truncate max-w-[200px] sm:max-w-none">
                    {typeof diplomado.simpleTitle === 'string'
                        ? diplomado.simpleTitle
                        : 'Diplomado'}
                </li>
            </ol>
        </nav>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section - Responsive */}
            <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
                    {/* Mobile Back Button */}
                    <div className="md:hidden mb-6">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-purple-200 hover:text-white transition-colors text-sm"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver a servicios
                        </Link>
                    </div>

                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-purple-100 font-medium uppercase tracking-wider text-xs md:text-sm mb-4 md:mb-6">
                            <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                            Diplomado
                        </div>
                        
                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight px-2">
                            {diplomado.title}
                        </h1>
                        
                        {/* Subtitle */}
                        <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-3xl mx-auto px-4">
                            Formación especializada desde una mirada feminista y con perspectiva de género
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 -mt-8 md:-mt-12 relative">
                {/* Breadcrumb - Desktop */}
                <div className="hidden md:block">
                    <Breadcrumb />
                </div>

                {/* Mobile Floating CTA */}
                {diplomado.activo && (
                    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 animate-fade-in-up">
                        <div className="bg-white rounded-xl shadow-2xl p-4 border border-purple-200">
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">¿Interesado en este diplomado?</h3>
                                    <p className="text-xs text-gray-600">Plazas limitadas</p>
                                </div>
                                <Link
                                    href="https://wa.me/523335068342"
                                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
                                >
                                    <FaWhatsapp className="w-4 h-4 mr-1.5" />
                                    Contactar
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Description Card */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 mb-8 md:mb-12 border border-gray-100">
                    <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed">
                        {diplomado.description}
                    </div>
                </div>

                {diplomado.activo ? (
                    <>
                        {/* Quick Info Grid - Responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm md:shadow-lg border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-2 md:p-3 rounded-lg bg-purple-50 mr-3 md:mr-4">
                                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">Duración</h3>
                                        <p className="text-base md:text-lg font-bold text-gray-900 truncate">{diplomado.duracion}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm md:shadow-lg border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-2 md:p-3 rounded-lg bg-blue-50 mr-3 md:mr-4">
                                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">Modalidad</h3>
                                        <p className="text-base md:text-lg font-bold text-gray-900 truncate">{diplomado.modalidad}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm md:shadow-lg border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-2 md:p-3 rounded-lg bg-green-50 mr-3 md:mr-4">
                                        <Users className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">Cupo</h3>
                                        <p className="text-base md:text-lg font-bold text-gray-900">Limitado</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm md:shadow-lg border border-gray-100">
                                <div className="flex items-center">
                                    <div className="p-2 md:p-3 rounded-lg bg-yellow-50 mr-3 md:mr-4">
                                        <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider">Inversión</h3>
                                        <p className="text-base md:text-lg font-bold text-gray-900">Desde $2,000/mes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Two Column Layout - Responsive */}
                        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                            {/* Left Column */}
                            <div className="space-y-6 md:space-y-8">
                                {/* Requisitos */}
                                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border-l-4 border-purple-500">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-600 mr-2 md:mr-3" />
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Requisitos de Inscripción</h3>
                                    </div>
                                    <ul className="space-y-3 md:space-y-4">
                                        {diplomado.requisitos.map((requisito, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mt-0.5 md:mt-1 mr-2 md:mr-3 flex-shrink-0" />
                                                <span className="text-sm md:text-base text-gray-700">{requisito}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Objetivos */}
                                {/* <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border-l-4 border-blue-500">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-2 md:mr-3" />
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Objetivos del Programa</h3>
                                    </div>
                                    <ul className="space-y-3 md:space-y-4">
                                        {diplomado.objetivos.map((objetivo, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-700">{objetivo}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div> */}
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6 md:space-y-8">
                                {/* Documentos */}
                                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border-l-4 border-yellow-500">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <FileText className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 mr-2 md:mr-3" />
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Documentación Requerida</h3>
                                    </div>
                                    <ul className="space-y-3 md:space-y-4">
                                        {diplomado.documentos.map((documento, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-700">{documento}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Horarios */}
                                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border-l-4 border-indigo-500">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <Clock className="w-5 h-5 md:w-6 md:h-6 text-indigo-600 mr-2 md:mr-3" />
                                        <h3 className="text-lg md:text-2xl font-bold text-gray-900">Horarios</h3>
                                    </div>
                                    <ul className="space-y-2 md:space-y-3">
                                        {diplomado.horarios.map((horario, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-700">{horario}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Investment Section */}
                        <div className="mb-8 md:mb-12">
                            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border border-purple-100">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Inversión y Formas de Pago</h3>
                                
                                {diplomado.inversion && (
                                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                                        <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl">
                                            <h4 className="font-semibold text-purple-700 mb-1 md:mb-2 text-sm md:text-base">Inscripción</h4>
                                            <p className="text-gray-700 text-sm md:text-base">{diplomado.inversion.inscripcion}</p>
                                        </div>
                                        <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl">
                                            <h4 className="font-semibold text-purple-700 mb-1 md:mb-2 text-sm md:text-base">Mensualidad</h4>
                                            <p className="text-gray-700 text-sm md:text-base">{diplomado.inversion.mensualidad}</p>
                                        </div>
                                    </div>
                                )}

                                {diplomado.opcionesPago && (
                                    <div className="space-y-4 md:space-y-6">
                                        <h4 className="text-base md:text-xl font-bold text-gray-800">Opciones de Pago</h4>
                                        {diplomado.opcionesPago.opcion1 && (
                                            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border-l-4 border-green-500">
                                                <h5 className="font-bold text-green-700 mb-1 md:mb-2 text-sm md:text-base">Opción 1 - Pago Completo</h5>
                                                <div className="text-gray-700 text-sm md:text-base">{diplomado.opcionesPago.opcion1}</div>
                                            </div>
                                        )}
                                        {diplomado.opcionesPago.opcion2 && (
                                            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border-l-4 border-blue-500">
                                                <h5 className="font-bold text-blue-700 mb-1 md:mb-2 text-sm md:text-base">Opción 2 - Mensualidades</h5>
                                                <p className="text-gray-700 text-sm md:text-base">{diplomado.opcionesPago.opcion2}</p>
                                            </div>
                                        )}
                                        {diplomado.opcionesPago.opcion3 && (
                                            <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl border-l-4 border-purple-500">
                                                <h5 className="font-bold text-purple-700 mb-1 md:mb-2 text-sm md:text-base">Opción 3 - Facturación</h5>
                                                <p className="text-gray-700 text-sm md:text-base">{diplomado.opcionesPago.opcion3}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Calendar Section - Responsive */}
                        <div className="mb-8 md:mb-12">
                            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border border-gray-100">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-8">Calendario Académico</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                    {diplomado.contenido.map((item, index) => (
                                        <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-lg md:rounded-xl border border-gray-200 hover:border-purple-300 transition-colors">
                                            <div className="text-xs md:text-sm font-semibold text-purple-600 mb-1 md:mb-2">{item.modulo}</div>
                                            <div className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{item.fechas}</div>
                                            <p className="text-gray-600 text-xs md:text-sm">{item.descripcion}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Process Section - Responsive */}
                        <div className="mb-8 md:mb-12">
                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8 border border-green-100">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-8">Proceso de Inscripción</h3>
                                <div className="relative">
                                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
                                    <div className="space-y-6 md:space-y-12">
                                        {diplomado.proceso.map((paso, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="relative z-10 bg-white border-2 border-green-500 rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mr-3 md:mr-8 flex-shrink-0">
                                                    <span className="text-green-600 font-bold text-sm md:text-xl">{index + 1}</span>
                                                </div>
                                                <div className="pt-1 md:pt-2 flex-1">
                                                    <p className="text-gray-700 text-sm md:text-lg">{paso}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Important Notes - Responsive */}
                        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                            <div className="bg-red-50 border border-red-200 rounded-xl md:rounded-2xl p-4 md:p-6">
                                <div className="flex items-center mb-3 md:mb-4">
                                    <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 mr-2 md:mr-3" />
                                    <h4 className="text-base md:text-xl font-bold text-red-700">Avisos Importantes</h4>
                                </div>
                                <ul className="space-y-2 md:space-y-3 text-red-600 text-sm md:text-base">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                                        <span>NO aceptamos depósitos ni transferencias bancarias si no requieres factura</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                                        <span>No hay reembolso en caso de deserción</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                                        <span>No habrá grabaciones de las sesiones virtuales</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 rounded-xl md:rounded-2xl p-4 md:p-6">
                                <h4 className="text-base md:text-xl font-bold text-purple-800 mb-3 md:mb-4">¿Qué incluye tu inversión?</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    <li className="flex items-center text-gray-700 text-sm md:text-base">
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                                        Coffee break (presencial)
                                    </li>
                                    <li className="flex items-center text-gray-700 text-sm md:text-base">
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                                        Materiales virtuales y presenciales
                                    </li>
                                    <li className="flex items-center text-gray-700 text-sm md:text-base">
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                                        Asesorías para trabajo final
                                    </li>
                                    <li className="flex items-center text-gray-700 text-sm md:text-base">
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 md:mr-3 flex-shrink-0" />
                                        Constancia avalada
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Desktop CTA Section */}
                        <div className="hidden md:block bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">¿Listo para transformar tu práctica profesional?</h3>
                            <p className="text-lg md:text-xl text-purple-100 mb-6 md:mb-8 max-w-2xl mx-auto">
                                Forma parte de una comunidad terapéutica comprometida con la perspectiva de género
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="https://wa.me/523335068342" className="inline-flex items-center justify-center bg-white text-purple-700 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-purple-50 transition-colors">
                                    <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                                    Solicitar más información
                                </Link>
                                <Link href="tel:+523335068342" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/10 transition-colors">
                                    <Phone className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                                    Llamar ahora
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl md:rounded-2xl shadow-lg p-6 md:p-12 text-center my-8 md:my-12">
                        <AlertCircle className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-4 md:mb-6" />
                        <h3 className="text-lg md:text-2xl font-bold text-yellow-800 mb-3 md:mb-4">
                            Convocatoria Cerrada
                        </h3>
                        <p className="text-sm md:text-lg text-yellow-700 max-w-2xl mx-auto">
                            La convocatoria para este diplomado está cerrada por el momento.
                            Por favor, mantente atento a futuras ediciones o explora nuestros otros programas.
                        </p>
                    </div>
                )}

                {/* Other Diplomas Section */}
                <div className="pt-8 md:pt-12 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600">
                        Otros Diplomados
                    </h2>

                    <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {otrosDiplomados.map((diplomado) => (
                            <Link
                                key={diplomado.id}
                                href={`/diplomados/${diplomado.id}`}
                                className="group block"
                            >
                                <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 border border-gray-100 hover:border-purple-300 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 md:hover:-translate-y-2">
                                    <div className="p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 group-hover:from-purple-100 group-hover:to-indigo-100 transition-colors mb-4 self-start">
                                        <div className="w-5 h-5 md:w-6 md:h-6 text-purple-600">
                                        {getIcon(diplomado.id, 'sm')}
                                        </div>
                                    </div>
                                    <div className="flex-grow mb-3 md:mb-4">
                                        <h3 className="text-lg md:text-xl lg:text-xl font-bold text-gray-900 leading-tight">
                                            {typeof diplomado.simpleTitle === "string"
                                            ? diplomado.simpleTitle
                                            : "Diplomado Especializado"}
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center text-purple-600 font-medium text-xs md:text-sm group-hover:text-purple-800 transition-colors">
                                            Ver detalles
                                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transform group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                        {!diplomado.activo && (
                                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">
                                                Próximamente
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Back Link */}
                    <div className="text-center mt-6 md:mt-12">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-gray-600 hover:text-purple-700 font-medium text-sm md:text-base transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 transform group-hover:-translate-x-0.5 transition-transform" />
                            Volver a todos los servicios
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            {diplomado.activo && (
                <div className="md:hidden h-16"></div> // Spacer for floating CTA
            )}
        </div>
    );
}

// Metadata y funciones estáticas (se mantienen igual)
export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const diplomado = diplomadosData[params.id];

    if (!diplomado) {
        return {
            title: "Diplomado no encontrado",
        };
    }

    return {
        title: `${diplomado.titlePlain} - Centro de Psicoterapia`,
        description: diplomado.description,
    };
}

export async function generateStaticParams() {
    return Object.keys(diplomadosData).map((id) => ({
        id: id,
    }));
}