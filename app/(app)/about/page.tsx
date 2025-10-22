import { LynxButton } from "@/components/ui/button/LynxButton";
import {
  MILESTONES,
  MISSION,
  STATS,
  TEAM_MEMBERS,
  VALUES,
} from "@/constants/about";
import { Award, Rocket, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-linear-to-br from-brand-blue-900 to-brand-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1
              className="mb-6 font-poppins"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: "1.2" }}
            >
              Nous révolutionnons l'automatisation pour les PME
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lynx AI est née d'une conviction : l'intelligence artificielle
              doit être accessible à toutes les entreprises, pas seulement aux
              grands groupes. Nous transformons vos défis opérationnels en
              opportunités de croissance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection from="left">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-brand-indigo" />
                <h2 className="font-poppins">Notre Mission</h2>
              </div>
              <p className="text-(--neutral-gray-600) text-lg leading-relaxed mb-6">
                Démocratiser l'automatisation et l'intelligence artificielle en
                offrant des solutions clés en main, rapides à déployer et à fort
                ROI.
              </p>
              <ul className="space-y-3">
                {MISSION.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-semantic-success shrink-0 mt-1" />
                    <span className="text-(--neutral-gray-600)">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection from="right">
              <div className="bg-linear-to-br from-brand-indigo to-accent-cyber-end p-8 rounded-2xl text-white">
                <h2 className="mb-4 font-poppins">Notre Vision</h2>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Devenir le partenaire de référence en automatisation pour les
                  PME européennes.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {STATS.map((stat, index) => (
                    <div key={index}>
                      <div
                        className="text-white mb-1 font-poppins"
                        style={{ fontSize: "2rem" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="mb-4 font-poppins"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2rem)" }}
            >
              Nos Valeurs
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Les principes qui guident notre travail quotidien et notre
              relation avec nos clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {VALUES.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full gradient-cyber flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "var(--font-family-heading)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-(--neutral-gray-600)">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="mb-4 font-poppins"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2rem)" }}
            >
              Notre Équipe
            </h2>
            <p className="text-(--neutral-gray-600) text-lg max-w-2xl mx-auto">
              Des experts passionnés dédiés à votre succès.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {TEAM_MEMBERS.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full gradient-cyber mx-auto mb-4 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                      <UserRoundCheck className="w-12 h-12 text-brand-indigo" />
                    </div>
                  </div>
                  <h3 className="mb-1 font-poppins">{member.name}</h3>
                  <p className="text-brand-indigo mb-1">{member.role}</p>
                  <p className="text-sm text-(--neutral-gray-600)">
                    {member.expertise}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              className="mb-4 font-poppins"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2rem)" }}
            >
              Notre Histoire
            </h2>
          </AnimatedSection>

          <div className="space-y-8 mt-12">
            {MILESTONES.map((milestone, index) => (
              <AnimatedSection key={index} from="left" delay={index * 0.1}>
                <div className="relative pl-8 md:pl-16 border-l-2 border-brand-indigo">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full gradient-cyber" />
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div
                      className="text-brand-indigo mb-2 font-poppins"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {milestone.year}
                    </div>
                    <h3 className="mb-2 font-poppins">{milestone.event}</h3>
                    <p className="text-(--neutral-gray-600)">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-brand-blue-900 to-brand-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="mb-4 font-poppins"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2rem)" }}
            >
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez comment Lynx AI peut transformer votre entreprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LynxButton variant="primary" size="lg">
                Demander une démo
              </LynxButton>
              <LynxButton variant="secondary" size="lg">
                <Link href="/contact">Nous contacter</Link>
              </LynxButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
