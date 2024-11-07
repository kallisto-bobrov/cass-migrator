import type { EventsSlicePrimaryType } from '../../EventsSlice/__type__/EventsSlice.type';

export type DownloadTeaserSliceType = {
  primary: EventsSlicePrimaryType;
  items: [any];
  slices: number;
  index: number;
};
