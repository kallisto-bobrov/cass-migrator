import React from 'react';
import styled, { css } from 'styled-components';
import {
  CloseBtnAnimationStyedType,
  CloseBtnAnimationType,
} from './__types__/CloseBtnAnimation.type';

const PlusIcon = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Vertical = styled.div<CloseBtnAnimationStyedType>`
  height: 2px;
  width: ${(props) => (props.$active ? '35%' : '25%')};

  ${(props) =>
    props.$minimalistic &&
    css`
      width: ${props.$active ? '100%' : '80%'};
    `};

  background: ${(props) =>
    props.$minimalistic ? props.theme.color.black : props.theme.color.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  transition: width 0.25s ease-out;
`;

const Horizontal = styled(Vertical)`
  transform: translate(-50%, -50%) rotate(-45deg);
`;

const CloseBtnAnimation = ({
  active = false,
  minimalistic = false,
}: CloseBtnAnimationType) => (
  <PlusIcon>
    <Vertical $active={active} $minimalistic={minimalistic} />
    <Horizontal $active={active} $minimalistic={minimalistic} />
  </PlusIcon>
);

export default CloseBtnAnimation;
