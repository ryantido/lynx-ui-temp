import { Handshake, Heart, Lightbulb, PackageSearch } from "lucide-react";

export const VALUES = [
  {
    icon: PackageSearch,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque projet, avec des solutions sur-mesure et performantes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "À la pointe de la technologie IA pour vous offrir les meilleures solutions d'automatisation.",
  },
  {
    icon: Handshake,
    title: "Proximité",
    description:
      "Un accompagnement personnalisé à chaque étape, de l'audit au déploiement.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description:
      "Nous nous engageons sur vos résultats avec des KPIs mesurables et un ROI garanti.",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Ryan Tido",
    role: "CEO & Co-fondatrice",
    expertise: "IA & Stratégie",
  },
  {
    name: "Ficheu Josnel",
    role: "CTO & Co-fondateur",
    expertise: "Développement & Architecture",
  },
  {
    name: "Joyce Emma",
    role: "Head of Customer Success",
    expertise: "Accompagnement Client",
  },
  {
    name: "M. Robine",
    role: "Lead AI Engineer",
    expertise: "Machine Learning & NLP",
  },
] as const;

export const MILESTONES = [
  {
    year: "2022",
    event: "Création de Lynx AI",
    description:
      "Lancement de la startup avec pour mission de démocratiser l'IA pour les PME",
  },
  {
    year: "2023",
    event: "50+ clients accompagnés",
    description:
      "Déploiement réussi de solutions d'automatisation dans divers secteurs",
  },
  {
    year: "2024",
    event: "Levée de fonds",
    description:
      "Série A pour accélérer le développement produit et l'expansion",
  },
  {
    year: "2025",
    event: "Expansion européenne",
    description: "Ouverture de bureaux à Londres et Berlin",
  },
] as const;

export const MISSION = [
  "Déploiement en 4 semaines maximum",
  "Solutions sur-mesure adaptées à vos besoins",
  "Formation et accompagnement continu",
  "ROI mesurable dès les premiers mois",
] as const;

export const STATS = [
  { value: "98%", label: "Satisfaction client" },
  { value: "4", label: "Semaines de déploiement" },
  { value: "50+", label: "Clients accompagnés" },
  { value: "3 mois", label: "ROI moyen" },
] as const;
