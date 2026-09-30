'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '@/lib/seo';
import GermanFlag from '../components/GermanFlag';
import {
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Tv,
  Film,
  Sparkles,
  ChevronDown,
  Star,
  Award,
  TrendingUp,
  Users,
  Clock,
  Medal,
  Target,
  BarChart3,
  Crown,
  HelpCircle,
  Globe,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

const PricingSection = dynamic(() => import('../components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#DD0000] border-t-transparent" />
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('../components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

// ---------------------------------------------------------------------------
// FAQ — FULL-WIDTH COOL ACCORDION (single column, gradient, big icon badge)
// ---------------------------------------------------------------------------
function AnbieterFAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
        isOpen
          ? 'border-[#DD0000] bg-gradient-to-r from-[#1a0505] via-[#0a0a0c] to-[#1a0505] shadow-[0_20px_60px_rgba(221,0,0,0.25)]'
          : 'border-white/10 bg-white/[0.03] hover:border-[#DD0000]/50 hover:bg-white/[0.05]'
      }`}
    >
      {/* Gold top accent when open */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DD0000] via-[#FFCE00] to-[#DD0000] transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 md:p-7 flex items-center gap-4 md:gap-6"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <div
          className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-black text-base md:text-lg transition-all duration-500 ${
            isOpen
              ? 'bg-[#DD0000] text-[#FFCE00] rotate-[-6deg] scale-105 shadow-[0_8px_25px_rgba(221,0,0,0.5)]'
              : 'bg-white/5 text-[#FFCE00]/60 group-hover:bg-[#DD0000]/20 group-hover:text-[#FFCE00]'
          }`}
        >
          {num}
        </div>

        {/* Question */}
        <h3
          className={`flex-1 text-sm md:text-base lg:text-lg font-black uppercase tracking-tight transition-colors ${
            isOpen ? 'text-[#FFCE00]' : 'text-white group-hover:text-[#FFCE00]'
          }`}
        >
          {q}
        </h3>

        {/* Chevron in circle */}
        <div
          className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
            isOpen
              ? 'bg-[#FFCE00] rotate-180'
              : 'bg-white/5 group-hover:bg-[#DD0000]/30'
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
              isOpen ? 'text-[#0a0a0c]' : 'text-[#FFCE00]/70'
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-7 pb-6 md:pb-7 pl-[4.5rem] md:pl-[6rem]">
          <div className="border-l-2 border-[#DD0000] pl-5">
            <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// RANKING PODIUM CARD
// ---------------------------------------------------------------------------
function RankingCard({
  rank,
  name,
  score,
  highlight,
  features,
}: {
  rank: number;
  name: string;
  score: string;
  highlight?: boolean;
  features: string[];
}) {
  const medalColors = ['#FFCE00', '#C0C0C0', '#CD7F32'];
  const medal = medalColors[rank - 1];

  return (
    <div
      className={`relative rounded-3xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 ${
        highlight
          ? 'bg-gradient-to-br from-[#DD0000] to-[#8A0000] border-2 border-[#FFCE00] shadow-[0_25px_60px_rgba(221,0,0,0.35)] text-white'
          : 'bg-white border-2 border-[#0a0a0c]/8 shadow-md text-[#0a0a0c]'
      }`}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFCE00] text-[#0a0a0c] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
          ★ Test-Sieger
        </div>
      )}

      <div className="flex items-center justify-between mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-md"
          style={{ backgroundColor: medal, color: '#0a0a0c' }}
        >
          #{rank}
        </div>
        <div className="text-right">
          <div
            className={`text-3xl font-black leading-none ${
              highlight ? 'text-[#FFCE00]' : 'text-[#DD0000]'
            }`}
          >
            {score}
          </div>
          <div
            className={`text-[10px] font-black uppercase tracking-widest ${
              highlight ? 'text-white/70' : 'text-[#0a0a0c]/50'
            }`}
          >
            Score / 10
          </div>
        </div>
      </div>

      <h3
        className={`text-lg md:text-xl font-black uppercase tracking-tight mb-4 ${
          highlight ? 'text-white' : 'text-[#0a0a0c]'
        }`}
      >
        {name}
      </h3>

      <ul className="space-y-2 mb-5">
        {features.map((f, i) => (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm font-medium ${
              highlight ? 'text-white/90' : 'text-[#0a0a0c]/70'
            }`}
          >
            <CheckCircle2
              className={`w-4 h-4 shrink-0 mt-0.5 ${
                highlight ? 'text-[#FFCE00]' : 'text-[#DD0000]'
              }`}
            />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// SCORE BAR
// ---------------------------------------------------------------------------
function ScoreBar({ label, score, icon: Icon }: { label: string; score: number; icon: any }) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 border border-[#0a0a0c]/8 hover:border-[#DD0000] transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#DD0000]" />
        </div>
        <h3 className="text-sm md:text-base font-black uppercase tracking-tight text-[#0a0a0c]">
          {label}
        </h3>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2.5 bg-[#0a0a0c]/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#DD0000] to-[#FFCE00] rounded-full transition-all duration-1000"
            style={{ width: `${score * 10}%` }}
          />
        </div>
        <span className="text-sm font-black text-[#DD0000] shrink-0">
          {score}/10
        </span>
      </div>
    </div>
  );
}

export default function AnbieterIPTVPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-slate-100 overflow-hidden">

      {/* ================================================================= */}
      {/* 1. HERO                                                            */}
      {/* ================================================================= */}
      <section className="relative px-4 py-24 md:py-32 bg-[#08080A] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#FFCE00_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.08] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DD0000]/8 blur-[180px] rounded-full pointer-events-none" />

        <FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFCE00]/10 border border-[#FFCE00]/40 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
            <Award className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFCE00] font-extrabold text-xs uppercase tracking-widest flex items-center gap-2">
              Anbieter IPTV Vergleich · Deutschland 2026
              <GermanFlag className="w-5 h-5 rounded-[2px]" />
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white mb-6 leading-[1.02]">
            BESTE <span className="text-[#FFCE00]">ANBIETER IPTV</span><br />
            IN DEUTSCHLAND
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
            Wir haben IPTV Anbieter in Deutschland nach 6 objektiven Kriterien getestet – Server-Qualität, Bildqualität, Support, Preis, Geräte-Kompatibilität und Zuverlässigkeit. Hier ist unser ehrliches Ergebnis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-12">
            <Link
              href="/preise"
              className="w-full sm:w-auto text-center whitespace-nowrap py-4 px-8 rounded-full bg-[#DD0000] text-white font-black text-sm hover:bg-[#B00000] transition-all hover:scale-105 uppercase tracking-wider shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
            >
              Jetzt IPTV Kaufen
            </Link>
            <Link
              href="/kostenlos-testen"
              className="w-full sm:w-auto text-center whitespace-nowrap py-4 px-8 rounded-full bg-white/5 text-white border border-white/20 font-black text-sm hover:bg-white/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <PlayCircle className="w-5 h-5 text-[#FFCE00]" />
              Anbieter Kostenlos Testen
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '4.9/5', label: 'Kundenbewertung' },
              { value: '10.000+', label: 'Aktive Kunden' },
              { value: '99,9 %', label: 'Server Uptime' },
              { value: '24/7', label: 'WhatsApp Support' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4"
              >
                <div className="text-xl md:text-2xl font-black text-[#FFCE00] mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-black text-slate-300 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ================================================================= */}
      {/* 2. PARTNER SLIDER                                                  */}
      {/* ================================================================= */}
      <div className="min-h-[128px] bg-[#0a0a0c]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* ================================================================= */}
      {/* 3. RANKING PODIUM                                                  */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <Medal className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                Anbieter IPTV Ranking
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              Die 3 besten <span className="text-[#DD0000]">Anbieter IPTV</span> 2026
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Bewertet nach 6 Kriterien: Server, Bildqualität, Support, Preis, Geräte und Zuverlässigkeit.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
            <FadeInItem className="md:mt-8">
              <RankingCard
                rank={2}
                name="Anbieter B"
                score="8.4"
                features={[
                  'Gute Server-Infrastruktur',
                  'Solide 4K-Qualität',
                  'Support per WhatsApp',
                  'Preis im Mittelfeld',
                  'Weniger Sender als Platz 1',
                ]}
              />
            </FadeInItem>

            <FadeInItem>
              <RankingCard
                rank={1}
                name={CONSTANTS.BRAND_NAME}
                score="9.8"
                highlight
                features={[
                  'Dedizierte Server in Frankfurt',
                  'Echte 4K Bitrate (25+ Mbps)',
                  '24/7 WhatsApp in unter 5 Min',
                  'Beste Preis-Leistung in DE',
                  'Alle Geräte unterstützt',
                  '10.000+ zufriedene Kunden',
                ]}
              />
            </FadeInItem>

            <FadeInItem className="md:mt-8">
              <RankingCard
                rank={3}
                name="Anbieter C"
                score="7.9"
                features={[
                  'Budget-Anbieter mit niedrigem Preis',
                  'Häufige Buffer bei Live-Sport',
                  'Nur E-Mail Support',
                  'Begrenzte Geräte-Unterstützung',
                  'Kein kostenloser Test',
                ]}
              />
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 4. BEWERTUNGSKRITERIEN — SCORE BARS                                */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/15 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                Bewertungskriterien
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Wie wir <span className="text-[#DD0000]">Anbieter IPTV</span> bewerten
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              Jeder Anbieter wird anhand dieser 6 Kriterien mit Punkten von 1 bis 10 bewertet. Unser eigener Service erreicht aktuell 9,8/10.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { label: 'Server-Infrastruktur', score: 10, icon: Zap },
              { label: 'Bild- & Tonqualität', score: 10, icon: Tv },
              { label: 'Support & Erreichbarkeit', score: 10, icon: MessageCircle },
              { label: 'Preis-Leistung', score: 9, icon: TrendingUp },
              { label: 'Geräte-Kompatibilität', score: 10, icon: CheckCircle2 },
              { label: 'Zuverlässigkeit & Uptime', score: 10, icon: ShieldCheck },
            ].map((item, idx) => (
              <FadeInItem key={idx}>
                <ScoreBar label={item.label} score={item.score} icon={item.icon} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 5. PRICING SECTION (jetzt früh, nach 3 Sektionen)                  */}
      {/* ================================================================= */}
      <div className="min-h-[600px] bg-[#0a0a0c]" id="pricing-section">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* ================================================================= */}
      {/* 6. WINNER HIGHLIGHT                                                */}
      {/* ================================================================= */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0c] to-[#1a0505] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DD0000]/15 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#FFCE00]/30 bg-[#0a0a0c]/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DD0000] via-[#FFCE00] to-[#DD0000]" />

              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#0a0a0c] px-5 py-2 rounded-full mb-6 font-black text-xs uppercase tracking-widest shadow-lg">
                  <Crown className="w-4 h-4" />
                  Unser Test-Sieger 2026
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6">
                  WARUM WIR DER <span className="text-[#FFCE00]">BESTE ANBIETER IPTV</span> SIND
                </h2>

                <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed text-slate-300">
                  Wir haben unsere Infrastruktur für deutsche Haushalte gebaut – mit Servern in Frankfurt, echter 4K-Bitrate und 24/7 WhatsApp Support, der wirklich antwortet.
                </p>
              </div>

              <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { value: '36.000+', label: 'Live Sender', icon: Tv },
                  { value: '120.000+', label: 'Filme & Serien', icon: Film },
                  { value: '99,9 %', label: 'Server Uptime', icon: ShieldCheck },
                  { value: '< 5 Min', label: 'Support Antwort', icon: Clock },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                    >
                      <Icon className="w-6 h-6 text-[#FFCE00] mx-auto mb-2" />
                      <div className="text-lg md:text-xl font-black text-white">
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </FadeInStagger>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/preise"
                  className="text-center whitespace-nowrap py-4 px-8 rounded-full bg-[#DD0000] text-white font-black text-sm hover:bg-[#B00000] transition-all hover:scale-105 uppercase tracking-wider shadow-lg shadow-[#DD0000]/40 border border-[#FFCE00]"
                >
                  Jetzt IPTV Kaufen
                </Link>
                <Link
                  href="/kostenlos-testen"
                  className="text-center whitespace-nowrap py-4 px-8 rounded-full bg-white/5 text-white border border-white/20 font-black text-sm hover:bg-white/10 transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <PlayCircle className="w-5 h-5 text-[#FFCE00]" />
                  Kostenlos Testen
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 7. TESTIMONIALS                                                    */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#f2ebeb] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/10 border border-[#DD0000]/25 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#DD0000]" />
              <span className="text-[#DD0000] font-black text-xs uppercase tracking-widest">
                Kundenstimmen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A0A0C] uppercase tracking-tight leading-tight mb-6">
              Was unsere <span className="text-[#DD0000]">Kunden sagen</span>
            </h2>
            <p className="text-[#0A0A0C]/75 font-semibold text-base md:text-lg leading-relaxed">
              Über 10.000 Haushalte in Deutschland, Österreich und der Schweiz nutzen unseren Service.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Michael R.',
                city: 'Berlin',
                text: 'Nach drei anderen Anbietern endlich einer, der bei Bundesliga nicht buffert. Setup per WhatsApp in 5 Minuten, sehr zu empfehlen.',
              },
              {
                name: 'Sabine K.',
                city: 'München',
                text: 'Der Support antwortet wirklich sofort. Ich hatte eine Frage zum Fire TV Stick und binnen 2 Minuten eine Antwort per WhatsApp.',
              },
              {
                name: 'Thomas B.',
                city: 'Hamburg',
                text: 'Preis-Leistung unschlagbar. Zahle jetzt 69 € im Jahr statt 80 € pro Monat bei Sky. Gleiche Sender, besseres Bild, ohne Vertrag.',
              },
            ].map((t, i) => (
              <FadeInItem
                key={i}
                className="bg-white rounded-3xl p-7 border border-[#DD0000]/15 hover:border-[#DD0000] hover:shadow-[0_20px_50px_rgba(221,0,0,0.12)] transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#FFCE00] text-[#FFCE00]" />
                  ))}
                </div>
                <p className="text-[#0a0a0c]/80 font-medium leading-relaxed mb-5 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#0a0a0c]/8">
                  <div className="w-10 h-10 rounded-full bg-[#DD0000] flex items-center justify-center font-black text-[#FFCE00]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-black text-[#0a0a0c] uppercase tracking-tight">
                      {t.name}
                    </div>
                    <div className="text-xs font-bold text-[#0a0a0c]/50">
                      {t.city}, Deutschland
                    </div>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 8. FAQ — FULL-WIDTH SINGLE COLUMN (cool new design)                */}
      {/* ================================================================= */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DD0000]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#DD0000]/15 border border-[#DD0000]/40 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[#FFCE00]" />
              <span className="text-[#FFCE00] font-black text-xs uppercase tracking-widest">
                FAQ · Anbieter IPTV
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Häufige Fragen zu <span className="text-[#FFCE00]">Anbieter IPTV</span>
            </h2>
            <p className="text-slate-300 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Die wichtigsten Antworten zur Wahl des richtigen Anbieter IPTV in Deutschland.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4">
            {[
              {
                q: 'Welcher ist der beste Anbieter IPTV in Deutschland?',
                a: 'Der beste Anbieter IPTV für Sie ist der, der eigene Server betreibt, echte 4K-Bitrate liefert, alle Geräte unterstützt und per WhatsApp in Minuten antwortet. In unserem Test 2026 erreichen wir 9,8/10 Punkten – die höchste Bewertung im Vergleich.',
              },
              {
                q: 'Wie erkenne ich einen seriösen Anbieter IPTV?',
                a: 'Achten Sie auf: eigene Server (nicht Reseller), kostenlosen Test, WhatsApp-Support rund um die Uhr, Zahlung in Euro, keine Vertragslaufzeit und transparente Preise. Fehlt einer dieser Punkte, ist Vorsicht geboten.',
              },
              {
                q: 'Was kostet ein guter Anbieter IPTV in Deutschland?',
                a: 'Seriöse IPTV Anbieter in Deutschland kosten zwischen 39 € und 69 € für 3 bis 12 Monate auf einem Gerät. Alles unter 20 € pro Jahr ist meist ein Reseller mit schlechter Infrastruktur und häufigen Buffern.',
              },
              {
                q: 'Warum sind manche Anbieter IPTV so billig?',
                a: 'Billige Anbieter sind meist Reseller, die Server von anderen mieten. Sie können keine Probleme beheben und haben oft überlastete Hardware. Das führt zu Buffering während Bundesliga und anderen Live-Events.',
              },
              {
                q: 'Kann ich zwischen Anbieter IPTV wechseln?',
                a: 'Ja. Der Wechsel ist einfach: Sie erhalten neue Zugangsdaten und geben diese in Ihrer bestehenden App (z. B. IBO Player Pro oder IPTV Smarters Pro) ein. Ihr Gerät bleibt gleich, nur die Login-Daten ändern sich.',
              },
              {
                q: 'Brauche ich einen Vertrag bei einem Anbieter IPTV?',
                a: 'Bei uns nicht. Sie kaufen IPTV für 3, 6 oder 12 Monate ohne automatische Verlängerung. Nach Ablauf entscheiden Sie selbst, ob Sie verlängern. Keine Kündigungsfristen, keine versteckten Gebühren.',
              },
              {
                q: 'Welche Anbieter IPTV unterstützen Fire TV Stick?',
                a: 'Die besten Anbieter IPTV unterstützen Amazon Fire TV Stick, Samsung und LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Windows PC und Mac. Fragen Sie vor dem Kauf, ob Ihr Wunschgerät unterstützt wird.',
              },
              {
                q: 'Was passiert, wenn mein Anbieter IPTV ausfällt?',
                a: 'Bei einem seriösen Anbieter mit dedizierten Servern und Anti-Freeze Technologie passiert das praktisch nie. Sollte es zu einem Ausfall kommen, wird automatisch auf einen Backup-Server umgeleitet, ohne dass Sie es merken.',
              },
            ].map((faq, i) => (
              <FadeInItem key={i}>
                <AnbieterFAQItem q={faq.q} a={faq.a} index={i} />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 9. FINAL CTA                                                       */}
      {/* ================================================================= */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[#f2ebeb]">
        <div className="absolute inset-0 bg-[radial-gradient(#DD0000_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-[#DD0000] bg-white p-8 md:p-14 text-center shadow-2xl">
              <div className="h-2 w-full bg-gradient-to-r from-[#DD0000] via-[#FFCE00] to-[#DD0000] absolute top-0 left-0" />

              <div className="inline-flex items-center gap-2 rounded-full border border-[#DD0000]/30 bg-[#DD0000]/10 px-4 py-2 mb-6">
                <Target className="w-4 h-4 text-[#DD0000]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#DD0000] flex items-center gap-2">
                  Beste Anbieter IPTV Deutschland
                  <GermanFlag className="w-4 h-4" />
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0a0a0c] leading-[1.05] mb-6">
                WERDEN SIE UNSER <span className="text-[#DD0000]">NÄCHSTER KUNDE</span>
              </h2>

              <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#0a0a0c]/70 mb-10">
                Testen Sie uns kostenlos und überzeugen Sie sich selbst, warum wir der beste Anbieter IPTV in Deutschland sind. Ohne Vertragslaufzeit, mit WhatsApp-Setup.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <Link
                  href="/preise"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#DD0000] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-[#B00000] transition-all hover:scale-105 shadow-lg shadow-[#DD0000]/30 border border-[#FFCE00]"
                >
                  Jetzt IPTV Kaufen
                </Link>
                <Link
                  href="/kostenlos-testen"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full bg-[#0a0a0c] border border-[#0a0a0c] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-[#1a1a1e] transition-all hover:scale-105"
                >
                  <PlayCircle className="w-4 h-4 text-[#FFCE00]" />
                  Kostenlos Testen
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}