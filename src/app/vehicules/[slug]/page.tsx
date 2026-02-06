import { autoData } from "@/data/data";
import { notFound } from "next/navigation";
import {
  Fuel,
  Gauge,
  ChevronLeft,
  Share2,
  Info,
  Play,
  ShieldCheck,
  MapPin,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default async function VehicleDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Récupération du véhicule via le slug
  const vehicle = autoData.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  // Préparation du message WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Bonjour, je suis intéressé par le véhicule : ${vehicle.title}`
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Barre de navigation */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/vente-auto"
            className="flex items-center gap-2 text-gray-600 hover:text-[#ef811d] transition-colors font-semibold"
          >
            <ChevronLeft size={20} /> Retour
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Galerie d'images */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-4 h-[450px] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src={
                    vehicle.media.images[0].startsWith("http")
                      ? vehicle.media.images[0]
                      : `${vehicle.media.images[0]}`
                  }
                  alt={vehicle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {vehicle.media.images.slice(1).map((img, idx) => (
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
                <FileText size={22} className="text-[#1d70b8]" /> Présentation
                du véhicule
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {vehicle.description ||
                  "Aucune description détaillée n'est disponible pour ce véhicule actuellement."}
              </p>
            </div>

            {/* Fiche Technique */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info size={22} className="text-[#1d70b8]" /> Détails Techniques
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-sm">Kilométrage</span>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <Gauge size={20} className="text-[#ef811d]" /> {vehicle.km}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-sm">Carburant</span>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                    <Fuel size={20} className="text-[#ef811d]" /> {vehicle.fuel}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-sm">Garantie</span>
                  <div className="flex items-center gap-2 font-bold text-green-600 uppercase text-xs">
                    <ShieldCheck size={20} /> Expertise incluse
                  </div>
                </div>
              </div>
            </div>

            {/* Vidéo */}
            {vehicle.media.videos && (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Play size={20} className="text-[#ef811d]" /> Vidéo de
                  démonstration
                </h2>
                <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                  <video controls className="w-full h-full">
                    <source src={vehicle.media.videos} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <span
                className={`px-3 py-1 rounded-md text-xs font-bold uppercase text-white ${
                  vehicle.type === "Vente" ? "bg-[#ef811d]" : "bg-[#1d70b8]"
                }`}
              >
                {vehicle.type === "Vente" ? "À Vendre" : "En Location"}
              </span>

              <h1 className="text-2xl font-black text-gray-900 mt-4 leading-tight">
                {vehicle.title}
              </h1>

              {/* Localisation */}
              <div className="flex items-center gap-2 text-gray-500 mt-2 font-medium">
                <MapPin size={18} className="text-[#1d70b8]" />
                Dakar, Sénégal
              </div>

              <p className="text-3xl font-black text-[#ef811d] mt-6">
                {vehicle.price}
              </p>

              <div className="space-y-4 mt-8">
                {/* Bouton Appel Direct */}
                <a
                  href="tel:+221778886146"
                  className="w-full py-4 bg-[#1d70b8] text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                >
                  Contacter l'agent
                </a>

                {/* Bouton WhatsApp */}
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
                  Contacter par WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
