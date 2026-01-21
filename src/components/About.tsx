import React from 'react';
import { CheckCircle2, Globe2, Users2, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: "Biens en Gérance", value: "250+", icon: <CheckCircle2 className="text-[#1d70b8]" /> },
    { label: "Véhicules en Vente/Loc", value: "80+", icon: <CheckCircle2 className="text-[#ef811d]" /> },
    { label: "Clients Internationaux", value: "150+", icon: <Globe2 className="text-[#1d70b8]" /> },
    { label: "Années d'Expertise", value: "5+", icon: <Award className="text-[#ef811d]" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Colonne Image avec superposition de badge */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/logo.png" 
                alt="Bureaux Negos International" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-[#1d70b8]/10"></div>
            </div>
            
            {/* Badge flottant aux couleurs du logo */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl hidden md:block border-t-4 border-[#ef811d]">
              <p className="text-[#1d70b8] font-black text-4xl mb-1">100%</p>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-tighter">Engagement Client</p>
            </div>
          </div>

          {/* Colonne Texte */}
          <div>
            <h2 className="text-[#ef811d] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              À propos de nous
            </h2>
            <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              NEGOS INTERNATIONAL : Votre pont vers <span className="text-[#1d70b8]">l'excellence immobilière</span> et automobile.
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Spécialisés dans la gestion globale, nous offrons des solutions complètes allant de la <strong>gérance immobilière</strong> à la <strong>vente de véhicules</strong>. Notre approche internationale nous permet de conseiller nos clients avec une vision stratégique et un service sur mesure. 
            </p>

            {/* Grille de stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-gray-100 hover:border-[#1d70b8] transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-black text-gray-800">{stat.value}</span>
                  </div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#1d70b8] text-white px-8 py-4 rounded font-bold hover:bg-[#165a94] transition shadow-lg shadow-blue-100">
              DÉCOUVRIR NOTRE HISTOIRE
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;