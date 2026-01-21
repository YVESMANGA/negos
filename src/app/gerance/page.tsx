'use client'
import React from 'react';
import { ShieldCheck, BarChart3, Users, Wrench, FileText, ClipboardCheck, PhoneCall, ArrowRight } from 'lucide-react';

const GerancePage = () => {
  const pointsForts = [
    {
      title: "Gestion Administrative",
      desc: "Rédaction des baux, état des lieux rigoureux et gestion des renouvellements.",
      icon: <FileText className="text-[#1d70b8]" size={30} />
    },
    {
      title: "Gestion Financière",
      desc: "Encaissement des loyers, révision annuelle et virement rapide sur votre compte.",
      icon: <BarChart3 className="text-[#ef811d]" size={30} />
    },
    {
      title: "Maintenance Technique",
      desc: "Suivi des travaux et entretien régulier avec nos partenaires certifiés.",
      icon: <Wrench className="text-[#1d70b8]" size={30} />
    },
    {
      title: "Sélection Locataire",
      desc: "Analyse approfondie de la solvabilité pour garantir vos revenus.",
      icon: <Users className="text-[#ef811d]" size={30} />
    }
  ];

  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Gérance */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Business management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="bg-[#1d70b8] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block">
              Expertise Gérance
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Libérez-vous des contraintes de la <span className="text-[#ef811d]">Gestion Locative</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              NEGOS INTERNATIONAL devient votre interlocuteur unique. Nous valorisons votre patrimoine et sécurisons vos revenus immobiliers avec une rigueur professionnelle.
            </p>
            <button className="bg-[#ef811d] text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition flex items-center gap-3">
              CONFIER MON BIEN <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Les Engagements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1d70b8] font-bold uppercase tracking-widest text-sm mb-4">Notre valeur ajoutée</h2>
            <p className="text-3xl font-black text-gray-900">Pourquoi nous confier votre mandat ?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pointsForts.map((item, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-gray-100">
                <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section Chiffrée & Assurance */}
      <section className="bg-[#1d70b8] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center text-white">
          <div>
            <h2 className="text-3xl font-black mb-6">Un suivi en temps réel et une transparence totale</h2>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Nous envoyons des rapports mensuels détaillés et nous assurons une veille juridique constante pour que votre bien soit toujours en conformité avec les réglementations en vigueur.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-4xl font-black text-[#ef811d]">98%</p>
                <p className="text-xs text-blue-200 uppercase font-bold tracking-tighter">Taux d'occupation</p>
              </div>
              <div className="h-12 w-[1px] bg-blue-400"></div>
              <div>
                <p className="text-4xl font-black text-[#ef811d]">0</p>
                <p className="text-xs text-blue-200 uppercase font-bold tracking-tighter">Impayés gérés</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-xl">
                <ClipboardCheck className="text-[#1d70b8]" size={30} />
              </div>
              <h3 className="text-xl font-bold uppercase">Audit Gratuit</h3>
            </div>
            <p className="text-blue-50 text-sm mb-6">Nous analysons votre bien et vous proposons une estimation de loyer optimisée gratuitement.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Votre nom" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#ef811d]" />
              <input type="email" placeholder="Votre email" className="w-full p-3 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-[#ef811d]" />
              <button className="w-full bg-white text-[#1d70b8] font-black py-3 rounded-lg hover:bg-gray-100 transition uppercase text-sm tracking-widest">
                Demander une étude
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. CTA Final */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <PhoneCall className="text-[#ef811d]" size={32} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Parlons de votre projet</h2>
          <p className="text-gray-500 mb-8">Nos experts sont à votre disposition pour vous conseiller sur la meilleure stratégie de gérance pour votre bien.</p>
          <a href="tel:+221330000000" className="text-2xl font-black text-[#1d70b8] hover:text-[#ef811d] transition">
          +221 77 609 91 80
          </a>
        </div>
      </section>
    </div>
  );
};

export default GerancePage;