import { css } from 'styled-components';
import { gridGutterHalf } from '../../grid/Container/Container';

export const simpleAccordionBlack = css`
  color: ${(props) => props.theme.color.black};
`;

export const simpleAccordionWhite = css`
  color: ${(props) => props.theme.color.white};
`;

export const simpleAccordionGray = css`
  background: ${(props) => props.theme.color.gray500};
  padding: ${`${gridGutterHalf}px`};
`;
