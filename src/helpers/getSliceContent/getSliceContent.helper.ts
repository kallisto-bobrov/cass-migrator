import { SliceData } from '@/components/slices/RenderSlices/__types__/slices.type';

const getSliceContent = (
  slice: SliceData,
  id: string,
  slicesAmount: number,
  sliceIndex: number,
  amIfirst: boolean,
) => {
  const keyId = { keyId: id };
  const slices = { slices: slicesAmount };
  const myIndex = { index: sliceIndex };
  const firstSlice = { amIfirst };
  return Object.assign(keyId, slice, myIndex, slices, firstSlice);
};

export default getSliceContent;
