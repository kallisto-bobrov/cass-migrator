'use client';

/* eslint-disable react/jsx-one-expression-per-line */

import React, { Suspense } from 'react';
import type { SliceContent } from '../RenderSlices/__types__/slices.type';
import slicesMap from '@/constants/maps/slices.map';
import getSliceContent from '@/helpers/getSliceContent/getSliceContent.helper';

const SliceProxy = ({
  slice,
  id,
  slicesAmount,
  sliceIndex,
  amIfirst = false,
}: SliceContent) => {
  let content = <div>Unknown element: {slice.slice_type}</div>;
  const contentObject = getSliceContent(
    slice,
    id,
    slicesAmount,
    sliceIndex,
    amIfirst,
  );
  // @ts-ignore
  if (typeof slicesMap[slice.slice_type] !== 'undefined') {
    // @ts-ignore
    content = React.createElement(slicesMap[slice.slice_type], {
      ...contentObject,
    });
  }
  return <Suspense>{content}</Suspense>;
};

export default SliceProxy;
