// app/preise/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

// ---------------------------------------------------------------------------
// SEO SAFETY HELPERS — enforce char limits
// ---------------------------------------------------------------------------
const clampTitle = (s: string, max = 60): string =>
  s.length <= max ? s : s.slice(0, max - 1).trimEnd() + '…';

const clampDescription = (s: string, max = 160): string =>
  s.length <= max ? s : s.slice(0, max - 3).trimEnd() + '...';

// SEO CONSTANTS
const SITE_URL = CONSTANTS.SITE_URL;
const BRAND = CONSTANTS.BRAND_NAME;
const PAGE_URL = `${SITE_URL}/preise`;

// ---------------------------------------------------------------------------
// SEO STRINGS
// ---------------------------------------------------------------------------
const PAGE_TITLE = clampTitle(
  `IPTV Kaufen Preise & Pakete – Jetzt Günstig Kaufen`
);

const PAGE_DESCRIPTION = clampDescription(
  `4K IPTV kaufen: 36.000 Sender, 120.000 Filme, Bundesliga live. Gratis testen, Einrichtung per WhatsApp, ab €39.`
);

// ---------------------------------------------------------------------------
// METADATA CONFIGURATION
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  authors: [{ name: `${BRAND} Team` }],
  creator: BRAND,
  publisher: BRAND,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    locale: CONSTANTS.LOCALE,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${BRAND} Preise — IPTV Kaufen Pakete in 4K mit 36.000 Live TVs`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}/img/structer.webp`],
  },
  category: 'entertainment',
  keywords: [
    CONSTANTS.FOCUS_KEYWORD,              // iptv kaufen
    CONSTANTS.SECONDARY_FOCUS_KEYWORD,    // iptv smarters pro
    CONSTANTS.TERTIARY_FOCUS_KEYWORD,     // anbieter iptv
    'iptv kaufen preise',
    'iptv kaufen pakete',
    'iptv kaufen abonnement',
    'iptv kaufen 4k',
    'besten anbieter iptv',
    'iptv smarters pro preise',
    'anbieter iptv alle sender',
    'kostenlos iptv',
    'iptv test kostenlos',
    'iptv ohne vertragslaufzeit',
    'iptv firestick kaufen',
    'iptv smarters pro',
    'bundesliga iptv live',
    'champions league iptv stream',
    'formel 1 iptv deutschland',
    'german iptv',
    'iptv germany',
  ],
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMAS — Organization, Product, FAQ, BreadcrumbList
// ---------------------------------------------------------------------------
const PricingPageSchema = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  // Common Digital Delivery Schema Specs — DACH region
  const digitalDeliveryDetails = {
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: CONSTANTS.CURRENCY,
      },
      shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: ['DE', 'AT', 'CH'],
      },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: 0,
          maxValue: 0,
          unitCode: 'DAY',
        },
      },
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['DE', 'AT', 'CH'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ORGANIZATION
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND,
        alternateName: `${BRAND} Streaming`,
        url: SITE_URL,
        logo: `${SITE_URL}/img/iptv-logo.webp`,
        email: CONSTANTS.CONTACT?.email || '',
        telephone: CONSTANTS.CONTACT?.phone || '',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT?.phone || '',
          email: CONSTANTS.CONTACT?.email || '',
          contactType: 'customer service',
          availableLanguage: ['German', 'Deutsch'],
          areaServed: ['DE', 'AT', 'CH'],
          contactOption: 'https://schema.org/TollFree',
        },
        sameAs: Object.values(CONSTANTS.SOCIALS ?? {}),
      },

      // PRODUCT — Pricing Offers with Digital Delivery (EUR)
      {
        '@type': 'Product',
        '@id': `${PAGE_URL}/#product`,
        name: `${BRAND} IPTV Kaufen Abonnement Pakete`,
        alternateName: 'IPTV Kaufen',
        image: `${SITE_URL}/img/structer.webp`,
        description: `${BRAND} bietet Premium IPTV Kaufen Pakete ab 39 € mit 36.000 Live TVs, 120.000 Filme und Serien in 4K IPTV Qualität. Einrichtung wird per WhatsApp begleitet und ein kostenloser IPTV Test ist vor dem IPTV kaufen verfügbar.`,
        brand: {
          '@type': 'Brand',
          '@id': `${SITE_URL}/#brand`,
          name: BRAND,
        },
        sku: 'IPTV-KAUFEN-PRICING',
        category: 'Streaming Service',
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
            priceCurrency: CONSTANTS.CURRENCY,
            price: '39.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3-Monats ${BRAND} Abonnement auf 1 Gerät mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 6 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '49.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6-Monats ${BRAND} Abonnement auf 1 Gerät mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '1 Gerät - 12 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '69.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12-Monats ${BRAND} Abonnement auf 1 Gerät mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 3 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '45.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3-Monats ${BRAND} Abonnement auf 2 Geräten mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 6 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '60.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6-Monats ${BRAND} Abonnement auf 2 Geräten mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '2 Geräte - 12 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '85.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12-Monats ${BRAND} Abonnement auf 2 Geräten mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 3 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '65.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `3-Monats ${BRAND} Abonnement auf 3 Geräten mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 6 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '75.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `6-Monats ${BRAND} Abonnement auf 3 Geräten mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
          {
            '@type': 'Offer',
            name: '3 Geräte - 12 Monate',
            priceCurrency: CONSTANTS.CURRENCY,
            price: '99.00',
            priceValidUntil: '2027-12-31',
            validFrom: currentDate,
            availability: 'https://schema.org/InStock',
            url: PAGE_URL,
            description: `12-Monats ${BRAND} Abonnement auf 3 Geräten mit 36.000 Live TVs und 120.000 Filme und Serien.`,
            ...digitalDeliveryDetails,
          },
        ],
      },

      // FAQ SECTION — German DACH
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `Welche Zahlungsmethoden akzeptiert ${BRAND}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${BRAND} akzeptiert alle gängigen Kreditkarten (Visa, Mastercard, American Express), PayPal, SEPA-Überweisung und Kryptowährungen (Bitcoin, Ethereum, USDT). Alle Preise sind in Euro (inkl. MwSt.) und jede Zahlung wird über verschlüsselte 256-Bit SSL-Verbindungen verarbeitet.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich mein IPTV Abonnement später upgraden oder ändern?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja, Sie können jederzeit upgraden, um mehr Geräte hinzuzufügen oder auf einen längeren Zeitraum zu wechseln. Schreiben Sie einfach unserem WhatsApp-Helpdesk und wir passen Ihr Konto sofort an.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Bin ich an einen Vertrag oder eine automatische Verlängerung gebunden?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Nein, absolut nicht. Es gibt keine langfristigen Verträge und keine automatischen Verlängerungen. Jedes IPTV Kaufen Paket ist eine einmalige Vorauszahlung, die nach Ablauf der Laufzeit automatisch endet.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Was passiert, wenn mein IPTV Abonnement abläuft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Wir senden Ihnen vor Ablauf Ihres Abonnements eine Erinnerung. Sie können einfach per WhatsApp verlängern. Wenn Sie sich gegen eine Verlängerung entscheiden, endet der IPTV Service automatisch ohne weitere Verpflichtungen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Bieten Sie einen kostenlosen IPTV Test vor der Buchung an?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden IPTV Test ein. So können Sie die 4K IPTV Bildqualität und das Senderangebot auf Ihrem eigenen Gerät und Ihrer Internetverbindung testen. Erst dann IPTV kaufen.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich IPTV Kaufen auf mehreren Geräten gleichzeitig nutzen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja, je nach gewähltem Paket. Sie können beim Checkout 1, 2 oder 3 gleichzeitige Geräte auswählen, um in mehreren Räumen gleichzeitig zu schauen. Jeder im Haushalt kann schauen, was er möchte.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Gibt es Rabatte für längere IPTV Abonnements?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ja. Die 12-Monats-Pakete bieten die höchsten Ersparnisse – bis zu 50% günstiger als die kürzeren Laufzeiten. Das ist die beste Option für Haushalte, die langfristig dabei bleiben möchten.`,
            },
          },
          {
            '@type': 'Question',
            name: 'Benötige ich ein VPN für IPTV Kaufen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Ein VPN ist nicht erforderlich. Unsere Server sind für deutsche, österreichische und schweizerische ISPs optimiert und liefern reibungsloses, pufferfreies Streaming auf Ihrer Heimverbindung.`,
            },
          },
        ],
      },

      // BREADCRUMB — German
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Startseite',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'IPTV Kaufen Preise',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      id="pricing-page-schema"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

// ---------------------------------------------------------------------------
// RESPONSIVE PRICING LAYOUT
// ---------------------------------------------------------------------------
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#0a0a0c] text-[#FFFFFF]">
      <PricingPageSchema />
      <main className="flex-grow w-full">{children}</main>
    </div>
  );
}