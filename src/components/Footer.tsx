import React from 'react';
import { Handshake, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

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
              Votre partenaire de confiance pour la gestion globale de vos actifs immobiliers et vos solutions de mobilité internationale.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ef811d] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ef811d] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ef811d] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Colonne 2 : Immobilier */}
          <div>
            <h4 className="text-[#1d70b8] font-bold uppercase text-sm tracking-widest mb-6">Immobilier</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Gérance Immobilière</a></li>
              <li><a href="#" className="hover:text-white transition">Location d'appartements</a></li>
              <li><a href="#" className="hover:text-white transition">Vente & Achat de biens</a></li>
              <li><a href="#" className="hover:text-white transition">Services & Conseils</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Véhicules */}
          <div>
            <h4 className="text-[#ef811d] font-bold uppercase text-sm tracking-widest mb-6">Véhicules</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Location de véhicules</a></li>
              <li><a href="#" className="hover:text-white transition">Vente automobile</a></li>
              <li><a href="#" className="hover:text-white transition">Gestion de flotte</a></li>
              <li><a href="#" className="hover:text-white transition">Assistance technique</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact Rapide */}
          <div>
            <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ef811d] shrink-0" />
                <span>Dakar, Sénégal <br /> Avenue Cheikh Anta Diop</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#ef811d] shrink-0" />
                <span>+221 77 609 91 80</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#ef811d] shrink-0" />
                <span>contact@negos-int.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright bicolore */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2024 NEGOS INTERNATIONAL. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Mentions Légales</a>
            <a href="#" className="hover:text-white transition">Politique de Confidentialité</a>
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