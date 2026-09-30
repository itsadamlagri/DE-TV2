// app/anbieter-iptv/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/anbieter-iptv`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `Beste Anbieter IPTV Deutschland 2026 | Ehrlicher Vergleich`
);

const PAGE_DESCRIPTION = clampDescription(
  `Die besten Anbieter IPTV Deutschland 2026: 6 Kriterien, ehrliche Bewertung, Testsieger mit 9,8/10. Jetzt besten Anbieter wählen.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'anbieter iptv',
    'beste anbieter iptv deutschland',
    'anbieter iptv vergleich',
    'anbieter iptv test',
    'anbieter iptv 2026',
    'seriöse anbieter iptv',
    'anbieter iptv deutschland',
    'anbieter iptv erfahrungen',
    'anbieter iptv bewertung',
    'bester anbieter iptv',
    'anbieter iptv liste',
    'iptv kaufen',
    'iptv smarters pro',
    'iptv abo',
    '4k iptv anbieter',
    'iptv ohne vertrag',
    'iptv test kostenlos',
    'iptv smarters pro einrichten',
  ],
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'de-DE': PAGE_URL,
      'de-AT': PAGE_URL,
      'de-CH': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `Beste Anbieter IPTV Deutschland 2026 – Ehrlicher Vergleich`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'entertainment',
};

const AnbieterIPTVSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} ist ein vertrauenswürdiger Anbieter IPTV für Deutschland, Österreich und die Schweiz mit 36.000 Live TVs und 120.000 Filmen und Serien in 4K IPTV Ultra HD.`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          email: CONSTANTS.CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: [
          CONSTANTS.SOCIALS.twitter,
          CONSTANTS.SOCIALS.instagram,
          CONSTANTS.SOCIALS.facebook,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        alternateName: `${BRAND} - Besten Anbieter IPTV Deutschland`,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'de-DE',
      },
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: 'de-DE',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${PAGE_URL}/#product` },
        breadcrumb: { '@id': `${PAGE_URL}/#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Anbieter IPTV', item: PAGE_URL },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'Anbieter IPTV Deutschland – IPTV Abonnement',
        sku: 'ANBIETER-IPTV-DE',
        category: 'Streaming Service',
        description: `Bester Anbieter IPTV in Deutschland von ${BRAND}. Streamen Sie 36.000+ Live TVs und 120.000+ Filme und Serien in 4K IPTV Ultra HD. Ohne Vertragslaufzeit, mit WhatsApp Setup und Zahlung in Euro.`,
        image: `${SITE_URL}/img/structer.webp`,
        brand: { '@type': 'Brand', name: BRAND },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1255',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          { '@type': 'Offer', name: '1 Gerät - 3 Monate', priceCurrency: 'EUR', price: '39.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 3-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '1 Gerät - 6 Monate', priceCurrency: 'EUR', price: '49.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 6-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '1 Gerät - 12 Monate', priceCurrency: 'EUR', price: '69.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 12-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '2 Geräte - 3 Monate', priceCurrency: 'EUR', price: '45.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 3-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '2 Geräte - 6 Monate', priceCurrency: 'EUR', price: '60.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 6-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '2 Geräte - 12 Monate', priceCurrency: 'EUR', price: '85.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 12-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '3 Geräte - 3 Monate', priceCurrency: 'EUR', price: '65.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 3-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '3 Geräte - 6 Monate', priceCurrency: 'EUR', price: '75.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 6-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.' },
          { '@type': 'Offer', name: '3 Geräte - 12 Monate', priceCurrency: 'EUR', price: '99.00', priceValidUntil: '2027-12-31', validFrom: currentDate, availability: 'https://schema.org/InStock', url: `${SITE_URL}/preise`, description: 'Anbieter IPTV Test – 12-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          { '@type': 'Question', name: 'Welcher ist der beste Anbieter IPTV in Deutschland?', acceptedAnswer: { '@type': 'Answer', text: 'Der beste Anbieter IPTV für Sie ist der, der eigene Server betreibt, echte 4K-Bitrate liefert, alle Geräte unterstützt und per WhatsApp in Minuten antwortet. In unserem Test 2026 erreichen wir 9,8/10 Punkten – die höchste Bewertung im Vergleich.' } },
          { '@type': 'Question', name: 'Wie erkenne ich einen seriösen Anbieter IPTV?', acceptedAnswer: { '@type': 'Answer', text: 'Achten Sie auf: eigene Server (nicht Reseller), kostenlosen Test, WhatsApp-Support rund um die Uhr, Zahlung in Euro, keine Vertragslaufzeit und transparente Preise. Fehlt einer dieser Punkte, ist Vorsicht geboten.' } },
          { '@type': 'Question', name: 'Was kostet ein guter Anbieter IPTV in Deutschland?', acceptedAnswer: { '@type': 'Answer', text: 'Seriöse IPTV Anbieter in Deutschland kosten zwischen 39 € und 69 € für 3 bis 12 Monate auf einem Gerät. Alles unter 20 € pro Jahr ist meist ein Reseller mit schlechter Infrastruktur und häufigen Buffern.' } },
          { '@type': 'Question', name: 'Warum sind manche Anbieter IPTV so billig?', acceptedAnswer: { '@type': 'Answer', text: 'Billige Anbieter sind meist Reseller, die Server von anderen mieten. Sie können keine Probleme beheben und haben oft überlastete Hardware. Das führt zu Buffering während Bundesliga und anderen Live-Events.' } },
          { '@type': 'Question', name: 'Kann ich zwischen Anbieter IPTV wechseln?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Der Wechsel ist einfach: Sie erhalten neue Zugangsdaten und geben diese in Ihrer bestehenden App (z. B. IBO Player Pro oder IPTV Smarters Pro) ein. Ihr Gerät bleibt gleich, nur die Login-Daten ändern sich.' } },
          { '@type': 'Question', name: 'Brauche ich einen Vertrag bei einem Anbieter IPTV?', acceptedAnswer: { '@type': 'Answer', text: 'Bei uns nicht. Sie kaufen IPTV für 3, 6 oder 12 Monate ohne automatische Verlängerung. Nach Ablauf entscheiden Sie selbst, ob Sie verlängern. Keine Kündigungsfristen, keine versteckten Gebühren.' } },
          { '@type': 'Question', name: 'Welche Anbieter IPTV unterstützen Fire TV Stick?', acceptedAnswer: { '@type': 'Answer', text: 'Die besten Anbieter IPTV unterstützen Amazon Fire TV Stick, Samsung und LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Windows PC und Mac. Fragen Sie vor dem Kauf, ob Ihr Wunschgerät unterstützt wird.' } },
          { '@type': 'Question', name: 'Was passiert, wenn mein Anbieter IPTV ausfällt?', acceptedAnswer: { '@type': 'Answer', text: 'Bei einem seriösen Anbieter mit dedizierten Servern und Anti-Freeze Technologie passiert das praktisch nie. Sollte es zu einem Ausfall kommen, wird automatisch auf einen Backup-Server umgeleitet, ohne dass Sie es merken.' } },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="anbieter-iptv-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function AnbieterIPTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <AnbieterIPTVSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}