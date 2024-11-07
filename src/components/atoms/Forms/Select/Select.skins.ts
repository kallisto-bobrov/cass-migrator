import { css } from 'styled-components';
import { headline500skin } from '../../Headline/Headline.skins';
import { copyStandard } from '../../CopyText/CopyText.skins';

export const selectPrimary = css`
  display: block;
  width: 100%;
  padding: 18px 20px;
  ${headline500skin};
  cursor: pointer;
  background-color: ${(props) => props.theme.color.secondary800};
  color: ${(props) => props.theme.color.white};
  transition: background-color 0.25s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.secondary900};
  }
`;

export const selectSecondary = css`
  display: block;
  width: 100%;
  padding: 9px 20px;
  ${copyStandard};
  cursor: pointer;
  background-color: ${(props) => props.theme.color.gray700};
  color: ${(props) => props.theme.color.black};
  transition: background-color 0.25s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.color.gray800};
  }
`;

export const iconSelectPrimary = css`
  color: ${(props) => props.theme.color.white};
  height: 20px;
`;

export const iconSelectSecondary = css`
  color: ${(props) => props.theme.color.black};
  height: 12px;
`;
