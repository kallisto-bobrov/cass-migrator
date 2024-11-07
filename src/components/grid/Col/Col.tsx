import React from 'react';
import styled from 'styled-components';
import type { ColsStyledType, ColType } from './Col.type';
import mq from '@/styles/mediaQueries/mediaQueries';
import getGutter from '@/helpers/getGutter/getGutter';

export const getColWidth = (amount: number) => {
  let colsAmount;
  switch (amount) {
    case undefined:
      colsAmount = 12;
      break;
    case 0:
      colsAmount = 0;
      break;
    default:
      colsAmount = amount;
  }
  const colsMaxAmount = 12;
  return `${(colsAmount / colsMaxAmount) * 99.99}%`;
};

const ColStyled = styled.div<{
  $gutter: number;
  $offsetCol: ColsStyledType;
  $colAmount: ColsStyledType;
}>`
  margin: ${(props) => props.$gutter / 2}px;
  margin-left: ${(props) =>
    props.$offsetCol.xl !== '0%'
      ? props.$offsetCol.xl
      : `${props.$gutter / 2}px`};
  width: calc(
    ${(props) => props.$colAmount.xl} - ${(props) => props.$gutter}px
  );

  @media (${mq.lgDown}) {
    margin-left: ${(props) =>
      props.$offsetCol.lg !== '0%'
        ? props.$offsetCol.lg
        : `${props.$gutter / 2}px`};
    width: calc(
      ${(props) => props.$colAmount.lg} - ${(props) => props.$gutter}px
    );
  }

  @media (${mq.mdDown}) {
    margin-left: ${(props) =>
      props.$offsetCol.md !== '0%'
        ? props.$offsetCol.md
        : `${props.$gutter / 2}px`};
    width: calc(
      ${(props) => props.$colAmount.md} - ${(props) => props.$gutter}px
    );
  }

  @media (${mq.smDown}) {
    margin-left: ${(props) =>
      props.$offsetCol.sm !== '0%'
        ? props.$offsetCol.sm
        : `${props.$gutter / 2}px`};
    width: calc(
      ${(props) => props.$colAmount.sm} - ${(props) => props.$gutter}px
    );
  }

  @media (${mq.xs}) {
    margin-left: ${(props) =>
      props.$offsetCol.sm !== '0%'
        ? props.$offsetCol.sm
        : `${props.$gutter / 2}px`};
    width: calc(
      ${(props) => props.$colAmount.xs} - ${(props) => props.$gutter}px
    );
  }
`;

const defaultAmount = {
  xl: 12,
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
};

const defaultOffset = {
  xl: 0,
  lg: 0,
  md: 0,
  sm: 0,
  xs: 0,
};

const Col = ({
  className,
  colAmount = defaultAmount,
  children,
  offset = defaultOffset,
  gutter,
}: ColType) => (
  <ColStyled
    className={className}
    $colAmount={{
      xl: getColWidth(colAmount.xl),
      lg: getColWidth(colAmount.lg),
      md: getColWidth(colAmount.md),
      sm: getColWidth(colAmount.sm),
      xs: getColWidth(colAmount.xs),
    }}
    $offsetCol={{
      xl: getColWidth(offset.xl),
      lg: getColWidth(offset.lg),
      md: getColWidth(offset.md),
      sm: getColWidth(offset.sm),
      xs: getColWidth(offset.xs),
    }}
    $gutter={getGutter(gutter)}
  >
    {children}
  </ColStyled>
);

export default Col;
