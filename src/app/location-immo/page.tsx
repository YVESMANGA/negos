"use client";
import React, { useState } from "react";
import {
  Search,
  MapPin,
  BedDouble,
  Square,
  Filter,
  ArrowUpRight,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { immoData } from "@/data/data";
import Link from "next/link";

const LocationImmo = () => {
  const [activeType, setActiveType] = useState("Tout");
  const [searchQuery, setSearchQuery] = useState("");

  // Logique de filtrage améliorée
  const filteredImmo = immoData.filter((item) => {
    const matchesType = activeType === "Tout" || item.type === activeType;

    // Recherche dans le titre ET dans la localisation
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchLower) ||
      (item.location && item.location.toLowerCase().includes(searchLower));

    return matchesType && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header & Recherche */}
      <div className="bg-[#1d70b8] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 text-center">
            Trouvez votre futur{" "}
            <span className="text-[#ef811d]">chez-vous</span>
          </h1>

          <div className="bg-white p-2 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100 py-3">
              <Search className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Quartier (Plateau, Almadies...), titre..."
                className="w-full outline-none text-gray-700 font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3">
              <Filter className="text-gray-400 mr-2" size={20} />
              <select
                className="w-full outline-none text-gray-700 font-medium bg-transparent cursor-pointer"
                value={activeType}
                onChange={(e) => setActiveType(e.target.value)}
              >
                <option value="Tout">Toutes les offres</option>
                <option value="Location">Location uniquement</option>
                <option value="Vente">Vente uniquement</option>
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
          {["Tout", "Location", "Vente"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-8 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm whitespace-nowrap ${
                activeType === type
                  ? "bg-[#1d70b8] text-white scale-105"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {type === "Tout" ? "Toutes les offres" : type}
            </button>
          ))}
        </div>

        {/* 3. Grille des annonces */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImmo.length > 0 ? (
            filteredImmo.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col"
              >
                <Link
                  href={`/immobilier/${item.slug}`}
                  className="relative block h-60 overflow-hidden"
                >
                  <img
                    src={item.media.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-4 left-4 backdrop-blur px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase shadow-md ${
                      item.type === "Vente"
                        ? "bg-[#ef811d]/90"
                        : "bg-[#1d70b8]/90"
                    }`}
                  >
                    {item.type}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    {/* Affichage de la Localisation */}
                    <div className="flex items-center gap-1 text-[#1d70b8] text-sm mt-1 font-semibold uppercase tracking-wider">
                      <MapPin size={14} /> {item.location || "Dakar, Sénégal"}
                    </div>
                  </div>

                  <p className="text-[#ef811d] font-black text-2xl mb-3">
                    {item.price}
                  </p>

                  {/* Affichage de la Description (tronquée pour la carte) */}
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4 italic">
                    {item.description ||
                      "Aucune description disponible pour ce bien."}
                  </p>

                  <div className="flex gap-6 border-y border-gray-50 py-4 mb-6 mt-auto">
                    <div className="flex items-center gap-1 text-gray-600 font-medium text-sm">
                      <BedDouble size={18} className="text-[#1d70b8]" />{" "}
                      {item.rooms} Ch.
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 font-medium text-sm">
                      <Square size={18} className="text-[#1d70b8]" />{" "}
                      {item.area}
                    </div>
                  </div>

                  <Link
                    href={`/immobilier/${item.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-100 font-bold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all group"
                  >
                    Voir les détails{" "}
                    <ArrowUpRight
                      size={18}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl font-medium">
                Aucun bien ne correspond à vos critères.
              </p>
              <button
                onClick={() => {
                  setActiveType("Tout");
                  setSearchQuery("");
                }}
                className="mt-4 text-[#1d70b8] font-bold hover:underline"
              >
                Afficher toutes les annonces
              </button>
            </div>
          )}
        </div>

        {/* 4. Section Aide à la recherche */}
        <div className="mt-20 bg-gray-50 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
              Vous ne trouvez pas votre{" "}
              <span className="text-[#1d70b8]">bien idéal</span> ?
            </h2>
            <p className="text-gray-600 mb-8">
              Confiez-nous vos critères. Notre équipe de chasseurs immobiliers
              active son réseau pour vous trouver le bien qui correspond à vos
              besoins et votre budget.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 font-bold text-gray-700">
                <CheckCircle2 className="text-[#ef811d]" size={20} />{" "}
                Accompagnement juridique
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-700">
                <CheckCircle2 className="text-[#ef811d]" size={20} /> Visites
                groupées
              </li>
              <li className="flex items-center gap-3 font-bold text-gray-700">
                <CheckCircle2 className="text-[#ef811d]" size={20} /> Aide à
                l'installation
              </li>
            </ul>
            <button className="bg-[#1d70b8] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-100">
              DÉPOSER UNE RECHERCHE
            </button>
          </div>
          <div className="relative">
            <div className="w-64 h-64 bg-[#ef811d]/10 rounded-full absolute -top-10 -right-10 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
              alt="Expert"
              className="relative z-10 w-80 h-96 object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationImmo;
