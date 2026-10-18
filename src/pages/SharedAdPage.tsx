import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=ominify.app';

const highlights = [
  { Icon: MapPin, text: 'Profissionais perto de você' },
  { Icon: MessageCircle, text: 'Converse e combine os detalhes' },
  { Icon: ShieldCheck, text: 'Pagamento seguro pelo app' },
];

export default function SharedAdPage() {
  return (
    <main className="shared-ad">
      <div className="shared-ad-card">
        <a href="/" className="shared-ad-brand" aria-label="Ominify">
          <img src="/images/image copy 2.png" alt="" />
          <span>Ominify<span className="brand-dot">.</span></span>
        </a>

        <h1>Alguém compartilhou um anúncio com você</h1>
        <p className="shared-ad-text">
          Para ver este anúncio, abra ou baixe o aplicativo Ominify no seu celular Android.
        </p>

        <a className="shared-ad-button" href={playStoreUrl}>
          Baixar na Google Play <ArrowRight size={18} />
        </a>

        <ul className="shared-ad-list">
          {highlights.map(({ Icon, text }) => (
            <li key={text}>
              <Icon size={16} />
              {text}
            </li>
          ))}
        </ul>

        <a className="shared-ad-home" href="/">Conhecer o Ominify</a>
      </div>
    </main>
  );
}
