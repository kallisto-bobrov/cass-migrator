import { css } from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

export const headline900skin = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.skin.headline900.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline900.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline900.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline900.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline900.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline900.xs.fontWeight};
  }
`;

export const headline800skin = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.skin.headline800.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline800.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline800.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline800.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline800.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline800.xs.fontWeight};
  }
`;

export const headline700skin = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.skin.headline700.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline700.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline700.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline700.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline700.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline700.xs.fontWeight};
  }
`;

export const headline600skin = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.skin.headline600.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline600.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline600.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline600.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline600.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline600.xs.fontWeight};
  }
`;

export const headline500skin = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.skin.headline500.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline500.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline500.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline500.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline500.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline500.xs.fontWeight};
  }
`;

export const headline300skin = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.tertiary};
  font-size: ${(props) => props.theme.skin.headline300.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline300.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline300.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline300.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline300.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline300.xs.fontWeight};
  }
`;

export const headline200skin = css`
  color: ${(props) => props.theme.color.primary800};
  font-family: ${(props) => props.theme.font.family.tertiary};
  font-size: ${(props) => props.theme.skin.headline200.xl.fontSize};
  line-height: ${(props) => props.theme.skin.headline200.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.headline200.xl.fontWeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.headline200.xs.fontSize};
    line-height: ${(props) => props.theme.skin.headline200.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.headline200.xs.fontWeight};
  }
`;
