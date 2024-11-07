import dynamic from 'next/dynamic';
import Dummy from '../../components/atoms/Dummy/Dummy';
import BuehneSlice from '../../components/slices/BuehneSlice/BuehneSlice';
import TextTeaserSlice from '../../components/slices/TextTeaserSlice/TextTeaserSlice';
import VollbildBildTextTeaserSlice from '../../components/slices/VollbildBildTextTeaserSlice/VollbildBildTextTeaserSlice';
import FliesstextSlice from '../../components/slices/FliesstextSlice/FliesstextSlice';
import TextTeaserKompositionSlice from '../../components/slices/TextTeaserKompositionSlice/TextTeaserKompositionSlice';
import MagazinSlice from '../../components/slices/MagazinSlice/MagazinSlice';
import MagazinStartseitenTeaserSlice from '../../components/slices/MagazinStartseitenTeaserSlice/MagazinStartseitenTeaserSlice';
import LogoBanderoleSlice from '../../components/slices/LogoBanderoleSlice/LogoBanderoleSlice';
import TextboxenSchmuckbilderSlice from '../../components/slices/TextboxenSchmuckbilderSlice/TextboxenSchmuckbilderSlice';
import TextboxenMitUeberlagerungSlice from '../../components/slices/TextboxenMitUeberlagerungSlice/TextboxenMitUeberlagerungSlice';
import TextMitBildSlice from '../../components/slices/TextMitBildSlice/TextMitBildSlice';
import ArtikelTeaserSliderSlice from '../../components/slices/ArtikelTeaserSliderSlice/ArtikelTeaserSliderSlice';
import AnsprechpartnerSlice from '../../components/slices/AnsprechpartnerSlice/AnsprechpartnerSlice';
import EinleitungSlice from '../../components/slices/EinleitungSlice/EinleitungSlice';
import MediengalerieSlice from '../../components/slices/MediengalerieSlice/MediengalerieSlice';
import ZitatMitPortraitSlice from '../../components/slices/ZitatMitPortraitSlice/ZitatMitPortraitSlice';
import EventsSlice from '../../components/slices/EventsSlice/EventsSlice';
import AutorSlice from '../../components/slices/AutorSlice/AutorSlice';
import ShareBtnsSlice from '../../components/slices/ShareBtnsSlice/ShareBtnsSlice';
import Spacer from '../../components/atoms/Spacer/Spacer';
import DownloadTeaserSlice from '../../components/slices/DownloadTeaserSlice/DownloadTeaserSlice';
import EventBanderoleSlice from '../../components/slices/EventBanderoleSlice/EventBanderoleSlice';
import JobsOverviewSlice from '../../components/slices/JobsOverviewSlice/JobsOverviewSlice';
import JobsMaatooFormSlice from '../../components/slices/JobsMaatooFormSlice/JobsMaatooFormSlice';
import ForeignContentSlice from '../../components/slices/ForeignContentSlice/ForeignContentSlice';
import NewsletterTeaserSlice from '../../components/slices/NewsletterTeaserSlice/NewsletterTeaserSlice';
import XingEventsSlice from '../../components/slices/XingEventsSlice/XingEventsSlice';
import MaatooEventsSlice from '../../components/slices/MaatooEventsSlice/MaatooEventsSlice';
import SoundcloudSlice from '../../components/slices/SoundcloudSlice/SoundcloudSlice';
import CookieDeclaration from '../../tools/CookieDeclaration/CookieDeclaration';
import WhitepaperDownloadSlice from '../../components/slices/MaatooEventsSlice/WhitepaperDownloadSlice';
import MaatooContactFormSlice from '../../components/slices/MaatooEventsSlice/MaatooContactFormSlice';
import CTAstandaloneSlice from '../../components/slices/CTAstandaloneSlice/CTAstandaloneSlice';
import UmfrageTestSlice from '../../components/slices/UmfrageTestSlice/UmfrageTestSlice';
import IssuuSlice from '../../components/slices/IssuuSlice/IssuuSlice';
const KuchenDiagrammSlice = dynamic(
  () =>
    import('../../components/slices/KuchenDiagrammSlice/KuchenDiagrammSlice'),
  { ssr: false },
);
import TeaserZaehlendSlice from '../../components/slices/TeaserZaehlend/TeaserZaehlendSlice';
import CTAteaserSlice from '../../components/slices/CTAteaserSlice/CTAteaserSlice';
import TestimonialsSlice from '@/components/slices/TestimonialsSlice/TestimonialsSlice';
import HubSpotContactSlice from '../../components/slices/HubSpotContactSlice/HubSpotContactSlice';
import VollbildSlice from '@/components/slices/VollbildSlice/VollbildSlice';

const slicesMap = {
  'cta-button_standalone': CTAstandaloneSlice,
  'download-teaser-ubersicht': DownloadTeaserSlice,
  'event-banderole_m031': EventBanderoleSlice,
  'event-teaser-ubersicht_m014': EventsSlice,
  'issuu_-_cassini': IssuuSlice,
  'jobs_formular_-_m021': JobsMaatooFormSlice,
  'magazin-startseiten-teaser_m007': MagazinStartseitenTeaserSlice,
  'stellen-ubersicht_m027': JobsOverviewSlice,
  'teilen-buttons_m026': ShareBtnsSlice,
  'textteaser-komposition_m008': TextTeaserKompositionSlice,
  'umfr_ge-test-tool': UmfrageTestSlice,
  'vollbild-bild-text-teaser_m029': VollbildBildTextTeaserSlice,
  ansprechpartner_m015: AnsprechpartnerSlice,
  artikel_teaser_slider_m035: ArtikelTeaserSliderSlice,
  autor_m019: AutorSlice,
  buhne_m005: BuehneSlice,
  cookie_declaration: CookieDeclaration,
  dummy: Dummy,
  einleitung_m036: EinleitungSlice,
  fliesstext_m006: FliesstextSlice,
  foreign_content_m000: ForeignContentSlice,
  kontaktformular: MaatooContactFormSlice,
  kuchendiagramm: KuchenDiagrammSlice,
  logo_banderole_m013: LogoBanderoleSlice,
  maatoo_events: MaatooEventsSlice,
  magazin_m024: MagazinSlice,
  mediengalerie_m037: MediengalerieSlice,
  newsletter_teaser: NewsletterTeaserSlice,
  soundcloud: SoundcloudSlice,
  spacer: Spacer,
  text_mit_bild_m011: TextMitBildSlice,
  text_teaser_m009: TextTeaserSlice,
  teaser_zaehlend: TeaserZaehlendSlice,
  textboxen_mit_uberlagerung_m034: TextboxenMitUeberlagerungSlice,
  textboxen_schmuckbilder: TextboxenSchmuckbilderSlice,
  textboxen_schmuckbilder_m010: TextboxenSchmuckbilderSlice,
  whitepaper_download: WhitepaperDownloadSlice,
  xing_events: XingEventsSlice,
  zitat_mit_portrait_m018b: ZitatMitPortraitSlice,
  cta_teaser: CTAteaserSlice,
  testimonials: TestimonialsSlice,
  'hubspot_-_kontakt': HubSpotContactSlice,
  fullscreen_image: VollbildSlice,
};

export default slicesMap;
