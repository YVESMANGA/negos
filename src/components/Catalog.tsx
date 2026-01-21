'use client';
import React, { useState } from 'react';
import { MapPin, Fuel, Gauge, Home, BedDouble, ArrowRight } from 'lucide-react';

const FeaturedSection = () => {
  const [filter, setFilter] = useState<'immo' | 'auto'>('immo');

  const immoData = [
    { id: 1, title: "Appartement de Luxe - Plateau", price: "1 500 000 FCFA", type: "Location", area: "150m²", rooms: 4, img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" },
    { id: 2, title: "Villa Moderne - Almadies", price: "500 000 000 FCFA", type: "Vente", area: "400m²", rooms: 6, img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80" },
  ];

  const autoData = [
    { id: 1, title: "Range Rover Sport 2023", price: "75 000 000 FCFA", type: "Vente", fuel: "Diesel", km: "12 000 km", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" },
    { id: 2, title: "Toyota Prado TXL", price: "150 000 FCFA / jour", type: "Location", fuel: "Essence", km: "0 km", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80" },
  ];

  const currentData = filter === 'immo' ? immoData : autoData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header avec Sélecteur */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Dernières Opportunités </h2>
            <div className="h-1.5 w-20 bg-[#ef811d]"></div>
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setFilter('immo')}
              className={`px-6 py-2 rounded-md font-bold transition ${filter === 'immo' ? 'bg-[#1d70b8] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Immobilier
            </button>
            <button 
              onClick={() => setFilter('auto')}
              className={`px-6 py-2 rounded-md font-bold transition ${filter === 'auto' ? 'bg-[#ef811d] text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Véhicules
            </button>
          </div>
        </div>

        {/* Grille d'affichage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentData.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded text-white text-xs font-bold uppercase ${item.type === 'Vente' ? 'bg-[#ef811d]' : 'bg-[#1d70b8]'}`}>
                  {item.type} 
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className={`font-black ${filter === 'immo' ? 'text-[#1d70b8]' : 'text-[#ef811d]'}`}>{item.price}</p>
                </div>

                {/* Détails spécifiques selon le type */}
                <div className="flex gap-4 mb-6 border-y border-gray-50 py-4">
                  {filter === 'immo' ? (
                    <>
                      <div className="flex items-center gap-1 text-gray-500 text-sm"><Home size={16}/> {(item as any).area}</div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm"><BedDouble size={16}/> {(item as any).rooms} Ch.</div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-1 text-gray-500 text-sm"><Fuel size={16}/> {(item as any).fuel}</div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm"><Gauge size={16}/> {(item as any).km}</div>
                    </>
                  )}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                  Voir les détails <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-gray-500 font-bold hover:text-[#1d70b8] underline decoration-[#ef811d] underline-offset-8">
            VOIR TOUT LE CATALOGUE
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;