"use client";
import React, { useState } from "react";
import { Fuel, Gauge, Home, BedDouble, ArrowRight, Play } from "lucide-react";
// Assurez-vous que le chemin d'importation correspond à votre structure
import { immoData, autoData } from "@/data/data";
import Link from "next/link";

const FeaturedSection = () => {
  const [filter, setFilter] = useState<"immo" | "auto">("immo");

  // Sélection des données en fonction du filtre
  const currentData = filter === "immo" ? immoData : autoData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header avec Sélecteur */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Dernières Opportunités
            </h2>
            <div className="h-1.5 w-20 bg-[#ef811d]"></div>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setFilter("immo")}
              className={`px-6 py-2 rounded-md font-bold transition ${
                filter === "immo"
                  ? "bg-[#1d70b8] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Immobilier
            </button>
            <button
              onClick={() => setFilter("auto")}
              className={`px-6 py-2 rounded-md font-bold transition ${
                filter === "auto"
                  ? "bg-[#ef811d] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Véhicules
            </button>
          </div>
        </div>

        {/* Grille d'affichage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentData.map((item) => {
            // Type Guard pour TypeScript
            const isImmo = "area" in item;

            // Construction de l'URL dynamique basée sur la catégorie et le slug
            const detailUrl = isImmo
              ? `/immobilier/${item.slug}`
              : `/vehicules/${item.slug}`;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                {/* Image avec Link pour rendre toute l'image cliquable */}
                <Link
                  href={detailUrl}
                  className="relative block h-64 overflow-hidden"
                >
                  <img
                    src={item.media.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge Type (Vente/Location) */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded text-white text-xs font-bold uppercase ${
                      item.type === "Vente" ? "bg-[#ef811d]" : "bg-[#1d70b8]"
                    }`}
                  >
                    {item.type}
                  </span>

                  {/* Indicateur Vidéo */}
                  {item.media.videos && (
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white">
                      <Play size={16} fill="white" />
                    </div>
                  )}
                </Link>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`font-black whitespace-nowrap ml-2 ${
                        isImmo ? "text-[#1d70b8]" : "text-[#ef811d]"
                      }`}
                    >
                      {item.price}
                    </p>
                  </div>

                  {/* Caractéristiques spécifiques */}
                  <div className="flex gap-4 mb-6 border-y border-gray-50 py-4">
                    {isImmo ? (
                      <>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Home size={16} /> {item.area}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <BedDouble size={16} /> {item.rooms} Ch.
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Fuel size={16} /> {item.fuel}
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <Gauge size={16} /> {item.km}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Bouton Voir les détails transformé en Link */}
                  <Link
                    href={detailUrl}
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-gray-100 rounded-xl font-bold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all"
                  >
                    Voir les détails <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer de section */}
        <div className="text-center mt-12">
          <Link
            href="/location-immo"
            className="text-gray-500 font-bold hover:text-[#1d70b8] underline decoration-[#ef811d] underline-offset-8 transition-colors cursor-pointer"
          >
            VOIR TOUT LE CATALOGUE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
