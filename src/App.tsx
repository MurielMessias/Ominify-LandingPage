import { useEffect, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleCheck,
  Home,
  Instagram,
  Laptop,
  MapPin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';

const cleaningImage = 'https://images.pexels.com/photos/9462192/pexels-photo-9462192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const repairImage = 'https://images.pexels.com/photos/5691503/pexels-photo-5691503.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const beautyImage = 'https://images.pexels.com/photos/5584461/pexels-photo-5584461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const anaProfileImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&h=180&q=85';
const rafaelProfileImage = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&h=180&q=85';
const camilaProfileImage = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&h=180&q=85';
const julianaProfileImage = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&h=180&q=85';
const brunoProfileImage = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=180&h=180&q=85';

const categories: [string, LucideIcon][] = [
  ['Construção e Reforma', Wrench],
  ['Limpeza e Manutenção', Sparkles],
  ['Tecnologia e Informática', Laptop],
  ['Saúde e Bem-estar', CircleCheck],
  ['Educação e Treinamento', Star],
  ['Serviços Domésticos', Home],
  ['Transporte e Logística', BriefcaseBusiness],
  ['Eventos e Festas', Sparkles],
  ['Consultoria e Assessoria', Users],
  ['Beleza e Estética', Star],
  ['Automotivo', Wrench],
  ['Outros Serviços', ArrowRight],
];

const faqs: [string, string][] = [
  ['O que é o Ominify?', 'O Ominify é um aplicativo que conecta quem precisa de um serviço a profissionais que podem ajudar. Tudo em um só lugar, de um jeito simples e próximo.'],
  ['Posso contratar serviços pelo aplicativo?', 'Sim. Você encontra profissionais, conhece os serviços oferecidos e pode conversar para combinar os detalhes do atendimento.'],
  ['Posso oferecer mais de um tipo de serviço?', 'Sim. Profissionais podem criar seu perfil e divulgar diferentes serviços para alcançar mais clientes.'],
  ['Os serviços podem ser presenciais ou remotos?', 'Sim. Há espaço para serviços no local, em estabelecimentos e também para atendimentos remotos.'],
  ['Como começo a usar o Ominify?', 'Baixe o app, crie seu perfil e conte o que você precisa ou quais serviços oferece.'],
  ['O aplicativo é gratuito para baixar?', 'Sim. O aplicativo é gratuito para baixar e criar uma conta. Clientes podem utilizar a plataforma gratuitamente para encontrar e contratar serviços. Profissionais também podem criar seu perfil e divulgar seus serviços gratuitamente, sendo cobrada uma comissão apenas sobre os serviços realizados por meio da plataforma.'],
];

const testimonials = [
  { name: 'Ana Martins', kind: 'Cliente', role: 'Cliente Ominify', image: anaProfileImage, text: 'Eu precisava de uma ajuda rápida em casa e gostei de poder comparar as opções antes de chamar alguém. A experiência ficou muito mais simples.' },
  { name: 'Rafael Souza', kind: 'Profissional', role: 'Eletricista e montador', image: rafaelProfileImage, text: 'Ter um espaço para mostrar meu trabalho ajuda as pessoas a entenderem exatamente o que eu faço e facilita o primeiro contato.' },
  { name: 'Camila Ferreira', kind: 'Cliente', role: 'Cliente Ominify', image: camilaProfileImage, text: 'Quando procuro um serviço, quero praticidade e clareza. Encontrar profissionais por perto deixa tudo mais tranquilo.' },
  { name: 'Juliana Costa', kind: 'Profissional', role: 'Manicure e designer de unhas', image: julianaProfileImage, text: 'O perfil profissional é uma forma de apresentar meu trabalho com mais cuidado e alcançar pessoas que realmente procuram o meu serviço.' },
  { name: 'Bruno Almeida', kind: 'Cliente', role: 'Cliente Ominify', image: brunoProfileImage, text: 'A ideia de reunir vários serviços em um só lugar faz sentido para a rotina. Menos tempo procurando, mais tempo resolvendo.' },
];

const appNotifications: { title: string; detail: string; Icon: LucideIcon; tone: 'green' | 'pink' | 'blue' }[] = [
  { title: 'Profissional perto de você', detail: 'Encontramos 6 opções na sua região', Icon: MapPin, tone: 'blue' },
  { title: 'Pagamento feito com sucesso', detail: 'Seu serviço está confirmado', Icon: CircleCheck, tone: 'green' },
  { title: 'Pedido enviado', detail: 'Aguarde o retorno do profissional', Icon: MessageCircle, tone: 'pink' },
  { title: 'Nova oportunidade', detail: 'Um cliente procura seu serviço', Icon: Users, tone: 'pink' },
];

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [page, setPage] = useState<Page>('home');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (testimonialPaused) return undefined;

    const rotation = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(rotation);
  }, [testimonialPaused]);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setNotificationIndex((current) => (current + 1) % appNotifications.length);
    }, 5000);

    return () => window.clearInterval(rotation);
  }, []);

  const activeNotification = appNotifications[notificationIndex];
  const nextNotification = appNotifications[(notificationIndex + 1) % appNotifications.length];
  const ActiveNotificationIcon = activeNotification.Icon;
  const NextNotificationIcon = nextNotification.Icon;

  if (page === 'privacy') return <PrivacyPage onBack={() => setPage('home')} />;
  if (page === 'terms') return <TermsPage onBack={() => setPage('home')} />;

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-inner">
          <a href="#inicio" className="brand" onClick={closeMenu} aria-label="Ominify, início">
            <span className="brand-mark"><img src="/images/image copy 2.png" alt="" /></span>
            <span>Ominify<span className="brand-dot">.</span></span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#profissionais" onClick={closeMenu}>Para profissionais</a>
            <a href="#categorias" onClick={closeMenu}>Categorias</a>
            <a className="nav-cta" href="#baixar" onClick={closeMenu}>Baixar o app <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> Conexões que fazem acontecer</div>
              <h1>Encontre quem resolve.<br /><em>Mostre o que você sabe fazer.</em></h1>
              <p className="hero-text">No Ominify, clientes encontram profissionais próximos e prestadores conquistam novas oportunidades em um só lugar.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#baixar">Baixar o app <ArrowRight size={18} /></a>
                <a className="button button-quiet" href="#profissionais">Quero oferecer meus serviços <ArrowRight size={17} /></a>
              </div>
              <div className="hero-note"><span className="mini-avatars"><span>J</span><span>M</span><span>C</span></span><span>Gente de verdade, serviços de verdade.</span></div>
            </div>
            <div className="hero-visual" aria-label="Prévia do aplicativo Ominify">
              <div className="shape shape-one" /><div className="shape shape-two" />
              <div className="phone-shadow" />
              <div className="phone">
                <div className="phone-speaker" />
                <div className="phone-screen">
                  <div className="app-top"><div><span className="greeting">Bom dia, Ana</span><strong>O que você precisa?</strong></div><div className="app-avatar">A</div></div>
                  <div className="app-search"><Search size={15} /><span>Buscar por serviço</span><span className="search-filter">≡</span></div>
                  <div className="app-section-title"><strong>Categorias</strong><span>Ver todas</span></div>
                  <div className="app-categories"><span><span className="cat-icon cat-blue"><Home size={16} /></span>Casa</span><span><span className="cat-icon cat-pink"><Sparkles size={16} /></span>Beleza</span><span><span className="cat-icon cat-yellow"><Wrench size={16} /></span>Reparos</span><span><span className="cat-icon cat-green"><Laptop size={16} /></span>Digital</span></div>
                  <div className="app-section-title nearby"><strong>Profissionais perto de você</strong><span>Ver todos</span></div>
                  <div className="pro-card"><img src={cleaningImage} alt="Profissional de limpeza" /><div className="pro-info"><strong>Mariana Alves</strong><span>Limpeza residencial</span><div><Star size={12} fill="currentColor" /> 4.9 <small>• 2,4 km</small></div></div><span className="online-dot" /></div>
                  <div className="pro-card"><img src={repairImage} alt="Profissional de manutenção" /><div className="pro-info"><strong>Rafael Souza</strong><span>Reparos e montagem</span><div><Star size={12} fill="currentColor" /> 4.8 <small>• 3,1 km</small></div></div></div>
                  <div className="app-bottom"><span className="active"><Home size={17} />Início</span><span><Search size={17} />Buscar</span><span><MessageCircle size={17} />Conversas</span><span><Users size={17} />Perfil</span></div>
                </div>
              </div>
              <div className={`float-card float-top notification-layout-${notificationIndex % 3} ${activeNotification.tone}`} key={`top-${notificationIndex}`}><span className="float-icon"><ActiveNotificationIcon size={16} /></span><span><strong>{activeNotification.title}</strong><small>{activeNotification.detail}</small></span></div>
              <div className={`float-card float-bottom notification-layout-${notificationIndex % 3} ${nextNotification.tone}`} key={`bottom-${notificationIndex}`}><span className="float-icon"><NextNotificationIcon size={16} /></span><span><strong>{nextNotification.title}</strong><small>{nextNotification.detail}</small></span></div>
            </div>
          </div>
          <div className="container hero-peek"><span>Tudo o que você precisa está a um clique.</span><span className="peek-arrow"><ArrowRight size={16} /></span></div>
        </section>

        <section className="steps-section" id="como-funciona">
          <div className="container">
            <div className="section-heading centered"><span className="section-kicker">Simples assim</span><h2>Do que você precisa<br /><span>até quem pode ajudar.</span></h2><p>O Ominify aproxima pessoas e profissionais para tornar cada tarefa mais fácil.</p></div>
            <div className="steps-grid">
              {([
                ['01', Search, 'Encontre o serviço que precisa.', 'Busque por categoria, localização ou pelo que você tem em mente.'],
                ['02', MessageCircle, 'Converse e combine os detalhes.', 'Troque mensagens e alinhe tudo do seu jeito, sem complicação.'],
                ['03', ShieldCheck, 'Contrate com praticidade e segurança.', 'Escolha quem faz sentido para você e siga em frente.'],
              ] as [string, LucideIcon, string, string][]).map(([number, Icon, title, text]) => <div className="step" key={number}><span className="step-number">{number}</span><div className="step-icon"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="audience-section" id="profissionais">
          <div className="container audience-grid">
            <div className="audience-image"><img src={repairImage} alt="Profissional realizando um reparo em casa" /><div className="image-label"><span className="label-icon"><ShieldCheck size={17} /></span><span><strong>Feito perto de você</strong><small>Presencial ou remoto</small></span></div></div>
            <div className="audience-copy"><span className="section-kicker blue-kicker">Para quem precisa</span><h2>Resolva o que precisa,<br /><span>perto de você.</span></h2><p>Encontre profissionais para tarefas do dia a dia, projetos, cuidados, eventos e muito mais.</p><ul className="check-list"><li><Check size={17} />Profissionais próximos</li><li><Check size={17} />Diversas categorias de serviços</li><li><Check size={17} />Atendimento no local ou remoto</li><li><Check size={17} />Mais praticidade para comparar opções</li></ul><a className="text-link" href="#baixar">Quero encontrar um serviço <ArrowRight size={17} /></a></div>
          </div>
          <div className="container audience-grid pro-audience-grid"><div className="audience-copy"><span className="section-kicker pink-kicker">Para quem oferece</span><h2>Transforme seu talento<br /><span>em novas oportunidades.</span></h2><p>Divulgue seu trabalho, receba chamados e organize seus serviços para alcançar mais clientes.</p><ul className="check-list"><li><Check size={17} />Crie seu perfil profissional</li><li><Check size={17} />Anuncie seus serviços</li><li><Check size={17} />Receba solicitações de clientes</li><li><Check size={17} />Tenha mais visibilidade na sua região</li></ul><a className="text-link pink-link" href="#baixar">Quero oferecer meus serviços <ArrowRight size={17} /></a></div><div className="audience-image pro-image"><img src={beautyImage} alt="Profissional de beleza atendendo uma cliente" /><div className="image-label pink-label"><span className="label-icon"><BriefcaseBusiness size={17} /></span><span><strong>Seu trabalho, mais visível</strong><small>Novos clientes por perto</small></span></div></div></div>
        </section>

        <section className="categories-section" id="categorias"><div className="container"><div className="section-heading"><span className="section-kicker">Explore possibilidades</span><h2>Um mundo de serviços<br /><span>para facilitar sua rotina.</span></h2></div><div className="categories-grid">{categories.map(([name, Icon]) => <a href="#baixar" className="category-item" key={name}><span className="category-icon"><Icon size={20} /></span><span>{name}</span><ArrowRight size={16} /></a>)}</div></div></section>

        <section className="benefits-section"><div className="container"><div className="benefits-intro"><span className="section-kicker blue-kicker">Por que Ominify?</span><h2>Feito para aproximar<br /><span>o que importa.</span></h2><p>Uma experiência leve para quem busca soluções e para quem quer crescer com o próprio trabalho.</p></div><div className="benefits-list">{([
                ['01', 'Praticidade para contratar', Search],
                ['02', 'Mais visibilidade para profissionais', Users],
                ['03', 'Serviços presenciais ou remotos', Laptop],
                ['04', 'Tudo organizado em um só lugar', BriefcaseBusiness],
                ['05', 'Uma rede de oportunidades perto de você', Star],
              ] as [string, string, LucideIcon][]).map(([n, text, Icon]) => <div className="benefit-row" key={n}><span>{n}</span><Icon size={21} /><strong>{text}</strong><ArrowRight size={17} /></div>)}</div></div></section>

        <section className="social-section"><div className="container social-inner"><div className="social-copy"><span className="section-kicker">Espaço para histórias reais</span><h2>Quem usa, <span>recomenda.</span></h2><p>Histórias de quem encontrou a solução certa e de quem transformou seu talento em novas oportunidades.</p></div><div className="testimonial-carousel" onMouseEnter={() => setTestimonialPaused(true)} onMouseLeave={() => setTestimonialPaused(false)} onFocus={() => setTestimonialPaused(true)} onBlur={() => setTestimonialPaused(false)}><article className="testimonial-card" key={testimonials[activeTestimonial].name}><div className="testimonial-topline"><span className={testimonials[activeTestimonial].kind === 'Profissional' ? 'testimonial-kind pink-kind' : 'testimonial-kind'}>{testimonials[activeTestimonial].kind}</span><span className="testimonial-stars"><Star size={13} fill="currentColor" /> 5.0</span></div><div className="testimonial-person"><img src={testimonials[activeTestimonial].image} alt={`Foto ilustrativa de ${testimonials[activeTestimonial].name}`} /><span><strong>{testimonials[activeTestimonial].name}</strong><small>{testimonials[activeTestimonial].role}</small></span></div><p>“{testimonials[activeTestimonial].text}”</p></article><div className="testimonial-controls" aria-label="Selecionar depoimento">{testimonials.map((testimonial, index) => <button key={testimonial.name} className={index === activeTestimonial ? 'is-active' : ''} onClick={() => setActiveTestimonial(index)} aria-label={`Mostrar depoimento de ${testimonial.name}`} aria-current={index === activeTestimonial ? 'true' : undefined} />)}</div></div></div></section>

        <section className="faq-section"><div className="container faq-grid"><div className="faq-intro"><span className="section-kicker blue-kicker">Ficou com alguma dúvida?</span><h2>Temos respostas<br /><span>para você.</span></h2><p>Se não encontrar o que procura, fale com a gente.</p><a className="text-link" href="#rodape">Falar com o suporte <ArrowRight size={17} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item open' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="final-cta" id="baixar"><div className="cta-orb cta-orb-one" /><div className="cta-orb cta-orb-two" /><div className="container final-cta-inner"><span className="section-kicker light-kicker">Tudo começa com uma escolha</span><h2>Seu próximo serviço<br /><em>começa aqui.</em></h2><p>Encontre ajuda para o que precisa ou dê o próximo passo no seu negócio.</p><div className="hero-actions"><a className="button button-white" href="#inicio">Baixar o Ominify <ArrowRight size={18} /></a></div></div></section>
      </main>

      <footer className="footer" id="rodape"><div className="container footer-top"><div className="footer-brand-col"><a href="#inicio" className="brand footer-brand"><span className="brand-mark"><img src="/images/image copy 2.png" alt="" /></span><span>Ominify<span className="brand-dot">.</span></span></a><p>Tudo o que você precisa está a um clique.</p><div className="footer-social"><a href="https://www.instagram.com/ominifyapp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Ominify"><Instagram size={18} /></a><a href="mailto:suporteominify@gmail.com" aria-label="E-mail de contato"><Mail size={18} /></a><a href="https://wa.me/5518991820208" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp do Ominify"><Phone size={18} /></a></div></div><div className="footer-links-col"><span className="footer-col-title">Navegação</span><div className="footer-links"><a href="#como-funciona">Como funciona</a><a href="#profissionais">Para profissionais</a><a href="#categorias">Categorias</a><a href="#baixar">Baixar o app</a></div></div><div className="footer-links-col"><span className="footer-col-title">Contato</span><div className="footer-links"><a href="mailto:suporteominify@gmail.com">suporteominify@gmail.com</a><a href="https://wa.me/5518991820208" target="_blank" rel="noopener noreferrer">WhatsApp: (18) 99182-0208</a><a href="https://www.instagram.com/ominifyapp/" target="_blank" rel="noopener noreferrer">@ominifyapp</a></div></div><div className="footer-links-col"><span className="footer-col-title">Legal</span><div className="footer-links"><a href="#rodape" onClick={(e) => { e.preventDefault(); setPage('privacy'); }}>Privacidade</a><a href="#rodape" onClick={(e) => { e.preventDefault(); setPage('terms'); }}>Termos de uso</a><a href="mailto:suporteominify@gmail.com">Suporte</a></div></div></div><div className="container footer-bottom"><span>© 2024 Ominify. Feito para aproximar.</span><span>Uma conexão de cada vez.</span></div></footer>
    </div>
  );
}

export default App;
