'use client';

import { useEffect, useRef } from 'react';

interface AdSpotProps {
  format?: 'banner' | 'rectangle';
  slot?: string;
}

export default function AdSpot({ format = 'banner', slot }: AdSpotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const clientAdSenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  // Identifiant de bloc (Slot ID)
  const slotId = slot || (
    format === 'banner'
      ? process.env.NEXT_PUBLIC_ADSENSE_BANNER_SLOT_ID
      : process.env.NEXT_PUBLIC_ADSENSE_RECTANGLE_SLOT_ID
  );

  useEffect(() => {
    // Ne s'exécute que côté client et si l'identifiant AdSense et le Slot ID sont définis
    if (!clientAdSenseId || !slotId) return;

    const element = adRef.current;
    if (!element) return;

    const triggerPush = () => {
      try {
        if (typeof window !== 'undefined') {
          const adsbygoogle = (window as any).adsbygoogle || [];
          // On ne fait le push que si le tag ins est présent et n'a pas encore été initialisé par AdSense
          if (element && !element.hasAttribute('data-adsbygoogle-status')) {
            adsbygoogle.push({});
          }
        }
      } catch (err) {
        console.error('Erreur d\'initialisation du bloc AdSense :', err);
      }
    };

    // Si l'élément a déjà une largeur (> 0), on déclenche l'initialisation immédiatement
    if (element.offsetWidth > 0) {
      triggerPush();
      return;
    }

    // Sinon, on observe l'élément pour ne l'initialiser que lorsqu'il obtient une largeur calculée (> 0)
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          triggerPush();
          observer.disconnect(); // Une fois initialisé, on arrête d'observer
        }
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [clientAdSenseId, slotId]);

  // Classes de dimensionnement selon le format
  const formatClasses = format === 'banner' 
    ? "w-full max-w-[900px] min-h-[90px] md:min-h-[120px]" 
    : "w-full max-w-[336px] min-h-[280px]";

  const adStyle = format === 'banner'
    ? { display: 'block', width: '100%', textDecoration: 'none' }
    : { display: 'inline-block', width: '336px', height: '280px', textDecoration: 'none' };

  // Si aucun ID ou Slot ID Google AdSense n'est défini, on affiche l'image de simulation générée
  if (!clientAdSenseId || !slotId) {
    const isBanner = format === 'banner';
    const imgSrc = isBanner ? '/ad_banner.png' : '/ad_rectangle.png';
    const dimensions = isBanner ? '900 x 120' : '336 x 280';

    return (
      <div className={`relative my-8 mx-auto flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 shadow-xs transition-all duration-300 hover:shadow-md overflow-hidden ${formatClasses}`}>
        {/* Image publicitaire simulée */}
        <img 
          src={imgSrc} 
          alt={`Publicité Simulée (${dimensions})`} 
          className="w-full h-full object-cover select-none"
        />
        {/* Badge d'information de simulation */}
        <div className="absolute top-2 right-2 z-20 flex items-center gap-1.5 pointer-events-none">
          <span className="px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white bg-slate-900/75 backdrop-blur-xs rounded-full border border-white/10 shadow-xs">
            Publicité (Simulée)
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 mx-auto flex justify-center items-center overflow-hidden w-full">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={clientAdSenseId}
        data-ad-slot={slotId}
        data-ad-format={format === 'banner' ? 'horizontal' : 'rectangle'}
        data-full-width-responsive={format === 'banner' ? 'true' : 'false'}
      />
    </div>
  );
}
