export type KuchenDiagrammSliceItemType = {
  name: string;
  value: number;
  color: string | null;
};

export type KuchenDiagrammSlicePrimaryType = {
  ankerlink_titel: string;
  grey_background?: boolean;
};

export type KuchenDiagrammSliceType = {
  primary: KuchenDiagrammSlicePrimaryType;
  items: KuchenDiagrammSliceItemType[];
  slices: number;
  index: number;
};
