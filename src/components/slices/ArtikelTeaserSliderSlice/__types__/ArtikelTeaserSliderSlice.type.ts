import type { TextTeaserSlicePrimaryType } from '../../TextTeaserSlice/__types__/TextTeaserSlice.type';
import type { ArticleTeaserSlideType } from '../../../organisms/Slider/__types__/Slider.type';

export type ArtikelTeaserSliderType = {
  primary: TextTeaserSlicePrimaryType;
  items: ArticleTeaserSlideType[];
  slices: number;
  index: number;
};
