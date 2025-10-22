import { FOOTER_SECTIONS, SOCIAL_LINKS } from "@/constants/footer";
import { Mail, PhoneForwarded } from "lucide-react";
import { LogoButton } from "./button/LogoButton";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <LogoButton className="mb-4" style="text-brand-indigo" />

            <p className="text-gray-400 mb-4 max-w-xs">
              Automatisez vos tâches, améliorez votre trésorerie. Solutions IA
              déployées en 4 semaines.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:ryantido34@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">contact@lynxai.com</span>
              </a>
              <a
                href="tel:+237680989732"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <PhoneForwarded className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm">+237 6 80 98 97 32</span>
              </a>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-white font-poppins">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button className="text-sm text-gray-400 hover:text-white transition-colors">
                      <Link href={link.value}>{link.label}</Link>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Lynx AI. Tous droits réservés.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="
                    p-2 rounded-lg bg-white/5 text-gray-400
                    hover:bg-white/10 hover:text-white
                    transition-all duration-200
                  "
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Politique de confidentialité
              </button>
              <span>•</span>
              <button className="hover:text-white transition-colors">
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
