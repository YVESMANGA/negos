'use client';
import React, { useState } from 'react';
import { immoData, autoData } from '@/data/data';
import { Search, Filter, Home, Car, ArrowRight, Fuel, Gauge, BedDouble } from 'lucide-react';

const CataloguePage = () => {
  const [activeTab, setActiveTab] = useState<'tous' | 'immo' | 'auto'>('tous');
  const [searchQuery, setSearchQuery] = useState('');

  // Fusionner toutes les données pour l'onglet "Tous"
  const allData = [
    ...immoData.map(item => ({ ...item, category: 'immo' })),
    ...autoData.map(item => ({ ...item, category: 'auto' }))
  ];

  // Filtrage logique
  const filteredData = allData.filter(item => {
    const matchesTab = activeTab === 'tous' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50  pb-12">
      {/* Hero Section Simplifiée */}
      <div className="bg-[#1d70b8] py-16 text-white mb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Notre Catalogue</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Trouvez le bien immobilier de vos rêves ou votre prochain véhicule parmi nos meilleures offres.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Barre de Recherche et Filtres */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Rechercher un modèle, un quartier..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#ef811d]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 overflow-x-auto w-full md:w-auto">
            {[
              { id: 'tous', label: 'Tout voir', icon: Filter },
              { id: 'immo', label: 'Immobilier', icon: Home },
              { id: 'auto', label: 'Véhicules', icon: Car },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                  ? 'bg-[#ef811d] text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de résultats */}
        {filteredData.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((item) => (
              <div key={`${item.category}-${item.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded shadow-sm text-white text-[10px] font-bold uppercase ${item.type === 'Vente' ? 'bg-[#ef811d]' : 'bg-[#1d70b8]'}`}>
                      {item.type}
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-gray-900 text-[10px] font-bold uppercase">
                      {item.category === 'immo' ? 'Immobilier' : 'Auto'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{item.title}</h3>
                  <p className="text-xl font-black text-[#1d70b8] mb-4">{item.price}</p>
                  
                  {/* Caractéristiques */}
                  <div className="flex gap-4 py-3 border-t border-gray-50 mb-4">
                    {item.category === 'immo' ? (
                      <>
                        <div className="flex items-center gap-1 text-gray-500 text-xs"><Home size={14}/> {(item as any).area}</div>
                        <div className="flex items-center gap-1 text-gray-500 text-xs"><BedDouble size={14}/> {(item as any).rooms} Ch.</div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-1 text-gray-500 text-xs"><Fuel size={14}/> {(item as any).fuel}</div>
                        <div className="flex items-center gap-1 text-gray-500 text-xs"><Gauge size={14}/> {(item as any).km}</div>
                      </>
                    )}
                  </div>

                  <button className="w-full py-3 bg-gray-50 rounded-xl font-bold text-gray-700 hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2">
                    Détails complets <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-inner">
            <p className="text-gray-400 text-lg">Aucun résultat ne correspond à votre recherche.</p>
            <button onClick={() => {setActiveTab('tous'); setSearchQuery('')}} className="mt-4 text-[#ef811d] font-bold underline">
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default CataloguePage;