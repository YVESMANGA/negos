// Données Immobilières
export const immoData = [
  {
    id: 1,
    slug: "appartement-de-luxe-plateau",
    title: " Immeuble R+3",
    price: "297 000 000 FCFA",
    type: "Vente",
    location: "Wolf cite Alioune sow", // Ajout de la localisation
    description:
      "4: grands appartements : dans chaque appartement ya deux chambres salons, cuisine et 3 salles de bain 4 : petits appartements : dans chaque appartements une chambre, salon et cuisine et salle de bain", // Ajout de la description
    area: "",
    rooms: 8,
    media: {
      images: ["/i1.jpeg", "/i2.jpeg", "/i3.jpeg"],
      videos: [],
    },
  },
  {
    id: 2,
    slug: "villa-moderne-almadies",
    title: "Villa Moderne - Almadies",
    price: "6 000 000 FCFA",
    type: "Location",
    location: "Almadies",
    description:
      "Villa  a louer avec toute les meubles. R+2 sur 450 m2 Zone résidentiel Sécurité H24 Dont 5chambres +SDB 3 salons 1 bureau 1 toilette 3 cuisines Americaine 1 cuisine Africaine Piscine Garage pour 4 véhicules Loyer du mois a 6 millions Avec des papiers justificatifs.",
    area: "450m²",
    rooms: 14,
    media: {
      images: ["/i4.png"],
      videos: ["/videov2.mp4", "/videov21.mp4", "/videov22.mp4"],
    },
  },

  {
    id: 3,
    slug: "appartement-f4",
    title: "Appartement f4 - Corniche des mamelles",
    price: "800.000 FCFA",
    type: "Location",
    location: "Corniche des mamelles",
    description: "Appartement f4 Au 3eme étage Avec ascenceur ",
    area: "",

    media: {
      images: ["/ic.jpeg", "/ic2.jpeg", "/ic3.jpeg", "/ic4.jpeg", "/ic5.jpeg"],
      videos: [],
    },
  },
  {
    id: 4,
    slug: "immeuble-studio",
    title: "Immeuble Studio 55.000 FCFA la nuitee",
    price: "55.000 FCFA",
    type: "Location",
    location: "Corniche des mamelles",
    description: "Immeuble studio 55.000 FCFA la nuitee",
    area: "",

    media: {
      images: ["/i5.jpeg", "/i6.jpeg", "/i7.jpeg"],
      videos: ["/video3.mp4"],
    },
  },
  {
    id: 5,
    slug: "immeuble-studio",
    title: "Immeuble Studio ",
    price: "250.000.000 FCFA",
    type: "Vente",
    location: "Corniche des mamelles",
    description: "Immeuble studio",
    area: "",

    media: {
      images: ["/i5.jpeg", "/i6.jpeg", "/i7.jpeg"],
      videos: ["/video3.mp4"],
    },
  },
];

// Données Automobiles
export const autoData = [
  {
    id: 1,
    slug: "hyundai-sonata-2024",
    title: "Hyundai Sonata 2024",
    price: "10 000 000 FCFA",
    type: "Vente",
    description: "",
    fuel: "Diesel",
    km: "12 000 km",
    media: {
      images: ["/v1.jpeg", "/v2.jpeg", "/v3.jpeg"],
      videos: "/videov1.mp4",
    },
  },
  {
    id: 2,
    slug: "hyundai-palissade-2020",
    title: "Hyundai Palissade 2020",
    price: "18 500 000 FCFA",
    type: "Vente",
    description:
      "AUTOMATIQUE ESSENCE INTERIEUR TISSU GRAND ECRAN CAMÉRA ET RADAR DE RECUL 8 PLACES CYLINDRES CLIMATISATION BIZONE FULL OPTIONS DEJA DÉDOUANÉ *KILOMETRAGE:120.000 miles",
    fuel: "Diesel",
    km: "12 000 km",
    media: {
      images: ["/hp.jpeg", "/hp2.jpeg", "/hp3.jpeg", "/hp4.jpeg", "/hp5.jpeg"],
      videos: [],
    },
  },
];
