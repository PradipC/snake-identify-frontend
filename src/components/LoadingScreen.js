import { useApp } from '../App';
import JungleBg from './JungleBg';

export default function LoadingScreen({ previewUrl }) {
  const { t } = useApp();
  return (
    <div className="loading-screen">
      <JungleBg />
      <div style={{ position: 'relative', zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="scan-frame">
          {previewUrl
            ? <img src={previewUrl} alt="Scanning" className="scan-photo" />
            : <div className="scan-photo" style={{ background: '#1a2a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48 }}>🐍</div>
          }
          <div className="scan-border">
            <div className="scan-line" />
            <div className="scan-corner sc-tl" />
            <div className="scan-corner sc-tr" />
            <div className="scan-corner sc-bl" />
            <div className="scan-corner sc-br" />
          </div>
          <div className="scan-pct">97%</div>
        </div>

        <div className="load-title">{t.loadTitle}</div>
        <div className="load-bar-wrap">
          <div className="load-bar-fill" />
        </div>
        <div className="load-sub">{t.loadSub}</div>
        <div className="load-dots">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}