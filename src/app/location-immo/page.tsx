'use client'
import React, { useState } from 'react';
import { Search, MapPin, BedDouble, Square, Filter, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const LocationImmo = () => {
  const [activeType, setActiveType] = useState('Tous');

  const locations = [
    {
      id: 1,
      title: "Appartement F4 Moderne",
      location: "Dakar Plateau",
      price: "1 200 000 FCFA",
      category: "Appartement",
      rooms: 3,
      surface: "145m²",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Villa avec Piscine",
      location: "Almadies",
      price: "3 500 000 FCFA",
      category: "Villa",
      rooms: 5,
      surface: "350m²",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Bureaux Open Space",
      location: "Point E",
      price: "850 000 FCFA",
      category: "Bureau",
      rooms: 2,
      surface: "90m²",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Header & Recherche */}
      <div className="bg-[#1d70b8] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 text-center">
            Trouvez votre futur <span className="text-[#ef811d]">chez-vous</span>
          </h1>
          
          <div className="bg-white p-2 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100 py-3">
              <Search className="text-gray-400 mr-2" size={20} />
              <input type="text" placeholder="Quartier ou ville..." className="w-full outline-none text-gray-700 font-medium" />
            </div>
            <div className="flex-1 flex items-center px-4 py-3">
              <Filter className="text-gray-400 mr-2" size={20} />
              <select className="w-full outline-none text-gray-700 font-medium bg-transparent">
                <option>Type de bien</option>
                <option>Appartement</option>
                <option>Villa</option>
                <option>Bureau</option>
              </select>
            </div>
            <button className="bg-[#ef811d] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#d4721a] transition">
              RECHERCHER
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
        {/* 2. Filtres rapides */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
          {['Tous', 'Appartement', 'Villa', 'Bureau'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveType(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition ${activeType === cat ? 'bg-[#1d70b8] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Grille des annonces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
              <div className="relative h-60">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[#1d70b8] font-bold text-xs uppercase shadow-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <span className="text-[#ef811d] font-black">{item.price}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-6 uppercase tracking-wider font-bold">
                  <MapPin size={14} className="text-[#1d70b8]" /> {item.location}
                </div>

                <div className="flex gap-6 border-y border-gray-50 py-4 mb-6">
                  <div className="flex items-center gap-1 text-gray-600 font-medium">
                    <BedDouble size={18} className="text-[#1d70b8]" /> {item.rooms} Ch.
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 font-medium">
                    <Square size={18} className="text-[#1d70b8]" /> {item.surface}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all group">
                  Voir les détails <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Section Aide à la recherche */}
        <div className="mt-20 bg-gray-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
              Vous ne trouvez pas votre <span className="text-[#1d70b8]">bien idéal</span> ?
            </h2>
            <p className="text-gray-600 mb-8">
              Confiez-nous vos critères. Notre équipe de chasseurs immobiliers active son réseau pour vous trouver le bien qui correspond à vos besoins et votre budget.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="text-[#ef811d]" size={20}/> Accompagnement juridique</li>
              <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="text-[#ef811d]" size={20}/> Visites groupées</li>
              <li className="flex items-center gap-3 font-bold text-gray-700"><CheckCircle2 className="text-[#ef811d]" size={20}/> Aide à l'installation</li>
            </ul>
            <button className="bg-[#1d70b8] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-100">
              DÉPOSER UNE RECHERCHE
            </button>
          </div>
          <div className="relative">
             <div className="w-64 h-64 bg-[#ef811d]/10 rounded-full absolute -top-10 -right-10 blur-3xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80" 
               alt="Expert Negos" 
               className="relative z-10 w-80 h-96 object-cover rounded-[2rem] shadow-2xl"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationImmo;