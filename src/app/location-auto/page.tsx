"use client";
import React, { useState } from "react";
import { Fuel, Gauge, CheckCircle, Search } from "lucide-react";
import { autoData } from "@/data/data";
import Link from "next/link";

const LocationVehicules = () => {
  // On filtre pour ne garder que les véhicules en "Location"
  const vehiculesEnLocation = autoData.filter((v) => v.type === "Location");

  const [selectedCategory, setSelectedCategory] = useState("Tous les types");

  // Filtrage par catégorie
  const filteredVehicules = vehiculesEnLocation.filter((v) => {
    if (selectedCategory === "Tous les types") return true;
    // On vérifie la catégorie (assurez-vous qu'elle existe dans votre autoData)
    return (v as any).category === selectedCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Page */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase">
            LOCATION DE <span className="text-[#ef811d]">VÉHICULES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic">
            "Une flotte moderne pour vos déplacements professionnels et
            personnels au Sénégal."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar Filtres */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-[#1d70b8]">
                Réserver un véhicule
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">
                    Filtrer par type
                  </label>
                  <select
                    className="w-full mt-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#ef811d] outline-none bg-white font-medium"
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="Tous les types">Tous les types</option>
                    <option value="4x4 / SUV">4x4 / SUV</option>
                    <option value="Berline">Berline</option>
                    <option value="Luxe">Luxe</option>
                  </select>
                </div>
                <button className="w-full bg-[#ef811d] text-white py-4 rounded-lg font-bold hover:bg-[#d4721a] transition shadow-lg shadow-orange-100 uppercase tracking-wide">
                  Rechercher
                </button>
              </div>
            </div>

            <div className="bg-[#1d70b8] p-6 rounded-2xl text-white shadow-lg shadow-blue-100">
              <h3 className="font-bold mb-2 flex items-center gap-2 text-lg">
                Besoin d'un chauffeur ?
              </h3>
              <p className="text-sm opacity-90 mb-6 leading-relaxed">
                Nous proposons des services de location avec chauffeurs
                professionnels pour tous vos trajets.
              </p>
              <a
                href="https://wa.me/221778886146?text=Bonjour, je souhaite louer un véhicule avec chauffeur."
                target="_blank"
                className="w-full bg-white text-[#1d70b8] font-black py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition"
              >
                NOUS CONTACTER <CheckCircle size={18} />
              </a>
            </div>
          </div>

          {/* Liste des véhicules */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {filteredVehicules.length > 0 ? (
              filteredVehicules.map((v) => (
                <div
                  key={v.id}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col"
                >
                  {/* Image avec Lien Slug */}
                  <Link
                    href={`/vehicules/${v.slug}`}
                    className="relative h-52 overflow-hidden block"
                  >
                    <img
                      src={
                        v.media.images[0].startsWith("http")
                          ? v.media.images[0]
                          : `/${v.media.images[0]}`
                      }
                      alt={v.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#ef811d] text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase shadow-md">
                      Disponible
                    </div>
                  </Link>

                  {/* Infos */}
                  <div className="p-6 flex-1 flex flex-col">
                    <Link href={`/vehicules/${v.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1d70b8] transition-colors">
                        {v.title}
                      </h3>
                    </Link>

                    <div className="flex gap-4 text-xs font-semibold text-gray-500 mb-6">
                      <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                        <Fuel size={14} className="text-[#ef811d]" /> {v.fuel}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
                        <Gauge size={14} className="text-[#ef811d]" /> {v.km}
                      </span>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-5">
                      <div>
                        <p className="text-[10px] text-gray-400 font-black uppercase">
                          Tarif Journalier
                        </p>
                        <p className="text-xl font-black text-[#1d70b8]">
                          {v.price.split("/")[0]}
                          <span className="text-xs font-medium text-gray-400">
                            /jour
                          </span>
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/221778886146?text=Bonjour, je souhaite réserver le véhicule : ${v.title}`}
                        target="_blank"
                        className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-[#ef811d] transition-all shadow-md active:scale-95"
                      >
                        RÉSERVER
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">
                  Aucun véhicule disponible en location pour le moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationVehicules;
