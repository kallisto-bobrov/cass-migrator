import type { TextTeaserSlicePrimaryType } from '../../TextTeaserSlice/__types__/TextTeaserSlice.type';
import type { LogoType } from '../../../organisms/LogoBanderole/__types__/LogoBanderole.type';

export type LogoBanderoleSliceType = {
  primary: TextTeaserSlicePrimaryType;
  items: Array<LogoType>;
  slices: number;
  index: number;
};
