import { openGraphDefaults } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { DocumentLayout } from "@/components/ui/DocumentLayout";
export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o ContaCerta armazena contas e pagamentos no dispositivo, permite backups e utiliza lembretes locais.",
  alternates: { canonical: "/politica-de-privacidade/" },
  openGraph: {
    ...openGraphDefaults,
    title: "Política de Privacidade | ContaCerta",
    url: "/politica-de-privacidade/",
  },
};
export default function PrivacyPage() {
  return (
    <DocumentLayout
      title="Política de Privacidade"
      description="Uma explicação clara sobre as informações do aplicativo e deste site."
    >
      <section>
        <h2>1. O que fica no aplicativo</h2>
        <p>
          O ContaCerta registra os dados que você informa ao cadastrar contas:
          nome, valor, categoria, vencimento, descrição opcional, recorrência e
          preferência de lembrete. Também registra pagamentos, suas datas
          efetivas, valores e eventuais estornos, além das preferências de
          aparência.
        </p>
      </section>
      <section>
        <h2>2. Onde os registros são armazenados</h2>
        <p>
          Os registros do aplicativo ficam localmente no IndexedDB do navegador
          ou da WebView da versão instalada. A implementação atual não envia
          esses registros a um backend do ContaCerta e não oferece sincronização
          em nuvem ou conexão com instituições financeiras.
        </p>
        <p>
          Não há uma camada de criptografia de dados implementada pelo
          ContaCerta. O acesso ao dispositivo e as proteções oferecidas pelo
          sistema operacional e pelo navegador continuam relevantes.
        </p>
      </section>
      <section>
        <h2>3. Backups e exclusão</h2>
        <p>
          Você pode exportar um backup JSON em Ajustes e importar um arquivo
          compatível. O backup contém os dados financeiros registrados no
          aplicativo; guarde-o em um local de confiança e escolha com cuidado
          onde compartilhá-lo.
        </p>
        <p>
          Na versão nativa, o arquivo de exportação é preparado no cache do
          aplicativo e pode ser salvo ou compartilhado pelo recurso do sistema.
          Importar substitui os registros atuais mediante confirmação. É
          possível excluir todas as informações em Ajustes.
        </p>
        <p>
          Limpar o armazenamento do navegador ou desinstalar o aplicativo pode
          remover seus registros. O ContaCerta não mantém uma cópia remota para
          recuperação.
        </p>
      </section>
      <section>
        <h2>4. Lembretes e permissões</h2>
        <p>
          Na versão nativa, o ContaCerta solicita permissão de notificações
          quando você ativa os lembretes. As notificações são agendadas no
          dispositivo e podem mostrar o nome e o valor da conta na tela
          bloqueada, conforme as configurações do sistema.
        </p>
        <p>
          A entrega depende das permissões e políticas do aparelho. A versão
          acessada apenas pela WebView ou navegador, sem a integração nativa,
          não oferece notificações com o app fechado.
        </p>
      </section>
      <section>
        <h2>5. Acesso a este site e contato</h2>
        <p>
          Este site apresenta o aplicativo e não acessa os registros financeiros
          que você mantém nele. A hospedagem pode processar dados técnicos de
          acesso necessários à entrega das páginas, conforme as condições do
          provedor.
        </p>
        <p>
          Enquanto o canal de contato não estiver configurado, o formulário
          apenas prepara e copia uma mensagem no seu dispositivo; nenhum envio é
          realizado. Quando uma integração de contato for disponibilizada, esta
          página deverá ser atualizada com a identificação do serviço, do
          responsável e as informações aplicáveis ao tratamento das mensagens.
        </p>
      </section>
      <section>
        <h2>6. Revisão e atendimento</h2>
        <p>
          Este conteúdo descreve a implementação atual e deve ser revisado se as
          funcionalidades ou os serviços utilizados forem alterados. A
          identificação do responsável, os canais de atendimento e as condições
          definitivas serão completados antes do lançamento público.
        </p>
        <p>
          Consulte a <Link href="/contato/">página de contato</Link> para
          verificar a disponibilidade do atendimento.
        </p>
      </section>
    </DocumentLayout>
  );
}
