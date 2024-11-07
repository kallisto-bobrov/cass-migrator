import { css } from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

export const headerSkin = css`
  position: fixed;
  top: 0;
  z-index: 9998;
  width: 100%;
`;

const navSkin = css`
  color: ${(props) => props.theme.skin.navigation.color};
  cursor: pointer;
  font-family: ${(props) => props.theme.font.family.secondary};
  transition: color 0.15s ease-out;
  text-decoration: none;
  line-height: ${(props) => props.theme.skin.navigation.xl.lineHeight};
  font-size: ${(props) => props.theme.skin.navigation.xl.fontSize};
  font-weight: ${(props) => props.theme.skin.navigation.xl.fontWeight};
  white-space: nowrap;

  &:hover {
    color: ${(props) => props.theme.skin.navigation.hoverColor};
  }

  &:focus,
  &:active {
    color: ${(props) => props.theme.skin.navigation.focusColor};
  }

  @media (${mq.lgDown}) {
    font-size: ${(props) => props.theme.skin.navigation.mdDown.fontSize};
  }
`;

export default navSkin;
