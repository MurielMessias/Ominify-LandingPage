import { ArrowLeft, Mail, Phone } from 'lucide-react';

type Props = {
  onBack: () => void;
};

function PrivacyPage({ onBack }: Props) {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="legal-back">
            <ArrowLeft size={18} /> Voltar ao site
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="brand" aria-label="Ominify, início">
            <span className="brand-mark"><img src="/images/image copy 2.png" alt="" /></span>
            <span>Ominify<span className="brand-dot">.</span></span>
          </a>
        </div>
      </header>

      <article className="container legal-article">
        <span className="legal-kicker">Política de Privacidade</span>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: Abril de 2026</p>

        <p>A Ominify é uma plataforma digital de intermediação entre clientes e profissionais autônomos. Esta política explica como coletamos, usamos e protegemos dados pessoais.</p>

        <h2>Dados coletados</h2>
        <p>Coletamos dados fornecidos pelo usuário, como nome, e-mail, telefone, endereço, dados de perfil, informações de solicitações de serviço, avaliações e mensagens no chat.</p>
        <p>Também podemos coletar dados técnicos de uso, dispositivo, IP, localização (quando autorizada), preferências de notificação e tokens de push.</p>

        <h2>Finalidades</h2>
        <p>Usamos os dados para:</p>
        <ul>
          <li>operar a plataforma e conectar clientes e profissionais;</li>
          <li>processar transações e pagamentos;</li>
          <li>enviar notificações transacionais (incluindo lembretes de serviço);</li>
          <li>prevenir fraude, abuso e inadimplência;</li>
          <li>cumprir obrigações legais e regulatórias;</li>
          <li>melhorar funcionalidades e experiência do usuário.</li>
        </ul>

        <h2>Compartilhamento</h2>
        <p>Não vendemos dados pessoais. Podemos compartilhar dados com:</p>
        <ul>
          <li>outros usuários, quando necessário para execução do serviço contratado;</li>
          <li>provedores essenciais (infraestrutura, autenticação, notificações, mapas e pagamentos);</li>
          <li>autoridades, quando houver obrigação legal;</li>
          <li>terceiros mediante consentimento do titular.</li>
        </ul>

        <h2>Segurança</h2>
        <p>Adotamos medidas técnicas e administrativas para proteção dos dados. Nenhum sistema é 100% inviolável, mas aplicamos controles razoáveis de segurança.</p>

        <h2>Direitos do titular (LGPD)</h2>
        <p>Você pode solicitar: acesso, correção, exclusão, portabilidade, revogação de consentimento e oposição ao tratamento, nos termos da legislação.</p>

        <h2>Retenção</h2>
        <p>Mantemos dados pelo período necessário às finalidades informadas e obrigações legais.</p>

        <h2>Menores</h2>
        <p>A plataforma não é destinada a menores de 18 anos.</p>

        <h2>Alterações</h2>
        <p>Podemos atualizar esta política periodicamente. A versão vigente será disponibilizada ao usuário.</p>

        <h2>Contato</h2>
        <p>Dúvidas e solicitações sobre privacidade: suporte oficial da Ominify.</p>
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

export default PrivacyPage;
