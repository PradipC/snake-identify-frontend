import { useState, useEffect } from 'react';
import { useApp } from '../App';
import JungleBg from './JungleBg';

export default function ResultScreen({ result, previewUrl, onReset }) {
  const { t } = useApp();
  const [confWidth, setConfWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfWidth(Math.round((result?.confidence || 0.85) * 100));
    }, 300);
    return () => clearTimeout(timer);
  }, [result]);

  if (!result) return null;

  if (!result.isSnake) {
    return (
      <div className="result-screen">
        <JungleBg />
        <div style={{ position: 'relative', zIndex: 5 }}>
          <nav className="topnav">
            <div><div className="logo-main">{t.appName}</div></div>
          </nav>
          <div className="result-body">
            <div className="no-snake-box">
              <p>🔍 {t.noSnake}</p>
              <button className="btn-main" onClick={onReset}>{t.tryAgain}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isVenomous = result.venomous === true;
  const isUnknown = result.venomous === null;
  const dangerClass = isVenomous ? 'venomous' : isUnknown ? 'unknown' : 'safe';
  const dangerText = isVenomous ? t.venomousAlert : isUnknown ? t.unknownAlert : t.safeAlert;
  const confPct = Math.round((result.confidence || 0.85) * 100);

  return (
    <div className="result-screen">
      <JungleBg />
      <div style={{ position: 'relative', zIndex: 5, flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Danger Banner */}
        <div className={`danger-banner ${dangerClass}`}>{dangerText}</div>

        {/* Snake photo */}
        {previewUrl && (
          <div className="result-image-wrap">
            <img src={previewUrl} alt="Snake" className="result-image" />
            <div className="result-image-gradient" />
          </div>
        )}

        {/* Result body */}
        <div className="result-body">
          <div className="snake-name">{result.commonName || 'Unknown Snake'}</div>
          {result.hindiName && <div className="snake-hindi">{result.hindiName}</div>}
          <div className="snake-scientific">{result.scientificName}</div>

          {/* Badges */}
          <div className="badge-row">
            {result.venomType && result.venomType !== 'non-venomous' && (
              <span className="badge orange">{t.venomBadge}: {result.venomType}</span>
            )}
            {result.dangerLevel && (
              <span className={`badge ${isVenomous ? 'red' : ''}`}>
                ⚡ {result.dangerLevel?.toUpperCase()}
              </span>
            )}
            {result.foundInRegions?.slice(0, 2).map((r, i) => (
              <span key={i} className="badge">📍 {r}</span>
            ))}
          </div>

          {/* Confidence bar */}
          <div className="conf-wrap">
            <div className="conf-header">
              <span>{t.aiConf}</span>
              <span className="conf-pct">{confPct}%</span>
            </div>
            <div className="conf-track">
              <div className="conf-fill" style={{ width: `${confWidth}%` }} />
            </div>
          </div>

          {/* First Aid */}
          {result.firstAid?.length > 0 && (
            <div className="result-section">
              <div className="section-title">{t.firstAid}</div>
              <ul className="steps-list">
                {result.firstAid.map((step, i) => (
                  <li key={i} className="step-item">
                    <div className="step-num">{i + 1}</div>
                    <div className="step-text">{step}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Symptoms */}
          {result.symptoms?.length > 0 && (
            <div className="result-section">
              <div className="section-title">{t.symptoms}</div>
              <div className="symptom-grid">
                {result.symptoms.map((s, i) => (
                  <div key={i} className="symptom-chip">{s}</div>
                ))}
              </div>
            </div>
          )}

          {/* Rural Note */}
          {result.notes && (
            <div className="result-section">
              <div className="section-title">{t.ruralNote}</div>
              <div className="note-box">{result.notes}</div>
            </div>
          )}

          {/* Action buttons */}
          {isVenomous && (
            <button
              className="emergency-btn"
              onClick={() => alert('Emergency: 108\nPoison Helpline: 1800-425-1213')}
            >
              {t.emergency}
            </button>
          )}
          
          <button className="back-btn" onClick={onReset}>
            {t.back}
          </button>
        </div>
      </div>
    </div>
  );
}