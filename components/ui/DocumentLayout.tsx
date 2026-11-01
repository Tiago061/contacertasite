import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
export function DocumentLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container document-page">
      <Link href="/" className="back-link">
        <ArrowLeft size={16} />
        Voltar para o início
      </Link>
      <div className="document-header">
        <span className="eyebrow">CONTACERTA · INFORMAÇÕES DO PRODUTO</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="review-notice">
        <FileText size={19} />
        <p>
          <strong>Conteúdo revisável</strong>Versão inicial para revisão antes
          do lançamento público. A identificação do responsável e os canais
          definitivos de atendimento ainda precisam ser definidos.
        </p>
      </div>
      <article className="document-body">{children}</article>
    </div>
  );
}
