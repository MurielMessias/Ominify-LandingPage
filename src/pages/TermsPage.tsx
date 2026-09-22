import { ArrowLeft, Mail, Phone } from 'lucide-react';

type Props = {
  onBack: () => void;
};

function TermsPage({ onBack }: Props) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="legal-back">
            <ArrowLeft size={18} /> Voltar ao site
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="brand" aria-label="Ominify, início">
            <span className="brand-mark"><img src="/images/adaptive-icon.svg" alt="" /></span>
            <span>Ominify<span className="brand-dot">.</span></span>
          </a>
        </div>
      </header>

      <article className="container legal-article">
        <span className="legal-kicker">Termos de Uso</span>
        <h1>Termos de Uso</h1>
        <p className="legal-updated">Última atualização: Abril de 2026</p>

        <p>Ao usar a plataforma Ominify, você concorda com estes Termos.</p>

        <h2>Natureza da plataforma</h2>
        <p>A Ominify é uma plataforma digital de intermediação entre clientes e profissionais. A Ominify não executa os serviços contratados e não atua como empregadora ou representante das partes.</p>

        <h2>Conta e uso</h2>
        <p>O usuário deve fornecer dados verdadeiros e manter suas credenciais seguras. É proibido usar a plataforma para fraude, atividades ilegais, assédio ou violação de direitos.</p>

        <h2>Contratação e pagamentos</h2>
        <p>Condições comerciais, escopo e preço são definidos entre cliente e profissional no fluxo da plataforma. A Ominify pode cobrar taxas de intermediação/processamento/repasses conforme informado no aplicativo.</p>

        <h2>Responsabilidade do profissional</h2>
        <p>O profissional é integralmente responsável pelos serviços que oferece e executa, incluindo qualidade técnica, prazos, conduta, segurança, materiais, licenças, tributos e conformidade legal.</p>

        <h2>Limitação de responsabilidade da Ominify</h2>
        <p>A Ominify não se responsabiliza por atos, omissões, danos ou prejuízos decorrentes da prestação do serviço entre cliente e profissional, salvo nos limites de falha técnica comprovadamente atribuível à própria plataforma e conforme legislação aplicável.</p>

        <h2>Regras de segurança e inadimplência</h2>
        <p>A plataforma pode aplicar medidas de proteção e prevenção de fraude/inadimplência, incluindo lembretes automáticos, marcação de atraso e restrições de uso conforme políticas vigentes.</p>

        <h2>Suspensão e encerramento</h2>
        <p>Contas podem ser suspensas ou encerradas por violação destes termos ou por risco à segurança da plataforma.</p>

        <h2>Alterações</h2>
        <p>Estes Termos podem ser atualizados. O uso continuado da plataforma após atualização representa aceite da versão vigente.</p>

        <h2>Lei aplicável</h2>
        <p>Estes Termos são regidos pelas leis brasileiras.</p>

        <h2>Contato</h2>
        <p>Dúvidas contratuais: suporte oficial da Ominify.</p>
        <div className="legal-contact">
          <a href="mailto:suporteominify@gmail.com"><Mail size={16} /> suporteominify@gmail.com</a>
          <a href="https://wa.me/5518991820208" target="_blank" rel="noopener noreferrer"><Phone size={16} /> WhatsApp: (18) 99182-0208</a>
        </div>
      </article>

      <footer className="footer legal-footer">
        <div className="container footer-bottom">
          <span>© 2024 Ominify. Feito para aproximar.</span>
          <span>Uma conexão de cada vez.</span>
        </div>
      </footer>
    </div>
  );
}

export default TermsPage;
