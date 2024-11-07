import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import type { LinkType } from '../../../atoms/Link/__types__/Link.type';

export type AnsprechpartnerPortraitType = {
  portrait: PrismicPictureType;
  bild_uberlagerung: PrismicPictureType;
  text_uberlagerung: Array<any>;
  bildunterschrift_uberlagerung: string;
  textgrosse: string;
  uberschrift_uberlagerung: PrismicHeadline;
  farbschema?: string;
  profil_link?: LinkType;
  profil_link_text?: string;
  profil_link_title?: string;
  check_uberlagerung: string;
  className?: string;
};
