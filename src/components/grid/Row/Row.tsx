import React from 'react';
import styled from 'styled-components';
import type { RowType } from './__types__/Row.type';
import getGutter from '@/helpers/getGutter/getGutter';

const RowStyled = styled.div<{ $gutter: number }>`
  display: flex;
  flex-wrap: wrap;
  margin: -${(props) => props.$gutter / 2}px;
  width: calc(100% + ${(props) => props.$gutter}px);
`;

const Row = ({ className, children, gutter }: RowType): React.JSX.Element => (
  <RowStyled className={className} $gutter={getGutter(gutter)}>
    {children}
  </RowStyled>
);

export default Row;
