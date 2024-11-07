import React from 'react';
import type {
  TextMitBildPrimaryType,
  TextMitBildItemType,
  TextMitBildSliceType,
} from './__types__/TextMitBildSlice.type';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import Slider from '../../organisms/Slider/Slider';

export const createNeededArrayM011 = (
  items: Array<TextMitBildItemType>,
  primary: TextMitBildPrimaryType,
  slices: number,
  index: number,
) => {
  const slides: any = [];

  if (items && items[0]) {
    items.forEach((item) => {
      slides.push({
        item,
        primary,
        slices,
        index,
      });
    });
  }

  return slides;
};

const TextMitBildSlice = ({
  items,
  primary,
  slices,
  index,
}: TextMitBildSliceType) => (
  <div id={primary.ankerlink_titel}>
    <Slider
      items={createNeededArrayM011(items, primary, slices, index)}
      sliderContentType={elmStyleMap.divided}
      sliderSettings={{
        loop: true,
        navigation: true,
        pagination: true,
      }}
      navAlignment="top"
    />
  </div>
);

export default TextMitBildSlice;
