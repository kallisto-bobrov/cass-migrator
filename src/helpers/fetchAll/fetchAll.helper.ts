import get from 'lodash/get';
import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { AllDocumentTypes } from '../../../prismicio-types';

const client = createClient();

export async function fetchAll(page?: number) {
  try {
    let data;
    data = await client.get({
      filters: [
        prismic.filter.any('document.type', [
          PRISMIC_CUSTOM_TYPES.page,
          PRISMIC_CUSTOM_TYPES.event,
          PRISMIC_CUSTOM_TYPES.article,
          PRISMIC_CUSTOM_TYPES.interview,
          PRISMIC_CUSTOM_TYPES.job,
          PRISMIC_CUSTOM_TYPES.podcast,
        ]),
        prismic.filter.at('document.tags', ['cassini']),
      ],
      fetchLinks: [
        `${PRISMIC_CUSTOM_TYPES.page}.category`,
        `${PRISMIC_CUSTOM_TYPES.event}.category`,
        `${PRISMIC_CUSTOM_TYPES.article}.category`,
        `${PRISMIC_CUSTOM_TYPES.interview}.category`,
        `${PRISMIC_CUSTOM_TYPES.podcast}.category`,
        `${PRISMIC_CUSTOM_TYPES.job}.category`,
        `${PRISMIC_CUSTOM_TYPES.page}.seo_meta_index`,
        `${PRISMIC_CUSTOM_TYPES.event}.seo_meta_index`,
        `${PRISMIC_CUSTOM_TYPES.article}.seo_meta_index`,
        `${PRISMIC_CUSTOM_TYPES.interview}.seo_meta_index`,
        `${PRISMIC_CUSTOM_TYPES.job}.seo_meta_index`,
        `${PRISMIC_CUSTOM_TYPES.podcast}.seo_meta_index`,
      ],
      pageSize: 20000,
      page,
    });
    if (data?.results_size === 0) {
      console.log('fetchAll - empty results'); // eslint-disable-line no-console
      throw new Error('EMPTY_RESULTS');
    }
    return data;
  } catch (error: any) {
    console.log(`fetchAll - unexpected Error: ${error.message}`); // eslint-disable-line no-console
    return 'undefined';
  }
}

export const fetchAllPages = async (
  page?: number,
): Promise<AllDocumentTypes[]> => {
  const prismicResponse = await fetchAll(page);
  let results = get(prismicResponse, 'results', undefined);
  const localPage = get(prismicResponse, 'page', undefined);
  const total_pages = get(prismicResponse, 'total_pages', undefined);

  if (localPage! < total_pages!) {
    const results2 = await fetchAllPages(localPage! + 1);
    results = [...results!, ...results2!];
  }
  if (results === undefined) {
    throw new Error('fetchAllPages - empty results');
  }
  return results;
};
