import React from 'react';

import styled from 'styled-components';
import type { ButtonType } from './__types__/Button.type';
import {
  btnPrimarySkin,
  btnPrimarySkinSmallSkin,
  btnSecodarySkin,
  btnSecodarySkinSmallSkin,
} from './Button.skins';
import ArrowCTA from '../Icons/components/ArrowCTA.Icon';

const ButtonStyled = styled.button<{ $skin: string }>`
  ${(props) => props.$skin === 'primary-small' && btnPrimarySkinSmallSkin}
  ${(props) => props.$skin === 'primary' && btnPrimarySkin}
  ${(props) => props.$skin === 'secodary-small' && btnSecodarySkinSmallSkin}
  ${(props) => props.$skin === 'secondary' && btnSecodarySkin}
`;

const Button = ({
  className,
  text = '',
  type = 'button',
  title = '',
  skin = 'primary-small',
  showArrow = true,
  handleClick,
}: ButtonType) => (
  <ButtonStyled // eslint-disable-line react/button-has-type
    className={className}
    type={type}
    title={title}
    $skin={skin}
    onClick={handleClick}
  >
    <span>{text}</span>
    {showArrow && (
      <span>
        <ArrowCTA />
      </span>
    )}
  </ButtonStyled>
);

export default Button;
