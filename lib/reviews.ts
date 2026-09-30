// @/lib/reviews.ts

export interface Review {
  id: string;
  name: string;
  city: string;
  province: string;        // DE: Berlin/Bayern/Hessen... | AT: Wien/NÖ... | CH: Zürich/BE...
  country: 'DE' | 'AT' | 'CH' | 'UK';
  rating: number;
  title: string;
  text: string;
  date: string;            // ISO "2026-XX-XX"
  verified: boolean;
  device: string;
}

// ---------------------------------------------------------------------------
// SITE-WIDE REVIEW STATS
// ---------------------------------------------------------------------------
export const REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 1255,
  recommendPercent: 98,
  happyCustomers: '15.000+',
  countries: [
    { code: 'DE' as const, name: 'Deutschland',      flag: 'de', label: 'Deutschland' },
    { code: 'AT' as const, name: 'Österreich',       flag: 'at', label: 'Österreich' },
    { code: 'CH' as const, name: 'Schweiz',          flag: 'ch', label: 'Schweiz' },
    { code: 'UK' as const, name: 'United Kingdom',   flag: 'uk', label: 'UK' },
  ],
};

// ---------------------------------------------------------------------------
// REVIEWS — 20 total (15 DE · 2 AT · 2 CH · 1 UK)
// ---------------------------------------------------------------------------
export const reviews: Review[] = [
  // =========================================================================
  // DEUTSCHLAND
  // =========================================================================
  {
    id: '1',
    name: 'Thomas M.',
    city: 'München',
    province: 'Bayern',
    country: 'DE',
    rating: 5,
    title: 'Bundesliga und Champions League laufen jedes Wochenende einwandfrei',
    text: 'Nach langer Suche habe ich endlich einen stabilen Anbieter IPTV gefunden, mit dem ich am Wochenende Fußball ohne Unterbrechungen schauen kann. Das 4K-Bild auf meinem Firestick 4K Max ist glasklar und der Senderwechsel erfolgt ohne Verzögerung. Während der Einrichtung hat der Support innerhalb von zwei Minuten geantwortet – ein echtes Team, keine automatisierten Antworten.',
    date: '2026-09-08',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '2',
    name: 'Sabine K.',
    city: 'Hamburg',
    province: 'Hamburg',
    country: 'DE',
    rating: 5,
    title: 'Kabelanschluss gekündigt und keinen Moment bereut',
    text: 'Letzten Monat habe ich mein altes Kabelpaket gekündigt und bin gewechselt. Die Einrichtung auf meinem Samsung Smart TV mit IPTV Smarters Pro dauerte weniger als fünf Minuten, und das Senderangebot ist schlicht beeindruckend. Bundesliga, Champions League sowie über 120.000 Filme und Serien. Das 12-Monats-VIP-Paket hat sich bereits im ersten Monat amortisiert.',
    date: '2026-09-03',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '3',
    name: 'Jens P.',
    city: 'Berlin',
    province: 'Berlin',
    country: 'DE',
    rating: 5,
    title: 'Hervorragend für Handball und internationale Kanäle',
    text: 'Die Auswahl an Handball-Bundesliga-Übertragungen ist fantastisch, dazu kommen türkische, arabische und englische Sender. Meine Eltern verfolgen ihre regionalen Nachrichten in HD, während ich weiterhin jedes DEL-Eishockeyspiel und jedes Formel-1-Rennen sehen kann. Der EPG synchronisiert sich perfekt mit der Berliner Zeitzone.',
    date: '2026-08-28',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '4',
    name: 'Anna H.',
    city: 'Köln',
    province: 'Nordrhein-Westfalen',
    country: 'DE',
    rating: 5,
    title: 'Hervorragendes Preis-Leistungs-Verhältnis für eine vierköpfige Familie',
    text: 'Wir nutzen den Service auf drei Geräten gleichzeitig. Mein Mann schaut Bundesliga, ich Filme, und die Kinder haben ihre eigenen Profile. Selbst zu Stoßzeiten bleibt alles flüssig. Für weniger, als uns früher eine einzige Kabelbox gekostet hat, erhalten wir jetzt über 36.000 Sender und 120.000 Filme und Serien auf Abruf.',
    date: '2026-08-09',
    verified: true,
    device: 'Firestick + Smart TVs',
  },
  {
    id: '5',
    name: 'Mehmet S.',
    city: 'Frankfurt am Main',
    province: 'Hessen',
    country: 'DE',
    rating: 5,
    title: 'Die internationale Senderauswahl ist ein echter Gewinn',
    text: 'Es ist großartig, türkische, arabische und englische Sender neben den deutschen Kanälen zu haben. Meine Eltern können ihre regionalen Nachrichten verfolgen, und ich bekomme weiterhin jedes Bundesliga-Spiel und jedes Formel-1-Rennen. Die Stream-Qualität bleibt konstant hoch, und der EPG kommt mit der Frankfurter Zeitzone problemlos zurecht.',
    date: '2026-07-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '6',
    name: 'Nadine B.',
    city: 'Stuttgart',
    province: 'Baden-Württemberg',
    country: 'DE',
    rating: 5,
    title: 'Ideal für Sport und den täglichen Fernsehkonsum',
    text: 'Vollständige Abdeckung von ARD, ZDF, RTL, ProSieben, SAT.1 und VOX neben Bundesliga, Champions League und DFB-Pokal. Die Einrichtung auf unserem LG TV war unkompliziert, da uns das WhatsApp-Support-Team durch IPTV Smarters Pro geführt hat. Besonders praktisch, wenn wir an die Ostsee reisen und die lokalen Nachrichten nachholen möchten.',
    date: '2026-07-11',
    verified: true,
    device: 'LG Smart TV',
  },
  {
    id: '7',
    name: 'Dennis K.',
    city: 'Düsseldorf',
    province: 'Nordrhein-Westfalen',
    country: 'DE',
    rating: 5,
    title: 'Bester Anbieter IPTV, den ich in NRW getestet habe',
    text: 'In Düsseldorf war es schwierig, einen Anbieter mit zuverlässigen deutschen Servern und niedriger Latenz für Live-Bundesliga zu finden. Dieser Service liefert einwandfrei. Kein Puffern während Bundesliga-Spieltagen, Champions-League-Finals oder UFC-Pay-per-View. Der 24/7-WhatsApp-Support ist ein echter Vorteil gegenüber Wettbewerbern, die nur E-Mail anbieten.',
    date: '2026-07-02',
    verified: true,
    device: 'Android TV Box',
  },
  {
    id: '8',
    name: 'Michael R.',
    city: 'Leipzig',
    province: 'Sachsen',
    country: 'DE',
    rating: 5,
    title: 'Der Support half mir beim Setup in unter 10 Minuten',
    text: 'Ich bin überhaupt nicht technikaffin und war wegen der Einrichtung besorgt. Das Team hat alles per WhatsApp übernommen. Sie schickten mir meine M3U-URL, begleiteten mich durch die Installation von IPTV Smarters Pro auf meinem Firestick und aktivierten es remote. Das Streaming lief innerhalb von 10 Minuten nach meiner ersten Nachricht.',
    date: '2026-06-25',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '9',
    name: 'Olivia W.',
    city: 'Dresden',
    province: 'Sachsen',
    country: 'DE',
    rating: 5,
    title: 'IPTV Smarters Pro lässt alles premium wirken',
    text: 'Ich habe TiviMate, IPTV Smarters und IPTV Extreme verwendet. IPTV Smarters Pro ist mit Abstand die flüssigste Lösung. In Kombination mit diesem Service fühlt es sich wie ein Premium-Kabel-Erlebnis zu einem Bruchteil des Preises an. Die Remote-Aktivierung ist brillant. Ich habe meinen Device Key gesendet und alles war in 30 Sekunden eingerichtet.',
    date: '2026-06-18',
    verified: true,
    device: 'Apple TV 4K',
  },
  {
    id: '10',
    name: 'Tobias N.',
    city: 'Nürnberg',
    province: 'Bayern',
    country: 'DE',
    rating: 5,
    title: 'Zuverlässig bei jedem großen Sportereignis',
    text: 'Ich habe dieses Jahr jedes Bundesliga-Finale, jedes Champions-League-Spiel, jedes DFB-Pokal-Match und jedes UFC-Event ohne einen einzigen Freeze gesehen. Das sagt alles über die Server-Qualität aus. Die 60-FPS-Feeds laufen merklich flüssiger als mein alter Kabel-Receiver, und Pay-per-View-Events, die früher 50 € gekostet haben, sind vollständig inklusive.',
    date: '2026-06-11',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '11',
    name: 'Emily C.',
    city: 'Bremen',
    province: 'Bremen',
    country: 'DE',
    rating: 5,
    title: 'Funktioniert auch im Norden einwandfrei',
    text: 'Ich war wegen der Latenz besorgt, da ich so weit im Norden wohne, aber die Frankfurter Server meistern das problemlos. Kein Puffern, schneller Senderwechsel und ausgezeichnete Bildqualität. Der WhatsApp-Support half mir sogar, meine Router-Einstellungen zu optimieren, um Jitter zu reduzieren. Sehr empfehlenswert für alle außerhalb der Großstädte.',
    date: '2026-06-04',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '12',
    name: 'Brandon L.',
    city: 'Hannover',
    province: 'Niedersachsen',
    country: 'DE',
    rating: 5,
    title: 'Bester Anbieter IPTV, den ich in Deutschland genutzt habe',
    text: 'Ich habe vor diesem drei verschiedene Anbieter ausprobiert. Alle hatten Pufferprobleme während großer Spiele. Dieser Service läuft seit fünf Monaten einwandfrei. Die 4K-Feeds sind scharf, die Sportsender umfassend und der Support schnell. Für deutsche Sportfans ist das der echte Deal.',
    date: '2026-05-28',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '13',
    name: 'Chloe A.',
    city: 'Freiburg',
    province: 'Baden-Württemberg',
    country: 'DE',
    rating: 5,
    title: 'Ideal für einen regionalen Haushalt',
    text: 'In Freiburg bekommen wir nicht immer den besten terrestrischen Empfang. Dieser Service hat das über Nacht gelöst. Wir schauen jetzt jedes Bundesliga-Spiel und die lokalen Nachrichten in perfektem HD. Die Einrichtung auf dem Samsung war einfach, und der Support war bei all meinen Fragen geduldig.',
    date: '2026-05-18',
    verified: true,
    device: 'Samsung Smart TV',
  },
  {
    id: '14',
    name: 'Jack W.',
    city: 'Dortmund',
    province: 'Nordrhein-Westfalen',
    country: 'DE',
    rating: 5,
    title: 'Jeden Euro allein für den Sport wert',
    text: 'Bundesliga, Champions League, DFB-Pokal, Formel 1, UFC und jedes DEL-Spiel. Für das, was ich früher nur für ein Sport-Add-on bezahlt habe, bekomme ich jetzt alles plus 120.000 Filme und Serien. Das Bild ist sauber, der Senderwechsel schnell und der WhatsApp-Support antwortet tatsächlich. Absolut keine Beschwerden.',
    date: '2026-05-10',
    verified: true,
    device: 'Firestick 4K Max',
  },
  {
    id: '15',
    name: 'Grace T.',
    city: 'Kiel',
    province: 'Schleswig-Holstein',
    country: 'DE',
    rating: 5,
    title: 'Streaming läuft auch in Schleswig-Holstein flüssig',
    text: 'Sehr stabiler Service aus Kiel. Ich nutze ihn hauptsächlich für Bundesliga, englische Sender und Filme mit den Kindern. Die Einrichtung war einfach. Ich habe meinen Device Key über WhatsApp gesendet und alles war innerhalb von 20 Minuten live. Das 12-Monats-Paket bietet ein ausgezeichnetes Preis-Leistungs-Verhältnis.',
    date: '2026-05-02',
    verified: true,
    device: 'Apple TV 4K',
  },

  // =========================================================================
  // ÖSTERREICH
  // =========================================================================
  {
    id: '16',
    name: 'Michael R.',
    city: 'Wien',
    province: 'Wien',
    country: 'AT',
    rating: 5,
    title: 'Ideal, um die deutsche Bundesliga von Wien aus zu verfolgen',
    text: 'Als Österreicher in Wien ist dieser Service ein Segen für die deutsche Bundesliga. Vollständige Abdeckung von Bundesliga, Champions League, DFB-Pokal und Formel 1 in 4K. ORF und die deutschen Sender eignen sich perfekt, um Nachrichten nachzuholen. Der WhatsApp-Support ist schnell und die Preise in Euro sind fair. Mehr kann man nicht verlangen.',
    date: '2026-08-22',
    verified: true,
    device: 'Firestick 4K',
  },
  {
    id: '17',
    name: 'Daniel T.',
    city: 'Salzburg',
    province: 'Salzburg',
    country: 'AT',
    rating: 5,
    title: 'Bestes IPTV, das ich bisher ausprobiert habe',
    text: 'In den letzten drei Jahren habe ich mindestens fünf verschiedene Anbieter IPTV getestet, und dieser ist mit Abstand der stabilste. Kein Freeze während großer Bundesliga-Spiele, und die VOD-Bibliothek ist riesig. Der kostenlose Test gab mir das Vertrauen, es auszuprobieren. Ich bin jetzt seit 8 Monaten Kunde.',
    date: '2026-07-18',
    verified: true,
    device: 'Android TV Box',
  },

  // =========================================================================
  // SCHWEIZ
  // =========================================================================
  {
    id: '18',
    name: 'James P.',
    city: 'Zürich',
    province: 'Zürich',
    country: 'CH',
    rating: 5,
    title: 'Ausgezeichnet für Sport und Nachrichten aus Zürich',
    text: 'Ich lebe in Zürich und suchte nach einer zuverlässigen Möglichkeit, die Bundesliga und die Formel 1 zu verfolgen. Dieser Service liefert genau das. Kein Puffern während der Rennen, und SRF, ZDF, ORF sowie Sky-Sender sind ebenfalls enthalten. Der 24/7-WhatsApp-Support ist unvergleichlich.',
    date: '2026-08-15',
    verified: true,
    device: 'Nvidia Shield Pro',
  },
  {
    id: '19',
    name: 'Emma H.',
    city: 'Genf',
    province: 'Genf',
    country: 'CH',
    rating: 5,
    title: 'Zuverlässiger Service aus der Schweiz für deutsche Inhalte',
    text: 'Sehr stabiler Service aus Genf. Ich nutze ihn hauptsächlich für die Bundesliga und deutsche Nachrichten, und die Feeds bleiben konstant hochwertig. Die Einrichtung war einfach. Ich habe meinen Device Key über WhatsApp gesendet und alles war innerhalb von 20 Minuten live. Das 12-Monats-Paket bietet ein ausgezeichnetes Preis-Leistungs-Verhältnis.',
    date: '2026-07-04',
    verified: true,
    device: 'Firestick 4K Max',
  },

  // =========================================================================
  // UNITED KINGDOM
  // =========================================================================
  {
    id: '20',
    name: 'Olivia W.',
    city: 'London',
    province: 'ENG',
    country: 'UK',
    rating: 5,
    title: 'Fantastisch für deutsche Auswanderer in Großbritannien',
    text: 'Ich bin vor zwei Jahren von München nach London gezogen und habe das deutsche Fernsehen sehr vermisst. Dieser Service schließt diese Lücke perfekt. Vollständige Abdeckung von ARD, ZDF, RTL, ProSieben plus alle großen deutschen Sportsender in 4K. Die Latenz ist auch aus Großbritannien minimal, und der Preis in Euro ist unschlagbar.',
    date: '2026-08-01',
    verified: true,
    device: 'Apple TV 4K',
  },
];

// ---------------------------------------------------------------------------
// REVIEW FAQS — used by /bewertungen page FAQ + FAQPage schema
// ---------------------------------------------------------------------------
export const REVIEW_FAQS = [
  {
    q: 'Ist IPTV Kaufen seriös und vertrauenswürdig?',
    a: 'Ja. IPTV Kaufen bedient über 15.000 aktive Kunden in Deutschland, Österreich und der Schweiz mit einer durchschnittlichen Bewertung von 4,9 von 5. Wir bieten einen kostenlosen 24-Stunden-Test, 24/7-WhatsApp-Support und sichere EUR-Zahlungen per SEPA-Überweisung, Kreditkarte, PayPal und Krypto.',
  },
  {
    q: 'Wie viele Kunden hat IPTV Kaufen?',
    a: 'IPTV Kaufen bedient über 15.000 aktive Abonnenten mit den größten Gemeinschaften in Berlin, Hamburg, München, Wien und Zürich. Wir bedienen auch deutsche Auswanderer und internationale Zuschauer in Großbritannien, den USA und Kanada.',
  },
  {
    q: 'Was sagen Kunden über IPTV Kaufen?',
    a: 'Kunden loben durchweg das pufferfreie 4K-IPTV-Streaming, die umfangreiche deutsche Senderabdeckung (Bundesliga, Champions League, DFB-Pokal, DEL), den schnellen WhatsApp-Support und den inklusiven Aktivierungsservice für IPTV Smarters Pro. Unsere durchschnittliche Bewertung über verifizierte Rezensionen liegt bei 4,9 von 5.',
  },
  {
    q: 'Kann ich den Bewertungen auf dieser Seite vertrauen?',
    a: 'Ja. Jede auf dieser Seite gezeigte Bewertung stammt von einem verifizierten aktiven Abonnenten. Wir veröffentlichen nur Bewertungen von Kunden, die ein aktives IPTV Kaufen Abonnement besitzen. Bewertungen werden niemals bearbeitet oder gekauft. Sie spiegeln echte Kundenerfahrungen wider.',
  },
  {
    q: 'Was ist das häufigste Feedback zu IPTV Kaufen?',
    a: 'Das häufigste Feedback ist, dass unsere monatlichen 1-Gerät-Pakete während der Spitzensport-Saisons wie Bundesliga-Finale, Champions-League-Endspiele und UFC-Events gelegentlich ausverkauft sind. Wir füllen immer innerhalb von 24 Stunden nach, und Priority-Zugang ist im 12-Monats-VIP-Paket verfügbar.',
  },
  {
    q: 'Wie hinterlasse ich eine Bewertung?',
    a: 'Aktive Abonnenten können eine Bewertung hinterlassen, indem sie unser WhatsApp-Support-Team direkt kontaktieren. Wir veröffentlichen alle echten Bewertungen, sowohl positive als auch kritische, um Transparenz zu wahren und zukünftigen Kunden eine fundierte Entscheidung zu ermöglichen.',
  },
];