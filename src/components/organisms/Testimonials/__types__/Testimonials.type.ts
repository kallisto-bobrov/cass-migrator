import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';

export type TestimonialType = {
  logo: PrismicPictureType;
  zitat: string[];
  author: string;
  logo_alt?: string;
};

export type TestimonialsType = {
  items: Array<TestimonialType>;
};
