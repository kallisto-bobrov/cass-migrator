import React from 'react';
import styled from 'styled-components';
import {
  createChildWrapperCss,
  createContainerWrapperCss,
} from '../../../../helpers/createCss/createCss';
import Container from '../../../grid/Container/Container';
import { BgImageSingleType, StageContentType } from '../__types__/BgImage.type';

const ContainerWrapperStyled = styled.div<{
  $images: Array<BgImageSingleType>;
}>`
  background: ${(props) => props.theme.color.gray500};
  ${(props) => createContainerWrapperCss(props.$images)};
`;

const ChildWrapperStyled = styled.div<{ $images: Array<BgImageSingleType> }>`
  width: 100%;
  ${(props) => createChildWrapperCss(props.$images)};
`;

const StageContent = ({ images, children }: StageContentType) => (
  <ContainerWrapperStyled $images={images}>
    <Container>
      <ChildWrapperStyled $images={images}>{children}</ChildWrapperStyled>
    </Container>
  </ContainerWrapperStyled>
);

export default StageContent;
