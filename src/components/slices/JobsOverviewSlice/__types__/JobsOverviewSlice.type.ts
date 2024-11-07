import type { InternalLink } from '../../../atoms/Link/__types__/Link.type';
import type { PrismicHeadline } from '../../../atoms/Headline/__types__/Headline.types';

export type JobsOverviewItemType = {
  field?: InternalLink;
  filter_2?: InternalLink;
  filter_3?: InternalLink;
  filter_4?: InternalLink;
  filter_5?: InternalLink;
  filter_6?: InternalLink;
  filter_7?: InternalLink;
  [key: string]: any;
};

export type JobsOverviewSlicePrimaryType = {
  ankerlink_titel: string;
  kapitel: string;
  uberschrift: Array<PrismicHeadline>;
  text: Array<any>;
  textgrosse?: string;
  label_field?: string;
  filter_2_label?: string;
  filter_3_label?: string;
  filter_4_label?: string;
  filter_5_label?: string;
  filter_6_label?: string;
  filter_7_label?: string;
  filter_reset?: string;
  info_text?: string;
};

export type JobsOverviewSliceType = {
  primary: JobsOverviewSlicePrimaryType;
  items: JobsOverviewItemType[];
  slices: number;
  index: number;
};

export type FilterSelection = {
  field?: string;
  filter_2?: string;
  filter_3?: string;
  filter_4?: string;
  filter_5?: string;
  filter_6?: string;
  filter_7?: string;
};

export type JobsOverviewFiltersType = {
  items: JobsOverviewItemType[];
  filter_reset: string;
  filterSelections: FilterSelection;
  handleChange: Function;
  primary: JobsOverviewSlicePrimaryType;
  label_field: string;
};
