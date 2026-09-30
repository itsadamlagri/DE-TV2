import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import Link from 'next/link';
import GermanFlag from '../components/GermanFlag';
import {
  FileText,
  AlertCircle,
  CheckCircle,
  CreditCard,
  UserCheck,
  Ban,
  RefreshCw,
  Mail,
  Scale,
  ShieldCheck,
  Gavel,
} from 'lucide-react';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/agb`;

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata = generateSEOMetadata(
  'Allgemeine Geschäftsbedingungen',
  `Lesen Sie die ${BRAND} AGB. Klare Vereinbarungen zu Abonnements, unserer Qualitätsgarantie, akzeptabler Nutzung und deutschem Gerichtsstand.`,
  '/agb'
);

// ---------------------------------------------------------------------------
// JSON-LD
// ---------------------------------------------------------------------------
const TermsSchema = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: `Allgemeine Geschäftsbedingungen | ${BRAND}`,
        description: `${BRAND} AGB. Klare Vereinbarungen zu Abonnements, Qualitätsgarantie, akzeptabler Nutzung und deutschem Gerichtsstand.`,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Allgemeine Geschäftsbedingungen', item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="terms-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------------------------
export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0c] text-[#FFFFFF]">

      <TermsSchema />

      {/* HERO */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(221,0,0,0.15),_transparent_50%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #DD000008 1px, transparent 1px), linear-gradient(to bottom, #DD000008 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 bg-[#DD0000] px-4 py-2 rounded-full mb-6 shadow-md border border-[#FFCE00]/30">
            <Scale className="w-4 h-4 text-[#FFCE00]" />
            <span className="text-[#FFFFFF] font-black text-xs uppercase tracking-widest inline-flex items-center gap-2">
              Rechtliche Vereinbarung
              <GermanFlag className="w-4 h-4" />
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] uppercase tracking-tighter leading-none mb-6">
            Allgemeine <span className="text-[#FFCE00]">Geschäftsbedingungen</span>
          </h1>

          <p className="text-lg md:text-xl text-[#FFFFFF]/80 font-bold max-w-2xl mx-auto leading-relaxed">
            Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie die Dienste und Streaming-Abonnements von {BRAND} nutzen.
          </p>

          <p className="text-xs text-[#FFFFFF]/40 mt-4 font-bold uppercase tracking-wider">
            Zuletzt aktualisiert:{' '}
            {new Date().toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">

        {/* Acceptance Box */}
        <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 md:p-8 mb-12 shadow-xl">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#DD0000]" />
              </div>
            </div>
            <div>
              <p className="text-[#0a0a0c] font-bold text-sm md:text-base leading-relaxed">
                <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-1">
                  Annahme der Bedingungen:
                </span>
                Durch den Kauf eines Abonnements oder die Nutzung der Website und Dienste von {BRAND} bestätigen Sie, an diese Allgemeinen Geschäftsbedingungen sowie an unsere Datenschutzerklärung gebunden zu sein.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              1. Beschreibung der Dienstleistung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              {BRAND} bietet digitale IPTV Streaming-Dienste an, die Abonnenten Zugang zu Live-TV-Sendern, Video-on-Demand (VOD) Filmen und Serien über das Internet ermöglichen. Unser Service ist ausschließlich für den persönlichen, nicht-kommerziellen Haushaltsgebrauch bestimmt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              2. Teilnahmeberechtigung & Verantwortlichkeiten
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Durch die Nutzung unserer Dienste versichern und garantieren Sie, dass:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Sie mindestens 18 Jahre alt und rechtlich in der Lage sind, eine verbindliche Vereinbarung einzugehen.',
                'Sie bei der Erstellung Ihres Kontos korrekte und aktuelle Informationen angeben.',
                'Sie Ihre persönlichen Zugangsdaten und Playlist-Links streng vertraulich behandeln und nicht weiterverkaufen.',
                'Sie unseren Service nicht für kommerzielles Rebroadcasting oder öffentliche Vorführungen nutzen.',
                'Sie über eine geeignete Internetverbindung verfügen (mindestens 25 Mbit/s für flüssiges 4K IPTV Streaming).',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Kontosicherheit:
                    </span>
                    Sie sind jederzeit für alle Aktivitäten verantwortlich, die unter Ihrem Konto und Ihren Zugangsdaten stattfinden.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              3. Abonnements, Preise & Zahlung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Unsere aktuellen Abonnement-Optionen und Preise finden Sie auf der Preise-Seite. Beim Kauf stimmen Sie Folgendem zu:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Zahlungen erfolgen im Voraus über sichere Zahlungsmethoden (SEPA-Überweisung, Kreditkarte, PayPal und Krypto).',
                'Abonnements werden nicht automatisch verlängert. Sie entscheiden, wann Sie verlängern.',
                'Ihr Konto wird nach erfolgreicher Zahlungsbestätigung und unserem WhatsApp-geführten Setup aktiviert.',
                'Alle Preise sind in Euro (€, inkl. MwSt.) und enthalten alle anfallenden Steuern, sofern nicht ausdrücklich anders angegeben.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f2ebeb] border-4 border-green-600 rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-green-600 font-black uppercase tracking-wide block mb-0.5">
                      Sichere Zahlung:
                    </span>
                    Alle Transaktionen werden über PCI DSS-zertifizierte Zahlungs-Gateways mit 256-Bit SSL-Verschlüsselung verarbeitet.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              4. Nutzungsrichtlinie (Fair Use)
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Es ist streng verboten, den Service für Folgendes zu nutzen:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Weiterverkauf, Restreaming oder Klonen Ihrer zugewiesenen Streaming-Lines.',
                'Streaming auf mehr Geräten gleichzeitig, als Ihr gewähltes Paket erlaubt.',
                'Versuche des Reverse Engineering, Scraping von Servern oder Überlastung des Netzwerks (DDoS).',
                'Herunterladen, dauerhaftes Aufzeichnen oder Weiterverbreiten digitaler Übertragungen.',
                'Jede Nutzung, die gegen geltendes deutsches, österreichisches, schweizerisches oder internationales Recht verstößt.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <Ban className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Konsequenzen bei Verstößen:
                    </span>
                    Bei Verstoß gegen diese Nutzungsrichtlinie behalten wir uns das Recht vor, das Konto sofort und ohne Rückerstattung zu sperren.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              5. Qualitätsgarantie & Rückerstattungen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir bieten eine vollständige 7-Tage-Qualitätsgarantie. Sollte der Service nicht wie versprochen funktionieren oder sollten technische Probleme auftreten, die unser Team nicht lösen kann, können Sie innerhalb von 7 Tagen nach dem Kauf eine vollständige Rückerstattung über unseren Support beantragen.
            </p>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Diese Garantie gilt nur für echte Service-Probleme. Sie deckt keine Meinungsänderungen, persönliche Vorlieben, lokale Internetprobleme oder Geräteinkompatibilität auf Ihrer Seite ab. Vollständige Details finden Sie in unserer{' '}
              <Link href="/rueckgabe" className="text-[#FFCE00] font-black hover:underline">
                Rückgabe & Garantie Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              6. Verfügbarkeit & Senderänderungen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Wir streben eine konstante 99,9% Uptime an. Vorübergehende Wartungen oder externe Senderänderungen können jedoch vorkommen. {BRAND} behält sich das Recht vor:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Senderlisten und VOD-Kataloge für bessere Bildqualität zu aktualisieren oder zu optimieren.',
                'Kurze geplante Server-Wartungen außerhalb der Stoßzeiten durchzuführen.',
                'Preise für zukünftige Abonnement-Perioden anzupassen.',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#FFFFFF]/80 font-bold text-sm md:text-base"
                >
                  <RefreshCw className="w-5 h-5 text-[#FFCE00] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              7. Geistiges Eigentum & Haftung
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Alle Marken, Logos, Texte und Software-Codes auf dieser Website sind geistiges Eigentum von {BRAND}. Soweit gesetzlich zulässig, haftet {BRAND} nicht für indirekte Schäden, Datenverluste oder Ausfälle, die durch Drittanbieter-Internetanbieter oder Nutzergeräte verursacht werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              8. Anwendbares Recht & Gerichtsstand
            </h2>
            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 shadow-xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[#DD0000]/10 flex items-center justify-center">
                    <Gavel className="w-5 h-5 text-[#DD0000]" />
                  </div>
                </div>
                <div>
                  <p className="text-[#0a0a0c] text-sm font-bold leading-relaxed">
                    <span className="text-[#DD0000] font-black uppercase tracking-wide block mb-0.5">
                      Anwendbares Recht:
                    </span>
                    Diese Allgemeinen Geschäftsbedingungen unterliegen dem Recht der Bundesrepublik Deutschland und werden nach diesem ausgelegt. Für Verbraucher gilt zusätzlich das zwingende Verbraucherschutzrecht ihres gewöhnlichen Aufenthaltsorts (Deutschland, Österreich oder Schweiz). Gerichtsstand für Streitigkeiten mit Kaufleuten ist Frankfurt am Main.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              9. Änderungen dieser Bedingungen
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern. Wesentliche Änderungen werden auf unserer Startseite oder per WhatsApp an aktive Abonnenten bekannt gegeben. Die weitere Nutzung unserer Dienste nach einer Aktualisierung gilt als Annahme der überarbeiteten Bedingungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFFFFF] uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-[#DD0000] rounded-full inline-block" />
              10. Kontakt & Kundensupport
            </h2>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed mb-4">
              Bei Fragen zu diesen Allgemeinen Geschäftsbedingungen oder für Support zu Ihrem Abonnement kontaktieren Sie unsere Rechts- und Support-Abteilung:
            </p>
            <div className="bg-[#f2ebeb] border-4 border-[#DD0000] rounded-3xl p-6 my-6 text-center shadow-xl">
              <Mail className="w-8 h-8 text-[#DD0000] mx-auto mb-2" />
              <p className="text-xs uppercase font-black text-[#0a0a0c]/60 tracking-widest mb-1">
                Rechts- & Kundensupport
              </p>
              <a
                href={`mailto:legal@${CONSTANTS.DOMAIN}`}
                className="text-[#0a0a0c] font-black text-xl md:text-2xl hover:text-[#DD0000] transition-colors break-all"
              >
                legal@{CONSTANTS.DOMAIN}
              </a>
            </div>
            <p className="text-[#FFFFFF]/80 text-base font-medium leading-relaxed">
              Für allgemeinen Kundensupport nutzen Sie bitte unser 24/7{' '}
              <Link href="/support" className="text-[#FFCE00] font-black hover:underline">
                WhatsApp Support Team
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FFCE00] hover:text-[#FFFFFF] transition-colors font-black text-xs uppercase tracking-widest"
          >
            ← Zurück zur Startseite
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-[#FFFFFF]/40 text-xs font-bold inline-flex items-center justify-center gap-2 w-full">
            © {new Date().getFullYear()} {BRAND}. Alle Rechte vorbehalten. Hergestellt in Deutschland
            <GermanFlag className="w-3.5 h-3.5" />
          </p>
        </div>
      </div>
    </div>
  );
}