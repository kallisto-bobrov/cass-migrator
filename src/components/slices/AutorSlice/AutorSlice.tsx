import React from 'react';
import get from 'lodash/get';
import type { AutorSliceType } from './__types__/AutorSlice.type';
import ArticleContainer from '../../atoms/ArticleContainer/ArticleContainer';
import BusinessCard from '../../molecules/BusinessCard/BusinessCard';

const AutorSlice = ({ primary, items }: AutorSliceType) => (
  <ArticleContainer>
    <BusinessCard
      einleitung={get(primary, 'einleitung', null)!}
      items={items}
    />
  </ArticleContainer>
);

export default AutorSlice;
