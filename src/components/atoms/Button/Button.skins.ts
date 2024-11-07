import { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { linkCtaSkin } from '../Link/Link.skins';

export const btnPrimarySkin = css`
  ${linkCtaSkin};
  display: inline-block;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.primary800};
  padding: 10px 20px;

  &:hover {
    color: ${(props) => props.theme.color.white};
  }

  &:before {
    content: '';
    background: ${(props) => lighten(0.05, props.theme.color.primary800)};
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: right center;
    transition: transform 0.15s cubic-bezier(0.45, 0.05, 0.3, 0.95) 0.15s;
    z-index: 1;
  }

  &:hover:before {
    transition: transform 0.15s cubic-bezier(0.45, 0.05, 0.3, 0.95) 0s;
    transform-origin: left center;
    transform: scaleX(1);
  }

  & > * {
    margin: 0;
    position: relative;
    z-index: 2;
  }

  & > * + * {
    margin-left: 20px;
  }
`;

export const btnPrimarySkinSmallSkin = css`
  ${btnPrimarySkin};
  padding: 0 15px;

  & > * + * {
    margin-left: 10px;
  }
`;

export const btnLightSkinSkin = css`
  ${btnPrimarySkin};
  color: ${(props) => props.theme.color.black};
  background: ${(props) => props.theme.color.white};

  &:before {
    background: ${(props) => darken(0.1, props.theme.color.white)};
  }

  &:hover {
    color: ${(props) => props.theme.color.black};
  }
`;

export const btnSecodarySkin = css`
  ${btnPrimarySkin};
  background: ${(props) => props.theme.color.secondary800};

  &:before {
    background: ${(props) => lighten(0.1, props.theme.color.secondary800)};
  }
`;

export const btnSecodarySkinSmallSkin = css`
  ${btnPrimarySkinSmallSkin};
  background: ${(props) => props.theme.color.secondary800};

  &:before {
    background: ${(props) => lighten(0.1, props.theme.color.secondary800)};
  }
`;
