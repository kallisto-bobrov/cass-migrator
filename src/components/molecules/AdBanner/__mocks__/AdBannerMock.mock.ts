import {
  AD_BANNER_COLORS_MAP,
  AD_BANNER_ICONS_MAP,
  AD_BANNER_TYPES_MAP,
} from '../__types__/AdBanner.type';

const AdBannerMock = {
  headline: 'Newsletter',
  text: [
    {
      type: 'paragraph',
      text: 'Ich möchte Neuigkeiten von Cassini erhalten',
      spans: [],
    },
  ],
  ctaText: 'Jetzt anmelden',
  ctaTitle: 'Link zur Newsletteranmeldung',
  ctaLink: {
    id: 'Xg9ShRAAAB8A--aQ',
    type: 'page',
    tags: ['cassini'],
    slug: 'cassini---newsletter',
    lang: 'de-de',
    uid: 'cassini--newsletter',
    link_type: 'Document',
    isBroken: false,
  },
  color: AD_BANNER_COLORS_MAP.brand,
  icon: AD_BANNER_ICONS_MAP.newsletter,
  type: AD_BANNER_TYPES_MAP.fixed,
};

export const AdBannerRelativeBrandMock = {
  headline: 'Newsletter',
  text: [
    {
      type: 'paragraph',
      text: 'Ich möchte Neuigkeiten von Cassini erhalten',
      spans: [],
    },
  ],
  ctaText: 'Jetzt anmelden',
  ctaTitle: 'Link zur Newsletteranmeldung',
  ctaLink: {
    id: 'Xg9ShRAAAB8A--aQ',
    type: 'page',
    tags: ['cassini'],
    slug: 'cassini---newsletter',
    lang: 'de-de',
    uid: 'cassini--newsletter',
    link_type: 'Document',
    isBroken: false,
  },
  color: AD_BANNER_COLORS_MAP.brand,
  icon: AD_BANNER_ICONS_MAP.newsletter,
  type: AD_BANNER_TYPES_MAP.relative,
};

export const AdBannerRelativeDarkMock = {
  headline: 'Newsletter',
  text: [
    {
      type: 'paragraph',
      text: 'Ich möchte Neuigkeiten von Cassini erhalten',
      spans: [],
    },
  ],
  ctaText: 'Jetzt anmelden',
  ctaTitle: 'Link zur Newsletteranmeldung',
  ctaLink: {
    id: 'Xg9ShRAAAB8A--aQ',
    type: 'page',
    tags: ['cassini'],
    slug: 'cassini---newsletter',
    lang: 'de-de',
    uid: 'cassini--newsletter',
    link_type: 'Document',
    isBroken: false,
  },
  color: AD_BANNER_COLORS_MAP.dark,
  icon: AD_BANNER_ICONS_MAP.newsletter,
  type: AD_BANNER_TYPES_MAP.relative,
};

export default AdBannerMock;
