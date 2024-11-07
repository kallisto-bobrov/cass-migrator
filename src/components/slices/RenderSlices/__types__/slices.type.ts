export type SliceData = {
  slice_type: string;
  slice_label?: string | null;
  items: any[];
  primary: any;
};

export type SlicesType = {
  slices: Array<SliceData>;
};

export type SliceContent = {
  slice: SliceData;
  id: string;
  slicesAmount: number;
  sliceIndex: number;
  amIfirst: boolean;
};
