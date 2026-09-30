// @/lib/channels-data.ts

// ===========================================================================
// COUNTRY CODE TYPE
// ===========================================================================
export type CountryCode = 'DE' | 'AT' | 'CH' | 'UK' | 'US' | 'EU' | 'CN' | 'IN' | 'PK' | 'JP' | 'KR' | 'ME' | 'PH' | 'TH' | 'VN' | 'ID' | 'MY' | 'TR' | 'RU' | 'FR' | 'IT' | 'ES' | 'NL' | 'PL';

// ===========================================================================
// CHANNEL INTERFACE
// ===========================================================================
export interface Channel {
  name: string;
  quality: '4K UHD' | 'FHD 60FPS' | 'HD';
  genre?: string;
  description: string;
  whyWatch?: string;
  country?: CountryCode;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChannelCategory {
  slug: string;
  name: string;
  totalChannels: number;
  description: string;
  longDescription: string;
  keywords: string[];
  channels: Channel[];
  faqs: FAQItem[];
  featured?: boolean;
}

// ---------------------------------------------------------------------------
// CATEGORIES — DACH-focused
// ---------------------------------------------------------------------------
export const channelsData: ChannelCategory[] = [
  // =========================================================================
  // 1. SPORT — DACH
  // =========================================================================
  {
    slug: 'sports',
    name: 'Alle Sport-Sender',
    totalChannels: 3000,
    description:
      'Jede wichtige Sportart in flüssigen 60FPS. Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL Eishockey, Handball-Bundesliga und Sky Sport inklusive. Dazu internationale Kanäle wie ESPN, DAZN und Sky Sports.',
    longDescription:
      'Herkömmliche Kabelanbieter zwingen Sportfans in teure, gestaffelte Pakete mit langen Laufzeiten. Bei IPTV Kaufen öffnen Sie das komplette deutsche Sportuniversum: Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL Eishockey, Handball-Bundesliga und alle großen internationalen Events zu einem Bruchteil der üblichen Kosten. Unsere dedizierten Server in Frankfurt mit reservierter Bandbreite sind auf 60FPS High-Bitrate-Übertragung optimiert und garantieren eine ruckelfreie Wiedergabe an Bundesliga-Spieltagen, Champions-League-Finals oder jedem anderen Top-Sportereignis.',
    keywords: [
      'anbieter iptv sport',
      'iptv kaufen sport',
      'bundesliga iptv live',
      'champions league iptv stream',
      'dfb-pokal iptv',
      'formel 1 iptv deutschland',
      'sky sport iptv',
      'dazn iptv',
      'del eishockey iptv',
      'handball bundesliga iptv',
      'sport iptv deutschland',
      'iptv smarters pro sport',
    ],
    channels: [
      { name: 'Sky Sport Bundesliga HD', quality: 'FHD 60FPS', genre: 'Bundesliga', country: 'DE', description: 'Jede Bundesliga-Partie live, inklusive Konferenz und Analyseformaten.', popular: true },
      { name: 'Sky Sport Bundesliga 2 HD', quality: 'FHD 60FPS', genre: '2. Bundesliga', country: 'DE', description: 'Vollständige 2. Bundesliga mit Konferenzschaltung.', popular: true },
      { name: 'Sky Sport Premier League HD', quality: 'FHD 60FPS', genre: 'Premier League', country: 'DE', description: 'Live-Spiele der Premier League mit deutschem Kommentar.', popular: true },
      { name: 'Sky Sport F1 HD', quality: 'FHD 60FPS', genre: 'Formel 1', country: 'DE', description: 'Jedes Formel-1-Rennen samt Qualifying und Trainingssessions.', popular: true },
      { name: 'Sky Sport Tennis HD', quality: 'FHD 60FPS', genre: 'Tennis', country: 'DE', description: 'Grand-Slam-Tennis sowie ATP- und WTA-Turniere live.' },
      { name: 'Sky Sport Golf HD', quality: 'FHD 60FPS', genre: 'Golf', country: 'DE', description: 'PGA Tour, DP World Tour und Major Championships.' },
      { name: 'Sky Sport News HD', quality: 'FHD 60FPS', genre: 'Sport News', country: 'DE', description: 'Deutsche Sportnachrichten mit aktuellen Highlights.' },
      { name: 'DAZN 1 HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', country: 'DE', description: 'Champions League, Bundesliga und internationale Sportevents.', popular: true },
      { name: 'DAZN 2 HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', country: 'DE', description: 'Zusätzlicher DAZN-Feed für parallele Sportevents.' },
      { name: 'DAZN Bundesliga HD', quality: 'FHD 60FPS', genre: 'Bundesliga', country: 'DE', description: 'Bundesliga- und 2.-Bundesliga-Konferenz über DAZN.', popular: true },
      { name: 'DAZN Champions League HD', quality: 'FHD 60FPS', genre: 'Champions League', country: 'DE', description: 'UEFA Champions League live mit deutschem Kommentar.' },
      { name: 'ARD Sportschau HD', quality: 'FHD 60FPS', genre: 'Bundesliga Highlights', country: 'DE', description: 'Sportschau mit Zusammenfassungen der Bundesliga-Spieltage.' },
      { name: 'ZDF Sportstudio HD', quality: 'FHD 60FPS', genre: 'Sport Magazin', country: 'DE', description: 'ZDF Sportstudio mit Bundesliga und Sportschau.' },
      { name: 'Sport1 HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', country: 'DE', description: 'Deutsche Sportberichterstattung mit Bundesliga und internationalem Sport.' },
      { name: 'Eurosport 1 HD', quality: 'FHD 60FPS', genre: 'Tennis & Radsport', country: 'EU', description: 'Grand-Slam-Tennis, Tour de France und Wintersport.' },
      { name: 'Eurosport 2 HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', country: 'EU', description: 'Zusätzlicher europäischer Sportsender.' },
      { name: 'DEL Eishockey HD', quality: 'FHD 60FPS', genre: 'DEL', country: 'DE', description: 'Jede DEL-Eishockeypartie live in HD.', popular: true },
      { name: 'Handball Bundesliga HD', quality: 'FHD 60FPS', genre: 'Handball', country: 'DE', description: 'Komplette Handball-Bundesliga inklusive Konferenz.', popular: true },
      { name: 'ORF Sport Plus HD', quality: 'FHD 60FPS', genre: 'Österreich Sport', country: 'AT', description: 'Österreichische Sportberichterstattung mit Ski Alpin und Fußball.' },
      { name: 'Sky Sport Austria HD', quality: 'FHD 60FPS', genre: 'Österreich Sport', country: 'AT', description: 'Österreichische Bundesliga und internationale Sportevents.' },
      { name: 'SRF Sport HD', quality: 'FHD 60FPS', genre: 'Schweiz Sport', country: 'CH', description: 'Schweizer Sport mit Super League und Ski Alpin.' },
      { name: 'Sky Sports Main Event', quality: 'FHD 60FPS', genre: 'Premier League', country: 'UK', description: 'Englische Premier League mit UK-Kommentar.', popular: true },
      { name: 'Sky Sports F1', quality: 'FHD 60FPS', genre: 'Formel 1', country: 'UK', description: 'Dedizierter F1-Kanal mit Onboard-Kameras und Rennwochenende.' },
      { name: 'Sky Sports Premier League', quality: 'FHD 60FPS', genre: 'Football', country: 'UK', description: 'Premier League mit jeder übertragenen Partie.' },
      { name: 'Sky Sports Cricket', quality: 'FHD 60FPS', genre: 'Cricket', country: 'UK', description: 'England Cricket, internationale Touren und The Ashes.' },
      { name: 'Sky Sports Golf', quality: 'FHD 60FPS', genre: 'Golf', country: 'UK', description: 'PGA Tour und Major-Championship-Berichterstattung.' },
      { name: 'TNT Sports 1 HD', quality: 'FHD 60FPS', genre: 'Champions League', country: 'UK', description: 'Champions-League-Fußball und UFC-Berichterstattung.' },
      { name: 'ESPN HD', quality: 'FHD 60FPS', genre: 'US Sport', country: 'US', description: 'NFL, NBA, MLB und UFC aus den USA.', popular: true },
      { name: 'ESPN 2 HD', quality: 'FHD 60FPS', genre: 'US Sport', country: 'US', description: 'Zusätzliches US-Sportprogramm inklusive College Football.' },
      { name: 'NFL Network HD', quality: 'FHD 60FPS', genre: 'NFL', country: 'US', description: 'Rund um die Uhr NFL inklusive Thursday Night Football.', popular: true },
      { name: 'NBA TV HD', quality: 'FHD 60FPS', genre: 'NBA', country: 'US', description: 'Rund um die Uhr NBA-Berichterstattung und Live-Analysen.', popular: true },
      { name: 'DAZN Boxing HD', quality: 'FHD 60FPS', genre: 'Boxen', country: 'DE', description: 'Matchroom Boxing, Golden Boy und große Box-PPV-Events.', popular: true },
      { name: 'UFC Fight Pass Live', quality: 'FHD 60FPS', genre: 'MMA', country: 'US', description: 'UFC Numbered Events, Fight Nights und Contender Series.', popular: true },
      { name: 'WWE Network', quality: 'FHD 60FPS', genre: 'Wrestling', country: 'US', description: 'WWE Raw, SmackDown, NXT und alle PPV-Events.' },
      { name: 'Motorsport TV HD', quality: 'FHD 60FPS', genre: 'Motorsport', country: 'EU', description: 'MotoGP, Formel E und weitere Motorsport-Serien.' },
      { name: 'RTL Formel 1 HD', quality: 'FHD 60FPS', genre: 'Formel 1', country: 'DE', description: 'Formel-1-Rennen mit deutschem Kommentar.' },
      { name: 'Sky Sport MotoGP HD', quality: 'FHD 60FPS', genre: 'MotoGP', country: 'DE', description: 'MotoGP-Rennen und Qualifyings live.' },
      { name: 'Sportdigital HD', quality: 'FHD 60FPS', genre: 'Fußball International', country: 'DE', description: 'Internationale Fußball-Ligen und Wettbewerbe.' },
      { name: 'Eurosport Player HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', country: 'EU', description: 'Eurosport-Streaming mit Live-Events und Highlights.' },
      { name: 'Red Bull TV HD', quality: 'FHD 60FPS', genre: 'Extrem-Sport', country: 'EU', description: 'Extremsport, Motorsport und Abenteuerprogrammierung.' },
      { name: 'DAZN NFL HD', quality: 'FHD 60FPS', genre: 'NFL', country: 'DE', description: 'NFL-Partien mit deutschem Kommentar.' },
      { name: 'DAZN NBA HD', quality: 'FHD 60FPS', genre: 'NBA', country: 'DE', description: 'NBA-Partien und Playoff-Berichterstattung.' },
      { name: 'DAZN Serie A HD', quality: 'FHD 60FPS', genre: 'Serie A', country: 'DE', description: 'Italienische Serie A live.' },
      { name: 'DAZN LaLiga HD', quality: 'FHD 60FPS', genre: 'La Liga', country: 'DE', description: 'Spanische La Liga live.' },
      { name: 'Sport1+ HD', quality: 'FHD 60FPS', genre: 'Multi-Sport', country: 'DE', description: 'Erweiterte Sportberichterstattung mit US-Sport und internationalem Sport.' },
      { name: 'Tennis Channel HD', quality: 'FHD 60FPS', genre: 'Tennis', country: 'US', description: 'Rund um die Uhr Tennis mit ATP- und WTA-Turnieren.' },
      { name: 'Golf Channel HD', quality: 'FHD 60FPS', genre: 'Golf', country: 'US', description: 'PGA Tour, LPGA und Major-Championship-Berichterstattung.' },
      { name: 'F1 TV Pro', quality: 'FHD 60FPS', genre: 'Formel 1', country: 'EU', description: 'Formel-1-Rennen mit Multi-Kamera und Live-Timing.' },
      { name: 'Sky Sport Rugby HD', quality: 'FHD 60FPS', genre: 'Rugby', country: 'UK', description: 'Rugby Union und Rugby League live.' },
    ],
    faqs: [
      {
        question: 'Kann ich Bundesliga, Champions League, DFB-Pokal, Formel 1 und UFC Pay-per-View live sehen?',
        answer:
          'Ja. Jedes Senderpaket enthält vollständige Live-Übertragungen von Bundesliga, Champions League, DFB-Pokal, Formel 1, DEL Eishockey, Handball-Bundesliga sowie allen großen UFC- und Box-Pay-per-View-Events ohne Aufpreis. Was bei klassischem Pay-per-View 50 € oder mehr kostet, ist in Ihrem Abonnement enthalten.',
      },
      {
        question: 'Gibt es eine Verzögerung gegenüber herkömmlichem Kabel-TV?',
        answer:
          'Nein. Unsere dedizierten Server in Frankfurt arbeiten mit 60FPS-High-Bitrate-Verbindungen und minimaler Latenz (unter 10 ms), sodass Sie Live-Events in Echtzeit ohne wahrnehmbare Verzögerung verfolgen.',
      },
      {
        question: 'Bieten Sie Catch-Up für verpasste Spiele an?',
        answer:
          'Ja. Die meisten Sportsender verfügen über eine 7-Tage-Catch-Up-Funktion und einen vollständig synchronisierten EPG-Programmführer, damit Sie jede verpasste Partie nachträglich ansehen können.',
      },
    ],
    featured: true,
  },

  // =========================================================================
  // 2. DEUTSCHE SENDER
  // =========================================================================
  {
    slug: 'german',
    name: 'Deutsche Sender',
    totalChannels: 500,
    description:
      'Das komplette Angebot deutscher öffentlich-rechtlicher und privater Sender in Full HD. ARD, ZDF, RTL, ProSieben, SAT.1, VOX und regionale Sender mit 7-Tage-Catch-Up und EPG.',
    longDescription:
      'Jeder deutschsprachige Haushalt verdient vollen Zugriff auf lokale Nachrichten, regionale Übertragungen und nationale Unterhaltung. Unser deutsches Senderangebot umfasst jeden großen Sender: ARD, ZDF, RTL, ProSieben, SAT.1, VOX sowie regionale Kanäle aus jedem Bundesland. Ob lokale Nachrichten, Tatort oder eine Dokumentation auf ARTE – Sie erhalten das komplette deutsche Fernseherlebnis in Full HD mit einem vollständig synchronisierten EPG-Programmführer. Einfach IPTV kaufen und sofort alle deutschen Sender genießen.',
    keywords: [
      'iptv kaufen deutsche sender',
      'ard iptv',
      'zdf iptv',
      'rtl iptv',
      'prosieben iptv',
      'sat1 iptv',
      'deutsche sender iptv',
      'anbieter iptv alle sender',
      'iptv smarters pro deutsche sender',
    ],
    channels: [
      { name: 'Das Erste HD', quality: 'FHD 60FPS', genre: 'Öffentlich-Rechtlich', country: 'DE', description: 'ARD-Hauptprogramm mit Tagesschau, Tatort und Live-Sport.', popular: true },
      { name: 'ARD alpha HD', quality: 'FHD 60FPS', genre: 'Bildung', country: 'DE', description: 'Bildungs- und Kulturprogrammierung von ARD alpha.' },
      { name: 'ARD One HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'DE', description: 'Unterhaltung, Serien und Wiederholungen aus der ARD.' },
      { name: 'Tagesschau24 HD', quality: 'FHD 60FPS', genre: '24/7 Nachrichten', country: 'DE', description: 'Rund um die Uhr deutsche und internationale Nachrichten.', popular: true },
      { name: 'ARD Sportschau HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'DE', description: 'Sportschau mit Bundesliga-Zusammenfassungen und Live-Sport.' },
      { name: 'BR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Bayern', country: 'DE', description: 'Bayerisches Regionalprogramm mit Nachrichten und Kultur.' },
      { name: 'NDR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Nord', country: 'DE', description: 'Norddeutsches Regionalprogramm mit Hamburg und Niedersachsen.' },
      { name: 'WDR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional NRW', country: 'DE', description: 'Westdeutsches Regionalprogramm mit Köln und Ruhrgebiet.' },
      { name: 'SWR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Südwest', country: 'DE', description: 'Südwestdeutsches Regionalprogramm mit Stuttgart und Mainz.' },
      { name: 'MDR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Ost', country: 'DE', description: 'Mitteldeutsches Regionalprogramm mit Leipzig und Dresden.' },
      { name: 'HR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Hessen', country: 'DE', description: 'Hessisches Regionalprogramm mit Frankfurt.' },
      { name: 'RBB Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Berlin', country: 'DE', description: 'Berlin-Brandenburg Regionalprogramm.' },
      { name: 'SR Fernsehen HD', quality: 'FHD 60FPS', genre: 'Regional Saarland', country: 'DE', description: 'Saarländisches Regionalprogramm.' },
      { name: 'Radio Bremen TV HD', quality: 'FHD 60FPS', genre: 'Regional Bremen', country: 'DE', description: 'Bremisches Regionalprogramm.' },
      { name: 'ZDF HD', quality: 'FHD 60FPS', genre: 'Öffentlich-Rechtlich', country: 'DE', description: 'ZDF-Hauptprogramm mit heute, Terra X und Live-Sport.', popular: true },
      { name: 'ZDFneo HD', quality: 'FHD 60FPS', genre: 'Junge Zielgruppe', country: 'DE', description: 'ZDFneo mit Dokumentationen, Comedy und jungen Formaten.' },
      { name: 'ZDFinfo HD', quality: 'FHD 60FPS', genre: 'Dokumentation', country: 'DE', description: 'Dokumentationen und Informationssendungen von ZDFinfo.' },
      { name: '3sat HD', quality: 'FHD 60FPS', genre: 'Kultur', country: 'DE', description: 'Deutschsprachiges Kulturprogramm mit Wissenschaft und Dokus.' },
      { name: 'ARTE HD', quality: 'FHD 60FPS', genre: 'Kultur', country: 'DE', description: 'Deutsch-französischer Kultursender mit Dokumentationen.', popular: true },
      { name: 'phoenix HD', quality: 'FHD 60FPS', genre: 'Politik', country: 'DE', description: 'Politik- und Nachrichtenkanal von ARD und ZDF.' },
      { name: 'KiKA HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Kinderkanal von ARD und ZDF mit Sendungen für alle Altersgruppen.', popular: true },
      { name: 'RTL HD', quality: 'FHD 60FPS', genre: 'Privatsender', country: 'DE', description: 'RTL mit GZSZ, Bauer sucht Frau und Live-Sport.', popular: true },
      { name: 'RTL ZWEI HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'DE', description: 'RTL ZWEI mit Reality-TV, Dokus und Comedy.' },
      { name: 'VOX HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'DE', description: 'VOX mit Kochshows, Krimis und Quiz-Sendungen.', popular: true },
      { name: 'n-tv HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'DE', description: 'Deutscher Nachrichtenkanal mit Wirtschaft und Politik.', popular: true },
      { name: 'RTL Crime HD', quality: 'FHD 60FPS', genre: 'Krimi', country: 'DE', description: 'Krimis und Kriminaldokumentationen von RTL Crime.' },
      { name: 'RTL Living HD', quality: 'FHD 60FPS', genre: 'Lifestyle', country: 'DE', description: 'Lifestyle-, Wohn- und Kochsendungen auf RTL Living.' },
      { name: 'RTL Passion HD', quality: 'FHD 60FPS', genre: 'Drama', country: 'DE', description: 'Romantische Dramen und Serien auf RTL Passion.' },
      { name: 'Super RTL HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Kinderprogramm mit Cartoons und Familienserien.' },
      { name: 'RTLup HD', quality: 'FHD 60FPS', genre: 'Wiederholungen', country: 'DE', description: 'Klassische RTL-Serien und Shows auf RTLup.' },
      { name: 'TOGGO plus HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Kinderprogramm mit Cartoons und Zeichentrickfilmen.' },
      { name: 'NITRO HD', quality: 'FHD 60FPS', genre: 'Männersender', country: 'DE', description: 'Action, Motorsport und Männersendungen auf NITRO.' },
      { name: 'RTL Nitro HD', quality: 'FHD 60FPS', genre: 'Action', country: 'DE', description: 'Action-Serien und Motorsport-Sendungen.' },
      { name: 'SAT.1 HD', quality: 'FHD 60FPS', genre: 'Privatsender', country: 'DE', description: 'SAT.1 mit Filmen, Shows und Live-Sport.', popular: true },
      { name: 'ProSieben HD', quality: 'FHD 60FPS', genre: 'Privatsender', country: 'DE', description: 'ProSieben mit US-Serien, Reality-Shows und Comedy.', popular: true },
      { name: 'kabel eins HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'DE', description: 'kabel eins mit Serien, Dokus und Spielfilmen.' },
      { name: 'sixx HD', quality: 'FHD 60FPS', genre: 'Frauensender', country: 'DE', description: 'sixx mit Serien und Lifestyle für Frauen.' },
      { name: 'SAT.1 Gold HD', quality: 'FHD 60FPS', genre: 'Wiederholungen', country: 'DE', description: 'Klassiker und Wiederholungen auf SAT.1 Gold.' },
      { name: 'ProSieben MAXX HD', quality: 'FHD 60FPS', genre: 'Männersender', country: 'DE', description: 'ProSieben MAXX mit Animes, Action und Dokus.' },
      { name: 'kabel eins Doku HD', quality: 'FHD 60FPS', genre: 'Dokumentation', country: 'DE', description: 'Dokumentationen und Reportagen auf kabel eins Doku.' },
      { name: 'RTLplus HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'DE', description: 'Unterhaltung und Serien auf RTLplus.' },
      { name: 'WELT HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'DE', description: 'Deutsche Nachrichten und politische Analyse.' },
      { name: 'Euronews Deutsch HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'DE', description: 'Europäische Nachrichten auf Deutsch.' },
      { name: 'DW Deutsch HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'DE', description: 'Deutsche Welle mit internationalen Nachrichten.' },
      { name: 'ServusTV HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'AT', description: 'Österreichischer Sender mit Sport und Dokumentationen.' },
      { name: 'PULS 4 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'AT', description: 'Österreichischer Privatsender mit Shows und Serien.' },
      { name: 'ORF 1 HD', quality: 'FHD 60FPS', genre: 'Österreich', country: 'AT', description: 'Österreichischer öffentlich-rechtlicher Hauptsender.', popular: true },
      { name: 'ORF 2 HD', quality: 'FHD 60FPS', genre: 'Österreich', country: 'AT', description: 'ORF 2 mit regionalem Programm und Kultur.' },
      { name: 'ORF III HD', quality: 'FHD 60FPS', genre: 'Kultur', country: 'AT', description: 'Kultur- und Bildungsprogramm von ORF III.' },
      { name: 'SRF 1 HD', quality: 'FHD 60FPS', genre: 'Schweiz', country: 'CH', description: 'Schweizer öffentlich-rechtlicher Hauptsender.', popular: true },
      { name: 'SRF zwei HD', quality: 'FHD 60FPS', genre: 'Schweiz', country: 'CH', description: 'Schweizer Sport und Unterhaltung.' },
      { name: 'SRF info HD', quality: 'FHD 60FPS', genre: 'Schweiz Nachrichten', country: 'CH', description: 'Schweizer Nachrichten und Information.' },
      { name: '3+ HD', quality: 'FHD 60FPS', genre: 'Schweiz', country: 'CH', description: 'Schweizer Privatsender mit Filmen und Serien.' },
    ],
    faqs: [
      {
        question: 'Kann ich deutsche Sender auch außerhalb Deutschlands sehen?',
        answer:
          'Ja. Unsere IPTV-Streams funktionieren weltweit ohne geografische Einschränkungen. Sie können ARD, ZDF, RTL, ProSieben, SAT.1 und alle deutschen Sender von überall auf der Welt ohne VPN empfangen.',
      },
      {
        question: 'Sind regionale deutsche Sender enthalten?',
        answer:
          'Ja. Unser Angebot umfasst regionale Sender aus jedem Bundesland, sodass Zuschauer in Bayern, NRW, Hessen, Sachsen und anderen Regionen ihre lokalen Nachrichten empfangen können.',
      },
      {
        question: 'Synchronisiert sich der EPG-Guide richtig mit deutschen Zeitzonen?',
        answer:
          'Ja. Unser EPG-TV-Guide wird automatisch alle 6 Stunden synchronisiert und bildet die deutsche Zeitzone (MEZ/MESZ) korrekt ab.',
      },
    ],
  },

  // =========================================================================
  // 3. ÖSTERREICHISCHE SENDER
  // =========================================================================
  {
    slug: 'austria',
    name: 'Österreichische Sender',
    totalChannels: 200,
    description:
      'Alle österreichischen Sender in Full HD. ORF 1, ORF 2, ServusTV, PULS 4 und regionale Sender mit EPG und 7-Tage-Catch-Up.',
    longDescription:
      'Das komplette österreichische Fernsehangebot für Zuschauer in Österreich und österreichische Auswanderer: ORF 1, ORF 2, ORF III, ServusTV, PULS 4 und regionale Sender aus jedem Bundesland. Ob Bundesliga, Ski Alpin oder österreichische Nachrichten – Sie erhalten das komplette österreichische Fernseherlebnis in Full HD. Einfach IPTV kaufen und alle österreichischen Sender streamen.',
    keywords: [
      'iptv kaufen österreich',
      'österreichische sender iptv',
      'orf iptv',
      'orf 1 iptv',
      'orf 2 iptv',
      'servustv iptv',
      'puls4 iptv',
      'austria iptv',
      'anbieter iptv österreich',
    ],
    channels: [
      { name: 'ORF 1 HD', quality: 'FHD 60FPS', genre: 'Öffentlich-Rechtlich', country: 'AT', description: 'ORF 1 mit österreichischem Sport und Shows.', popular: true },
      { name: 'ORF 2 HD', quality: 'FHD 60FPS', genre: 'Öffentlich-Rechtlich', country: 'AT', description: 'ORF 2 mit Bundesland-Heute und Kultur.', popular: true },
      { name: 'ORF III HD', quality: 'FHD 60FPS', genre: 'Kultur', country: 'AT', description: 'Kultur- und Bildungsprogramm von ORF III.' },
      { name: 'ORF Sport Plus HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'AT', description: 'Österreichische Sportberichterstattung mit Ski Alpin und Fußball.' },
      { name: 'ORF Regional HD', quality: 'FHD 60FPS', genre: 'Regional', country: 'AT', description: 'Regionale ORF-Programme für jedes Bundesland.' },
      { name: 'ServusTV HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'AT', description: 'ServusTV mit Sport, Dokus und Unterhaltung.', popular: true },
      { name: 'PULS 4 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'AT', description: 'PULS 4 mit Shows, Serien und internationaler Unterhaltung.' },
      { name: 'ATV HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'AT', description: 'Österreichischer Privatsender mit Reality und Shows.' },
      { name: 'ATV 2 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'AT', description: 'Zusätzlicher ATV-Kanal mit Serien und Dokus.' },
      { name: 'Sky Sport Austria HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'AT', description: 'Österreichische Bundesliga und internationale Sportevents.', popular: true },
      { name: 'Sky Sport Austria 2 HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'AT', description: 'Zusätzlicher Sky Sport Austria Feed für parallele Spiele.' },
      { name: 'ORF SPORT HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'AT', description: 'ORF-Sportprogramm mit Live-Übertragungen und Highlights.' },
      { name: 'ServusTV Motorsport HD', quality: 'FHD 60FPS', genre: 'Motorsport', country: 'AT', description: 'Motorsport-Übertragungen auf ServusTV.' },
      { name: 'Red Bull TV AT HD', quality: 'FHD 60FPS', genre: 'Extrem-Sport', country: 'AT', description: 'Extremsport und Motorsport auf Red Bull TV Österreich.' },
      { name: 'ORF 2 Europe HD', quality: 'FHD 60FPS', genre: 'Europa', country: 'AT', description: 'ORF 2 Europe für österreichische Auswanderer.' },
      { name: 'ORF 1 Europe HD', quality: 'FHD 60FPS', genre: 'Europa', country: 'AT', description: 'ORF 1 Europe mit österreichischem Programm.' },
      { name: 'W24 HD', quality: 'FHD 60FPS', genre: 'Regional Wien', country: 'AT', description: 'Wiener Regionalprogramm mit Nachrichten und Kultur.' },
      { name: 'LT1 HD', quality: 'FHD 60FPS', genre: 'Regional Linz', country: 'AT', description: 'Linzer Regionalprogramm mit Nachrichten.' },
      { name: 'RTS Salzburg HD', quality: 'FHD 60FPS', genre: 'Regional Salzburg', country: 'AT', description: 'Salzburger Regionalprogramm.' },
      { name: 'Kanal 3 HD', quality: 'FHD 60FPS', genre: 'Regional Kärnten', country: 'AT', description: 'Kärntner Regionalprogramm mit Nachrichten.' },
      { name: 'Tirol TV HD', quality: 'FHD 60FPS', genre: 'Regional Tirol', country: 'AT', description: 'Tiroler Regionalprogramm mit lokalen Nachrichten.' },
      { name: 'Vorarlberg TV HD', quality: 'FHD 60FPS', genre: 'Regional Vorarlberg', country: 'AT', description: 'Vorarlberger Regionalprogramm.' },
      { name: 'Steiermark TV HD', quality: 'FHD 60FPS', genre: 'Regional Steiermark', country: 'AT', description: 'Steirisches Regionalprogramm.' },
      { name: 'ORF Nachrichten HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'AT', description: 'Österreichische Nachrichten von ORF.' },
      { name: 'ORF Wetter HD', quality: 'FHD 60FPS', genre: 'Wetter', country: 'AT', description: 'Österreichische Wettervorhersagen und Alpenwetter.' },
      { name: 'ServusTV Nachrichten HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'AT', description: 'Österreichische Nachrichten und Analyse.' },
      { name: 'Puls 24 HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'AT', description: 'Österreichischer Nachrichtenkanal mit Live-Berichten.' },
      { name: 'SchauTV HD', quality: 'FHD 60FPS', genre: 'Regional Wien', country: 'AT', description: 'Wiener Regionalprogramm mit Kultur und Nachrichten.' },
      { name: 'Dorf TV HD', quality: 'FHD 60FPS', genre: 'Regional', country: 'AT', description: 'Regionales österreichisches Programm.' },
      { name: 'FS1 HD', quality: 'FHD 60FPS', genre: 'Regional Salzburg', country: 'AT', description: 'Salzburger Regionalfernsehen mit lokalen Nachrichten.' },
    ],
    faqs: [
      {
        question: 'Kann ich österreichische Sender auch außerhalb Österreichs sehen?',
        answer:
          'Ja. Unsere IPTV-Streams funktionieren weltweit ohne geografische Einschränkungen. Sie können ORF, ServusTV, PULS 4 und alle österreichischen Sender von überall auf der Welt empfangen.',
      },
      {
        question: 'Sind regionale österreichische Sender enthalten?',
        answer:
          'Ja. Unser Angebot umfasst regionale Sender aus jedem österreichischen Bundesland, sodass Zuschauer in Wien, Salzburg, Tirol und anderen Regionen ihre lokalen Nachrichten empfangen können.',
      },
    ],
  },

  // =========================================================================
  // 4. SCHWEIZER SENDER
  // =========================================================================
  {
    slug: 'switzerland',
    name: 'Schweizer Sender',
    totalChannels: 200,
    description:
      'Alle Schweizer Sender in Full HD. SRF 1, SRF zwei, SRF info, 3+ und regionale Sender mit EPG und 7-Tage-Catch-Up.',
    longDescription:
      'Das komplette Schweizer Fernsehangebot für Zuschauer in der Schweiz und Schweizer Auswanderer: SRF 1, SRF zwei, SRF info, 3+, TV24 und regionale Sender aus jedem Kanton. Ob Super League, Ski Alpin oder Schweizer Nachrichten – Sie erhalten das komplette Schweizer Fernseherlebnis in Full HD. IPTV kaufen und sofort alle Schweizer Sender streamen.',
    keywords: [
      'iptv kaufen schweiz',
      'schweizer sender iptv',
      'srf iptv',
      'srf 1 iptv',
      'srf zwei iptv',
      '3plus iptv',
      'swiss iptv',
      'anbieter iptv schweiz',
    ],
    channels: [
      { name: 'SRF 1 HD', quality: 'FHD 60FPS', genre: 'Öffentlich-Rechtlich', country: 'CH', description: 'SRF 1 mit Schweizer Nachrichten und Sport.', popular: true },
      { name: 'SRF zwei HD', quality: 'FHD 60FPS', genre: 'Sport & Unterhaltung', country: 'CH', description: 'SRF zwei mit Super League und Unterhaltung.', popular: true },
      { name: 'SRF info HD', quality: 'FHD 60FPS', genre: 'Nachrichten', country: 'CH', description: 'Schweizer Nachrichten und Information.' },
      { name: 'SRF Sport HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'CH', description: 'Schweizer Sport mit Ski Alpin und Super League.', popular: true },
      { name: 'SRF Musik HD', quality: 'FHD 60FPS', genre: 'Musik', country: 'CH', description: 'Schweizer Musik und Kulturprogrammierung.' },
      { name: 'RSI LA 1 HD', quality: 'FHD 60FPS', genre: 'Italienisch', country: 'CH', description: 'Italienischsprachiges Schweizer Fernsehen.' },
      { name: 'RSI LA 2 HD', quality: 'FHD 60FPS', genre: 'Italienisch', country: 'CH', description: 'Zusätzlicher italienischsprachiger Sender der Schweiz.' },
      { name: 'RTS Un HD', quality: 'FHD 60FPS', genre: 'Französisch', country: 'CH', description: 'Französischsprachiges Schweizer Fernsehen.' },
      { name: 'RTS Deux HD', quality: 'FHD 60FPS', genre: 'Französisch', country: 'CH', description: 'Zusätzlicher französischsprachiger Sender der Schweiz.' },
      { name: '3+ HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Schweizer Privatsender mit Filmen und Serien.', popular: true },
      { name: '4+ HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Schweizer Privatsender mit Unterhaltung.' },
      { name: '5+ HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Schweizer Privatsender mit Serien und Filmen.' },
      { name: '6+ HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Schweizer Privatsender mit Unterhaltung.' },
      { name: 'TV24 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Schweizer Sender mit Filmen und Serien.' },
      { name: 'TV25 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Zusätzlicher Schweizer Sender mit Unterhaltung.' },
      { name: 'S1 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'CH', description: 'Schweizer Sender mit Serien und Filmen.' },
      { name: 'Star TV HD', quality: 'FHD 60FPS', genre: 'Musik', country: 'CH', description: 'Schweizer Musik- und Unterhaltungssender.' },
      { name: 'Tele Züri HD', quality: 'FHD 60FPS', genre: 'Regional Zürich', country: 'CH', description: 'Zürcher Regionalprogramm mit Nachrichten.' },
      { name: 'Tele Bärn HD', quality: 'FHD 60FPS', genre: 'Regional Bern', country: 'CH', description: 'Berner Regionalprogramm mit Nachrichten.' },
      { name: 'Tele Basel HD', quality: 'FHD 60FPS', genre: 'Regional Basel', country: 'CH', description: 'Basler Regionalprogramm mit Nachrichten.' },
      { name: 'Tele M1 HD', quality: 'FHD 60FPS', genre: 'Regional Aargau', country: 'CH', description: 'Aargauer Regionalprogramm mit Nachrichten.' },
      { name: 'TVO HD', quality: 'FHD 60FPS', genre: 'Regional Ostschweiz', country: 'CH', description: 'Ostschweizer Regionalprogramm.' },
      { name: 'Léman Bleu HD', quality: 'FHD 60FPS', genre: 'Regional Genf', country: 'CH', description: 'Genfer Regionalprogramm mit Nachrichten.' },
      { name: 'Canal Alpha HD', quality: 'FHD 60FPS', genre: 'Regional Jura', country: 'CH', description: 'Jura-Regionalprogramm.' },
      { name: 'Blue Zoom HD', quality: 'FHD 60FPS', genre: 'Sport', country: 'CH', description: 'Schweizer Sportsender mit Live-Übertragungen.' },
    ],
    faqs: [
      {
        question: 'Kann ich Schweizer Sender auch außerhalb der Schweiz sehen?',
        answer:
          'Ja. Unsere IPTV-Streams funktionieren weltweit ohne geografische Einschränkungen. Sie können SRF, 3+ und alle Schweizer Sender von überall auf der Welt empfangen.',
      },
      {
        question: 'Sind französisch- und italienischsprachige Schweizer Sender enthalten?',
        answer:
          'Ja. Unser Angebot umfasst RSI LA 1, RSI LA 2, RTS Un, RTS Deux und weitere Sender in allen Schweizer Landessprachen.',
      },
    ],
  },

  // =========================================================================
  // 5. UK & EUROPA
  // =========================================================================
  {
    slug: 'europe',
    name: 'UK & Europa Sender',
    totalChannels: 8000,
    description:
      'Jeder große europäische Sender. BBC, ITV, Channel 4, Sky, TF1, France 2, RAI, TVE, RTL und Premium-Sender aus UK, Frankreich, Deutschland, Spanien, Italien und ganz Europa.',
    longDescription:
      'Fernsehen aus ganz Europa mit unserem kompletten UK- und Europa-Angebot. Von UK (BBC, ITV, Channel 4, Channel 5, Sky) bis Frankreich (TF1, France 2, Canal+), Deutschland (ARD, ZDF, RTL), Spanien (TVE, Antena 3), Italien (RAI, Mediaset) und jedem anderen großen europäischen Land. Perfekt für europäische Auswanderer in Deutschland und für deutschsprachige Zuschauer, die britisches und europäisches Fernsehen lieben. IPTV kaufen und Europa streamen.',
    keywords: [
      'iptv kaufen europa',
      'uk sender iptv',
      'bbc iptv',
      'itv iptv',
      'sky sport iptv',
      'europäische sender iptv',
      'französische sender iptv',
      'italienische sender iptv',
      'anbieter iptv europa',
    ],
    channels: [
      { name: 'BBC One HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'Der UK-Flaggschiffsender mit Nachrichten und Live-Sport.', popular: true },
      { name: 'BBC Two HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'Dokumentationen, Comedy und Kulturprogrammierung.' },
      { name: 'BBC Three HD', quality: 'FHD 60FPS', genre: 'Jugend', country: 'UK', description: 'Jugendorientiertes Programm von BBC.' },
      { name: 'BBC Four HD', quality: 'FHD 60FPS', genre: 'Kultur', country: 'UK', description: 'Kunst, Kultur und ausführliche Dokumentationen.' },
      { name: 'BBC News HD', quality: 'FHD 60FPS', genre: 'UK Nachrichten', country: 'UK', description: 'BBC-Nachrichten mit globaler Berichterstattung.' },
      { name: 'BBC World News HD', quality: 'FHD 60FPS', genre: 'Internationale Nachrichten', country: 'UK', description: 'BBC globaler Nachrichtenkanal.' },
      { name: 'CBBC HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'UK', description: 'Britisches Kinderprogramm mit CBBC-Sendungen.' },
      { name: 'CBeebies HD', quality: 'FHD 60FPS', genre: 'Vorschule', country: 'UK', description: 'BBC-Vorschulprogramm mit pädagogischen Inhalten.' },
      { name: 'ITV 1 HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'Das größte kommerzielle Network in UK.', popular: true },
      { name: 'ITV 2 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'UK', description: 'ITV2 mit Reality-TV und Unterhaltung.' },
      { name: 'ITV 3 HD', quality: 'FHD 60FPS', genre: 'Drama', country: 'UK', description: 'ITV3 mit klassischen britischen Dramen.' },
      { name: 'ITV 4 HD', quality: 'FHD 60FPS', genre: 'Sport & Doku', country: 'UK', description: 'ITV4 mit Sport und Männerprogrammierung.' },
      { name: 'Channel 4 HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'UK-Qualitätsfilme, Dokumentationen und Serien.' },
      { name: 'E4 HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'UK', description: 'E4 mit Jugendunterhaltung und Comedy.' },
      { name: 'More4 HD', quality: 'FHD 60FPS', genre: 'Dokumentation', country: 'UK', description: 'More4 mit Dokumentationen und Drama.' },
      { name: 'Film4 HD', quality: 'FHD 60FPS', genre: 'Filme', country: 'UK', description: 'Film4 mit Independent-Filmen und Premieren.' },
      { name: 'Channel 5 HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'UK-Unterhaltung und Original-Drama.' },
      { name: 'Sky Witness HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'UK-Dramen und US-Krimiserien.' },
      { name: 'Sky Atlantic HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'HBO-Originals und Premium-Dramen.' },
      { name: 'Sky Max HD', quality: 'FHD 60FPS', genre: 'Unterhaltung', country: 'UK', description: 'Sky Max mit Premium-Dramen und Comedy.' },
      { name: 'Sky Comedy HD', quality: 'FHD 60FPS', genre: 'Comedy', country: 'UK', description: 'Sky Comedy mit Sitcoms und Stand-Up.' },
      { name: 'Sky Cinema Premiere HD', quality: 'FHD 60FPS', genre: 'United Kingdom', country: 'UK', description: 'UK-Filmkanal mit neuen Kinofilmen jede Woche.' },
      { name: 'Sky News HD', quality: 'FHD 60FPS', genre: 'UK Nachrichten', country: 'UK', description: 'Britischer Nachrichtenkanal.' },
      { name: 'TF1 HD', quality: 'FHD 60FPS', genre: 'Frankreich', country: 'EU', description: 'Frankreichs größtes TV-Network.', popular: true },
      { name: 'France 2 HD', quality: 'FHD 60FPS', genre: 'Frankreich', country: 'EU', description: 'Französischer öffentlich-rechtlicher Sender.' },
      { name: 'France 3 HD', quality: 'FHD 60FPS', genre: 'Frankreich', country: 'EU', description: 'Regionales französisches Programm.' },
      { name: 'M6 HD', quality: 'FHD 60FPS', genre: 'Frankreich', country: 'EU', description: 'Französischer Unterhaltungssender.' },
      { name: 'Canal+ HD', quality: 'FHD 60FPS', genre: 'Frankreich', country: 'EU', description: 'Premium französischer Kanal.' },
      { name: 'Canal+ Sport HD', quality: 'FHD 60FPS', genre: 'Französischer Sport', country: 'EU', description: 'Premium französischer Sportsender.' },
      { name: 'La 1 HD', quality: 'FHD 60FPS', genre: 'Spanien', country: 'EU', description: 'Spanischer nationaler Sender mit La Liga.' },
      { name: 'Antena 3 HD', quality: 'FHD 60FPS', genre: 'Spanien', country: 'EU', description: 'Spanisches kommerzielles Network.' },
      { name: 'Telecinco HD', quality: 'FHD 60FPS', genre: 'Spanien', country: 'EU', description: 'Spanischer Unterhaltungssender.' },
      { name: 'Movistar Plus HD', quality: 'FHD 60FPS', genre: 'Spanien', country: 'EU', description: 'Spanischer Premium-Kanal mit La Liga.' },
      { name: 'Rai 1 HD', quality: 'FHD 60FPS', genre: 'Italien', country: 'EU', description: 'Italienischer Flaggschiffsender.', popular: true },
      { name: 'Rai 2 HD', quality: 'FHD 60FPS', genre: 'Italien', country: 'EU', description: 'Italienischer öffentlich-rechtlicher Sender.' },
      { name: 'Rai 3 HD', quality: 'FHD 60FPS', genre: 'Italien', country: 'EU', description: 'Italienisches Regionalprogramm.' },
      { name: 'Canale 5 HD', quality: 'FHD 60FPS', genre: 'Italien', country: 'EU', description: 'Mediaset-Flaggschiff mit Dramen.' },
      { name: 'Italia 1 HD', quality: 'FHD 60FPS', genre: 'Italien', country: 'EU', description: 'Italienischer Jugendsender.' },
      { name: 'Sky Sport Italia HD', quality: 'FHD 60FPS', genre: 'Italienischer Sport', country: 'EU', description: 'Italienischer Sportsender mit Serie A.' },
      { name: 'RTP 1 HD', quality: 'FHD 60FPS', genre: 'Portugal', country: 'EU', description: 'Portugiesischer öffentlich-rechtlicher Sender.' },
      { name: 'SIC HD', quality: 'FHD 60FPS', genre: 'Portugal', country: 'EU', description: 'Portugiesisches kommerzielles Network.' },
      { name: 'NPO 1 HD', quality: 'FHD 60FPS', genre: 'Niederlande', country: 'EU', description: 'Niederländischer öffentlich-rechtlicher Sender.' },
      { name: 'RTL 4 HD', quality: 'FHD 60FPS', genre: 'Niederlande', country: 'EU', description: 'Niederländischer kommerzieller Sender.' },
      { name: 'SVT 1 HD', quality: 'FHD 60FPS', genre: 'Schweden', country: 'EU', description: 'Schwedischer öffentlich-rechtlicher Sender.' },
      { name: 'NRK 1 HD', quality: 'FHD 60FPS', genre: 'Norwegen', country: 'EU', description: 'Norwegischer öffentlich-rechtlicher Sender.' },
      { name: 'DR1 HD', quality: 'FHD 60FPS', genre: 'Dänemark', country: 'EU', description: 'Dänischer öffentlich-rechtlicher Sender.' },
      { name: 'YLE TV1 HD', quality: 'FHD 60FPS', genre: 'Finnland', country: 'EU', description: 'Finnischer öffentlich-rechtlicher Sender.' },
      { name: 'Polsat HD', quality: 'FHD 60FPS', genre: 'Polen', country: 'PL', description: 'Polnischer kommerzieller Sender.' },
      { name: 'TVP 1 HD', quality: 'FHD 60FPS', genre: 'Polen', country: 'PL', description: 'Polnischer öffentlich-rechtlicher Sender.' },
    ],
    faqs: [
      {
        question: 'Kann ich UK- und europäische Sender aus Deutschland sehen?',
        answer:
          'Ja. Unser UK- und Europa-Angebot umfasst jeden großen Sender aus UK, Frankreich, Spanien, Italien und weiteren Ländern – alle in Full HD.',
      },
      {
        question: 'Sind Sky Sports Sender in dieser Kategorie enthalten?',
        answer:
          'Sky Sports Sender erscheinen in der Sport-Kategorie zusammen mit anderen globalen Sportnetzwerken. Die Standard-UK-Unterhaltungssender (Sky Witness, Sky Atlantic, Sky Cinema) sind hier aufgeführt.',
      },
    ],
  },

  // =========================================================================
  // 6. ASIEN & NAHER OSTEN
  // =========================================================================
  {
    slug: 'asia-middle-east',
    name: 'Asien & Naher Osten',
    totalChannels: 12000,
    description:
      'Die größte Auswahl an asiatischem und nahöstlichem Fernsehen. CCTV, Zee TV, Star Plus, PTV, Geo TV, NHK, KBS, Al Jazeera und jeder große Sender aus China, Indien, Pakistan, Japan, Korea und dem Nahen Osten.',
    longDescription:
      'Unsere Kategorie Asien und Naher Osten deckt mehr als 12.000 Sender aus jeder großen Region ab: China (CCTV, CGTN), Indien (Zee, Star, Sony, Colors), Pakistan (PTV, Geo, ARY), Japan (NHK, Fuji TV), Korea (KBS, SBS, MBC), die Philippinen (ABS-CBN, GMA), Vietnam, Thailand, Indonesien und der gesamte Nahe Osten (Al Jazeera, MBC, Dubai TV, Rotana). Perfekt für Auswanderer und für Zuschauer, die asiatische Inhalte lieben. IPTV kaufen und Asien streamen.',
    keywords: [
      'iptv kaufen asien',
      'asiatische sender iptv',
      'indische sender iptv',
      'chinesische sender iptv',
      'pakistanische sender iptv',
      'japanische sender iptv',
      'koreanische sender iptv',
      'naher osten iptv',
      'anbieter iptv asien',
    ],
    channels: [
      { name: 'CCTV-1 HD', quality: 'FHD 60FPS', genre: 'China', country: 'CN', description: 'Chinas Flaggschiff-Nationalnetwork.', popular: true },
      { name: 'CCTV-2 HD', quality: 'FHD 60FPS', genre: 'China Business', country: 'CN', description: 'Chinesisches Business- und Finanzprogramm.' },
      { name: 'CCTV-3 HD', quality: 'FHD 60FPS', genre: 'China Unterhaltung', country: 'CN', description: 'Chinesische Unterhaltung und Musikshows.' },
      { name: 'CCTV-4 International', quality: 'FHD 60FPS', genre: 'China', country: 'CN', description: 'Internationales chinesisches Programm.' },
      { name: 'CCTV-5 Sports', quality: 'FHD 60FPS', genre: 'China Sport', country: 'CN', description: 'Chinesischer Sportsender mit NBA und Fußball.' },
      { name: 'CCTV-6 Movies', quality: 'FHD 60FPS', genre: 'Chinesisches Kino', country: 'CN', description: 'Chinesische und internationale Filme.' },
      { name: 'CGTN English', quality: 'FHD 60FPS', genre: 'China', country: 'CN', description: '24/7 englischsprachige Weltnachrichten.' },
      { name: 'Zee TV HD', quality: 'FHD 60FPS', genre: 'Indien', country: 'IN', description: 'Beliebte Hindi-Unterhaltung und Dramen.', popular: true },
      { name: 'Zee Cinema HD', quality: 'FHD 60FPS', genre: 'Bollywood', country: 'IN', description: 'Rund um die Uhr Bollywood-Filme.' },
      { name: 'Star Plus HD', quality: 'FHD 60FPS', genre: 'Indien', country: 'IN', description: 'Indiens Top-Unterhaltungsnetwork.', popular: true },
      { name: 'Star Gold HD', quality: 'FHD 60FPS', genre: 'Bollywood', country: 'IN', description: 'Bollywood-Filme und indisches Kino.' },
      { name: 'Star Sports India HD', quality: 'FHD 60FPS', genre: 'Indien Sport', country: 'IN', description: 'Live Cricket und indische Sportberichterstattung.', popular: true },
      { name: 'Sony Entertainment TV HD', quality: 'FHD 60FPS', genre: 'Indien', country: 'IN', description: 'Indische Dramen und Unterhaltung.' },
      { name: 'Colors TV HD', quality: 'FHD 60FPS', genre: 'Indien', country: 'IN', description: 'Hindi-Unterhaltung mit Dramen und Comedy.' },
      { name: 'PTV Sports HD', quality: 'FHD 60FPS', genre: 'Pakistan', country: 'PK', description: 'Pakistans Flaggschiff-Sportsender mit Cricket.', popular: true },
      { name: 'Geo News HD', quality: 'FHD 60FPS', genre: 'Pakistan Nachrichten', country: 'PK', description: 'Pakistanischer Nachrichtenkanal.' },
      { name: 'ARY Digital HD', quality: 'FHD 60FPS', genre: 'Pakistan', country: 'PK', description: 'Pakistanische Dramen und Unterhaltung.' },
      { name: 'Hum TV HD', quality: 'FHD 60FPS', genre: 'Pakistan', country: 'PK', description: 'Pakistanisches Drama-Network.' },
      { name: 'NHK World HD', quality: 'FHD 60FPS', genre: 'Japan', country: 'JP', description: 'Japanischer öffentlich-rechtlicher Sender.', popular: true },
      { name: 'Fuji TV HD', quality: 'FHD 60FPS', genre: 'Japan', country: 'JP', description: 'Japanisches kommerzielles Network mit Anime.' },
      { name: 'TV Asahi HD', quality: 'FHD 60FPS', genre: 'Japan', country: 'JP', description: 'Japanische Nachrichten und Anime.' },
      { name: 'KBS World HD', quality: 'FHD 60FPS', genre: 'Südkorea', country: 'KR', description: 'Koreanisches Broadcasting mit Dramen und K-Pop.', popular: true },
      { name: 'SBS Korea HD', quality: 'FHD 60FPS', genre: 'Südkorea', country: 'KR', description: 'Koreanische Unterhaltung mit K-Dramen.' },
      { name: 'MBC Korea HD', quality: 'FHD 60FPS', genre: 'Südkorea', country: 'KR', description: 'Koreanisches Drama-Network.' },
      { name: 'Al Jazeera HD', quality: 'FHD 60FPS', genre: 'Naher Osten Nachrichten', country: 'ME', description: 'Internationaler arabischer Nachrichtenkanal.', popular: true },
      { name: 'Al Jazeera English HD', quality: 'FHD 60FPS', genre: 'Naher Osten Nachrichten', country: 'ME', description: 'Al Jazeera English mit internationalen Nachrichten.' },
      { name: 'MBC 1 HD', quality: 'FHD 60FPS', genre: 'Naher Osten', country: 'ME', description: 'Nahöstliche Unterhaltung mit Dramen und Shows.' },
      { name: 'MBC 2 HD', quality: 'FHD 60FPS', genre: 'Arabische Filme', country: 'ME', description: 'Arabische und internationale Filme.' },
      { name: 'Dubai TV HD', quality: 'FHD 60FPS', genre: 'VAE', country: 'ME', description: 'Dubai-basierte arabische Unterhaltung.' },
      { name: 'Abu Dhabi Sports HD', quality: 'FHD 60FPS', genre: 'Arabischer Sport', country: 'ME', description: 'Nahöstlicher Sportsender mit Fußball.' },
      { name: 'TRT 1 HD', quality: 'FHD 60FPS', genre: 'Türkei', country: 'TR', description: 'Türkischer öffentlich-rechtlicher Hauptsender.', popular: true },
      { name: 'TRT Spor HD', quality: 'FHD 60FPS', genre: 'Türkischer Sport', country: 'TR', description: 'Türkischer Sportsender mit Süper Lig.', popular: true },
      { name: 'ATV Türkiye HD', quality: 'FHD 60FPS', genre: 'Türkei', country: 'TR', description: 'Türkisches kommerzielles Network mit Dramen.' },
      { name: 'Show TV HD', quality: 'FHD 60FPS', genre: 'Türkei', country: 'TR', description: 'Türkischer Unterhaltungssender mit Serien.' },
      { name: 'Star TV Türkiye HD', quality: 'FHD 60FPS', genre: 'Türkei', country: 'TR', description: 'Türkisches Entertainment mit Dramen und Shows.' },
      { name: 'Fox Türkiye HD', quality: 'FHD 60FPS', genre: 'Türkei', country: 'TR', description: 'Türkischer Ableger von Fox mit Serien.' },
      { name: 'ABS-CBN HD', quality: 'FHD 60FPS', genre: 'Philippinen', country: 'PH', description: 'Philippinische Unterhaltung mit Dramen.' },
      { name: 'GMA Pinoy TV HD', quality: 'FHD 60FPS', genre: 'Philippinen', country: 'PH', description: 'Philippinisches Programm für internationale Zuschauer.' },
      { name: 'Thai TV 3 HD', quality: 'FHD 60FPS', genre: 'Thailand', country: 'TH', description: 'Thailändische Unterhaltung und Nachrichten.' },
      { name: 'RCTI HD', quality: 'FHD 60FPS', genre: 'Indonesien', country: 'ID', description: 'Indonesische Unterhaltung und Dramen.' },
      { name: 'Astro Ria HD', quality: 'FHD 60FPS', genre: 'Malaysia', country: 'MY', description: 'Malaysischer Unterhaltungskanal.' },
    ],
    faqs: [
      {
        question: 'Sind alle asiatischen und nahöstlichen Sender richtig sortiert?',
        answer:
          'Ja. Unsere Playlists sind sauber in alphabetische Länderkategorien mit Flaggen-Symbolen organisiert – für schnelles, intuitives Channel-Surfen.',
      },
      {
        question: 'Kann ich unerwünschte Ländergruppen aus meiner Senderliste ausblenden?',
        answer:
          'Ja. Über Ihren IPTV-Player wie IPTV Smarters Pro oder TiviMate oder über unser WhatsApp-Support-Team können Sie Kategorien ausblenden, die Sie nicht nutzen.',
      },
    ],
  },

  // =========================================================================
  // 7. FILME & VOD
  // =========================================================================
  {
    slug: 'movies-vod',
    name: 'Filme & Serien auf Abruf',
    totalChannels: 500,
    description:
      'Zugriff auf 120.000+ Kinofilme und komplette Serien aus allen großen Streaming-Plattformen in Full HD und 4K mit deutschen Untertiteln und Dolby-5.1-Sound.',
    longDescription:
      'Unsere Video-on-Demand-Bibliothek zählt zu den größten der Welt mit über 120.000 Filmen und kompletten Serienboxsets aus jedem Genre, jeder Ära und jeder Streaming-Plattform. Neue Releases werden täglich hinzugefügt, sodass es immer etwas Neues zu entdecken gibt – ob Action-Blockbuster, Familienkomödie oder die neueste preisgekrönte Dramaserie. IPTV kaufen und sofort streamen.',
    keywords: [
      'iptv kaufen filme',
      'iptv filme deutschland',
      'vod iptv deutschland',
      'netflix iptv',
      'hbo iptv',
      'disney plus iptv',
      'anbieter iptv filme',
      'iptv smarters pro vod',
    ],
    channels: [
      { name: 'Kino Premiere 4K', quality: '4K UHD', genre: 'Neueste Releases', description: 'Die neuesten Kinofilme in 4K UHD mit Dolby-5.1-Surround-Sound.', popular: true },
      { name: 'Kino Action 4K', quality: '4K UHD', genre: 'Action & Blockbuster', description: 'Blockbuster-Actionfilme, Marvel, DC und Fast-&-Furious-Titel.' },
      { name: 'Kino Action & Thriller', quality: 'FHD 60FPS', genre: 'Action & Thriller', description: 'Rund um die Uhr Action-Hits, Martial Arts und Psychothriller.' },
      { name: 'Kino Komödie & Romanze', quality: 'FHD 60FPS', genre: 'Komödie & Romanze', description: 'Komödien, Liebesklassiker und Wohlfühl-Kino.' },
      { name: 'Kino Sci-Fi & Fantasy', quality: '4K UHD', genre: 'Sci-Fi & Fantasy', description: 'Weltraumabenteuer, Superheldenfilme und epische Fantasy.' },
      { name: 'Kino Horror 4K', quality: '4K UHD', genre: 'Horror', description: 'Horrorfilme in 4K UHD inklusive Klassiker und moderne Hits.' },
      { name: 'Kino Drama Premium', quality: 'FHD 60FPS', genre: 'Drama', description: 'Preisgekrönte Dramen, Biopics und Oscar-Gewinner auf Abruf.' },
      { name: 'Kino Familie', quality: 'FHD 60FPS', genre: 'Familie', description: 'Familienfreundliche Filme, Animation und Kinderfilme.' },
      { name: 'Kino Klassiker Vault', quality: 'FHD 60FPS', genre: 'Klassisches Kino', description: 'Restaurierte Kino-Klassiker aus den 1970ern, 80ern und 90ern.' },
      { name: 'Kino Deutsche Filme', quality: 'FHD 60FPS', genre: 'Deutsches Kino', description: 'Deutsche Filme aus jeder Ära in HD.' },
      { name: 'Kino Österreichische Filme', quality: 'FHD 60FPS', genre: 'Österreichisches Kino', description: 'Österreichische Filme und Produktionen.' },
      { name: 'Kino Schweizer Filme', quality: 'FHD 60FPS', genre: 'Schweizer Kino', description: 'Schweizer Filmproduktionen in HD.' },
      { name: 'Kino Türkische Filme', quality: 'FHD 60FPS', genre: 'Türkisches Kino', description: 'Türkische Filme mit deutschen Untertiteln.' },
      { name: 'Kino Bollywood', quality: 'FHD 60FPS', genre: 'Bollywood', description: 'Aktuelle und klassische Bollywood-Filme mit Untertiteln.' },
      { name: 'Kino Asian Movies', quality: 'FHD 60FPS', genre: 'Asiatisches Kino', description: 'Chinesische, japanische, koreanische und thailändische Filme.' },
      { name: 'Kino World Cinema', quality: 'FHD 60FPS', genre: 'Weltkino', description: 'Internationale Filme aus Europa, Lateinamerika und dem Nahen Osten.' },
      { name: 'Kino Dokumentation', quality: 'FHD 60FPS', genre: 'Dokumentation', description: 'Spielfilmlange Dokumentationen über Natur, Geschichte und True Crime.' },
      { name: 'Kino Marvel 4K', quality: '4K UHD', genre: 'Marvel', description: 'Jeder MCU-Film in 4K UHD inklusive Infinity Saga und Phase 4.' },
      { name: 'Kino DC 4K', quality: '4K UHD', genre: 'DC Comics', description: 'Alle DC-Filme in 4K UHD inklusive Batman, Superman und Justice League.' },
      { name: 'Kino Star Wars 4K', quality: '4K UHD', genre: 'Star Wars', description: 'Komplette Star-Wars-Saga in 4K UHD inklusive The Mandalorian.' },
      { name: 'Kino Pixar 4K', quality: '4K UHD', genre: 'Pixar', description: 'Jeder Pixar-Animationsfilm in 4K UHD mit Dolby Atmos.' },
      { name: 'Netflix Originals Central', quality: 'FHD 60FPS', genre: 'Netflix Originals', description: 'Jede Staffel von Stranger Things, Squid Game und mehr.', popular: true },
      { name: 'HBO Serien Central', quality: 'FHD 60FPS', genre: 'HBO Originals', description: 'Komplette Staffeln von Succession, House of the Dragon und mehr.', popular: true },
      { name: 'Disney+ Marvel Vault', quality: '4K UHD', genre: 'Marvel & Star Wars', description: 'Alle MCU-Filme, Star-Wars-Sagas und Pixar-Animation.', popular: true },
      { name: 'Disney+ Originals', quality: '4K UHD', genre: 'Disney Plus', description: 'Disney-Plus-exklusive Serien wie The Mandalorian und Loki.' },
      { name: 'Apple TV+ Originals', quality: '4K UHD', genre: 'Apple TV+', description: 'Ted Lasso, Severance, The Morning Show und preisgekrönte Filme.' },
      { name: 'Amazon Prime Originals', quality: 'FHD 60FPS', genre: 'Amazon Prime', description: 'The Boys, Reacher, Rings of Power und Prime-Video-Originals.' },
      { name: 'Paramount+ Originals', quality: 'FHD 60FPS', genre: 'Paramount Plus', description: 'Yellowstone-Universum, Star-Trek-Serien und Paramount-Filme.' },
      { name: 'K-Drama Hub', quality: 'FHD 60FPS', genre: 'Koreanisches Drama', description: 'Beliebte koreanische Dramen wie Squid Game und mehr.' },
      { name: 'Türkische Dramen Hub', quality: 'FHD 60FPS', genre: 'Türkisches Drama', description: 'Beliebte türkische Dramen mit deutschen Untertiteln.', popular: true },
      { name: 'Kinder Animation Vault', quality: 'FHD 60FPS', genre: 'Kinderserien', description: 'Komplette Kinderserien inklusive Bluey, Peppa Pig und Paw Patrol.' },
      { name: 'Anime Central', quality: 'FHD 60FPS', genre: 'Anime', description: 'Beliebte Anime-Serien inklusive Naruto, One Piece und Attack on Titan.' },
      { name: 'Dokumentationen Weltweit', quality: 'FHD 60FPS', genre: 'Dokumentationen', description: 'Hochwertige Natur- und True-Crime-Dokumentationen.' },
      { name: '4K Natur Dokumentationen', quality: '4K UHD', genre: 'Natur', description: 'BBC- und National-Geographic-Naturdokumentationen in 4K UHD.' },
      { name: '4K Action Movies', quality: '4K UHD', genre: '4K Action', description: 'Actionfilme in 4K UHD mit Dolby-Atmos-Surround-Sound.' },
    ],
    faqs: [
      {
        question: 'Wie oft wird die VOD-Filmbibliothek aktualisiert?',
        answer:
          'Unser Film- und Serienkatalog wird täglich automatisch mit den neuesten Kinoveröffentlichungen und Streaming-Titeln aus jeder großen Plattform aktualisiert.',
      },
      {
        question: 'Enthalten alle Filme deutsche Untertitel?',
        answer:
          'Ja. Über 95 % aller fremdsprachigen Filme und Serien enthalten wählbare deutsche Untertitel, mit zusätzlichen Untertitelsprachen für die meisten Titel.',
      },
    ],
  },

  // =========================================================================
  // 8. KINDER & FAMILIE
  // =========================================================================
  {
    slug: 'kids-family',
    name: 'Kinder & Familie',
    totalChannels: 200,
    description:
      'Sichere und unterhaltsame Kindersender für alle Altersgruppen. Disney Channel, Nickelodeon, Cartoon Network, KiKA, Super RTL, CBeebies und pädagogisches Programm aus aller Welt.',
    longDescription:
      'Familienfreundliche Unterhaltung, der Eltern vertrauen können. Unsere Kinder- und Familien-Kategorie umfasst jedes große Kindernetzwerk: Disney Channel, Disney Junior, Nickelodeon, Nick Jr., Cartoon Network, KiKA, Super RTL, CBeebies und mehr. Alle Programme sind altersgerecht und frei von aggressiven Inhalten, mit Kindersicherungsoptionen in jedem IPTV-Player – auch IPTV Smarters Pro.',
    keywords: [
      'iptv kaufen kinder',
      'kinder iptv deutschland',
      'disney channel iptv',
      'nickelodeon iptv',
      'cartoon network iptv',
      'kika iptv',
      'super rtl iptv',
      'anbieter iptv kinder',
    ],
    channels: [
      { name: 'KiKA HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Kinderkanal von ARD und ZDF mit Sendungen für alle Altersgruppen.', popular: true },
      { name: 'Super RTL HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Kinderprogramm mit Cartoons und Familienserien.', popular: true },
      { name: 'TOGGO plus HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Kinderprogramm mit Cartoons und Zeichentrickfilmen.' },
      { name: 'Nickelodeon Deutschland HD', quality: 'FHD 60FPS', genre: 'Kinder', country: 'DE', description: 'Deutscher Nickelodeon-Feed mit lokalen und internationalen Kindersendungen.' },
      { name: 'Nick Jr. Deutschland HD', quality: 'FHD 60FPS', genre: 'Vorschule', country: 'DE', description: 'Pädagogische und unterhaltsame Programme für die jüngsten Zuschauer.' },
      { name: 'Disney Channel Deutschland HD', quality: 'FHD 60FPS', genre: 'Disney Deutschland', country: 'DE', description: 'Deutscher Disney Channel mit Serien und Originalfilmen.' },
      { name: 'Disney Junior Deutschland HD', quality: 'FHD 60FPS', genre: 'Vorschule', country: 'DE', description: 'Disney Junior mit Bluey, Mickey Mouse und mehr.', popular: true },
      { name: 'ORF Kids HD', quality: 'FHD 60FPS', genre: 'Kinder Österreich', country: 'AT', description: 'Österreichisches Kinderprogramm.' },
      { name: 'SRF Kids HD', quality: 'FHD 60FPS', genre: 'Kinder Schweiz', country: 'CH', description: 'Schweizer Kinderprogramm von SRF.' },
      { name: 'Cartoon Network HD', quality: 'FHD 60FPS', genre: 'Klassische Cartoons', country: 'US', description: 'Teen Titans Go, Gumball, Adventure Time und Scooby Doo.' },
      { name: 'Boomerang HD', quality: 'FHD 60FPS', genre: 'Klassische Animation', country: 'US', description: 'Tom und Jerry, Looney Tunes und Vorschulserien.' },
      { name: 'CBeebies HD', quality: 'FHD 60FPS', genre: 'Vorschule UK', country: 'UK', description: 'BBC-Vorschulprogramm mit pädagogischen Inhalten.' },
      { name: 'CBBC HD', quality: 'FHD 60FPS', genre: 'UK Kinder', country: 'UK', description: 'BBC-Kinderprogramm mit CBBC-Originals.' },
      { name: 'PBS Kids HD', quality: 'FHD 60FPS', genre: 'Pädagogisch', country: 'US', description: 'Amerikanisches pädagogisches Kinderprogramm.' },
      { name: 'Baby TV HD', quality: 'FHD 60FPS', genre: 'Kleinkinder', country: 'EU', description: 'Programm für Babys und Kleinkinder.' },
      { name: 'Nickelodeon HD', quality: 'FHD 60FPS', genre: 'Animation & Kinder', country: 'US', description: 'SpongeBob, PAW Patrol und Teen-Serien.', popular: true },
      { name: 'Disney Channel HD', quality: 'FHD 60FPS', genre: 'Disney Serien', country: 'US', description: 'Beliebte Disney-Serien und Originalfilme.', popular: true },
      { name: 'Disney XD HD', quality: 'FHD 60FPS', genre: 'Action Animation', country: 'US', description: 'Action-Animationsserien und Marvel-Cartoons für Kinder.' },
      { name: 'Adult Swim HD', quality: 'FHD 60FPS', genre: 'Erwachsenen-Animation', country: 'US', description: 'Rick and Morty, Family Guy und American Dad.' },
      { name: 'Da Vinci Kids HD', quality: 'FHD 60FPS', genre: 'Pädagogisch', country: 'EU', description: 'Pädagogische Inhalte mit Fokus auf Wissenschaft, Mathematik und Kreativität.' },
    ],
    faqs: [
      {
        question: 'Sind die Kindersender in mehreren Sprachen verfügbar?',
        answer:
          'Ja. Viele große Kindersender senden mit mehreren Audiospuren inklusive Deutsch, Englisch und Französisch, sodass Ihre Familie die Sprache wechseln kann.',
      },
      {
        question: 'Kann ich Kindersicherung in der IPTV-App einstellen?',
        answer:
          'Ja. Praktisch alle IPTV-Player wie IPTV Smarters Pro und TiviMate bieten Kindersicherungs-PIN-Codes, mit denen Sie bestimmte Sender oder Kategorien blockieren können.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
export function getChannelCategoryBySlug(slug: string): ChannelCategory | undefined {
  return channelsData.find((category) => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return channelsData.map((category) => category.slug);
}