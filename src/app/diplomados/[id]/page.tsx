import { notFound } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, Heart } from "lucide-react";

// Interfaces TypeScript
interface Diplomado {
    title: string | ReactNode;
    titlePlain: string;
    simpleTitle: string;
    description: string | ReactNode;
    duracion: string;
    modalidad: string;
    contenido: string[];
    objetivos: string[];
    dirigidoA: string[];
    inversion: string;
}

interface DiplomadosData {
    [key: string]: Diplomado;
}

// Datos completos de los diplomados
const diplomadosData: DiplomadosData = {
    "psicoterapia-genero": {
        title:
            "Introducción al Diplomado en Psicoterapia Basada en Estudios de Género: Una Mirada Feminista para la Transformación Terapéutica.",
        titlePlain:
            "Introducción al Diplomado en Psicoterapia Basada en Estudios de Género.",
        simpleTitle: "Diplomado en psicoterapia basada en estudios de género.",
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
        duracion: "6 meses",
        modalidad: "En línea y Presencial",
        contenido: [
            "Fundamentos de la teoría feminista en psicoterapia.",
            "Análisis de la socialización de género e interseccionalidad.",
            "Estructuras de poder y su impacto en la subjetividad.",
            "Intervención en violencia de género y trauma.",
            "Deconstrucción de mandatos y estereotipos patriarcales.",
            "Modelos clínicos con perspectiva de género.",
            "Herramientas para espacios terapéuticos seguros y libres de revictimización.",
            "Ética profesional y compromiso con la justicia social.",
        ],
        objetivos: [
            "Capacitar en la aplicación de perspectiva de género en psicoterapia.",
            "Transformar prácticas terapéuticas tradicionales que reproducen estereotipos patriarcales.",
            "Desarrollar intervenciones que reparen el malestar individual y contribuyan al empoderamiento.",
            "Formar profesionales capaces de generar espacios seguros y libres de juicios.",
            "Integrar la teoría feminista como herramienta terapéutica y política.",
            "Promover procesos de transformación personal y colectiva.",
        ],
        dirigidoA: [
            "Terapeutas y psicólogos/as en ejercicio.",
            "Estudiantes de psicología y carreras afines.",
            "Profesionales de la salud mental.",
            "Trabajadores sociales y educadores.",
            "Personas comprometidas con la justicia social y equidad de género.",
        ],
        inversion: "$12,000 MXN",
    },
    "diversidades-sexuales": {
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
        duracion: "6 meses",
        modalidad: "En línea y Presencial",
        contenido: [
            "Fundamentos teóricos contemporáneos sobre género y sexualidad.",
            "Análisis histórico, social y cultural de las disidencias sexuales.",
            "Diversidad e identidades de género: teoría y práctica.",
            "Acompañamiento ético a personas LGBTQ+.",
            "Estrategias para desafiar estereotipos y discriminación.",
            "Intervención en violencias basadas en género y sexualidad.",
            "Herramientas para crear ambientes seguros y respetuosos.",
            "Perspectiva interseccional en el acompañamiento profesional.",
        ],
        objetivos: [
            "Brindar herramientas conceptuales y metodológicas para el acompañamiento ético.",
            "Comprender las múltiples expresiones identitarias y desigualdades estructurales.",
            "Capacitar en intervenciones sensibles y libres de prejuicios.",
            "Promover ambientes terapéuticos seguros e inclusivos.",
            "Desarrollar estrategias de acompañamiento psicológico y social.",
            "Contribuir a la construcción de espacios libres de opresión y exclusión.",
            "Fomentar la equidad, inclusión y bienestar integral.",
        ],
        dirigidoA: [
            "Terapeutas y psicólogos/as.",
            "Profesionales de la salud mental.",
            "Educadores y trabajadores sociales.",
            "Estudiantes de ciencias sociales y humanidades.",
            "Personas interesadas en acompañamiento a comunidades diversas.",
            "Profesionales comprometidos con la inclusión y diversidad.",
        ],
        inversion: "$12,000 MXN",
    },
    "vinculaciones-afectivas": {
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
        duracion: "6 meses",
        modalidad: "En línea y Presencial",
        contenido: [
            "Fundamentos teóricos actualizados sobre vinculaciones afectivas.",
            "Dinámicas de poder y estereotipos de género en las relaciones.",
            "Construcciones sociales que influyen en las relaciones íntimas.",
            "Acompañamiento en procesos de autoconocimiento y empoderamiento.",
            "Metodologías para promover vínculos basados en respeto y equidad.",
            "Diversidad afectiva y sexual en las relaciones contemporáneas.",
            "Intervención en conflictos y sufrimiento relacional.",
            "Herramientas para relaciones libres de violencia.",
            "Integración de teoría feminista en la práctica clínica.",
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
        dirigidoA: [
            "Terapeutas y psicólogos/as.",
            "Consejeros y orientadores familiares.",
            "Profesionales de la salud mental.",
            "Estudiantes de psicología y relaciones humanas.",
            "Educadores y trabajadores comunitarios.",
            "Personas comprometidas con la justicia social y salud emocional.",
        ],
        inversion: "$12,000 MXN",
    },
};

interface PageProps {
    params: {
        id: string;
    };
}

export default function DiplomadoPage({ params }: PageProps) {
    const diplomado = diplomadosData[params.id];

    if (!diplomado) {
        notFound();
    }

    // Obtener los otros diplomados (excluyendo el actual)
    const otrosDiplomados = Object.entries(diplomadosData)
        .filter(([id]) => id !== params.id)
        .map(([id, data]) => ({ id, ...data }));

    // Función para obtener el icono según el id
    const getIcon = (id: string) => {
        const iconProps = { className: "w-6 h-6 text-purple-600" };
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

    return (
        <div className="max-w-6xl mx-auto py-16 px-4 lg:py-24">
            {/* Contenido principal del diplomado */}
            <div className="mb-16">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    {diplomado.title}
                </h1>

                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                        {diplomado.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-800 mb-2">Duración:</h3>
                            <p className="text-gray-700">{diplomado.duracion}</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-green-800 mb-2">Modalidad:</h3>
                            <p className="text-gray-700">{diplomado.modalidad}</p>
                        </div>
                    </div>

                    {diplomado.inversion && (
                        <div className="bg-purple-50 p-4 rounded-lg mb-8">
                            <h3 className="font-semibold text-purple-800 mb-2">Inversión:</h3>
                            <p className="text-gray-700">{diplomado.inversion}</p>
                        </div>
                    )}

                    {diplomado.objetivos && (
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Objetivos del programa:
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {diplomado.objetivos.map((objetivo, index) => (
                                    <li key={index}>{objetivo}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Contenido del programa:
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {diplomado.contenido.map((modulo, index) => (
                                <li key={index}>{modulo}</li>
                            ))}
                        </ul>
                    </div>

                    {diplomado.dirigidoA && (
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Dirigido a:
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {diplomado.dirigidoA.map((publico, index) => (
                                    <li key={index}>{publico}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Sección de Otros Diplomados */}
            <div className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-12 text-gray-800 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-purple-600">
                    Otros Diplomados Disponibles
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {otrosDiplomados.map((diplomado) => (
                        <Link
                            key={diplomado.id}
                            href={`/diplomados/${diplomado.id}`}
                            className="group"
                        >
                            <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white group border-gray-100 hover:border-purple-200 h-full">
                                <div className="flex items-start mb-4">
                                    <div className="p-3 mr-4 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors flex-shrink-0">
                                        {getIcon(diplomado.id)}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                                        {typeof diplomado.simpleTitle === "string"
                                            ? diplomado.simpleTitle
                                            : "Diplomado Especializado"}
                                    </h3>
                                </div>
                                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:text-purple-800 transition-colors">
                                    <span>Ver detalles</span>
                                    <svg
                                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Enlace para ver todos los diplomados */}
                <div className="text-center mt-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            ></path>
                        </svg>
                        Volver a todos los servicios
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps) {
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

// Generar rutas estáticas si es necesario
export async function generateStaticParams() {
    return Object.keys(diplomadosData).map((id) => ({
        id: id,
    }));
}
