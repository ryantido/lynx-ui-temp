import { Mailbox, MapPin, MessageSquare, PhoneOutgoing } from "lucide-react";

export const CONTACT_INFO = [
  {
    icon: Mailbox,
    title: "Email",
    value: "contact@lynxai.com",
    link: "mailto:ryantido34@gmail.com",
  },
  {
    icon: PhoneOutgoing,
    title: "Téléphone",
    value: "+237 680 98 97 32",
    link: "tel:+237680989732",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+237 680 98 97 32",
    link: "https://wa.me/237680989732",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Douala, Cameroun",
    link: null,
  },
] as const;

export const OFFICE_HOURS = [
  { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
  { day: "Samedi", hours: "10h00 - 14h00" },
  { day: "Dimanche", hours: "Fermé" },
] as const;

export const SUBJECTS = [
  "Demande de démo",
  "Question commerciale",
  "Support technique",
  "Partenariat",
  "Autre",
] as const;
