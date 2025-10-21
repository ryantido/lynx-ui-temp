"use client";

import { ImageWithFallback } from "@/components/image/imageWithFallback";
import { LynxButton } from "@/components/ui/button/LynxButton";
import { CaseStudyCard } from "@/components/ui/card/CaseStudyCard";
import { FeatureCard } from "@/components/ui/card/FeatureCard";
import {
  CASE_STUDIES,
  FEATURES,
  PROCESS_STEPS,
  STATS,
  TRUST_INDICATORS,
} from "@/constants/features";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-brand-blue-900 via-brand-black to-brand-blue-900)">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-indigo rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-(--accent-cyber-end) rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
                  🚀 Solution IA déployée en 4 semaines
                </span>
              </motion.div>

              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: "var(--font-family-heading)",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  lineHeight: "1.2",
                }}
              >
                Automatisez vos tâches, améliorez votre trésorerie.
              </h1>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Chatbots WhatsApp, facturation automatique et reporting prêt à
                l'emploi. Gagnez du temps et optimisez votre cash-flow dès
                aujourd'hui.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <LynxButton variant="primary" size="lg">
                  Demander une démo
                </LynxButton>
                <LynxButton variant="secondary" size="lg">
                  <Link href="/dashboard">Découvrir le MVP</Link>
                </LynxButton>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                {STATS.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div
                      className="text-white mb-1"
                      style={{
                        fontFamily: "var(--font-family-heading)",
                        fontSize: "2rem",
                      }}
                    >
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="relative aspect-video w-full max-w-[600px] mx-auto z-10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDkwNTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Automation dashboard"
                    className="rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-indigo rounded-2xl z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Des fonctionnalités puissantes pour votre croissance
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour automatiser vos processus et
              améliorer votre efficacité opérationnelle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Résultats concrets de nos clients
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Découvrez comment Lynx AI a transformé les opérations de nos
              clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Notre processus en 4 étapes
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Un déploiement structuré pour garantir votre succès.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <div
                    className="text-6xl mb-4 opacity-20"
                    style={{
                      fontFamily: "var(--font-family-heading)",
                      background:
                        "linear-gradient(135deg, var(--brand-indigo), var(--accent-cyber-end))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "var(--font-family-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-(--neutral-gray-600)">
                    {step.description}
                  </p>
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-brand-indigo" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {TRUST_INDICATORS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon
                  className="w-12 h-12 mx-auto mb-3 text-brand-indigo"
                  aria-hidden="true"
                />
                <div
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-family-heading)",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.value}
                </div>
                <div className="text-(--neutral-gray-600)">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-family-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Prêt à automatiser votre entreprise ?
            </h2>
            <p className="text-(--neutral-gray-600) text-lg">
              Remplissez le formulaire et recevez une démo personnalisée en 24h.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-(--neutral-gray-800)"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                    placeholder="Ryan Tido"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-(--neutral-gray-800)"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                    placeholder="Lynx AI"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-(--neutral-gray-800)"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                    placeholder="ryantido34@gmail.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-(--neutral-gray-800)"
                  >
                    Téléphone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                    placeholder="+237 680 98 97 32"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="needs"
                  className="block mb-2 text-(--neutral-gray-800)"
                >
                  Décrivez vos besoins
                </label>
                <textarea
                  id="needs"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Automatisation du service client, facturation, etc."
                />
              </div>

              <LynxButton variant="primary" size="lg" className="w-full">
                Demander une démo gratuite
              </LynxButton>

              <p className="text-center text-sm text-(--neutral-gray-600)">
                Réponse sous 24h • Sans engagement • Démo personnalisée
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
