import React from 'react';
import ArticleContainer from '../../atoms/ArticleContainer/ArticleContainer';
import MainTeaserContentBlock from '../../molecules/MainTeaserContentBlock/MainTeaserContentBlock';
import ZitatMitPortrait from '../../molecules/ZitatMitPortrait/ZitatMitPortrait';
import { ZitatMitPortraitSliceType } from '@/components/slices/ZitatMitPortraitSlice/__types__/ZitatMitPortraitSlice.types';
import get from 'lodash/get';

const ZitatMitPortraitSlice = ({ primary }: ZitatMitPortraitSliceType) => {
  return (
    <ArticleContainer>
      <ZitatMitPortrait
        quote={get(primary, 'zitat', undefined)}
        authorName={get(primary, 'author', null)!}
        image={get(primary, 'bild', null)!}
        bildgrosse={get(primary, 'bildgrosse', 'adaptiv')}
        bild_medium={get(primary, 'bild_medium', null)!}
        bild_gross={get(primary, 'bild_gross', null)!}
      />

      <MainTeaserContentBlock
        {...{
          text: get(primary, 'beschreibung', null)!,
          fullWidth: true,
        }}
      />
    </ArticleContainer>
  );
};

export default ZitatMitPortraitSlice;
