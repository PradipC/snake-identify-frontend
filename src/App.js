import React, { useState, createContext, useContext } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';

export const AppContext = createContext();
export const useApp = () => useContext(AppContext);

export const T = {
  en: {
    appName: 'SNAKEID',
    appSub: 'INDIA • सांप पहचान',
    eyebrow: 'INSTANT IDENTIFICATION',
    h1: 'SNAKE',
    h2: 'IDENTIFIER',
    tagline: 'INSTANT DETECTION • COULD SAVE YOUR LIFE',
    f1t: 'AI POWERED', f1s: 'Smart & accurate detection',
    f2t: 'ACCURATE RESULTS', f2s: 'Identify all Indian snake species',
    f3t: 'SAFETY FIRST', f3s: 'First aid & emergency info',
    uzTitle: 'TAP TO PHOTOGRAPH', uzSub: 'Open camera or upload from gallery',
    identBtn: 'IDENTIFY NOW',
    tip1: 'Full frame', tip2: 'Good light', tip3: "Don't touch!",
    langBtn: 'हिन्दी',
    loadTitle: 'ANALYZING SNAKE',
    loadSub: 'Checking against Indian species database',
    firstAid: 'FIRST AID STEPS',
    symptoms: 'BITE SYMPTOMS',
    ruralNote: 'RURAL NOTE',
    aiConf: 'AI CONFIDENCE',
    regions: 'FOUND IN',
    venomBadge: 'VENOM TYPE',
    venomousAlert: '☠ VENOMOUS — SEEK HELP IMMEDIATELY',
    safeAlert: '✓ NON-VENOMOUS — SAFE',
    unknownAlert: '⚠ VENOM UNCLEAR — TREAT AS DANGEROUS',
    emergency: '📞 CALL 108 — EMERGENCY NOW',
    hospital: '🏥 FIND NEAREST HOSPITAL',
    back: '← IDENTIFY ANOTHER SNAKE',
    noSnake: 'No snake detected in this image.',
    tryAgain: 'TRY AGAIN',
    disclaimer: '⚠ AI aid only — always call emergency services if bitten',
  },
  hi: {
    appName: 'SNAKEID',
    appSub: 'INDIA • सांप पहचान',
    eyebrow: 'तुरंत पहचान',
    h1: 'सांप',
    h2: 'पहचानकर्ता',
    tagline: 'तुरंत पहचान • जान बचा सकता है',
    f1t: 'AI आधारित', f1s: 'स्मार्ट और सटीक पहचान',
    f2t: 'सटीक परिणाम', f2s: 'सभी भारतीय प्रजातियां',
    f3t: 'सुरक्षा प्रथम', f3s: 'प्राथमिक उपचार और आपातकाल',
    uzTitle: 'फोटो लें', uzSub: 'कैमरा या गैलरी से चुनें',
    identBtn: 'अभी पहचानें',
    tip1: 'पूरा दिखे', tip2: 'रोशनी हो', tip3: 'मत छुएं!',
    langBtn: 'English',
    loadTitle: 'विश्लेषण जारी है',
    loadSub: 'भारतीय प्रजाति डेटाबेस जांच हो रही है',
    firstAid: 'प्राथमिक उपचार',
    symptoms: 'काटने के लक्षण',
    ruralNote: 'ग्रामीण सलाह',
    aiConf: 'AI विश्वास',
    regions: 'कहाँ पाया जाता है',
    venomBadge: 'जहर का प्रकार',
    venomousAlert: '☠ जहरीला — तुरंत मदद लें',
    safeAlert: '✓ जहरीला नहीं — सुरक्षित',
    unknownAlert: '⚠ जहर अज्ञात — खतरनाक मानें',
    emergency: '📞 108 डायल करें — आपातकाल',
    hospital: '🏥 नजदीकी अस्पताल खोजें',
    back: '← दूसरा सांप पहचानें',
    noSnake: 'इस तस्वीर में कोई सांप नहीं मिला।',
    tryAgain: 'फिर कोशिश करें',
    disclaimer: '⚠ केवल AI सहायता — काटने पर तुरंत 108 डायल करें',
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [screen, setScreen] = useState('home'); // home | loading | result
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const t = T[lang];
  const toggleLang = () => setLang(l => l === 'en' ? 'hi' : 'en');

  const handleImageSelected = (file) => {
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError(null);
  };

  const handleIdentify = async () => {
    if (!imageFile) return;
    setScreen('loading');
    setError(null);
    const formData = new FormData();
    formData.append('image', imageFile);
    try {
      const res = await fetch('https://snake-identify-backend.onrender.com/api/snake/identify', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Server error. Please try again.');
      const data = await res.json();
      setResult(data);
      setScreen('result');
    } catch (err) {
      setError(err.message);
      setScreen('home');
    }
  };

  const handleReset = () => {
    setScreen('home');
    setResult(null);
    setImageFile(null);
    setPreviewUrl(null);
    setError(null);
  };

  return (
    <AppContext.Provider value={{ lang, t, toggleLang }}>
      <div className="app-root">
        {screen === 'home' && (
          <HomeScreen
            previewUrl={previewUrl}
            error={error}
            onImageSelected={handleImageSelected}
            onIdentify={handleIdentify}
          />
        )}
        {screen === 'loading' && <LoadingScreen previewUrl={previewUrl} />}
        {screen === 'result' && (
          <ResultScreen result={result} previewUrl={previewUrl} onReset={handleReset} />
        )}
      </div>
    </AppContext.Provider>
  );
}