'use client'
import React from 'react';
import { Car, Fuel, Gauge, MapPin, Calendar, CheckCircle } from 'lucide-react';

const LocationVehicules = () => {
  const vehicules = [
    {
      id: 1,
      name: "Toyota Prado TXL",
      price: "120 000 FCFA",
      period: "jour",
      type: "4x4 / SUV",
      fuel: "Diesel",
      transmission: "Automatique",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Hyundai Santa Fe",
      price: "85 000 FCFA",
      period: "jour",
      type: "SUV",
      fuel: "Essence",
      transmission: "Automatique",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white min-h-screen ">
      {/* Header Page */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            LOCATION DE <span className="text-[#ef811d]">VÉHICULES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "Une flotte moderne pour vos déplacements professionnels et personnels au Sénégal et à l'international."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Filtres */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-[#1d70b8]">Réserver un véhicule</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Type de véhicule</label>
                  <select className="w-full mt-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#ef811d] outline-none">
                    <option>Tous les types</option>
                    <option>Luxe / Prestige</option>
                    <option>SUV / 4x4</option>
                    <option>Berline</option>
                  </select>
                </div>
                <button className="w-full bg-[#ef811d] text-white py-3 rounded-lg font-bold hover:bg-[#d4721a] transition shadow-lg shadow-orange-100">
                  RECHERCHER
                </button>
              </div>
            </div>
            
            <div className="bg-[#1d70b8] p-6 rounded-2xl text-white">
              <h3 className="font-bold mb-2">Besoin d'un chauffeur ?</h3>
              <p className="text-sm opacity-80 mb-4 text-gray-100">Nous proposons des services de location avec chauffeurs professionnels pour vos trajets.</p>
              <a href="/contact" className="text-white font-bold flex items-center gap-2 hover:underline">
                Contactez-nous <CheckCircle size={16}/>
              </a>
            </div>
          </div>

          {/* Liste des véhicules */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {vehicules.map((v) => (
              <div key={v.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[#1d70b8] font-bold text-sm shadow-md">
                    {v.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{v.name}</h3>
                  <div className="flex gap-4 text-xs text-gray-500 mb-6">
                    <span className="flex items-center gap-1"><Fuel size={14} className="text-[#ef811d]"/> {v.fuel}</span>
                    <span className="flex items-center gap-1"><Car size={14} className="text-[#ef811d]"/> {v.transmission}</span>
                  </div>
                  <div className="flex items-end justify-between border-t pt-4">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase">Tarif</p>
                      <p className="text-lg font-black text-[#1d70b8]">{v.price}<span className="text-xs font-normal">/{v.period}</span></p>
                    </div>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#ef811d] transition">
                      RÉSERVER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationVehicules;