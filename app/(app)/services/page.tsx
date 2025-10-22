"use client";

import { MAIN_SERVICES, PACKAGES, PROCESS } from "@/constants/services";
import { LynxButton } from "@/components/ui/button/LynxButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-linear-to-br from-brand-blue-900 to-brand-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1
              className="mb-6 font-poppins"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: "1.2",
              }}
            >
              Nos Solutions d'Automatisation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Des outils puissants et faciles à utiliser pour automatiser vos
              processus, améliorer votre efficacité et booster votre croissance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="mb-4 font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Nos Services
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Choisissez parmi nos solutions clés en main ou créez un package
              sur-mesure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {MAIN_SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-cyber flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-poppins">{service.title}</h3>
                    <p className="text-(--neutral-gray-600)">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-semantic-success shrink-0 mt-0.5" />
                      <span className="text-(--neutral-gray-600)">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <span
                    className="text-brand-indigo font-poppins"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {service.pricing}
                  </span>
                  <button className="text-brand-indigo inline-flex items-center gap-2 group">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="mb-4 font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Nos Forfaits
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Des packages adaptés à la taille de votre entreprise et à vos
              besoins.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative bg-white rounded-2xl p-8",

                  pkg.highlighted
                    ? "ring-2 ring-brand-indigo shadow-xl scale-105"
                    : "border border-gray-200",
                )}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full gradient-cyber text-white text-sm">
                      Plus populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3
                    className="mb-2 font-poppins"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-(--neutral-gray-600) mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span
                      className="text-brand-indigo font-poppins"
                      style={{ fontSize: "2.5rem" }}
                    >
                      {pkg.price}
                    </span>
                    {pkg.period && (
                      <span className="text-(--neutral-gray-600) mb-2">
                        {pkg.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-semantic-success shrink-0 mt-0.5" />
                      <span className="text-(--neutral-gray-600)">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <LynxButton
                  variant={pkg.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                >
                  Choisir ce forfait
                </LynxButton>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-(--neutral-gray-600) mt-8">
            Tous les forfaits incluent : Installation • Formation • Support
            technique • Mises à jour régulières
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="mb-4 font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Notre Processus de Déploiement
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Un accompagnement structuré de bout en bout, de l'audit au
              go-live.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-neutral-gray-100 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full gradient-cyber flex items-center justify-center mb-4 mx-auto">
                    <span
                      className="text-white font-poppins"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-center mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-(--neutral-gray-600) text-center text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-white text-brand-indigo text-sm">
                      {item.duration}
                    </span>
                  </div>
                </div>

                {index < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-26 -right-6 z-10">
                    <ArrowRight className="w-6 h-6 text-brand-indigo" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-brand-blue-900 to-brand-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Prêt à automatiser votre entreprise ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez-nous pour un audit gratuit et une démonstration
              personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LynxButton variant="primary" size="lg">
                Demander une démo gratuite
              </LynxButton>
              <LynxButton variant="secondary" size="lg">
                <Link href="/contact">Nous contacter</Link>
              </LynxButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
