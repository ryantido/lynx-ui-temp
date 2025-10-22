import { Bot, ChartLine, TicketCheck, Workflow } from "lucide-react";

export const MAIN_SERVICES = [
  {
    icon: Bot,
    title: "Chatbot WhatsApp IA",
    description:
      "Automatisez vos conversations clients 24/7 avec notre chatbot intelligent.",
    features: [
      "Réponses instantanées et personnalisées",
      "Gestion des FAQ et support client",
      "Transfert automatique vers un humain si nécessaire",
      "Intégration avec votre CRM",
      "Analytics et rapports détaillés",
    ],
    pricing: "À partir de 15000 XAF/mois",
  },
  {
    icon: TicketCheck,
    title: "Facturation Automatique",
    description: "Générez, envoyez et suivez vos factures automatiquement.",
    features: [
      "Création automatique des factures",
      "Envoi programmé par email et WhatsApp",
      "Relances automatiques de paiement",
      "Suivi en temps réel des règlements",
      "Export comptable simplifié",
    ],
    pricing: "À partir de 25000 XAF/mois",
  },
  {
    icon: ChartLine,
    title: "Reporting & Analytics",
    description: "Visualisez vos KPIs et pilotez votre activité en temps réel.",
    features: [
      "Dashboard personnalisable",
      "Indicateurs clés de performance",
      "Rapports automatisés par email",
      "Prévisions et tendances",
      "Export multi-formats (PDF, Excel)",
    ],
    pricing: "À partir de 35000 XAF/mois",
  },
  {
    icon: Workflow,
    title: "Automatisation sur-mesure",
    description:
      "Workflows personnalisés pour vos processus métiers spécifiques.",
    features: [
      "Analyse de vos besoins spécifiques",
      "Conception de workflows sur-mesure",
      "Intégration avec vos outils existants",
      "Formation de vos équipes",
      "Support prioritaire",
    ],
    pricing: "Sur devis",
  },
] as const;

export const PACKAGES = [
  {
    name: "Starter",
    price: "499",
    period: "/mois",
    description: "Idéal pour démarrer l'automatisation",
    features: [
      "Chatbot WhatsApp de base",
      "Jusqu'à 1000 conversations/mois",
      "Facturation automatique (50 factures/mois)",
      "Dashboard simple",
      "Support email",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "999",
    period: "/mois",
    description: "Pour les entreprises en croissance",
    features: [
      "Chatbot WhatsApp avancé",
      "Conversations illimitées",
      "Facturation automatique (200 factures/mois)",
      "Dashboard avancé + Analytics",
      "Support prioritaire",
      "Intégrations avancées",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    period: "",
    description: "Solution complète et personnalisée",
    features: [
      "Tout du plan Business",
      "Workflows sur-mesure",
      "Factures illimitées",
      "Multi-utilisateurs",
      "Support dédié 24/7",
      "Formation sur site",
      "SLA garanti",
    ],
    highlighted: false,
  },
] as const;

export const PROCESS = [
  {
    step: "1",
    title: "Audit gratuit",
    description:
      "Nous analysons vos processus actuels et identifions les opportunités d'automatisation.",
    duration: "1 semaine",
  },
  {
    step: "2",
    title: "Proposition personnalisée",
    description:
      "Nous vous présentons une solution sur-mesure avec timeline et budget détaillés.",
    duration: "2-3 jours",
  },
  {
    step: "3",
    title: "Configuration",
    description:
      "Nous paramétrons et testons votre solution avec vos données réelles.",
    duration: "2 semaines",
  },
  {
    step: "4",
    title: "Formation & Go-live",
    description:
      "Nous formons vos équipes et déployons la solution en production.",
    duration: "1 semaine",
  },
] as const;
