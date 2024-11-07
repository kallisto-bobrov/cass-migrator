import { MetadataRoute } from 'next';
import { fetchAllPages } from '@/helpers/fetchAll/fetchAll.helper';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await fetchAllPages();
  return pages.map((page) => {
    const newURL = page.url?.replaceAll('cassini--', '');
    const newUID = page.uid?.replaceAll('cassini--', '/');
    newURL?.replace('/', '');
    return {
      url: `https://www.cassini.de${newURL || newUID}`,
      lastModified: new Date(page.last_publication_date).toISOString(),
    };
  });
}
