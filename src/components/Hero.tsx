'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2, Car, Gavel, ShieldCheck } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: 'blue' | 'orange';
  icon: React.ReactNode;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "L'excellence en Immobilier",
    subtitle: "Gérance • Location • Vente",
    description: "Confiez la gestion de vos biens à un expert international. Nous valorisons votre patrimoine immobilier avec rigueur.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    color: 'blue',
    icon: <Building2 size={24} />
  },
  {
    id: 2,
    title: "Solutions Véhicules",
    subtitle: "Location • Vente",
    description: "Une flotte de véhicules de prestige et utilitaires adaptée à tous vos besoins de mobilité, à court ou long terme.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
    color: 'orange',
    icon: <Car size={24} />
  },
  {
    id: 3,
    title: "Conseils & Services",
    subtitle: "Accompagnement Stratégique",
    description: "Bénéficiez de notre expertise pour sécuriser vos transactions et optimiser vos investissements internationaux.",
    image: "https://images.unsplash.com/photo-1454165833767-027eeef1596e?auto=format&fit=crop&q=80",
    color: 'blue',
    icon: <Gavel size={24} />
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-black ">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image de fond avec filtre sombre */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          {/* Contenu Texte */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
              <div className={`max-w-2xl transition-all duration-700 transform ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm mb-6 border border-white/20">
                  <span className={slide.color === 'blue' ? 'text-[#1d70b8]' : 'text-[#ef811d]'}>
                    {slide.icon}
                  </span>
                  <span className="font-bold tracking-widest uppercase text-[10px]">{slide.subtitle}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {word === 'Immobilier' || word === 'Véhicules' || word === 'Conseils' ? (
                        <span className={slide.color === 'blue' ? 'text-[#1d70b8]' : 'text-[#ef811d]'}> {word}</span>
                      ) : ` ${word}`}
                    </span>
                  ))}
                </h1>

                <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className={`px-8 py-4 rounded font-bold text-white transition transform hover:scale-105 ${
                    slide.color === 'blue' ? 'bg-[#1d70b8] hover:bg-[#165a94]' : 'bg-[#ef811d] hover:bg-[#d4721a]'
                  }`}>
                    DÉCOUVRIR NOS SERVICES
                  </button>
                  <button className="px-8 py-4 rounded font-bold text-white border-2 border-white/30 hover:bg-white/10 transition">
                    NOUS CONTACTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation - Flèches */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-white/20 transition backdrop-blur-sm"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-white/20 transition backdrop-blur-sm"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicateurs (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              current === index ? 'w-12 bg-white' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Barre de progression en bas */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full z-30">
        <div 
          className="h-full bg-[#ef811d] transition-all duration-[6000ms] linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;