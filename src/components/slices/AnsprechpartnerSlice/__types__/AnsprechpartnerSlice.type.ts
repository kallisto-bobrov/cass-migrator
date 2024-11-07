import type { TextTeaserSlicePrimaryType } from '../../TextTeaserSlice/__types__/TextTeaserSlice.type';
import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';

type AnsprechpartnerItem = {
  ansprechpartner: InternalLink;
  profil_link: InternalLink;
  profil_link_text: string;
  profil_link_title: string;
  check_uberlagerung: string;
};

export type AnsprechpartnerSliceType = {
  primary: TextTeaserSlicePrimaryType;
  items: [AnsprechpartnerItem];
  slices: number;
  index: number;
};
