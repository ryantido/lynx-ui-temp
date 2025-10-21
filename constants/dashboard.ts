import {
  Bot,
  File,
  HandCoins,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  UserRoundMinus,
} from "lucide-react";

export const stats = [
  {
    title: "Revenus du mois",
    value: "47 890 XAF",
    change: "+12.5%",
    trend: "up",
    icon: HandCoins,
    color: "var(--semantic-success)",
  },
  {
    title: "Conversations",
    value: "1,243",
    change: "+8.2%",
    trend: "up",
    icon: MessagesSquare,
    color: "var(--brand-indigo)",
  },
  {
    title: "Factures envoyées",
    value: "187",
    change: "+15.3%",
    trend: "up",
    icon: File,
    color: "var(--accent-cyber-end)",
  },
  {
    title: "Taux de paiement",
    value: "94.2%",
    change: "-2.1%",
    trend: "down",
    icon: UserRoundMinus,
    color: "var(--semantic-warning)",
  },
] as const;

export const REVENUE_DATA = [
  { month: "Jan", revenue: 32000, target: 35000 },
  { month: "Fév", revenue: 38000, target: 37000 },
  { month: "Mar", revenue: 35000, target: 38000 },
  { month: "Avr", revenue: 42000, target: 40000 },
  { month: "Mai", revenue: 45000, target: 42000 },
  { month: "Juin", revenue: 47890, target: 45000 },
] as const;

export const CONVERSATIONS_DATA = [
  { day: "Lun", count: 145 },
  { day: "Mar", count: 189 },
  { day: "Mer", count: 201 },
  { day: "Jeu", count: 178 },
  { day: "Ven", count: 234 },
  { day: "Sam", count: 167 },
  { day: "Dim", count: 129 },
] as const;

export const CATEGORY_DATA = [
  { name: "Support", value: 35, color: "#6C4DF5" },
  { name: "Ventes", value: 28, color: "#2DD4BF" },
  { name: "Info", value: 22, color: "#F59E0B" },
  { name: "Autre", value: 15, color: "#9CA3AF" },
] as const;

export const RECENT_ACTIVITIES = [
  {
    type: "payment",
    client: "M. Stéphane Higginson",
    amount: "2,450 XAF",
    time: "Il y a 5 min",
  },
  {
    type: "invoice",
    client: "Mme. Aline Mueller",
    amount: "3,200 XAF",
    time: "Il y a 12 min",
  },
  {
    type: "conversation",
    client: "M. Jeffrey Johnson",
    amount: "Support",
    time: "Il y a 18 min",
  },
  {
    type: "payment",
    client: "M. Richard Waterson",
    amount: "1,890 XAF",
    time: "Il y a 25 min",
  },
] as const;

export const MENU_ITEMS = [
  { id: "overview", label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: "chatbot", label: "Chatbot", icon: Bot },
  { id: "invoices", label: "Factures", icon: File },
  { id: "settings", label: "Paramètres", icon: Settings },
] as const;
