'use client'
import React from 'react';
import { ShieldCheck, Gauge, Fuel, Calendar, ArrowRight, Tag } from 'lucide-react';

const VenteVehicules = () => {
  const stock = [
    {
      id: 1,
      name: "Range Rover Sport HSE",
      year: "2023",
      price: "85 000 000 FCFA",
      km: "5 400 km",
      fuel: "Hybride/Diesel",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Mercedes Classe G63 AMG",
      year: "2022",
      price: "145 000 000 FCFA",
      km: "12 000 km",
      fuel: "Essence",
      image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen ">
      {/* Hero Section Vente */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#ef811d]">
              <Tag size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">Vente Automobile</span>
            </div>
            <h1 className="text-4xl font-black text-gray-900">
              STOCK <span className="text-[#1d70b8]">PRESTIGE</span>
            </h1>
          </div>
          <p className="text-gray-500 max-w-sm mt-4 md:mt-0">
            Tous nos véhicules en vente sont expertisés par NEGOS INTERNATIONAL pour garantir votre sécurité.
          </p>
        </div>

        {/* Grille de Vente */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stock.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-blue-100">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-xl text-white font-bold text-sm">
                  {item.year}
                </div>
              </div>
              
              <div className="px-2">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{item.name}</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Gauge size={16} className="text-[#1d70b8]"/> {item.km}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Fuel size={16} className="text-[#1d70b8]"/> {item.fuel}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-lg font-black text-[#ef811d]">{item.price}</span>
                  <button className="flex items-center gap-2 text-sm font-bold text-[#1d70b8] group">
                    Détails <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de rachat */}
        <div className="mt-20 bg-[#1d70b8] rounded-[2rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-black mb-4">Vendez votre véhicule avec nous</h2>
            <p className="text-blue-100 mb-8">Nous expertisons votre voiture et vous proposons un rachat au meilleur prix ou un dépôt-vente sécurisé.</p>
            <button className="bg-[#ef811d] px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-xl">
              ESTIMER MON VÉHICULE
            </button>
          </div>
          <div className="mt-8 md:mt-0 opacity-20">
             <ShieldCheck size={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenteVehicules;