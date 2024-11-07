import React from 'react';
import styled from 'styled-components';
import type { PlusAnimationType } from './__types__/PlusAnimation.type';

const PlusIcon = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Vertical = styled.div<{ $active: boolean }>`
  height: 2px;
  width: ${(props) => (props.$active ? '35%' : '25%')};
  background: ${(props) => props.theme.color.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.25s ease-out;
`;

const Horizontal = styled(Vertical)`
  transform: translate(-50%, -50%) rotate(90deg);
`;

const PlusAnimation = ({ active = false }: PlusAnimationType) => (
  <PlusIcon>
    <Vertical $active={active} />
    <Horizontal $active={active} />
  </PlusIcon>
);

export default PlusAnimation;
