import React from 'react';
import uniqueId from 'lodash/uniqueId';
import filter from 'lodash/filter';
import get from 'lodash/get';
import type { SlicesType } from './__types__/slices.type';
import SliceProxy from '../SliceProxy/SliceProxy';
import { visibility } from '@/constants/maps/boolean.map';

const RenderSlices = ({ slices }: SlicesType) => {
  const chapterSlices = filter(
    slices,
    (o) => o.primary.kapitel === visibility.show,
  );
  const slicesAmount = chapterSlices.length;
  let sliceIndex = 0;

  return (
    <>
      {slices &&
        slices.map((slice, index) => {
          const key = uniqueId(`slice-${slice.slice_type}`);
          if (get(slice, 'primary.kapitel', null) === visibility.show) {
            sliceIndex += 1;
          }
          return (
            <SliceProxy
              key={key}
              slice={slice}
              id={key}
              slicesAmount={slicesAmount}
              sliceIndex={
                get(slice, 'primary.kapitel', null) === visibility.show
                  ? sliceIndex
                  : 0
              }
              amIfirst={index === 0}
            />
          );
        })}
    </>
  );
};

export default RenderSlices;
