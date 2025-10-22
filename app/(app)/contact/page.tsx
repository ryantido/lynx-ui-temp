"use client";

import { CONTACT_INFO, OFFICE_HOURS, SUBJECTS } from "@/constants/contact";
import { LynxButton } from "@/components/ui/button/LynxButton";
import { Clock, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";

export default function ContactPage() {
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
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Notre équipe est à votre écoute pour répondre à toutes vos
              questions et vous accompagner dans votre projet d'automatisation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-6 text-2xl font-poppins">Nos Coordonnées</h2>

                <div className="space-y-4">
                  {CONTACT_INFO.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl"
                    >
                      <div className="w-12 h-12 rounded-lg gradient-cyber flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-(--neutral-gray-800) mb-1 font-poppins">
                          {info.title}
                        </div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-brand-indigo hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-(--neutral-gray-600)">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-brand-indigo" />
                  <h3 className="font-poppins">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-2">
                  {OFFICE_HOURS.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-(--neutral-gray-600)">
                        {schedule.day}
                      </span>
                      <span className="text-(--neutral-gray-800)">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-linear-to-br from-brand-indigo to-(--accent-cyber-end) p-6 rounded-xl text-white">
                <h3 className="mb-3 font-poppins">Réponse rapide garantie</h3>
                <p className="text-white/90 mb-4">
                  Nous nous engageons à répondre à toutes les demandes dans un
                  délai de 24h ouvrées.
                </p>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>✓ Email : réponse sous 24h</li>
                  <li>✓ Téléphone : disponible 9h-18h</li>
                  <li>✓ WhatsApp : réponse immédiate</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="mb-6 text-2xl font-poppins">
                  Envoyez-nous un message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-(--neutral-gray-800)"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                        placeholder="Ryan Tido"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-(--neutral-gray-800)"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                        placeholder="ryantido34@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                        placeholder="Lynx AI"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-(--neutral-gray-800)"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all"
                        placeholder="+237 6 80 98 97 32"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-(--neutral-gray-800)"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {SUBJECTS.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-(--neutral-gray-800)"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-indigo focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Décrivez votre projet ou posez votre question..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-brand-indigo focus:ring-brand-indigo"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-(--neutral-gray-600)"
                    >
                      J'accepte que mes données soient utilisées pour me
                      recontacter concernant ma demande. Consultez notre
                      politique de confidentialité pour plus d'informations.
                    </label>
                  </div>

                  <LynxButton
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={Send}
                    type="submit"
                  >
                    Envoyer le message
                  </LynxButton>

                  <p className="text-center text-sm text-(--neutral-gray-600)">
                    Les champs marqués d'un * sont obligatoires
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2
              className="mb-4 font-poppins"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2rem)",
              }}
            >
              Venez nous rendre visite
            </h2>
            <p className="text-(--neutral-gray-600) text-lg">
              Nos bureaux sont situés au cœur de Paris, facilement accessibles
              en transports.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center"
          >
            <div className="text-center text-(--neutral-gray-600)">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-brand-indigo" />
              <p>Douala, Cameroun</p>
              <p className="text-sm mt-2">
                Agence : Bourse (ligne 3) • Sentier (ligne 3)
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
