// components/PageSchemas.tsx
import React from 'react';
import { CONSTANTS } from '@/lib/seo';

const SITE_URL = `https://${CONSTANTS.DOMAIN}`;

export function ProductSchema() {
  const commonOfferDefaults = {
    validFrom: '2026-01-01',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: ['DE', 'AT', 'CH'],
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0.00',
        currency: 'EUR',
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
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/#product`,
    name: 'IPTV Kaufen Premium Abonnement',
    sku: 'IPTV-KAUFEN-PREMIUM',
    category: 'Streaming Service',
    description: `IPTV Kaufen von ${CONSTANTS.BRAND_NAME}. Streamen Sie 36.000+ Live-Sender und 120.000+ Filme und Serien in 4K Ultra HD. Einrichtung wird per WhatsApp begleitet, kostenloser Test ist verfügbar, und alle Preise sind in Euro (inkl. MwSt.) ohne Vertragslaufzeit.`,
    image: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#primaryimage`,
      url: `${SITE_URL}/img/structer.webp`,
      contentUrl: `${SITE_URL}/img/structer.webp`,
      width: { '@type': 'QuantitativeValue', value: 1200 },
      height: { '@type': 'QuantitativeValue', value: 630 },
      caption: 'IPTV Kaufen - 4K Ultra HD Streaming Service',
      representativeOfPage: true,
    },
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
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
        price: '39.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 Gerät - 6 Monate',
        price: '49.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '1 Gerät - 12 Monate',
        price: '69.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Geräte - 3 Monate',
        price: '45.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Geräte - 6 Monate',
        price: '60.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '2 Geräte - 12 Monate',
        price: '85.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Geräte - 3 Monate',
        price: '65.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Geräte - 6 Monate',
        price: '75.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
      {
        '@type': 'Offer',
        name: '3 Geräte - 12 Monate',
        price: '99.00',
        priceCurrency: 'EUR',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/preise`,
        ...commonOfferDefaults,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}

export function FAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist IPTV und wie funktioniert es?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `IPTV steht für Internet Protocol Television. Statt eines Kabel- oder Satellitenreceivers werden Ihre Sender und Filme über Ihre Internetverbindung gestreamt. Mit ${CONSTANTS.BRAND_NAME} können Sie 36.000+ Live-Sender sowie über 120.000 Filme und Serien in 4K auf Ihrem Smart TV, Firestick, Smartphone oder Tablet anschauen.`,
        },
      },
      {
        '@type': 'Question',
        name: `Was macht ${CONSTANTS.BRAND_NAME} zum besten Anbieter IPTV in Deutschland?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${CONSTANTS.BRAND_NAME} wurde für deutschsprachige Zuschauer entwickelt und bietet 36.000+ Live-Sender mit Bundesliga, Champions League, DFB-Pokal, Formel 1 und DEL, plus über 120.000 Filme und Serien auf Abruf. Anti-Freeze-Server laufen mit dedizierter Kapazität in Frankfurt am Main für flüssige Wiedergabe auch bei großen Events.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Geräte sind mit Ihrem IPTV Service kompatibel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unser Service funktioniert auf Samsung und LG Smart TVs, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac sowie MAG und Formuler Set-Top-Boxen. Wenn Sie sich bei Ihrem Gerät nicht sicher sind, schreiben Sie uns per WhatsApp und wir prüfen es vor Ihrem Abo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie funktioniert die Einrichtung und Aktivierung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sobald Sie Ihr Paket und die Anzahl der Geräte gewählt haben, chatten wir per WhatsApp. Unser Team begleitet Sie durch die Installation und Konfiguration einer App wie IPTV Smarters Pro, IBO Player oder TiviMate und sendet Ihnen anschließend die Testinhalte. Sie testen alles kostenlos und schalten erst dann auf ein bezahltes Abo um, wenn Sie zufrieden sind.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich vor der Bezahlung einen kostenlosen Test anfordern?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Schreiben Sie uns per WhatsApp und wir richten Ihnen einen kostenlosen 24-Stunden-Test ein. So können Sie die 4K-Bildqualität prüfen, das Senderangebot für Bundesliga oder Formel 1 checken und sicherstellen, dass alles reibungslos auf Ihrem Gerät und Ihrer Internetverbindung läuft. Ohne Vertragslaufzeit und ohne Druck.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie installiere ich die IPTV App auf meinem Smart TV oder Firestick?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Für Smart TVs und Firestick laden Sie eine unterstützte App wie IPTV Smarters Pro, TiviMate, Smart IPTV oder IPTV Smarters aus dem jeweiligen App-Store herunter, dann geben Sie die Zugangsdaten ein, die wir Ihnen per WhatsApp senden. Sollte ein Schritt unklar sein, führt Sie unser Support-Team direkt im Chat Schritt für Schritt durch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Zahlungsmethoden akzeptieren Sie und in welcher Währung?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Alle Preise sind in Euro (€) inkl. MwSt. ohne Vertragslaufzeit. Wir akzeptieren Kreditkarte, PayPal, SEPA-Überweisung und Krypto über einen sicheren, verschlüsselten Checkout. Sie können zwischen einem 3-, 6- oder 12-Monats-Paket wählen und je nach Haushalt 1, 2 oder 3 Geräte gleichzeitig nutzen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist technischer Support während meines Abonnements verfügbar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, während der gesamten Laufzeit Ihres Abonnements. Schreiben Sie unserem Team jederzeit per WhatsApp für Hilfe bei der Installation, Einrichtung oder bei allem anderen. Das umfasst auch Tipps zur optimalen Nutzung Ihrer Player-App und schnelle Lösungen, falls bei Ihnen jemals Puffer auftreten sollten.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}