import { openGraphDefaults } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/config";
export const metadata: Metadata = {
  title: "Contato",
  description:
    "Dúvidas, ideias e sugestões sobre o ContaCerta. Confira a disponibilidade do canal de atendimento.",
  alternates: { canonical: "/contato/" },
  openGraph: {
    ...openGraphDefaults,
    title: "Contato | ContaCerta",
    url: "/contato/",
  },
};
export default function ContactPage() {
  const available = !!(siteConfig.contactEndpoint || siteConfig.contactEmail);
  return (
    <div className="container contact-page">
      <Link className="back-link" href="/">
        <ArrowLeft size={16} />
        Voltar para o início
      </Link>
      <div className="contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">
            BOAS CONVERSAS CONSTROEM COISAS MELHORES
          </span>
          <h1>
            Vamos
            <br />
            <span>conversar.</span>
          </h1>
          <p>
            Dúvidas, ideias ou sugestões sobre o ContaCerta? Sua experiência
            importa.
          </p>
          <div className="contact-availability">
            <span
              className={`availability-dot ${available ? "available" : ""}`}
            />
            <span>
              {available
                ? "Canal de atendimento disponível"
                : "Canal de atendimento em preparação"}
            </span>
          </div>
          {siteConfig.contactEmail && (
            <a
              className="contact-email"
              href={`mailto:${siteConfig.contactEmail}`}
            >
              <Mail size={18} />
              {siteConfig.contactEmail}
              <ArrowUpRight size={15} />
            </a>
          )}
          <div className="contact-help">
            <MessageCircle size={21} />
            <div>
              <h2>Talvez a resposta já esteja aqui.</h2>
              <p>Reunimos as dúvidas mais comuns sobre o aplicativo.</p>
              <Link className="text-link" href="/#perguntas">
                Ver perguntas frequentes
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <div className="contact-data-note">
            <ShieldCheck size={16} />
            <p>Este formulário não acessa seus registros no aplicativo.</p>
          </div>
        </div>
        <div className="contact-card">
          <h2>{available ? "Deixe sua mensagem." : "Prepare sua mensagem."}</h2>
          <p>
            {available
              ? "Preencha os campos abaixo para entrar em contato."
              : "Você pode escrever e copiar o texto enquanto o atendimento não está disponível."}
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
