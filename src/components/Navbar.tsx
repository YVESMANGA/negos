"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Building, Car, CheckCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Configuration des services (Tableaux nettoyés)
  const immobiliserItems = [
    { label: "Gérance", href: "/gerance" },
    { label: "Location & Vente", href: "/location-immo" },
    { label: "Achat", href: "/achat" },
  ];

  const vehiculeItems = [
    { label: "Location Véhicules", href: "/location-auto" },
    { label: "Vente Véhicules", href: "/vente-auto" },
  ];

  return (
    <nav className="bg-white border-b-2 border-gray-100 fixed w-full z-50 shadow-sm">
      {/* Topbar décorative */}
      <div className="h-1.5 w-full flex">
        <div className="h-full w-1/2 bg-[#ef811d]"></div>
        <div className="h-full w-1/2 bg-[#1d70b8]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Logo Negos International"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-gray-900 leading-none">
                  NEGOS <span className="text-[#1d70b8]">INTERNATIONAL</span>
                </span>
                <span className="text-[10px] font-bold text-[#ef811d] uppercase tracking-[0.2em]">
                  Immobilier & Véhicules
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-[#1d70b8] font-semibold transition"
            >
              Accueil
            </a>

            {/* Dropdown Immobilier */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 group-hover:text-[#1d70b8] font-semibold transition">
                <Building
                  size={18}
                  className="text-gray-400 group-hover:text-[#1d70b8]"
                />
                Immobilier
                <ChevronDown
                  size={14}
                  className="mt-1 group-hover:rotate-180 transition-transform"
                />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {immobiliserItems.map((item, index) => (
                  <a
                    key={`desktop-immo-${index}`}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1d70b8]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Dropdown Véhicules */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 group-hover:text-[#ef811d] font-semibold transition">
                <Car
                  size={18}
                  className="text-gray-400 group-hover:text-[#ef811d]"
                />
                Véhicules
                <ChevronDown
                  size={14}
                  className="mt-1 group-hover:rotate-180 transition-transform"
                />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {vehiculeItems.map((item, index) => (
                  <a
                    key={`desktop-auto-${index}`}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#ef811d]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/services"
              className="px-4 py-2 text-gray-700 hover:text-[#1d70b8] font-semibold transition"
            >
              Services
            </a>

            <div className="ml-4 h-8 w-[1px] bg-gray-200 mx-2"></div>

            <a
              href="/contact"
              className="ml-4 bg-[#1d70b8] text-white px-6 py-2.5 rounded hover:bg-[#165a94] transition font-bold text-sm tracking-wide"
            >
              NOUS CONTACTER
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto pb-20">
          <div className="px-4 pt-4 space-y-4">
            {/* Mobile Immobilier */}
            <div className="space-y-2">
              <p className="text-[#1d70b8] font-black text-xs uppercase tracking-widest px-3">
                Immobilier
              </p>
              {immobiliserItems.map((item, index) => (
                <a
                  key={`mobile-immo-${index}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-gray-600 border-l-2 border-transparent hover:border-[#1d70b8] hover:bg-blue-50 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Véhicules */}
            <div className="space-y-2 pt-4">
              <p className="text-[#ef811d] font-black text-xs uppercase tracking-widest px-3">
                Véhicules
              </p>
              {vehiculeItems.map((item, index) => (
                <a
                  key={`mobile-auto-${index}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-2 text-gray-600 border-l-2 border-transparent hover:border-[#ef811d] hover:bg-orange-50 transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#1d70b8] text-white text-center py-4 rounded font-bold mt-8"
            >
              CONTACTEZ-NOUS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
