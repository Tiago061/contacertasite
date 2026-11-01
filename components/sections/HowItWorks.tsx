import { ArrowRight, Check, Plus, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
const steps = [
  {
    Icon: Plus,
    title: "Cadastre suas contas.",
    description:
      "Nome, valor e vencimento. Os detalhes essenciais para começar a se organizar.",
  },
  {
    Icon: CalendarDays,
    title: "Acompanhe os vencimentos.",
    description:
      "Consulte a lista ou o calendário e saiba o que merece sua atenção.",
  },
  {
    Icon: Check,
    title: "Registre e veja seu progresso.",
    description:
      "Marque os pagamentos e acompanhe seu mês ficando cada vez mais em dia.",
  },
];
export function HowItWorks() {
  return (
    <section id="como-funciona" className="section how-section">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">
            PEQUENOS PASSOS. UMA ROTINA DIFERENTE.
          </span>
          <h2>
            Organizar suas contas
            <br />
            <span>é simples.</span>
          </h2>
        </Reveal>
        <div className="steps-grid">
          {steps.map(({ Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="step-card">
                <div className="step-number">
                  <span>0{i + 1}</span>
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {i < 2 && (
                  <ArrowRight
                    className="step-arrow"
                    size={19}
                    aria-hidden="true"
                  />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
