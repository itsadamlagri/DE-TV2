// app/iptv-kaufen/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/iptv-kaufen`;

const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 158): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

const PAGE_TITLE = clampTitle(
  `IPTV Kaufen Deutschland | 4K Streaming ohne Vertragslaufzeit`
);

const PAGE_DESCRIPTION = clampDescription(
  `IPTV Kaufen ohne Vertrag: 36.000+ Sender & 120.000+ Filme in 4K. Gratis Test, WhatsApp Setup, ab 39 €. Jetzt streamen.`
);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_TITLE, absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    'iptv kaufen',
    'iptv kaufen deutschland',
    'iptv abo kaufen',
    'iptv kaufen seriös',
    'iptv kaufen ohne vertrag',
    'iptv kaufen euro',
    'iptv abonnement kaufen',
    'iptv kaufen test',
    'bestes iptv kaufen',
    '4k iptv kaufen',
    'iptv kaufen preis',
    'iptv kaufen paypal',
    'iptv kaufen sofort',
    'iptv smarters pro',
    'anbieter iptv',
    'iptv ohne vertragslaufzeit',
    'kostenlos iptv test',
    'bundesliga iptv live',
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
        alt: `IPTV Kaufen Deutschland – 36.000+ Sender in 4K IPTV Ultra HD`,
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

const IPTVKaufenPageSchema = () => {
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
          { '@type': 'ListItem', position: 2, name: 'IPTV Kaufen', item: PAGE_URL },
        ],
      },
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: 'IPTV Kaufen Deutschland – IPTV Abonnement',
        sku: 'IPTV-KAUFEN-DE',
        category: 'Streaming Service',
        description: `IPTV kaufen in Deutschland bei ${BRAND}. Streamen Sie 36.000+ Live TVs und 120.000+ Filme und Serien in 4K IPTV Ultra HD. Kauf ohne Vertragslaufzeit, mit geführtem WhatsApp Setup, kostenlosem 24h-Test und Zahlung in Euro.`,
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
          {
            '@type': 'Offer',
            name: '1 Gerät - 3 Monate',
            priceCurrency: 'EUR',
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 3-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 6 Monate',
            priceCurrency: 'EUR',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 6-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 12 Monate',
            priceCurrency: 'EUR',
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 12-Monats-Paket auf 1 Gerät mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 3 Monate',
            priceCurrency: 'EUR',
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 3-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 6 Monate',
            priceCurrency: 'EUR',
            price: '60.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 6-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 12 Monate',
            priceCurrency: 'EUR',
            price: '85.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 12-Monats-Paket auf 2 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 3 Monate',
            priceCurrency: 'EUR',
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 3-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 6 Monate',
            priceCurrency: 'EUR',
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 6-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 12 Monate',
            priceCurrency: 'EUR',
            price: '99.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/preise`,
            description: 'IPTV Kaufen – 12-Monats-Paket auf 3 Geräten mit 36.000 Live TVs.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was kostet es, IPTV in Deutschland zu kaufen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Unsere IPTV-Pakete starten bei 39 € für 3 Monate auf 1 Gerät. Das 12-Monats-VIP Paket kostet 69 € und spart bis zu 50 % gegenüber kürzeren Laufzeiten. Multi-Screen-Pakete für 2 oder 3 Geräte sind ebenfalls verfügbar. Alle Preise in Euro inkl. MwSt., keine versteckten Gebühren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich IPTV vor dem Kauf kostenlos testen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden-Test ein. So können Sie die Bildqualität, das Senderangebot und die Stabilität testen, bevor Sie IPTV kaufen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ist IPTV kaufen in Deutschland legal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der Kauf und die Nutzung eines IPTV-Players sind legal. Was Sie streamen, liegt in Ihrer Verantwortung. Wir empfehlen immer, nur Inhalte zu nutzen, für die Sie die entsprechenden Rechte besitzen. Bei Fragen sprechen Sie uns gerne an.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Zahlungsmethoden akzeptieren Sie?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wir akzeptieren PayPal, Kreditkarte (Visa, Mastercard), SEPA-Überweisung und Kryptowährung (Bitcoin, USDT). Alle Zahlungen erfolgen in Euro, sodass keine Fremdwährungsgebühren anfallen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie lange dauert die Aktivierung nach dem Kauf?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'In der Regel erhalten Sie Ihre Zugangsdaten innerhalb von 10 Minuten nach Zahlungseingang per WhatsApp. Unser Team begleitet Sie dann durch die Installation, bis alles läuft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich nach dem Kauf kündigen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Sie kaufen IPTV ohne automatische Verlängerung und ohne Vertragsbindung. Nach Ablauf Ihres Pakets entscheiden Sie selbst, ob Sie verlängern möchten.',
            },
          },
          {
            '@type': 'Question',
            name: 'Auf welchen Geräten funktioniert IPTV nach dem Kauf?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Auf Amazon Fire TV Stick, Samsung und LG Smart TVs, Android TV, Google TV, Apple TV, iPhone, iPad, Windows PC, Mac, sowie MAG- und Formuler-Boxen. Unser Team hilft Ihnen bei der Einrichtung auf dem Gerät Ihrer Wahl.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="iptv-kaufen-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function IPTVKaufenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <IPTVKaufenPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}