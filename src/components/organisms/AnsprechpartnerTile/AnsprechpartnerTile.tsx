import React from 'react';
import styled, { css } from 'styled-components';
import type { AnsprechpartnerTileType } from './__types__/AnsprechpartnerTile.type';
import AnsprechpartnerInfo from '../../molecules/AnsprechpartnerInfo/AnsprechpartnerInfo';
import AnsprechpartnerPortrait from '../../molecules/AnsprechpartnerPortrait/AnsprechpartnerPortrait';
import { gridGutter } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div<{ $isOne?: boolean }>`
  ${(props) =>
    props.$isOne
      ? css`
          display: flex;
          align-items: flex-start;

          @media (${mq.xs}) {
            display: block;
          }
        `
      : ''}
`;

const PortraitStyled = styled(AnsprechpartnerPortrait)<{ $isOne?: boolean }>`
  ${(props) =>
    props.$isOne === true
      ? css`
          margin-right: ${gridGutter}px;
          flex: 0 1 auto;
          width: calc(33.33333333333333% - ${gridGutter}px + 14px);

          @media (${mq.lgDown}) {
            width: calc(41.66666666666667% - ${gridGutter}px + 17px);
          }

          @media (${mq.xs}) {
            width: 100%;
            margin-bottom: 20px;
          }
        `
      : css`
          margin-bottom: 20px;
        `}
`;

const InfoStyled = styled(AnsprechpartnerInfo)<{ $isOne?: boolean }>`
  ${(props) =>
    props.$isOne === true
      ? css`
          flex: 0 1 auto;
          overflow: hidden;
        `
      : css``}
`;

const AnsprechpartnerTile = ({
  portrait,
  info,
  isOne,
}: AnsprechpartnerTileType) => (
  <Wrapper $isOne={isOne}>
    <PortraitStyled $isOne={isOne} {...portrait} />
    <InfoStyled $isOne={isOne} {...info} />
  </Wrapper>
);

export default AnsprechpartnerTile;
