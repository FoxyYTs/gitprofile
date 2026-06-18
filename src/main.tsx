import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';

const STORAGE_KEY = 'portfolio-lang';

function App() {
  const [lang, setLang] = useState<'es' | 'en'>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'en' ? 'en' : 'es';
  });

  const toggleLang = () => {
    const next = lang === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, next);
    setLang(next);
  };

  return (
    <>
      <button
        onClick={toggleLang}
        title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        style={{
          position: 'fixed',
          bottom: '1.25rem',
          right: '1.25rem',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.45rem 0.85rem',
          borderRadius: '9999px',
          border: '1.5px solid rgba(255,255,255,0.15)',
          background: 'rgba(30,30,40,0.85)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          fontFamily: 'inherit',
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: '0.03em',
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(0,0,0,0.35)',
          transition: 'opacity 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <span style={{ fontSize: '1rem' }}>{lang === 'es' ? '🇪🇸' : '🇺🇸'}</span>
        {lang === 'es' ? 'ES' : 'EN'}
        <span style={{ opacity: 0.5, fontSize: '0.75rem' }}>→ {lang === 'es' ? 'EN' : 'ES'}</span>
      </button>
      <GitProfile key={lang} config={lang === 'es' ? CONFIG_ES : CONFIG_EN} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
