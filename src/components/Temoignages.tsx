import React from 'react';
import { Star, Quote, ShieldCheck, Globe, Zap } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Jean-Pierre D.",
      role: "Investisseur Immobilier",
      text: "La gérance de mes appartements par NEGOS est exemplaire. Une transparence totale et une grande réactivité.",
      color: "border-[#1d70b8]"
    },
    {
      name: "Mariama S.",
      role: "Location de Véhicule",
      text: "Service de location de véhicule impeccable pour mon séjour d'affaires. Ponctualité et confort au rendez-vous.",
      color: "border-[#ef811d]"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Côté Gauche : Nos Engagements */}
          <div>
            <h2 className="text-[#1d70b8] font-bold uppercase tracking-widest text-sm mb-4">Pourquoi nous ?</h2>
            <h3 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
              L'engagement <span className="text-[#ef811d]">NEGOS</span> pour votre sérénité.
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#1d70b8]">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sécurité Juridique</h4>
                  <p className="text-sm text-gray-500">Tous nos contrats de vente et gérance sont certifiés et sécurisés.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#ef811d]">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Vision Internationale</h4>
                  <p className="text-sm text-gray-500">Une expertise qui dépasse les frontières pour vos investissements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#1d70b8]">
                  <Zap size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Réactivité Maximale</h4>
                  <p className="text-sm text-gray-500">Une équipe dédiée pour répondre à vos besoins en moins de 24h.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Côté Droit : Témoignages */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 text-gray-200">
              <Quote size={120} />
            </div>
            <div className="relative space-y-6">
              {testimonials.map((t, i) => (
                <div key={i} className={`bg-white p-8 rounded-2xl shadow-xl border-l-8 ${t.color}`}>
                  <div className="flex text-[#ef811d] mb-4">
                    {[...Array(5)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                  <div>
                    <p className="font-black text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400 uppercase font-bold">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;