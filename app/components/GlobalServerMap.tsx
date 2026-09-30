'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi, Server, ShieldCheck, Zap } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import Image from 'next/image';

export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0a0c] py-16 sm:py-20 lg:py-28"
      aria-label="Globale IPTV Kaufen Server-Abdeckungskarte"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(221,0,0,0.1),_transparent_65%)] pointer-events-none" />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFCE00]/30 bg-[#FFCE00]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#FFCE00]">
            <Wifi className="h-4 w-4 text-[#FFCE00]" />
            Globales Server-Netzwerk 🇩🇪
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Server-Abdeckung In <span className="text-[#DD0000]">100+ Ländern</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base font-medium">
            Erleben Sie ultraschnelles 4K IPTV-Streaming über das globale Netzwerk von {CONSTANTS.BRAND_NAME}. Genießen Sie null Puffer, maximale Stabilität und garantierte 99,9% Uptime – weltweit. Mit dedizierten Frankfurt Edge-Servern und unter 10ms Latenz in der DACH-Region.
          </p>
        </div>

        {/* Medium-Sized Map Graphic */}
        <div className="relative mx-auto my-8 max-w-5xl px-4">
          <Image
            src="/img/global.png"
            alt="Globale IPTV Kaufen Server-Netzwerk Abdeckungskarte"
            width={1400}
            height={787}
            className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* Feature Highlights Grid (White Cards) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#DD0000]/50 hover:shadow-[0_10px_30px_rgba(221,0,0,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Zap className="h-6 w-6 text-[#DD0000]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0a0a0c]">Ultra-Niedrige Latenz</h3>
            <p className="text-xs text-[#0a0a0c]/70 mt-1 font-medium">
              Optimiertes Netzwerk-Routing für nahtlosen Live-Sport und sofortigen Senderwechsel. Unter 10ms Latenz über Frankfurt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#DD0000]/50 hover:shadow-[0_10px_30px_rgba(221,0,0,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <Server className="h-6 w-6 text-[#DD0000]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0a0a0c]">Redundante Server</h3>
            <p className="text-xs text-[#0a0a0c]/70 mt-1 font-medium">
              Automatische Failover-Systeme gewährleisten konstante Bereitstellung und ununterbrochene Leistung.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-[#DD0000]/50 hover:shadow-[0_10px_30px_rgba(221,0,0,0.15)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <ShieldCheck className="h-6 w-6 text-[#DD0000]" />
            </div>
            <h3 className="text-base font-black uppercase text-[#0a0a0c]">99,9% Uptime</h3>
            <p className="text-xs text-[#0a0a0c]/70 mt-1 font-medium">
              Rund um die Uhr überwachte Infrastruktur für ein zuverlässiges, sorgenfreies Seherlebnis.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}