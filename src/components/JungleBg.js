export default function JungleBg({ variant = 'home' }) {
    return (
      <div className="jungle-bg">
        <svg viewBox="0 0 420 820" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          {/* Sky gradient base */}
          <rect width="420" height="820" fill="#080f08"/>
          {/* Sun glow top */}
          <ellipse cx="320" cy="60" rx="160" ry="120" fill="rgba(255,180,50,0.07)"/>
          <ellipse cx="320" cy="60" rx="80" ry="60" fill="rgba(255,200,80,0.06)"/>
          {/* Deep jungle canopy */}
          <ellipse cx="210" cy="0" rx="260" ry="200" fill="#0c1c0c"/>
          <ellipse cx="80" cy="80" rx="160" ry="180" fill="#0a180a"/>
          <ellipse cx="360" cy="120" rx="140" ry="160" fill="#0b1b0b"/>
          {/* Mid leaves */}
          <path d="M0 180 Q40 120 80 160 Q120 200 160 150 Q200 100 240 140 Q280 180 320 130 Q360 80 420 120 L420 240 L0 240Z" fill="#0d1d0d"/>
          {/* Tree trunks */}
          <rect x="30" y="200" width="18" height="200" rx="6" fill="#0a140a"/>
          <rect x="370" y="160" width="16" height="220" rx="6" fill="#0a140a"/>
          <rect x="190" y="220" width="14" height="180" rx="5" fill="#0b160b"/>
          {/* Large leaves left */}
          <ellipse cx="30" cy="210" rx="55" ry="30" fill="#0e200e" transform="rotate(-25,30,210)"/>
          <ellipse cx="15" cy="260" rx="48" ry="22" fill="#0c1c0c" transform="rotate(-35,15,260)"/>
          <ellipse cx="45" cy="300" rx="44" ry="20" fill="#0f220f" transform="rotate(-20,45,300)"/>
          {/* Large leaves right */}
          <ellipse cx="400" cy="180" rx="50" ry="28" fill="#0e200e" transform="rotate(20,400,180)"/>
          <ellipse cx="415" cy="240" rx="46" ry="22" fill="#0c1c0c" transform="rotate(30,415,240)"/>
          <ellipse cx="395" cy="290" rx="42" ry="20" fill="#0f220f" transform="rotate(15,395,290)"/>
          {/* Ground foliage */}
          <rect x="0" y="650" width="420" height="170" fill="#08140a"/>
          <path d="M0 660 Q50 620 100 645 Q150 670 200 640 Q250 610 300 645 Q350 680 420 650 L420 820 L0 820Z" fill="#0b1c0c"/>
          <path d="M0 700 Q60 670 120 690 Q180 710 240 685 Q300 660 360 690 Q400 710 420 695 L420 820 L0 820Z" fill="#0d1e0d"/>
          {/* Foreground grass blades */}
          <path d="M20 820 Q25 770 15 750 Q22 760 30 720 Q32 760 42 750 Q35 770 40 820Z" fill="#0f240f"/>
          <path d="M60 820 Q65 775 55 755 Q62 765 70 730 Q72 765 80 755 Q75 778 80 820Z" fill="#0e220e"/>
          <path d="M340 820 Q345 780 335 760 Q342 768 350 735 Q352 768 360 758 Q355 782 360 820Z" fill="#0f240f"/>
          <path d="M380 820 Q384 775 375 758 Q381 766 388 738 Q390 766 397 758 Q393 778 398 820Z" fill="#0e220e"/>
          {/* Light beams */}
          <path d="M280 0 L320 300 L340 300 L310 0Z" fill="rgba(255,220,100,0.025)"/>
          <path d="M150 0 L100 280 L120 280 L180 0Z" fill="rgba(255,220,100,0.02)"/>
          {/* Fireflies / sparkles */}
          <circle cx="90" cy="350" r="2" fill="#FFD700" opacity="0.3"/>
          <circle cx="340" cy="280" r="2.5" fill="#FFD700" opacity="0.25"/>
          <circle cx="200" cy="420" r="1.5" fill="#FFD700" opacity="0.2"/>
          <circle cx="60" cy="500" r="2" fill="#7FFF00" opacity="0.15"/>
          <circle cx="380" cy="450" r="1.5" fill="#7FFF00" opacity="0.12"/>
        </svg>
      </div>
    );
  }