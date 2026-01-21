import React from 'react';
import { Building2, Car, Gavel, ArrowUpRight, Key, ShoppingCart } from 'lucide-react';

const ServicesGrid = () => {
  const categories = [
    {
      title: "Immobilier",
      color: "border-[#1d70b8]",
      textColor: "text-[#1d70b8]",
      bgColor: "bg-blue-50",
      icon: <Building2 className="text-[#1d70b8]" size={32} />,
      services: ["Gérance immobilière", "Location (Appartements/Bureaux)", "Vente & Achat", "Services de conciergerie"],
      description: "Une gestion rigoureuse pour sécuriser et valoriser votre patrimoine."
    },
    {
      title: "Véhicules",
      color: "border-[#ef811d]",
      textColor: "text-[#ef811d]",
      bgColor: "bg-orange-50",
      icon: <Car className="text-[#ef811d]" size={32} />,
      services: ["Location courte durée", "Vente de véhicules neufs/occasions", "Gestion de flotte", "Entretien & Services"],
      description: "Des solutions de mobilité flexibles adaptées à vos exigences professionnelles."
    },
    {
      title: "Conseils & Stratégie",
      color: "border-gray-800",
      textColor: "text-gray-800",
      bgColor: "bg-gray-50",
      icon: <Gavel className="text-gray-800" size={32} />,
      services: ["Conseils en investissement", "Expertise juridique", "Études de marché", "Accompagnement international"],
      description: "L'expertise de NEGOS pour guider vos décisions les plus stratégiques."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#1d70b8] font-bold uppercase tracking-widest text-sm mb-3">
              Solutions Globales
            </h2>
            <p className="text-4xl font-black text-gray-900 leading-tight">
              Un partenaire unique pour vos besoins en <span className="text-[#ef811d]">Immobilier</span> et <span className="text-[#1d70b8]">Mobilité</span>.
            </p>
          </div>
          <p className="text-gray-500 max-w-sm">
            NEGOS INTERNATIONAL déploie son expertise multisectorielle pour vous offrir des services de haute qualité.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-2xl border-b-4 ${cat.color} bg-white shadow-xl shadow-gray-100 hover:-translate-y-2 transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${cat.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${cat.textColor}`}>{cat.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {cat.description}
              </p>

              <ul className="space-y-3 mb-8">
                {cat.services.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    {s}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all uppercase tracking-wider">
                En savoir plus <ArrowUpRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;