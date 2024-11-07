import type { MSTItemType } from '../../../slices/MagazinStartseitenTeaserSlice/__types__/MagazinStartseitenTeaserSlice.type';
import type {
  DocumentLink,
  ExternalLink,
  InternalLink,
} from '../../../atoms/Link/__types__/Link.type';

export type SliderParamsType = {
  autoplay?: boolean;
  pagination?: boolean;
  navigation?: boolean;
  loop?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {}; // no typings due to flow limitations
};

export type SliderType = {
  items: Array<any>;
  className?: string;
  sliderSettings: SliderParamsType;
  sliderContentType: string;
  paddingBottom?: number;
  skin?: string;
  navAlignment?: string;
};

export type FullscreenImageTeaserSliderType = {
  item: MSTItemType;
};

export type ArticleTeaserSlideItemType = {
  zielseite: InternalLink;
  tag: InternalLink;
  document_link?: DocumentLink;
  foreign_content_link?: InternalLink | ExternalLink;
};

export type ArticleTeaserSlideType = {
  item: ArticleTeaserSlideItemType;
};
