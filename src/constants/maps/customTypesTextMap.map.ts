import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';

const {
  article,
  interview,
  event,
  whitepaper,
  fact_snack,
  zitat,
  video,
  podcast,
} = PRISMIC_CUSTOM_TYPES;

const CUSTOMTYPES_TEXT_MAP = {
  [article]: 'Artikel',
  [interview]: 'Interview',
  [event]: 'Event',
  [whitepaper]: 'Whitepaper',
  [fact_snack]: 'Fact Snack',
  [zitat]: 'Zitat',
  [video]: 'Video',
  [podcast]: 'Podcast',
};

export default CUSTOMTYPES_TEXT_MAP;
