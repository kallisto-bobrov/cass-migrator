import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';
import { TestimonialType } from '../../../organisms/Testimonials/__types__/Testimonials.type';

export type TestimonialsSlicePrimaryType = {
  ankerlink_titel: string;
  uberschrift: PrismicHeadline;
  text: Array<any>;
};

export type TestimonialsSliceType = {
  primary: TestimonialsSlicePrimaryType;
  items: Array<TestimonialType>;
  slices: number;
  index: number;
};
