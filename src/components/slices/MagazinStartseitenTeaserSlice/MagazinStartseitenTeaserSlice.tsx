import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import type { MagazinStartseitenTeaserSliceType } from './__types__/MagazinStartseitenTeaserSlice.type';
import FilterLinksBlock from '../../organisms/FilterLinksBlock/FilterLinksBlock';
import Slider from '../../organisms/Slider/Slider';
import getDataFromArray from '../../../helpers/getDataFromArray/getDataFromArray.helper';
import elmStyleMap from '../../../constants/maps/elmStyle.map';

const Div = styled.div`
  & + & {
    margin-top: -50px;
  }
`;

const renderSlider = (items: any) => {
  return (
    <Slider
      items={getDataFromArray(items, 'zielseite', 'data')}
      sliderContentType={elmStyleMap.fullscreenTeaser}
      sliderSettings={{
        loop: true,
        navigation: true,
        pagination: true,
      }}
      navAlignment="top"
    />
  );
};

const MagazinStartseitenTeaserSlice = ({
  primary,
  items,
  slices,
  index,
}: MagazinStartseitenTeaserSliceType) => {
  return (
    <Div id={get(primary, 'ankerlink_titel', null)!}>
      {getDataFromArray(items, 'tag.data.tag')[0] ? (
        <FilterLinksBlock
          tags={getDataFromArray(items, 'tag.data.tag')}
          filterlink_title={get(primary, 'filterlink_title', null)!}
          chapter={get(primary, 'kapitel', null)}
          headline={get(primary, 'uberschrift[0]', null)!}
          uberschrift_filter={get(primary, 'uberschrift_filter', null)!}
          slices={slices}
          index={index}
          filter_zielseite={get(primary, 'filter_zielseite', null)!}
        >
          {renderSlider(items)}
        </FilterLinksBlock>
      ) : (
        <div>Hier kommt der Slider hin</div>
      )}
      {!getDataFromArray(items, 'tag.data.tag')[0] && renderSlider(items)}
    </Div>
  );
};

export default MagazinStartseitenTeaserSlice;
