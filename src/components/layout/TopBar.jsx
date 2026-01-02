"use client";
import { useRouter } from 'next/router';

const flags = [
  { code: 'dz', name: 'Algeria', emoji: '🇩🇿' },
  { code: 'ma', name: 'Morocco', emoji: '🇲🇦' },
  { code: 'tn', name: 'Tunisia', emoji: '🇹🇳' },
  { code: 'sa', name: 'Saudi Arabia', emoji: '🇸🇦' },
  { code: 'ae', name: 'UAE', emoji: '🇦🇪' },
  { code: 'eg', name: 'Egypt', emoji: '🇪🇬' },
];

export default function TopBar() {
  const router = useRouter();
  const isRTL = router.locale === 'ar';

  const getText = () => {
    if (router.locale === 'ar') return 'نخدم منطقة الشرق الأوسط وشمال أفريقيا';
    if (router.locale === 'en') return 'Serving MENA Region';
    return 'Au service de la région MENA';
  };

  return (
    <div className="bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-center gap-3 py-2 text-xs ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Flags */}
          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {flags.map((flag) => (
              <span
                key={flag.code}
                className="text-base hover:scale-125 transition-transform cursor-default"
                title={flag.name}
              >
                {flag.emoji}
              </span>
            ))}
          </div>

          {/* Separator */}
          <span className="text-white/30">|</span>

          {/* Text */}
          <span className="text-white/70 font-medium">
            {getText()}
          </span>
        </div>
      </div>
    </div>
  );
}
