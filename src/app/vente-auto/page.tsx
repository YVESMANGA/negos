"use client";
import React from "react";
import { ShieldCheck, Gauge, Fuel, ArrowRight, Tag } from "lucide-react";
import { autoData } from "@/data/data";
import Link from "next/link";

const VenteVehicules = () => {
  // FILTRAGE : Uniquement les véhicules en "Vente"
  const stockVente = autoData.filter((item) => item.type === "Vente");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section Vente */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#ef811d]">
              <Tag size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">
                Vente Automobile
              </span>
            </div>
            <h1 className="text-4xl font-black text-gray-900 uppercase">
              STOCK <span className="text-[#1d70b8]">PRESTIGE</span>
            </h1>
          </div>
          <p className="text-gray-500 max-w-sm mt-4 md:mt-0 italic text-sm md:text-right">
            Tous nos véhicules en vente sont expertisés par NEGOS INTERNATIONAL
            pour garantir votre sécurité et votre sérénité.
          </p>
        </div>

        {/* Grille de Vente Dynamique */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stockVente.length > 0 ? (
            stockVente.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all border border-transparent hover:border-blue-100 group flex flex-col"
              >
                {/* Image avec Lien Slug */}
                <Link
                  href={`/vehicules/${item.slug}`}
                  className="relative h-64 rounded-[2rem] overflow-hidden mb-6 block"
                >
                  <img
                    src={
                      item.media.images[0].startsWith("http")
                        ? item.media.images[0]
                        : `${item.media.images[0]}`
                    }
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur px-4 py-2 rounded-xl text-white font-bold text-xs">
                    {(item as any).year || "2024"}
                  </div>
                </Link>

                <div className="px-2 flex flex-col flex-grow">
                  <Link href={`/vehicules/${item.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1d70b8] transition-colors line-clamp-1">
                      {item.title}
                    </h2>
                  </Link>

                  {/* Caractéristiques techniques */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold bg-gray-50 p-2 rounded-xl">
                      <Gauge size={16} className="text-[#1d70b8]" /> {item.km}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold bg-gray-50 p-2 rounded-xl">
                      <Fuel size={16} className="text-[#1d70b8]" /> {item.fuel}
                    </div>
                  </div>

                  {/* Prix et Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <span className="text-xl font-black text-[#ef811d]">
                      {item.price}
                    </span>
                    <Link
                      href={`/vehicules/${item.slug}`}
                      className="flex items-center gap-2 text-sm font-bold text-[#1d70b8] group/btn"
                    >
                      Détails
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-2 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed">
              <p className="text-gray-400 text-lg">
                Aucun véhicule disponible à la vente pour le moment.
              </p>
            </div>
          )}
        </div>

        {/* Banner de rachat / Contact WhatsApp */}
        <div className="mt-20 bg-[#1d70b8] rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-blue-200">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Vendez votre véhicule avec nous
            </h2>
            <p className="text-blue-100 mb-8 opacity-90 text-lg">
              Expertise gratuite et rachat immédiat ou dépôt-vente sécurisé.
              Profitez de notre réseau pour vendre au meilleur prix.
            </p>
            <a
              href="https://wa.me/221778886146?text=Bonjour, je souhaite faire estimer mon véhicule pour une vente."
              target="_blank"
              className="inline-block bg-[#ef811d] px-10 py-4 rounded-2xl font-black hover:bg-white hover:text-[#ef811d] transition-all shadow-xl uppercase text-sm tracking-widest"
            >
              ESTIMER MON VÉHICULE
            </a>
          </div>
          <div className="mt-8 md:mt-0 opacity-10 absolute -right-10 md:static pointer-events-none">
            <ShieldCheck size={280} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenteVehicules;
