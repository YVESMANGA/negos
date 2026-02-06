'use client'
import React from 'react';
import { 
  Handshake, 
  Lightbulb, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Scale, 
  Globe, 
  FileText,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const expertises = [
    {
      title: "Conseil Juridique & Fiscal",
      desc: "Accompagnement dans la sécurisation de vos actes, vérification des titres fonciers et optimisation de votre patrimoine.",
      icon: <Scale className="text-[#1d70b8]" size={32} />,
      category: "Immobilier"
    },
    {
      title: "Gestion de Maintenance",
      desc: "Suivi technique de vos parcs immobiliers et automobiles. Coordination des interventions d'urgence 24h/24.",
      icon: <Wrench className="text-[#ef811d]" size={32} />,
      category: "Technique"
    },
    {
      title: "Conciergerie Privée",
      desc: "Accueil VIP, gestion des formalités administratives et logistique personnalisée pour la diaspora et les expatriés.",
      icon: <Globe className="text-[#1d70b8]" size={32} />,
      category: "Logistique"
    },
    {
      title: "Audit de Patrimoine",
      desc: "Évaluation précise de la valeur de vos actifs (biens et véhicules) pour une stratégie de vente ou de gérance optimale.",
      icon: <FileText className="text-[#ef811d]" size={32} />,
      category: "Stratégie"
    }
  ];

  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Section - L'Esprit de Service */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#1d70b8] text-xs font-bold uppercase tracking-widest mb-6">
            <Handshake size={16} /> Bienvenue chez NEGOS INTERNATIONAL
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Plus qu'une agence, un <br/>
            <span className="text-[#ef811d]">Partenaire Stratégique</span>.
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Nous avons structuré nos services pour répondre à une exigence simple : offrir une tranquillité d'esprit totale à nos clients, qu'ils soient au Sénégal ou à l'étranger.
          </p>
        </div>
      </section>

      {/* 2. Grille des Services */}
      <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {expertises.map((item, index) => (
            <div key={index} className="flex gap-6 p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-50 transition-all group">
              <div className="shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-[#1d70b8] hover:text-[#ef811d] transition-colors">
                  En savoir plus <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section Réactivité (24/7) */}
      <section className="bg-[#1d70b8] py-20 relative overflow-hidden">
        {/* Cercles décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-6 text-[#ef811d]">
                <Clock size={32} />
                <span className="text-xl font-black uppercase tracking-tighter">Service d'Assistance 24/7</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Un problème ? Nous intervenons immédiatement.</h2>
              <p className="text-gray-600 leading-relaxed">
                Que ce soit pour une panne technique dans un appartement en gérance ou une assistance sur un véhicule en location, notre équipe dédiée est mobilisable à tout moment pour garantir la continuité de votre confort.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-4 w-full">
              <a href="tel:+221778886146" className="w-full bg-[#1d70b8] text-white text-center py-5 rounded-2xl font-black text-lg shadow-lg hover:scale-105 transition">
              +221 77 888 61 46
              </a>
              <a href="tel:+221775735791" className="w-full bg-[#1d70b8] text-white text-center py-5 rounded-2xl font-black text-lg shadow-lg hover:scale-105 transition">
              +221 77 573 57 91
              </a>

              <a href="tel:+221779448424" className="w-full bg-[#1d70b8] text-white text-center py-5 rounded-2xl font-black text-lg shadow-lg hover:scale-105 transition">
              +221 77 944 84 24</a>
              <p className="text-center text-xs text-gray-400 font-bold uppercase">Ligne d'urgence prioritaire</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pourquoi "Conseils" ? */}
      <section className="py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#ef811d]/10 rounded-[3rem] -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              alt="Team Negos" 
              className="relative rounded-[3rem] shadow-xl w-full h-[450px] object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="text-[#ef811d]" />
              <h2 className="text-[#1d70b8] font-bold text-sm uppercase tracking-widest">L'Intelligence Immobilière</h2>
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
              Prendre les bonnes décisions avec <span className="text-[#ef811d]">NEGOS</span>.
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Le marché sénégalais possède ses propres codes. Notre expertise de terrain combinée à notre vision internationale nous permet de vous conseiller sur :
            </p>
            <ul className="space-y-4">
              {[
                "Le rendement locatif par zone (Dakar, Diamniadio, Saly).",
                "Les meilleures périodes pour l'achat ou la revente.",
                "Le choix des véhicules selon l'usage (urbain ou hors piste).",
                "La valorisation de vos actifs sur le long terme."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-bold">
                  <ShieldCheck className="text-[#ef811d] mt-1 shrink-0" size={20} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;