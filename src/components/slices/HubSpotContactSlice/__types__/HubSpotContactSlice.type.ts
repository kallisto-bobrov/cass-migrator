import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type HubSpotContactSlicePrimaryType = {
  ankerlink_titel?: string;
  portalid: string;
  formid: string;
  uberschrift?: Array<PrismicHeadline>;
  text?: Array<any>;
};

export type HubSpotContactSliceType = {
  primary?: HubSpotContactSlicePrimaryType;
  slices: number;
  index: number;
};
