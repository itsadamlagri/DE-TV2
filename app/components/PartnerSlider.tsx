'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // -------------------------------------------------------------------------
  // PARTNER LOGOS — each with a unique descriptive alt (German / DACH focused)
  // -------------------------------------------------------------------------
  const partners = [
    { name: 'Amazon Firestick', alt: 'Amazon Firestick für IPTV kaufen in 4K streamen' },
    { name: 'Samsung Smart TV', alt: 'Samsung Smart TV mit IPTV Smarters Pro und dem deutschen IPTV Service' },
    { name: 'LG Smart TV', alt: 'LG Smart TV mit Live-Sport beim Anbieter IPTV' },
    { name: 'Apple TV 4K', alt: 'Apple TV 4K mit dem besten IPTV Player für IPTV Kaufen' },
    { name: 'Android TV', alt: 'Android TV Box mit 4K Ultra HD IPTV Streaming' },
    { name: 'Nvidia Shield', alt: 'Nvidia Shield für leistungsstarke IPTV Streams' },
    { name: 'IBO Player Pro', alt: 'IBO Player Pro auf der IPTV Kaufen Empfehlungsliste' },
    { name: 'TiviMate Player', alt: 'TiviMate IPTV Player für deutsche Zuschauer auf Smart TV' },
    { name: 'IPTV Smarters Pro', alt: 'IPTV Smarters Pro für IPTV Kaufen Abonnenten eingerichtet' },
    { name: 'MAG & Formuler', alt: 'MAG und Formuler Set-Top-Boxen kompatibel mit IPTV Kaufen' },
  ].map((p, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      ...p,
      imagePath: `/img/partners/iptv-deutsch-partners-${number}`,
      width: 128,
      height: 128,
    };
  });

  // Duplicate for smooth infinite loop
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);

  // Total animation travel distance (10 items × 150px = 1500px)
  const animationDistance = partners.length * 150;

  return (
    <div className="w-full overflow-hidden relative py-12 bg-[#09090B]">
      {/* Blended gradient edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#09090B] via-[#09090B]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#09090B] via-[#09090B]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-[#FFCE00] font-black uppercase tracking-widest flex items-center justify-center gap-2">
          <span>Unterstützte IPTV Kaufen Apps &amp; Geräte</span>
        </p>
      </div>

      <motion.div
        className="flex gap-12 md:gap-16 items-center w-max"
        animate={{
          x: [0, -animationDistance],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {sliderItems.map((partner, idx) => {
          const isDuplicate = idx >= partners.length;
          const halfLabel = isDuplicate ? 'Wiederholung' : 'Ansicht';
          const position = isDuplicate ? idx - partners.length + 1 : idx + 1;

          // Every image gets a unique alt — the duplicate half uses a position suffix
          const altText = `${partner.alt} – ${halfLabel} ${position} von ${partners.length}`;

          return (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src={`${partner.imagePath}.png`}
                  alt={altText}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}