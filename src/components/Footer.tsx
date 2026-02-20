import React from "react";
import {
  Handshake,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Colonne 1 : Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo Negos International"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter">
                NEGOS <span className="text-[#1d70b8]">INTERNATIONAL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour la gestion globale de vos
              actifs immobiliers et vos solutions de mobilité internationale.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/people/Pame-Njie/pfbid0ABTLTFNWVFzSbThbB8d1cJT19143hvRjzKzHGGS7zFRr6HbbZ8uK8pT5N518nVb8l/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ef811d] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/negosinternational5/"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ef811d] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@pame.njie"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ef811d] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V14.5c0 1.51-.43 3.12-1.44 4.28-1.12 1.34-2.88 2.08-4.57 2.13-1.89.09-3.9-.6-5.18-2.03-1.34-1.46-1.88-3.6-1.38-5.51.48-1.95 2.1-3.66 4.09-4.13.79-.19 1.62-.2 2.43-.1v4.03c-.63-.12-1.31-.08-1.9.18-.75.33-1.33 1.05-1.45 1.86-.17.91.22 1.89.94 2.46.72.6 1.74.75 2.63.45.83-.26 1.48-1.02 1.56-1.88.04-1.35.02-2.71.02-4.07V0h-.01z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Immobilier */}
          <div>
            <h4 className="text-[#1d70b8] font-bold uppercase text-sm tracking-widest mb-6">
              Immobilier
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/gerance" className="hover:text-white transition">
                  Gérance Immobilière
                </a>
              </li>
              <li>
                <a
                  href="/location-immo"
                  className="hover:text-white transition"
                >
                  Location & Vente
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-white transition">
                  Services & Conseils
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Véhicules */}
          <div>
            <h4 className="text-[#ef811d] font-bold uppercase text-sm tracking-widest mb-6">
              Véhicules
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a
                  href="/location-auto"
                  className="hover:text-white transition"
                >
                  Location de véhicules
                </a>
              </li>
              <li>
                <a href="/vente-auto" className="hover:text-white transition">
                  Vente automobile
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact Rapide */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ef811d] shrink-0" />
                <span>
                  Dakar, Sénégal <br /> Ouakam cite mbackiyou faye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#ef811d] shrink-0" />
                <div className="flex flex-col">
                  <span>+221 77 888 61 46</span>
                  <span>+221 77 573 57 91</span>
                  <span>+221 76 944 84 24</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#ef811d] shrink-0" />
                <div className="flex flex-col">
                  <span>pamenegos@gmail.com</span>
                  <span>infosnegos@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright bicolore */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 NEGOS INTERNATIONAL. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Mentions Légales
            </a>
            <a href="#" className="hover:text-white transition">
              Politique de Confidentialité
            </a>
          </div>
          <div className="flex h-1 w-24">
            <div className="h-full w-1/2 bg-[#ef811d]"></div>
            <div className="h-full w-1/2 bg-[#1d70b8]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
