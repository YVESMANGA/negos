'use client'
import React from 'react';
import { ShoppingCart, BadgeCheck, Landmark, TrendingUp, MapPin, Square, BedDouble, ArrowRight, Wallet } from 'lucide-react';

const VenteImmo = () => {
  const annoncesVente = [
    {
      id: 1,
      title: "Villa Contemporaine",
      location: "Almadies, Dakar",
      price: "450 000 000 FCFA",
      surface: "500m²",
      rooms: 6,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
      tag: "Exclusivité"
    },
    {
      id: 2,
      title: "Penthouse avec vue Mer",
      location: "Fann Résidence",
      price: "280 000 000 FCFA",
      surface: "220m²",
      rooms: 4,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      tag: "Nouveau"
    },
    {
      id: 3,
      title: "Terrain Viabilisé",
      location: "Diamniadio",
      price: "45 000 000 FCFA",
      surface: "300m²",
      rooms: 0,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
      tag: "Investissement"
    }
  ];

  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Vente & Achat */}
      <section className="relative py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#ef811d] text-xs font-bold uppercase tracking-widest mb-6">
              <TrendingUp size={14} /> Investissement Patrimonial
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Investissez dans <span className="text-[#1d70b8]">l'Immobilier</span> avec certitude.
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              De l'acquisition de terrains à la vente de propriétés d'exception, NEGOS INTERNATIONAL sécurise chaque étape de votre transaction.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-[#1d70b8] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-100">
                VOIR LE CATALOGUE
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition">
                VENDRE MON BIEN
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-[#ef811d] p-1 rounded-2xl">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" className="rounded-xl h-48 w-full object-cover" alt="Interior" />
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-50 text-center">
                <Landmark className="text-[#1d70b8] mx-auto mb-2" size={32} />
                <p className="text-xs font-bold text-gray-400 uppercase">Expertise Titres</p>
                <p className="text-sm font-black">100% Sécurisé</p>
              </div>
            </div>
            <div className="space-y-4">
               <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-50 text-center">
                <Wallet className="text-[#ef811d] mx-auto mb-2" size={32} />
                <p className="text-xs font-bold text-gray-400 uppercase">Conseil Fiscal</p>
                <p className="text-sm font-black">Optimisé</p>
              </div>
              <div className="bg-[#1d70b8] p-1 rounded-2xl">
                <img src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=80" className="rounded-xl h-64 w-full object-cover" alt="Modern Building" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Liste des Biens en Vente */}
      <section className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-gray-900">Propriétés Disponibles</h2>
            <div className="h-1.5 w-20 bg-[#ef811d] mt-2"></div>
          </div>
          <button className="text-[#1d70b8] font-bold hover:underline">Toutes les annonces</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {annoncesVente.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-[#ef811d] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold uppercase mb-3 tracking-widest">
                  <MapPin size={14} className="text-[#1d70b8]" /> {item.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1d70b8] transition-colors">{item.title}</h3>
                
                <div className="flex gap-6 mb-8 py-4 border-y border-gray-50">
                  <div className="flex items-center gap-2 text-gray-600 font-bold text-sm">
                    <Square size={18} className="text-[#1d70b8]" /> {item.surface}
                  </div>
                  {item.rooms > 0 && (
                    <div className="flex items-center gap-2 text-gray-600 font-bold text-sm">
                      <BedDouble size={18} className="text-[#1d70b8]" /> {item.rooms} Ch.
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-gray-900 italic">{item.price}</span>
                  <button className="bg-gray-900 text-white p-3 rounded-xl group-hover:bg-[#ef811d] transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section Accompagnement (Le "Plus" Negos) */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-[#1d70b8] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            {/* Décoration fond */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
              <div>
                <h2 className="text-4xl font-black mb-8">Plus qu'une vente, un <span className="text-[#ef811d]">Conseil Stratégique</span>.</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <BadgeCheck className="text-[#ef811d]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Expertise Foncière</h4>
                      <p className="text-blue-100 text-sm">Vérification scrupuleuse des titres de propriété et certificats d'urbanisme.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <ShoppingCart className="text-[#ef811d]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Aide à l'Acquisition</h4>
                      <p className="text-blue-100 text-sm">Nous négocions pour vous le meilleur prix selon les réalités du marché.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-3xl text-gray-900 shadow-2xl">
                <h3 className="text-2xl font-black mb-4">Vendez votre bien</h3>
                <p className="text-gray-500 mb-8 text-sm italic">"Confiez-nous votre propriété et bénéficiez de notre réseau international d'investisseurs."</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Type de bien (Terrain, Villa...)" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8]" />
                  <input type="text" placeholder="Numéro de téléphone" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8]" />
                  <button className="w-full bg-[#ef811d] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#d4721a] transition">
                    Estimer mon bien
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenteImmo;