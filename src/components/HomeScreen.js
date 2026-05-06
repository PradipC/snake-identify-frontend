import { useRef, useState } from 'react';
import { useApp } from '../App';
import JungleBg from './JungleBg';

export default function HomeScreen({ previewUrl, error, onImageSelected, onIdentify }) {
  const { t, toggleLang } = useApp();
  const inputRef = useRef();
  const [drag, setDrag] = useState(false);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    onImageSelected(file);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <JungleBg />

      {/* Top Nav */}
      <nav className="topnav">
        <div>
          <div className="logo-main">{t.appName}</div>
          <div className="logo-sub">{t.appSub}</div>
        </div>
        <button className="lang-btn" onClick={toggleLang}>{t.langBtn}</button>
      </nav>

      {/* Hero */}
      <div className="hero-section">
        <div className="hero-eyebrow">{t.eyebrow}</div>
        <div className="hero-h1">{t.h1}</div>
        <div className="hero-h2">{t.h2}</div>
        <div className="hero-tagline">{t.tagline}</div>
      </div>

      {/* Feature pills */}
      <div className="features">
        <div className="fpill">
          <div className="fpill-icon green">🤖</div>
          <div><div className="fpill-title">{t.f1t}</div><div className="fpill-sub">{t.f1s}</div></div>
        </div>
        <div className="fpill">
          <div className="fpill-icon orange">🎯</div>
          <div><div className="fpill-title">{t.f2t}</div><div className="fpill-sub">{t.f2s}</div></div>
        </div>
        <div className="fpill">
          <div className="fpill-icon red">🛡️</div>
          <div><div className="fpill-title">{t.f3t}</div><div className="fpill-sub">{t.f3s}</div></div>
        </div>
      </div>

      {/* Upload Card */}
      <div className="upload-card" style={{ marginTop: 'auto' }}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: 'none' }}
          onChange={e => handleFile(e.target.files[0])}
        />

        <div
          className={`upload-zone ${previewUrl ? 'has-image' : ''} ${drag ? 'drag' : ''}`}
          onClick={() => !previewUrl && inputRef.current.click()}
          onDragOver={e => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={e => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
        >
          {previewUrl ? (
            <>
              <img src={previewUrl} alt="Snake preview" className="upload-preview" />
              <button className="upload-change" onClick={e => { e.stopPropagation(); inputRef.current.click(); }}>
                ↺ Change
              </button>
            </>
          ) : (
            <>
              <div className="upload-cam-icon">📷</div>
              <div className="upload-title">{t.uzTitle}</div>
              <div className="upload-sub">{t.uzSub}</div>
            </>
          )}
        </div>

        <button
          className="btn-main"
          disabled={!previewUrl}
          onClick={onIdentify}
        >
          {t.identBtn} →
        </button>

        
        {error && <div className="error-box">⚠ {error}</div>}
        <div className="disclaimer">{t.disclaimer}</div>
      </div>
    </div>
  );
}