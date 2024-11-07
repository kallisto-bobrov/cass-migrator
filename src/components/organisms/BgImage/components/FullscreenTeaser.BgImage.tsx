import React from 'react';
import styled from 'styled-components';
import { createChildWrapperCss } from '@/helpers/createCss/createCss';
import elmStyleMap from '../../../../constants/maps/elmStyle.map';
import {
  BgImageSingleType,
  FullscreenTeaserContentType,
} from '../__types__/BgImage.type';

const ChildWrapperStyled = styled.div<{ $images: Array<BgImageSingleType> }>`
  ${(props) =>
    createChildWrapperCss(props.$images, elmStyleMap.fullscreenTeaser)};
`;

const FullscreenTeaserContent = ({
  images,
  children,
}: FullscreenTeaserContentType) => (
  <ChildWrapperStyled $images={images}>{children}</ChildWrapperStyled>
);

export default FullscreenTeaserContent;
