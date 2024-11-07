import React from 'react';
import get from 'lodash/get';
import {
  MediengalerieItemType,
  MediengalerieSliceType,
} from './__types__/MediengalerieSlice.type';
import Slider from '../../organisms/Slider/Slider';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import MediaSlide from '../../organisms/Slider/components/MediaSlide.Slider';
import ArticleContainer from '../../atoms/ArticleContainer/ArticleContainer';

function renderSlider(items: MediengalerieItemType[]) {
  return (
    <Slider
      items={items}
      sliderContentType={elmStyleMap.mediaSlider}
      skin={elmStyleMap.mediaSlider}
      sliderSettings={{
        navigation: true,
        pagination: false,
        loop: true,
      }}
    />
  );
}

const MediengalerieSlice = ({ primary, items }: MediengalerieSliceType) => (
  <div id={get(primary, 'ankerlink_titel', null)!}>
    <ArticleContainer>
      {items && items.length > 1 && renderSlider(items)}
      {items && items.length === 1 && (
        <MediaSlide item={get(items, '[0]', undefined)} />
      )}
    </ArticleContainer>
  </div>
);

export default MediengalerieSlice;
