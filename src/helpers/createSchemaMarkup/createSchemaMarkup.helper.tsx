import get from 'lodash/get';
import map from 'lodash/map';
import type { ChannelLink } from '@/components/organisms/Footer/__types__/Footer.type';
import PRISMIC_CUSTOM_TYPES from '@/app/lib/globalConfig/prismicCustomTypes.config';

export const createSocialChannelsMarkup = (channels: Array<ChannelLink>) => {
  const channelLinks = map(channels, 'url.url');
  return JSON.stringify(channelLinks, null, 2);
};

export const createLocationsMarkup = (content: Array<Object>) => {
  const locations: Array<Object> = content.map((item) => ({
    '@type': 'LocalBusiness',
    parentOrganization: {
      '@id': '#MainOrganization',
    },
    name: get(item, 'name', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: get(item, 'address', ''),
      addressLocality: get(item, 'city', ''),
      addressRegion: get(item, 'region', ''),
      postalCode: get(item, 'zip', ''),
      faxNumber: get(item, 'fax', ''),
      telephone: get(item, 'tel', ''),
    },
    openingHours: get(item, 'opening_hours', ''),
    image: get(item, 'image.url', ''),
    description: get(item, 'description', ''),
    hasmap: get(item, 'map', ''),
  }));

  return JSON.stringify(locations, null, 2);
};

const createSchemaMarkup = (type: string, globalConf: any, conf: any) => {
  if (
    type === PRISMIC_CUSTOM_TYPES.page ||
    type === PRISMIC_CUSTOM_TYPES.homepage
  ) {
    return {
      __html: `{
        "@context": {
        "@vocab": "http://schema.org/"
        },
        "@graph": [
        {
        "@id": "#MainOrganization",
        "@type": "Organization",
        "name": "${get(globalConf, 'schema_name', '')}",
        "url": "${get(globalConf, 'schema_url', '')}",
        "logo": "${get(globalConf, 'schema_logo.url', '')}",
        "sameAs": ${createSocialChannelsMarkup(globalConf.social_media_channels)}},
        ${createLocationsMarkup(globalConf.schema_location)}]}`,
    };
  }

  if (type === PRISMIC_CUSTOM_TYPES.event) {
    const metaTitle = get(conf, 'data.seo_meta_title', null)
      ? get(conf, 'data.seo_meta_title', null)
      : get(globalConf, 'meta_title', '');
    const metaDescription = get(conf, 'data.seo_meta_description', null)
      ? get(conf, 'data.seo_meta_description', null)
      : get(globalConf, 'meta_description', '');
    const name = get(conf, 'data.event_schema_name', null)
      ? get(conf, 'data.event_schema_name', null)
      : metaTitle;
    const description = get(conf, 'data.event_schema_description', null)
      ? get(conf, 'data.event_schema_description', null)
      : metaDescription;
    const country = get(conf, 'data.event_schema_location_country', null)
      ? get(conf, 'data.event_schema_location_country', null)
      : 'DE';

    return {
      __html: `{
          "@context": "http://schema.org",
          "@type": "BusinessEvent",
          "name": "${name}",
          "performer": "${get(conf, 'data.event_schema_performer', '')}",
          "description": "${description}",
          "image": "${get(conf, 'data.event_schema_event_image.url', '')}",
          "startDate": "${get(conf, 'data.event_schema_start_date', '')}",
          "endDate": "${get(conf, 'data.event_schema_end_date', '')}",
          "location": {
            "@type": "Place",
            "name": "${get(conf, 'data.event_schema_location_name', '')}",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "${get(conf, 'data.event_schema_location_street', '')}",
              "addressLocality": "${get(conf, 'data.event_schema_location_city', '')}",
              "postalCode": "${get(conf, 'data.event_schema_location_zip', '')}",
              "addressCountry": "${country}"
            }
          }
        }`,
    };
  }

  if (type === PRISMIC_CUSTOM_TYPES.article) {
    const metaTitle = get(conf, 'data.seo_meta_title', null)
      ? get(conf, 'data.seo_meta_title', null)
      : get(globalConf, 'meta_title', '');
    const metaDescription = get(conf, 'data.seo_meta_description', null)
      ? get(conf, 'data.seo_meta_description', null)
      : get(globalConf, 'meta_description', '');
    const headline = get(conf, 'data.article_schema_headline', null)
      ? get(conf, 'data.article_schema_headline', null)
      : metaTitle;
    const description = get(conf, 'data.article_schema_description', null)
      ? get(conf, 'data.article_schema_description', null)
      : metaDescription;
    const publisher = get(conf, 'data.article_schema_publisher_name', null)
      ? get(conf, 'data.article_schema_publisher_name', null)
      : get(globalConf, 'schema_name', '');
    const publisherLogo = get(
      conf,
      'data.article_schema_publisher_logo.url',
      null,
    )
      ? get(conf, 'data.article_schema_publisher_logo.url', null)
      : get(globalConf, 'schema_logo.url', '');
    const publishedDate = get(conf, 'data.date_published', null)
      ? get(conf, 'data.date_published', null)
      : get(conf, 'last_publication_date', null);
    const ogImage = get(conf, 'data.og_image.url', null)
      ? get(conf, 'data.og_image.url', null)
      : get(globalConf, 'og_image.url', null);

    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "Article",
        "author": "${get(conf, 'data.article_schema_author', '')}",
        "datePublished": "${publishedDate}",
        "headline": "${headline}",
        "description": "${description}",
        "image": {
          "@type": "imageObject",
          "url": "${ogImage}",
          "height": "1200",
          "width": "627"
          },
        "publisher": {
          "@type": "Organization",
          "name": "${publisher}",
          "logo": {
          "@type": "imageObject",
          "url": "${publisherLogo}"
          }
         }
        }`,
    };
  }

  if (type === PRISMIC_CUSTOM_TYPES.job) {
    const metaTitle = get(conf, 'data.seo_meta_title', null)
      ? get(conf, 'data.seo_meta_title', null)
      : get(globalConf, 'meta_title', '');
    const metaDescription = get(conf, 'data.seo_meta_description', null)
      ? get(conf, 'data.seo_meta_description', null)
      : get(globalConf, 'meta_description', '');
    const title = get(conf, 'data.job_schema_title', null)
      ? get(conf, 'data.job_schema_title', null)
      : metaTitle;
    const description = get(conf, 'data.job_schema_description', null)
      ? get(conf, 'data.job_schema_description', null)
      : metaDescription;
    const publishedDate = get(conf, 'data.date_published', null)
      ? get(conf, 'data.date_published', null)
      : get(conf, 'last_publication_date', null);

    return {
      __html: `{
        "@context": "http://schema.org",
        "@type": "JobPosting",
        "datePosted": "${publishedDate}",
        "title": "${title}",
        "description": "${description}",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "${get(globalConf, 'schema_name', '')}"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "${get(conf, 'data.job_schema_locations', null)}"
          }
        }
      }`,
    };
  }

  return { __html: '' };
};

export default createSchemaMarkup;
