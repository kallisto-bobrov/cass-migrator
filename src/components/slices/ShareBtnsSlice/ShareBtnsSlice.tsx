import React from 'react';
import get from 'lodash/get';
import type { ShareBtnsSliceType } from './__types__/ShareBtnsSlice.type';
import ShareBtns from '../../molecules/ShareBtns/ShareBtns';

const ShareBtnsSlice = ({ primary }: ShareBtnsSliceType) => (
  <ShareBtns einleitungstext={get(primary, 'einleitungstext', null)!} />
);

export default ShareBtnsSlice;
