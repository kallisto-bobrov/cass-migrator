import { css } from 'styled-components';
import { gridGutterHalf } from '../../../grid/Container/Container';
import { btnPrimarySkin } from '../../../atoms/Button/Button.skins';
import { headline500skin } from '../../../atoms/Headline/Headline.skins';
import { copySmall } from '../../../atoms/CopyText/CopyText.skins';
import mq from '@/styles/mediaQueries/mediaQueries';

const width = '70%';

const MaatooFormStyles = css`
  background: ${(props) => props.theme.color.gray500};
  padding: 50px 0;
  margin: 60px 0 30px;

  @media (${mq.smDown}) {
    padding: 50px ${`${gridGutterHalf}px`};
  }

  a {
    color: ${(props) => props.theme.color.black};
    transition: color 0.25s ease-out;

    &:hover {
      color: ${(props) => props.theme.color.primary800};
    }
  }
  /* stylelint-disable no-duplicate-selectors */
  .flexWrapper {
    display: flex;
  }

  .flexWrapper--wrap {
    flex-wrap: wrap;
  }

  .mauticform-radiogrp-row,
  .mauticform-checkboxgrp-row {
    ${headline500skin};
  }

  .mauticform-position-2 {
    height: 0;
    width: 0;
    overflow: hidden;
  }

  .mauticform-radiogrp-row,
  .mauticform-checkboxgrp-row {
    display: flex;
    flex-direction: column;
    min-width: 30%;

    @media (${mq.xs}) {
      min-width: 50%;
      display: block;
    }

    label {
      display: inline-block;
      cursor: pointer;
      position: relative;
      user-select: none;
      padding: 4px 0 0 45px;
      height: 30px;
      margin-bottom: 15px;
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .customElm {
      position: absolute;
      top: 0;
      left: 0;
      height: 30px;
      width: 30px;
      background-color: ${(props) => props.theme.color.white};
      border: 3px solid ${(props) => props.theme.color.gray600};

      &:after {
        content: '';
        position: absolute;
        display: none;
        left: 9px;
        top: 2px;
        width: 6px;
        height: 16px;
        border: 2px solid ${(props) => props.theme.color.primary800};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }

    input:checked ~ .customElm:after {
      display: block;
    }
  }

  .mauticform-radiogrp-row {
    flex-direction: row;

    label + label {
      margin-left: 40px;
    }

    .customElm {
      border-radius: 50%;

      &:after {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 14px;
        height: 14px;
        border: none;
        border-radius: 50%;
        background: ${(props) => props.theme.color.secondary900};
      }
    }
  }

  .mauticform-label {
    margin: 30px 0 5px;
    display: block;
  }

  .checkboxRadio-label {
    margin-bottom: 15px;
  }

  .mauticform-input {
    ${headline500skin};
    width: ${width};
    background: ${(props) => props.theme.color.white};
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.color.black};
    padding: 16px 20px;

    @media (${mq.mdDown}) {
      width: 100%;
    }
  }

  .inputComment {
    ${copySmall};
    margin-top: 5px;
    width: ${width};

    @media (${mq.mdDown}) {
      width: 100%;
    }
  }

  .mtStandard {
    margin-top: 25px;
  }

  .mauticform-button {
    ${btnPrimarySkin};
    margin-top: 35px;
  }

  .mauticform-errormsg {
    display: block;
    color: ${(props) => props.theme.color.error};
  }

  .mauticform-has-error {
    input,
    textarea {
      color: ${(props) => props.theme.color.error};
      border-bottom: 2px solid ${(props) => props.theme.color.error};
    }
  }

  .mauticform-message:empty,
  .mauticform-error:empty {
    display: none;
  }

  .mauticform-message,
  .mauticform-error {
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.primary800};
    padding: 20px;
    margin-top: 25px;
  }

  .mauticform-error {
    background: ${(props) => props.theme.color.error};
  }

  .mauticform-textarea {
    border-bottom: 1px solid ${(props) => props.theme.color.black};
    font: inherit;
    font-family: 'GeomanistMedium', Arial, sans-serif;
    color: #000000;
    width: 100%;
    padding: 16px 20px;
    background: #fff;
    box-shadow: 0px 0px 0px #fff inset;
    border-radius: 4px;
    box-sizing: border-box;
    min-height: 100px;
  }

  /* stylelint-enable */
`;

export default MaatooFormStyles;
