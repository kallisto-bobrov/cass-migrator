import {
  ArticleDocument,
  EventDocument,
  HomepageDocument,
  InterviewDocument,
  JobDocument,
  PageDocument,
  PodcastDocument,
} from '../../../prismicio-types';
import { Metadata } from 'next';

export function getMetadata(
  page:
    | HomepageDocument
    | PageDocument
    | InterviewDocument
    | EventDocument
    | JobDocument
    | PodcastDocument
    | ArticleDocument,
): Metadata {
  return {
    title: page.data.seo_meta_title,
    description: page.data.seo_meta_description,
    alternates: {
      canonical: page.data.seo_meta_canonical,
    },
    robots: {
      index: !!page.data.seo_meta_index,
      follow: !!page.data.seo_meta_follow,
    },
    twitter: {
      title: page.data.twitter_title || page.data.seo_meta_title!,
      description:
        page.data.twitter_description || page.data.seo_meta_description!,
    },
    openGraph: {
      title: page.data.og_title || page.data.seo_meta_title!,
      description: page.data.og_description || page.data.seo_meta_description!,
      url: 'https://www.cassini.de/',
      images: [
        {
          url: page.data.og_image.url || '', // Must be an absolute URL
          width: page.data.og_image.dimensions?.width || '',
          height: page.data.og_image.dimensions?.height || '',
        },
      ],
      locale: page.data.og_locale || 'de_DE',
      type: (page.data.og_type || 'website') as
        | 'article'
        | 'website'
        | 'book'
        | 'profile'
        | 'music.song'
        | 'music.album'
        | 'music.playlist'
        | 'music.radio_station'
        | 'video.movie'
        | 'video.episode'
        | 'video.tv_show'
        | 'video.other'
        | undefined,
    },
  };
}
