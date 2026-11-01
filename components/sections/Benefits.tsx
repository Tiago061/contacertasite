import { BellRing, LayoutGrid, CircleCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
const benefits = [
  {
    Icon: BellRing,
    title: "Nunca perca um vencimento",
    description:
      "Acompanhe as datas importantes e configure lembretes na versão nativa. Seu mês fica mais previsível.",
    color: "blue",
  },
  {
    Icon: LayoutGrid,
    title: "Tudo em um só lugar",
    description:
      "Da conta de luz à assinatura do mês. Organize contas e pagamentos em uma interface que faz sentido.",
    color: "purple",
  },
  {
    Icon: CircleCheck,
    title: "Controle sem complicação",
    description:
      "Veja o que já foi pago e o que ainda está pendente. Mais clareza para decidir seus próximos passos.",
    color: "green",
  },
];
export function Benefits() {
  return (
    <section id="beneficios" className="section benefits-section">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">ESPAÇO PARA O QUE REALMENTE IMPORTA</span>
          <h2>
            Mais organização.
            <br />
            <span>Menos preocupação.</span>
          </h2>
          <p>
            As contas fazem parte da vida.
            <br className="mobile-break" /> A preocupação não precisa ocupar
            todo o espaço.
          </p>
        </Reveal>
        <div className="benefit-grid">
          {benefits.map(({ Icon, title, description, color }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="benefit-card">
                <span className={`feature-icon ${color}`}>
                  <Icon size={23} strokeWidth={1.6} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-detail" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
