"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Header Section */}
      <section className="bg-[#1d70b8] py-20 px-4 text-white text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            CONTACTEZ-<span className="text-[#ef811d]">NOUS</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Une question sur un bien immobilier ou un véhicule ? Notre équipe
            d'experts est à votre écoute pour vous accompagner dans tous vos
            projets.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Nos Coordonnées
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#1d70b8]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Téléphone
                    </p>
                    <p className="text-gray-900 font-bold">+221 77 888 61 46</p>
                    <p className="text-gray-900 font-bold">+221 77 573 57 91</p>
                    <p className="text-gray-900 font-bold">+221 77 944 84 24</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-[#ef811d]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-gray-900 font-bold">
                      pamenegos@gmail.com
                    </p>
                    <p className="text-gray-900 font-bold">
                      infosnegos@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#1d70b8]" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Adresse
                    </p>
                    <p className="text-gray-900 font-bold">
                      Ouakam cite mbackiyou faye
                    </p>
                    <p className="text-gray-500 text-sm">Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-gray-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Horaires d'ouverture
                    </p>
                    <p className="text-gray-900 font-bold">
                      Lun - Ven : 08h30 - 18h00
                    </p>
                    <p className="text-gray-500 text-sm">
                      Samedi : 09h00 - 13h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-900 mb-4">
                Suivez-nous
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Pame-Njie/pfbid0ABTLTFNWVFzSbThbB8d1cJT19143hvRjzKzHGGS7zFRr6HbbZ8uK8pT5N518nVb8l/"
                  className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ef811d] transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/negosinternational5/"
                  className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ef811d] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@pame.njie"
                  className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#ef811d] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20" // Utilisez width au lieu de size
                    height="20" // Utilisez height au lieu de size
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-[#ef811d]" size={28} />
                <h3 className="text-2xl font-black text-gray-900">
                  Envoyez-nous un message
                </h3>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition"
                      placeholder="Ex: Moussa Diop"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition"
                      placeholder="m.diop@exemple.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Sujet de votre demande
                  </label>
                  <select className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition font-medium text-gray-700">
                    <option>Gérance Immobilière</option>
                    <option>Location de Véhicule</option>
                    <option>Achat / Vente Immobilier</option>
                    <option>Service de Conciergerie</option>
                    <option>Autre demande</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Votre Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full p-4 rounded-xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#1d70b8] transition"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
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
          src="https://www.google.com/maps/embed?pb=!4v1770024106877!6m8!1m7!1s4_Rro0NK62kz14yFvNLQRA!2m2!1d14.73702864334058!2d-17.4956464314743!3f74.68911610359584!4f-18.329765202959308!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-10 left-10 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
          <p className="font-black text-[#1d70b8]">NOS BUREAUX</p>
          <p className="text-sm text-gray-500">Ouakam cite mbackiyou faye</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
