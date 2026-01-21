'use client'
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Header Section */}
      <section className="bg-[#1d70b8] py-20 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">CONTACTEZ-<span className="text-[#ef811d]">NOUS</span></h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Une question sur un bien immobilier ou un véhicule ? Notre équipe d'experts est à votre écoute pour vous accompagner dans tous vos projets.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Informations de contact (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Nos Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#1d70b8]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Téléphone</p>
                    <p className="text-gray-900 font-bold">+221 77 609 91 80</p>
                    <p className="text-gray-500 text-sm">+221 77 609 91 80 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-[#ef811d]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                    <p className="text-gray-900 font-bold">contact@negos-int.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#1d70b8]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Adresse</p>
                    <p className="text-gray-900 font-bold">Avenue Cheikh Anta Diop</p>
                    <p className="text-gray-500 text-sm">Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Horaires d'ouverture</p>
                    <p className="text-gray-900 font-bold">Lun - Ven : 08h30 - 18h00</p>
                    <p className="text-gray-500 text-sm">Samedi : 09h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-900 mb-4">Suivez-nous</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ef811d] transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ef811d] transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ef811d] transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-[#ef811d]" size={28} />
                <h3 className="text-2xl font-black text-gray-900">Envoyez-nous un message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Nom Complet</label>
                    <input type="text" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition" placeholder="Ex: Moussa Diop" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email</label>
                    <input type="email" className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition" placeholder="m.diop@exemple.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Sujet de votre demande</label>
                  <select className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition font-medium text-gray-700">
                    <option>Gérance Immobilière</option>
                    <option>Location de Véhicule</option>
                    <option>Achat / Vente Immobilier</option>
                    <option>Service de Conciergerie</option>
                    <option>Autre demande</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Votre Message</label>
                  <textarea rows={5} className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                <button className="w-full bg-[#ef811d] text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-100 hover:bg-[#d4721a] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  Envoyer ma demande <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Map Section (Intégration fictive Google Maps) */}
      <section className="h-[450px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.387293582!2d-17.4676861!3d14.693425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzM2LjMiTiAxN8KwMjgnMDMuNyJX!5e0!3m2!1sfr!2ssn!4v1625000000000!5m2!1sfr!2ssn" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy"
        ></iframe>
        <div className="absolute top-10 left-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
          <p className="font-black text-[#1d70b8]">NOS BUREAUX</p>
          <p className="text-sm text-gray-500">Dakar, Avenue Cheikh Anta Diop</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;