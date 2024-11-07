import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import mq from '../mediaQueries/mediaQueries';

const BasicStyles = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background: ${(props) => props.theme.color.primary800};
    color: ${(props) => props.theme.color.white};
  }

  ::-moz-selection {
    background: ${(props) => props.theme.color.primary800};
    color: ${(props) => props.theme.color.white};
  }

  body {
    width: 100%;
    min-height: 100vh;
    max-width: ${(props) => props.theme.maxWidth};
    font-family: ${(props) => props.theme.font.family.primary};
    font-size: ${(props) => props.theme.skin.copyStandard.xl.fontSize};
    -webkit-font-smoothing: antialiased;
    line-height: ${(props) => props.theme.skin.copyStandard.xl.lineHeight};
    margin: 0 auto;
    word-break: break-word;

    @media (${mq.xxl}) {
        max-width: 100%;
    }

    @media (${mq.smDown}) {
      font-size: ${(props) => props.theme.skin.copyBig.xs.fontSize};
      line-height: ${(props) => props.theme.skin.copyBig.xs.lineHeight};
    }
  }

  button {
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    padding: 0;
    display: inline-block;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    transition: color .25s ease-out;

    &:hover {
      color: ${(props) => props.theme.color.primary800};
    }
  }

  select,
  option {
    appearance: none;
    border: none;
    border-radius: 0;
  }

  select::-ms-expand {
    display: none;
  }
`;

export default BasicStyles;
