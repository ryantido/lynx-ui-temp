import { Github, Linkedin, Twitter } from "lucide-react";

export const FOOTER_SECTIONS = [
  {
    title: "Navigation",
    links: [
      { label: "Accueil", value: "/" },
      { label: "À propos", value: "/about" },
      { label: "Services", value: "/services" },
      { label: "Contact", value: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Chatbot WhatsApp", value: "/services" },
      { label: "Automatisation", value: "/services" },
      { label: "Reporting", value: "/services" },
      { label: "Dashboard MVP", value: "/services" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Documentation", value: "/about" },
      { label: "Blog", value: "/about" },
      { label: "FAQ", value: "/about" },
      { label: "Support", value: "/contact" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
] as const;
