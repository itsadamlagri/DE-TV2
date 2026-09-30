// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (DACH — GERMANY / AUSTRIA / SWITZERLAND)
// ---------------------------------------------------------------------------
const DOMAIN = 'iptvkaufen.vip';
const BRAND_NAME = 'IPTV Kaufen';
const SITE_URL = `https://${DOMAIN}`;
const FOCUS_KEYWORD = 'iptv kaufen';
const SECONDARY_FOCUS_KEYWORD = 'iptv smarters pro';
const TERTIARY_FOCUS_KEYWORD = 'anbieter iptv';
const LOCALE = 'de_DE';
const LANGUAGE = 'de-DE';
const ADDRESS_COUNTRY = 'DE';
const CURRENCY = 'EUR';

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  TERTIARY_FOCUS_KEYWORD,
  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Primary High-Intent German Keywords
  PRIMARY_KEYWORDS: [
    'iptv kaufen',
    'iptv smarters pro',
    'anbieter iptv',
    'iptv abo kaufen',
    'iptv deutschland kaufen',
    'iptv anbieter vergleich',
    'iptv kaufen 4k',
    'bester iptv anbieter',
    'iptv subscription deutschland',
  ],

  // Secondary & Long-Tail Search Terms
  SECONDARY_KEYWORDS: [
    'iptv smarters pro deutschland',
    'iptv smarters pro einrichten',
    'iptv smarters pro app',
    'anbieter iptv vergleich',
    'iptv anbieter test',
    'iptv kaufen ohne vertrag',
    'iptv senderliste deutschland',
    'bundesliga iptv stream',
    'champions league iptv live',
    'formel 1 iptv deutschland',
    'iptv firestick kaufen',
    'smart tv iptv anbieter',
    'iptv test 24h',
    'iptv ohne vertragslaufzeit',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@iptvkaufen.vip',
    phone: '+49 30 5550 0199', // ⚠️ Replace with your real German number
    whatsapp: '+49 30 5550 0199', // ⚠️ Replace with your real WhatsApp number
    whatsappUrl: 'https://live-support.netlify.app', // ⚠️ Replace with your real wa.me link
    supportHours: '24/7 deutschsprachiger Support per E-Mail und Ticketsystem',
  },

  // Social Media (used in Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/iptvkaufenvip', // ⚠️ Replace
    instagram: 'https://instagram.com/iptvkaufenvip', // ⚠️ Replace
    facebook: 'https://facebook.com/iptvkaufenvip', // ⚠️ Replace
  },

  // Payment Methods (used in Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Krypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Cities in the DACH Region
  TARGET_REGIONS: [
    'Berlin',
    'Hamburg',
    'München',
    'Köln',
    'Frankfurt am Main',
    'Stuttgart',
    'Düsseldorf',
    'Leipzig',
    'Wien',
    'Zürich',
  ],

  // Value Propositions for German-Speaking Viewers
  USPS: [
    'Kristallklares 4K- und Full-HD-Streaming über dedizierte Frankfurt-Server mit extrem niedriger Latenz',
    'Über 20.000 Live-Sender inklusive aller deutschen Kanäle, Sport und Entertainment',
    'Ihr Zugang wird in unter 5 Minuten nach Zahlungseingang freigeschaltet',
    'Komplette Sportabdeckung: Bundesliga, Champions League, Formel 1, DAZN, Sky sowie Premium-VOD',
    'Funktioniert auf allen Geräten – Amazon Firestick, Smart TV, Android, iOS, MAG und IPTV Smarters Pro',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimisation
  const defaultDescription =
    description ||
    `IPTV kaufen beim besten Anbieter IPTV in Deutschland: 20.000+ Sender, alle deutschen Kanäle und 4K-Streaming. Sofortige Freischaltung – jetzt IPTV Smarters Pro testen!`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} – IPTV Kaufen`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        'de-DE': fullCanonicalUrl,
        'de-AT': fullCanonicalUrl,
        'de-CH': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} – ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
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
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Führender Anbieter IPTV für Deutschland, Österreich und die Schweiz mit gestochen scharfem Live-TV, allen deutschen Sendern und Premium-Sport in 4K. Jetzt IPTV kaufen und sofort streamen.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ['DE', 'AT', 'CH'],
      availableLanguage: ['German', 'Deutsch'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// NOTE: Reserve strictly for sales or reseller pages. Do NOT use on /setup
// or other informational/guide pages.
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/preise`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Deutschland',
      },
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (DACH Cities)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'Anbieter IPTV für Deutschland, Österreich und die Schweiz mit 4K-Live-TV, Sport und VOD-Streaming für Haushalte in Berlin, Hamburg, München, Wien und Zürich. IPTV Smarters Pro kompatibel.',
    priceRange: '€€',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@id': ORGANIZATION_ID,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};