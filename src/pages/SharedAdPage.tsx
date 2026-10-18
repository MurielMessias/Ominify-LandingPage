import { ArrowRight } from 'lucide-react';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=ominify.app';

export default function SharedAdPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, textAlign: 'center' }}>
      <div style={{ maxWidth: 420 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Alguém compartilhou um anúncio com você</h1>
        <p style={{ marginBottom: 24, color: '#4B5563' }}>
          Para ver este anúncio, abra ou baixe o aplicativo Ominify no seu celular Android.
        </p>
        <a className="button button-primary" href={playStoreUrl}>
          Baixar na Google Play <ArrowRight size={18} />
        </a>
      </div>
    </main>
  );
}
