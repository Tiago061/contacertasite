import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
export function Faq() {
  return (
    <section id="perguntas" className="section faq-section">
      <div className="container faq-grid">
        <Reveal className="faq-heading">
          <span className="eyebrow">BOM SABER</span>
          <h2>
            Uma coisa
            <br />
            <span>de cada vez.</span>
          </h2>
          <p>
            Respostas para começar
            <br />
            com mais tranquilidade.
          </p>
          <Link href="/contato/" className="text-link">
            Fale com a gente
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
        <Reveal className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <div>
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
