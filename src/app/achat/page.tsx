'use client'
import React from 'react';
import { Search, ShieldCheck, Handshake, Gavel, FileSearch, Compass, ArrowRight, Lightbulb } from 'lucide-react';

const AchatPage = () => {
  const etapesAchat = [
    {
      step: "01",
      title: "Définition du besoin",
      desc: "Analyse de votre budget, de la zone géographique et de vos objectifs (résidentiel ou investissement).",
      icon: <Compass className="text-[#1d70b8]" />
    },
    {
      step: "02",
      title: "Chasse Immobilière",
      desc: "Accès à notre réseau 'Off-Market' pour trouver des pépites avant qu'elles ne soient publiques.",
      icon: <Search className="text-[#ef811d]" />
    },
    {
      step: "03",
      title: "Audit & Vérification",
      desc: "Contrôle scrupuleux des titres fonciers (NICAD, TF) pour un achat sans risque juridique.",
      icon: <FileSearch className="text-[#1d70b8]" />
    },
    {
      step: "04",
      title: "Négociation & Signature",
      desc: "Optimisation du prix d'achat et accompagnement chez le notaire jusqu'à la remise des clés.",
      icon: <Handshake className="text-[#ef811d]" />
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* 1. Hero : Le Chasseur Immobilier */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Achetez en toute <span className="text-[#1d70b8]">sérénité</span>, nous cherchons pour vous.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Vous n'êtes pas sur place ou vous manquez de temps ? **NEGOS INTERNATIONAL** agit comme votre représentant exclusif pour sécuriser votre futur patrimoine immobilier au Sénégal.
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-[#ef811d] flex items-start gap-4 mb-8">
              <Lightbulb className="text-[#ef811d] shrink-0" size={24} />
              <p className="text-sm text-gray-500 italic">
                "Notre mission : Vous éviter les pièges fonciers et vous garantir le meilleur prix du marché."
              </p>
            </div>
            <button className="bg-[#1d70b8] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg flex items-center gap-2">
              DÉMARRER MA RECHERCHE <ArrowRight size={20} />
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80" 
              className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover" 
              alt="Accompagnement Achat" 
            />
            <div className="absolute -bottom-6 -left-6 bg-[#ef811d] p-8 rounded-3xl text-white shadow-xl hidden md:block">
              <p className="text-4xl font-black mb-1">0%</p>
              <p className="text-xs font-bold uppercase tracking-widest">Litiges Fonciers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Processus d'Achat (Timeline) */}
      <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#1d70b8] font-bold uppercase tracking-widest text-sm mb-4">Notre Méthodologie</h2>
          <h3 className="text-3xl font-black text-gray-900">Le parcours d'un achat réussi</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapesAchat.map((item, index) => (
            <div key={index} className="relative p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow group">
              <span className="absolute -top-4 -right-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-lg group-hover:bg-[#ef811d] transition-colors">
                {item.step}
              </span>
              <div className="mb-6 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section Confiance & Notaire */}
      <section className="bg-gray-900 py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="w-20 h-20 bg-[#1d70b8] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
              <Gavel size={40} />
            </div>
            <h2 className="text-3xl font-black mb-4">Sécurité Juridique</h2>
            <p className="text-gray-400">
              Chaque transaction est supervisée par nos conseils juridiques et finalisée devant notaire pour garantir la pleine propriété.
            </p>
          </div>
          <div className="lg:w-2/3 bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Souhaitez-vous acquérir un bien ?</h3>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <input type="text" placeholder="Type de bien (Terrain, Villa...)" className="w-full p-4 rounded-xl bg-white/10 border-none outline-none focus:ring-2 focus:ring-[#ef811d]" />
                <input type="text" placeholder="Budget estimé" className="w-full p-4 rounded-xl bg-white/10 border-none outline-none focus:ring-2 focus:ring-[#ef811d]" />
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Zone géographique" className="w-full p-4 rounded-xl bg-white/10 border-none outline-none focus:ring-2 focus:ring-[#ef811d]" />
                <button className="w-full h-full bg-[#ef811d] text-white py-4 rounded-xl font-bold uppercase hover:bg-orange-600 transition shadow-lg shadow-orange-900/20">
                  Lancer mon projet
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Pourquoi acheter avec Negos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80" 
              className="rounded-3xl shadow-xl" 
              alt="Property" 
            />
          </div>
          <div>
            <h2 className="text-[#ef811d] font-bold text-sm uppercase tracking-widest mb-4">Votre allié stratégique</h2>
            <h3 className="text-4xl font-black text-gray-900 mb-8">L'expertise d'un réseau international à votre service.</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-[#1d70b8] shrink-0" size={28} />
                <p className="text-gray-600 font-medium">Expertise approfondie des documents cadastraux et administratifs.</p>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="text-[#1d70b8] shrink-0" size={28} />
                <p className="text-gray-600 font-medium">Négociation directe avec les propriétaires pour un prix juste.</p>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="text-[#1d70b8] shrink-0" size={28} />
                <p className="text-gray-600 font-medium">Accompagnement financier et mise en relation avec nos partenaires bancaires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchatPage;