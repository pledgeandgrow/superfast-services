import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-t border-white/10 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-12 sm:py-16">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.webp" 
                alt="Superfast Services Logo" 
                className="h-10 sm:h-12 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
              Votre partenaire de confiance pour le sourcing international. Des solutions d&apos;approvisionnement globales, pensées pour vous.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn">
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/5 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-1 md:order-none">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Liens Rapides</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="order-2 md:order-none">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Nos Services</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/services/ground-shipping" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Transport Terrestre
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Fret Aérien International
                </Link>
              </li>
              <li>
                <Link href="/services/large-projects" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Grands Projets
                </Link>
              </li>
              <li>
                <Link href="/services/complementary" className="text-xs sm:text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Services Complémentaires
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 order-3 md:order-none">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                <a href="mailto:contact@superfast-services.com" className="text-xs sm:text-sm hover:text-white transition-colors break-all">
                  contact@superfast-services.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                <a href="tel:+971545116447" className="text-xs sm:text-sm hover:text-white transition-colors">
                  +971 54 511 6447
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm">
                  Dubai, UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2025 Superfast Services. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm justify-center">
              <Link href="/legal/privacy" className="text-gray-500 hover:text-white transition-colors whitespace-nowrap">
                Politique de Confidentialité
              </Link>
              <Link href="/legal/terms" className="text-gray-500 hover:text-white transition-colors">
                Conditions Générales
              </Link>
              <Link href="/legal/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/legal/notice" className="text-gray-500 hover:text-white transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
