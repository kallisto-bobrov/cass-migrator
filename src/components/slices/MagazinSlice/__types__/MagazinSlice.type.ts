import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import { Router } from 'next/router';

export type MagazinSliceItemType = {
  tag_name: {
    id: string;
    type: string;
    tags?: [string];
    slug: string;
    lang: string;
    data: {
      tag: string;
    };
    link_type: string;
    isBroken: boolean;
  };
};

type MagazinSlicePrimaryType = {
  tag_filter_reset?: string;
  type_filter_label?: string;
  type_filter_reset?: string;
  show_more?: string;
  info_text?: string;
  featured_article: InternalLink;
  featured_box_top: InternalLink;
  featured_box_bottom: InternalLink;
};

export type MagazinSliceType = {
  items: [MagazinSliceItemType];
  primary: MagazinSlicePrimaryType;
  router?: Router;
};
