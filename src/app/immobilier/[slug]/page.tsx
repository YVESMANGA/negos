import { immoData } from "@/data/data";
import { notFound } from "next/navigation";
import {
  Home,
  BedDouble,
  ChevronLeft,
  Info,
  MapPin,
  FileText,
  Play,
} from "lucide-react";
import Link from "next/link";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // On déballe params pour Next.js 15
  const { slug } = await params;

  // Récupération du bien immobilier
  const property = immoData.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  // Préparation du message WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé par le bien immobilier : ${property.title}`
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Barre de navigation */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/location-immo"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1d70b8] transition-colors font-semibold"
          >
            <ChevronLeft size={20} /> Retour au catalogue
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* COLONNE GAUCHE : Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galerie d'images */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-4 h-[450px] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src={
                    property.media.images[0].startsWith("http")
                      ? property.media.images[0]
                      : `${property.media.images[0]}`
                  }
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {property.media.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="h-32 rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={img.startsWith("http") ? img : `${img}`}
                    alt=""
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Section Description */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <FileText size={22} className="text-[#1d70b8]" /> Description du
                bien
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description ||
                  "Aucune description détaillée n'est disponible."}
              </p>
            </div>

            {/* Fiche Technique */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info size={22} className="text-[#ef811d]" /> Caractéristiques
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-sm">Surface</span>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <Home size={20} className="text-[#1d70b8]" />{" "}
                    {property.area}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-sm">Chambres</span>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <BedDouble size={20} className="text-[#1d70b8]" />{" "}
                    {property.rooms} Ch.
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-sm">Type d'offre</span>
                  <div className="flex items-center gap-2 font-bold text-gray-800 uppercase text-xs">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        property.type === "Vente"
                          ? "bg-[#ef811d]"
                          : "bg-[#1d70b8]"
                      }`}
                    />
                    {property.type}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION VIDÉOS (GRILLE DE 5 VIDÉOS) */}
            {property.media.videos && property.media.videos.length > 0 && (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <Play size={22} className="text-[#ef811d]" /> Visites Vidéos (
                  {property.media.videos.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.media.videos.map((videoUrl, index) => (
                    <div key={index} className="space-y-2">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                        <video controls className="w-full h-full object-cover">
                          <source src={videoUrl} type="video/mp4" />
                          Votre navigateur ne supporte pas la lecture.
                        </video>
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase px-2 tracking-widest">
                        Aperçu Vidéo #0{index + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* COLONNE DROITE : Sidebar fixe */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <h1 className="text-2xl font-black text-gray-900 leading-tight">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-gray-500 mt-2 font-semibold">
                <MapPin size={18} className="text-[#1d70b8]" />
                {property.location || "Dakar, Sénégal"}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-400 uppercase font-bold tracking-wider">
                  Prix de l'offre
                </p>
                <p className="text-3xl font-black text-[#1d70b8] mt-1">
                  {property.price}
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <a
                  href="tel:+221778886146"
                  className="w-full py-4 bg-[#1d70b8] text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  Appeler l'agent
                </a>

                <a
                  href={`https://wa.me/221778886146?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border-2 border-green-500 text-green-600 rounded-2xl font-bold hover:bg-green-50 transition-all flex items-center justify-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
