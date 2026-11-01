import {
  ArrowUpRight,
  ChartPie,
  ListFilter,
  ReceiptText,
  Repeat2,
  History,
  CalendarDays,
} from "lucide-react";
import {
  OverviewMockup,
  CalendarMockup,
  HistoryPreview,
  RecurrencePreview,
} from "@/components/mockups/AppMockups";
import { Reveal } from "@/components/ui/Reveal";
export function Features() {
  return (
    <section id="funcionalidades" className="section features-section">
      <div className="container">
        <Reveal className="section-heading centered feature-intro">
          <span className="eyebrow">
            SIMPLES POR FORA. COMPLETO NO QUE IMPORTA.
          </span>
          <h2>
            Tudo o que você precisa
            <br />
            para cuidar das suas contas.
          </h2>
          <p>Do primeiro cadastro ao último pagamento do mês.</p>
        </Reveal>
        <div className="feature-split">
          <Reveal className="feature-visual overview-background">
            <div className="visual-grid" />
            <OverviewMockup />
            <span className="visual-caption">
              Resumo mensal · dados ilustrativos
            </span>
          </Reveal>
          <Reveal className="feature-copy" delay={0.08}>
            <span className="feature-number">
              01 <i /> CLAREZA NO DIA A DIA
            </span>
            <h3>
              Um mês inteiro.
              <br />
              <span>Uma visão mais clara.</span>
            </h3>
            <p>
              Saiba quanto falta pagar, acompanhe seu progresso e encontre cada
              despesa sem perder tempo.
            </p>
            <ul className="feature-list">
              <li>
                <ReceiptText size={18} />
                <span>
                  <strong>Contas e despesas organizadas</strong>Cadastre
                  valores, datas e os detalhes que importam.
                </span>
              </li>
              <li>
                <ChartPie size={18} />
                <span>
                  <strong>Seu resumo financeiro mensal</strong>Visualize valores
                  pagos, pendentes e vencidos.
                </span>
              </li>
              <li>
                <ListFilter size={18} />
                <span>
                  <strong>Cada conta na sua categoria</strong>Moradia, saúde,
                  serviços e muito mais.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
        <div className="feature-split feature-reverse">
          <Reveal className="feature-copy">
            <span className="feature-number">
              02 <i /> UM PASSO À FRENTE
            </span>
            <h3>
              Seu calendário.
              <br />
              <span>Menos surpresas.</span>
            </h3>
            <p>
              Visualize os vencimentos no mês, escolha um dia e veja o que
              precisa da sua atenção. Uma rotina mais tranquila começa com uma
              boa visão do que vem.
            </p>
            <div className="feature-inline-note">
              <span>
                <CalendarDays size={18} />
              </span>
              <p>
                Datas organizadas.
                <br />
                <strong>Você escolhe como se planejar.</strong>
              </p>
            </div>
            <a className="text-link" href="#como-funciona">
              Veja como é simples
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
          <Reveal className="feature-visual calendar-background" delay={0.08}>
            <CalendarMockup />
            <span className="visual-caption">
              Calendário de vencimentos · dados ilustrativos
            </span>
          </Reveal>
        </div>
        <div className="detail-feature-grid">
          <Reveal>
            <article className="detail-feature">
              <span className="feature-icon green">
                <History size={23} />
              </span>
              <h3>Cada pagamento conta.</h3>
              <p>
                Registre a data em que pagou e acompanhe o histórico. Precisou
                corrigir? Desfaça o registro preservando o histórico.
              </p>
              <HistoryPreview />
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="detail-feature">
              <span className="feature-icon blue">
                <Repeat2 size={23} />
              </span>
              <h3>O que se repete, se organiza.</h3>
              <p>
                Contas semanais, mensais ou anuais, com próximas ocorrências
                organizadas e pagamentos preservados.
              </p>
              <RecurrencePreview />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
