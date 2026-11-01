"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Check, LockKeyhole } from "lucide-react";
import { PhoneMockup } from "@/components/mockups/AppMockups";
import { StoreButtons, Platforms } from "@/components/ui/StoreButtons";
import { Reveal } from "@/components/ui/Reveal";
export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow hero-eyebrow">
              <span />
              UM POUCO DE ORGANIZAÇÃO. MUITO MAIS LEVEZA.
            </div>
            <h1>
              Suas contas em dia.
              <br />
              <span>
                Sua vida mais
                <br className="desktop-break" /> tranquila.
              </span>
            </h1>
            <p className="hero-description">
              Organize suas contas, acompanhe vencimentos e tenha mais controle
              sobre seus pagamentos. Tudo em um só lugar.
            </p>
            <StoreButtons />
            <Platforms />
            <div className="hero-privacy">
              <LockKeyhole size={14} />
              <span>Suas informações ficam no seu dispositivo.</span>
            </div>
          </Reveal>
        </div>
        <motion.div
          className="hero-visual"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={reduced ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </div>
      <div className="container hero-bottom">
        <a href="#beneficios">
          <span>UM NOVO JEITO DE CUIDAR DAS SUAS CONTAS</span>
          <ArrowDown size={15} />
        </a>
        <span>
          <Check size={13} />
          Mais clareza para o seu dia a dia.
        </span>
      </div>
    </section>
  );
}
