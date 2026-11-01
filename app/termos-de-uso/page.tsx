import { openGraphDefaults } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DocumentLayout } from "@/components/ui/DocumentLayout";
export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Informações revisáveis sobre o uso do ContaCerta, os registros locais, lembretes e backups.",
  alternates: { canonical: "/termos-de-uso/" },
  openGraph: {
    ...openGraphDefaults,
    title: "Termos de Uso | ContaCerta",
    url: "/termos-de-uso/",
  },
};
export default function TermsPage() {
  return (
    <DocumentLayout
      title="Termos de Uso"
      description="Informações sobre o funcionamento, a disponibilidade e os cuidados ao usar o ContaCerta."
    >
      <section>
        <h2>1. Sobre o ContaCerta</h2>
        <p>
          O ContaCerta é uma ferramenta de organização de contas, despesas
          recorrentes, vencimentos e registros de pagamento. Ele permite
          acompanhar informações inseridas por você; não efetua pagamentos,
          transferências ou movimentações bancárias.
        </p>
      </section>
      <section>
        <h2>2. Seus registros</h2>
        <p>
          O aplicativo calcula seus resumos a partir dos valores, datas e
          pagamentos cadastrados. Confira esses dados e mantenha-os atualizados.
          Marcar uma conta como paga registra a informação no aplicativo e não
          realiza uma transação financeira.
        </p>
        <p>
          O status de vencimento utiliza a data local do aparelho. Datas e
          relógios incorretos no dispositivo podem afetar a apresentação das
          contas.
        </p>
      </section>
      <section>
        <h2>3. Recorrências e histórico</h2>
        <p>
          Você pode criar contas únicas, semanais, mensais ou anuais. As
          próximas ocorrências são geradas pelo aplicativo, e o histórico dos
          pagamentos registrados é preservado. Abra o ContaCerta periodicamente
          para atualizar as ocorrências futuras e os agendamentos de lembretes.
        </p>
        <p>
          Editar uma conta afeta a série conforme as regras do aplicativo;
          excluir a conta remove suas ocorrências e seu histórico após
          confirmação. Desfazer um pagamento mantém o registro do estorno.
        </p>
      </section>
      <section>
        <h2>4. Lembretes</h2>
        <p>
          As notificações locais exigem a versão nativa, permissão do sistema e
          configuração no aplicativo. Sua entrega depende das políticas do
          aparelho e pode ser afetada por restrições do sistema. Consulte a
          lista e o calendário para acompanhar os vencimentos.
        </p>
      </section>
      <section>
        <h2>5. Armazenamento e backups</h2>
        <p>
          Os registros ficam no dispositivo e não são sincronizados em nuvem
          pelo ContaCerta. Faça backups pela opção Exportar em Ajustes antes de
          trocar de aparelho, desinstalar o aplicativo ou limpar o
          armazenamento.
        </p>
        <p>
          Importar um backup substitui os dados atuais. Verifique o arquivo
          selecionado e exporte uma cópia se precisar preservar as informações
          existentes. Mais detalhes estão na{" "}
          <Link href="/politica-de-privacidade/">Política de Privacidade</Link>.
        </p>
      </section>
      <section>
        <h2>6. Disponibilidade e condições definitivas</h2>
        <p>
          Os links oficiais das lojas serão publicados neste site quando
          estiverem disponíveis. Até lá, as plataformas são indicadas como “Em
          breve”. Este conteúdo é uma versão inicial revisável; identificação do
          responsável, atendimento e condições definitivas precisam ser
          completados antes do lançamento público.
        </p>
        <p>
          Dúvidas e sugestões podem ser preparadas na{" "}
          <Link href="/contato/">página de contato</Link>. O envio só fica
          disponível quando um canal real estiver configurado.
        </p>
      </section>
    </DocumentLayout>
  );
}
