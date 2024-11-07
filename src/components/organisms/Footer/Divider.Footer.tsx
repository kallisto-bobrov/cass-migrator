import React from 'react';
import styled from 'styled-components';
import type { FooterDivider } from './__types__/Footer.type';

const DividerStyled = styled.div<{ $margin: string }>`
  height: 1px;
  width: 100%;
  opacity: 0.5;
  background: ${(props) => props.theme.skin.footer.deviderColor};
  margin: ${(props) => props.$margin};
`;

const Divider = ({ margin = '0', className }: FooterDivider) => (
  <DividerStyled $margin={margin} className={className} />
);

export default Divider;
