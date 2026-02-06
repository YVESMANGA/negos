// Données Immobilières
export const immoData = [
  {
    id: 1,
    slug: "appartement-de-luxe-plateau",
    title: "Appartement de Luxe - Plateau",
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
    location: "Wolf cite Alioune sow",
    description:
      "illa  a louer avec toute les meubles. R+2 sur 450 m2 Zone résidentiel Sécurité H24 Dont 5chambres +SDB 3 salons 1 bureau 1 toilette 3 cuisines Americaine 1 cuisine Africaine Piscine Garage pour 4 véhicules Loyer du mois a 6 millions Avec des papiers justificatifs.",
    area: "450m²",
    rooms: 14,
    media: {
      images: ["/i4.png"],
      videos: ["/videov2.mp4", "/videov21.mp4", "/videov22.mp4"],
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
];
