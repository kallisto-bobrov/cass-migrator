import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';
import * as prismic from '@prismicio/client';

const {
  article,
  interview,
  event,
  whitepaper,
  fact_snack,
  zitat,
  video,
  podcast,
  job,
} = PRISMIC_CUSTOM_TYPES;

export const magazineCustomTypes = [
  article,
  interview,
  event,
  whitepaper,
  fact_snack,
  zitat,
  video,
  podcast,
  job,
];

const magazine = (
  tags: string[],
  customType: string,
  ignoredTeasers?: Array<any>,
) => {
  let types = magazineCustomTypes;
  if (customType) {
    types = [customType];
  }
  let query = [
    prismic.filter.any('document.type', types),
    tags && prismic.filter.any('document.tags', tags),
  ];
  if (ignoredTeasers) {
    query = [...query, ...ignoredTeasers];
  }
  return query;
};

const getTodayAt0000 = () => {
  const today = new Date();
  return new Date(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
  );
};

export const eventsPredicates = () => [
  prismic.filter.at('document.type', event),
  prismic.filter.dateAfter('my.event.event_schema_end_date', getTodayAt0000()),
];

export const jobsPredicates = () => [prismic.filter.at('document.type', job)];

export default magazine;
