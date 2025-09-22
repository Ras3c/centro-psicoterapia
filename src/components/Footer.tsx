import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    { href: "/about", label: "Sobre Nosotros" },
    { href: "/services", label: "Servicios" },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, href: "https://www.facebook.com/Centredepsicoterapiabasadaenestudiosdegenero/", label: "Facebook" },
    { icon: <FaInstagram className="h-5 w-5" />, href: "https://www.instagram.com/psico_terapia.centro/", label: "Instagram" },
    // { icon: <FaLinkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <FaWhatsapp className="h-5 w-5" />, href: "https://wa.me/5233306667246", label: "WhatsApp" },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-primary">
              <Image
                src={'/images/logo_footer2.png'}
                alt={'Logo Footer'}
                width={200} 
                height={600}
                className="inline-block ml-2"
              />
            </Link>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-accent transition-colors text-sm whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="tel:+523335068342" className="flex items-center text-text hover:text-accent transition-colors">
              <FaPhone className="h-4 w-4 mr-2" />
              <span className="text-sm">+52 33 3506 8342</span>
            </Link>
            <Link href="mailto:psicoterapia.genero.edu@gmail.com" className="flex items-center text-text hover:text-accent transition-colors">
              <FaEnvelope className="h-4 w-4 mr-2" />
              <span className="text-sm">Contacto</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-text text-sm">
            &copy; {new Date().getFullYear()} Acompañamiento en Dignidad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}