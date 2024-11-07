import fetchLinks from '../../constants/maps/fetchLinks.map';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
const client = createClient();

const fetchPrismicContent = async ({
  filters,
  pageSize = 20,
  page = 1,
  orderings,
}: {
  filters: string[];
  pageSize: number;
  page: number;
  orderings?: any;
}) => {
  try {
    const data = await client.get({
      fetchLinks: fetchLinks,
      orderings,
      pageSize,
      page,
      filters: [prismic.filter.at('document.tags', ['cassini']), ...filters],
    });
    if (data.results_size === 0) {
      console.error(`fetch prismic content - empty results for: ${filters}`); // eslint-disable-line no-console
      throw new Error('empty results');
    }
    return data;
  } catch (error: any) {
    console.error(`fetch prismic content - unexpected Error: ${error.message}`); // eslint-disable-line no-console
    throw new Error(error.message);
  }
};

export default fetchPrismicContent;
