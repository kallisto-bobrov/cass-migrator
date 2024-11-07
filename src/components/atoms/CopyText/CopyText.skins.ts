import { css } from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

export const copyBig = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.skin.copyBig.xl.fontSize};
  line-height: ${(props) => props.theme.skin.copyBig.xl.lineHeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.copyBig.xs.fontSize};
    line-height: ${(props) => props.theme.skin.copyBig.xs.lineHeight};
  }
`;

export const copyStandard = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.skin.copyStandard.xl.fontSize};
  line-height: ${(props) => props.theme.skin.copyStandard.xl.lineHeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.copyStandard.xs.fontSize};
    line-height: ${(props) => props.theme.skin.copyStandard.xs.lineHeight};
  }
`;

export const copySmall = css`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.skin.copySmall.xl.fontSize};
  line-height: ${(props) => props.theme.skin.copySmall.xl.lineHeight};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.copySmall.xs.fontSize};
    line-height: ${(props) => props.theme.skin.copySmall.xs.lineHeight};
  }
`;
