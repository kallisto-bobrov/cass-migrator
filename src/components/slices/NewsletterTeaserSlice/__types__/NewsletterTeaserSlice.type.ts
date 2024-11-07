import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type NewsletterTeaserPrimarytype = {
  hintergrundbild?: PrismicPictureType;
  ankerlink_titel?: string;
};

export type NewsletterTeaserSliceType = {
  primary?: NewsletterTeaserPrimarytype;
};
