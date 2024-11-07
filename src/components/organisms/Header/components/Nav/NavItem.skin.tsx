import { css } from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

const vPaddingNav = {
  xl: '24px',
  lgDown: '22px',
};

const vPaddingSubNav = {
  xl: '13px',
  lgDown: '22px',
};

export const navItemNavSkin = css`
  padding: ${vPaddingNav.xl} 15px;
  margin: 0 15px;

  @media (${mq.lgDown}) {
    padding: ${vPaddingNav.lgDown} 10px;
    margin: 0;
  }
`;

export const navItemSubNavSkin = css`
  padding: ${vPaddingSubNav.xl} 15px;

  @media (${mq.lgDown}) {
    padding: ${vPaddingSubNav.lgDown} 10px;
    margin: 0;
  }
`;

export const navItemSubNavLiSkin = css`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.skin.navigation.divider};
  }
`;

export const navItemLiXsSkin = css`
  @media (${mq.lgDown}) {
    &:not(:last-of-type) {
      border-bottom: 1px solid ${(props) => props.theme.skin.navigation.divider};
    }
  }
`;

export const metaNavSkinReduced = css`
  padding: 26px 15px;

  > div {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.primary800};
    height: 30px;
    padding: 0 15px;
    transition: background-color 0.25s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.color.secondary800};
    }
  }

  @media (${mq.lgDown}) {
    padding: 13px 10px;

    > div {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
    }
  }
`;

export const metaNavSkin = css`
  padding: 26px 15px;
  font-size: ${(props) => props.theme.skin.metaNav.xl.fontSize};
  font-family: ${(props) => props.theme.skin.metaNav.xl.fontFamily};
  font-weight: ${(props) => props.theme.skin.metaNav.xl.fontWeight};
`;
