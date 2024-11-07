import { css } from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

export const linkInlineskin = css`
  text-decoration: none;
`;

export const linkCtaSkin = css`
  position: relative;
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.font.family.secondary};
  letter-spacing: ${(props) => props.theme.skin.linkCta.xl.letterSpacing};
  font-size: ${(props) => props.theme.skin.linkCta.xl.fontSize};
  line-height: ${(props) => props.theme.skin.linkCta.xl.lineHeight};
  font-weight: ${(props) => props.theme.skin.linkCta.xl.fontWeight};
  text-decoration: none;

  @media (${mq.smDown}) {
    letter-spacing: ${(props) => props.theme.skin.linkCta.xs.letterSpacing};
    font-size: ${(props) => props.theme.skin.linkCta.xs.fontSize};
    line-height: ${(props) => props.theme.skin.linkCta.xs.lineHeight};
    font-weight: ${(props) => props.theme.skin.linkCta.xs.fontWeight};
  }

  & > * + * {
    margin-left: 15px;
  }
`;
