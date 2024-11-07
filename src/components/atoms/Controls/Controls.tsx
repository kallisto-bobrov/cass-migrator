import React, { useState } from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import ArrowAnimation from '../ArrowAnimation/ArrowAnimation';
import type { ControlsType } from './__types__/Controls.type';
import PlusAnimation from '../PlusAnimation/PlusAnimation';
import CloseBtnAnimation from '../CloseBtnAnimation/CloseBtnAnimation';
import elmStyleMap from '@/constants/maps/elmStyle.map';
import mq from '@/styles/mediaQueries/mediaQueries';

export const arrowControlWidth = 60;
export const arrowControlWidthXS = 45;

const ControlElmStyled = styled.div<{
  $activeState?: boolean;
  $minimalistic: boolean;
}>`
  cursor: pointer;

  ${(props) =>
    props.$minimalistic &&
    css`
      &&& {
        height: 20px;
        width: 20px;
      }
    `};

  ${(props) =>
    !props.$minimalistic &&
    css`
      &&& {
        height: ${`${arrowControlWidth}px`};
        width: ${`${arrowControlWidth}px`};
      }

      background: ${props.$activeState
        ? props.theme.color.secondary900
        : props.theme.color.primary1000};
      display: flex;
      justify-content: center;
      color: ${props.theme.color.white};

      svg {
        width: 18px;
        height: 18px;
      }

      @media (${mq.mdDown}) {
        background: ${props.theme.color.primary800};

        &&& {
          height: ${`${arrowControlWidthXS}px`};
          width: ${`${arrowControlWidthXS}px`};
        }
      }
    `};
`;

const CONTROL_TYPE = {
  [elmStyleMap.arrow]: ArrowAnimation,
  [elmStyleMap.plus]: PlusAnimation,
  [elmStyleMap.close]: CloseBtnAnimation,
};

const ControlElm = ({
  parentStateImport,
  className,
  ctaType = elmStyleMap.arrow,
  minimalistic = false,
  onClick,
}: ControlsType) => {
  const [active, setActive] = useState(false);
  const activeState = active || parentStateImport;

  return (
    <ControlElmStyled
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={onClick}
      className={className}
      $activeState={activeState}
      $minimalistic={minimalistic}
    >
      {React.createElement(
        get(CONTROL_TYPE, ctaType, CONTROL_TYPE[elmStyleMap.arrow]),
        { active: activeState, minimalistic },
        null,
      )}
    </ControlElmStyled>
  );
};

export default ControlElm;
