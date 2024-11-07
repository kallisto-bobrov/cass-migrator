import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';
import TeaserTile from '@/components/molecules/TeaserTile/TeaserTile';
import QuoteTile from '@/components/molecules/QuoteTile/QuoteTile';
import EventTeaserTile from '@/components/molecules/EventTeaserTile/EventTeaserTile';
import FactTile from '@/components/molecules/FactTile/FactTile';

const tilesMap = {
  [PRISMIC_CUSTOM_TYPES.page]: TeaserTile,
  [PRISMIC_CUSTOM_TYPES.article]: TeaserTile,
  [PRISMIC_CUSTOM_TYPES.interview]: TeaserTile,
  [PRISMIC_CUSTOM_TYPES.video]: TeaserTile,
  [PRISMIC_CUSTOM_TYPES.whitepaper]: TeaserTile,
  [PRISMIC_CUSTOM_TYPES.zitat]: QuoteTile,
  [PRISMIC_CUSTOM_TYPES.event]: EventTeaserTile,
  [PRISMIC_CUSTOM_TYPES.fact_snack]: FactTile,
  [PRISMIC_CUSTOM_TYPES.podcast]: TeaserTile,
};

export default tilesMap;
