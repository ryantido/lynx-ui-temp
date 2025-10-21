import {
  BotMessageSquare,
  CalendarSync,
  Clock,
  Laugh,
  ShieldCheck,
  TrendingUp,
  TrendingUpDown,
  UserRoundCheck,
} from "lucide-react";

export const FEATURES = [
  {
    icon: BotMessageSquare,
    title: "Chatbot WhatsApp IA",
    description:
      "Automatisez vos conversations clients 24/7 avec des réponses personnalisées et intelligentes.",
    color: "#6C4DF5",
  },
  {
    icon: TrendingUpDown,
    title: "Facturation Automatique",
    description:
      "Générez et envoyez vos factures automatiquement. Suivi en temps réel de vos paiements.",
    color: "#2DD4BF",
  },
  {
    icon: CalendarSync,
    title: "Automatisation Complète",
    description:
      "Connectez vos outils existants et automatisez vos flux de travail en quelques clics.",
    color: "#F59E0B",
  },
  {
    icon: Clock,
    title: "Déploiement Rapide",
    description:
      "Mise en production en 4 semaines. Formation incluse et support continu.",
    color: "#16A34A",
  },
] as const;

export const CASE_STUDIES = [
  {
    image:
      "https://images.unsplash.com/photo-1741992556911-f04553890e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGN1c3RvbWVyc3xlbnwxfHx8fDE3NjA5Njg5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    company: "RetailPro",
    metric: "Réduction des délais de réponse",
    metricValue: "-67%",
    description:
      "Automatisation complète du service client avec chatbot WhatsApp et facturation intelligente.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzYwOTQ2NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    company: "LogisticFlow",
    metric: "Augmentation de la trésorerie",
    metricValue: "+42%",
    description:
      "Optimisation des processus de facturation et recouvrement automatisé des paiements.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwOTUwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    company: "ServiceHub",
    metric: "Temps gagné par semaine",
    metricValue: "25h",
    description:
      "Automatisation des tâches répétitives et centralisation des données dans un dashboard unique.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Audit & Analyse",
    description:
      "Nous analysons vos besoins et identifions les opportunités d'automatisation.",
  },
  {
    number: "02",
    title: "Configuration",
    description:
      "Paramétrage de votre chatbot, workflows et intégrations avec vos outils.",
  },
  {
    number: "03",
    title: "Tests & Formation",
    description:
      "Tests complets et formation de vos équipes à la nouvelle solution.",
  },
  {
    number: "04",
    title: "Déploiement",
    description:
      "Mise en production et accompagnement continu pour optimiser les résultats.",
  },
] as const;

export const STATS = [
  { value: "4", label: "semaines", suffix: "" },
  { value: "98", label: "satisfaction", suffix: "%" },
  { value: "50", label: "clients", suffix: "+" },
] as const;

export const TRUST_INDICATORS = [
  { icon: UserRoundCheck, label: "Support dédié", value: "24/7" },
  { icon: TrendingUp, label: "ROI moyen", value: "3 mois" },
  { icon: ShieldCheck, label: "Données sécurisées", value: "RGPD" },
  { icon: Laugh, label: "Satisfaction", value: "98%" },
] as const;
