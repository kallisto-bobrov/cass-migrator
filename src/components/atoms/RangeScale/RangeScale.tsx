import React from 'react';
import styled from 'styled-components';
import { RangeScaleType } from './__types__/RangeScale.type';

const Div = styled.div<{ $stepsAmount: number; $activeStep: number }>`
  width: 100%;
  background-color: ${(props) => props.theme.color.gray700};
  position: relative;
  height: 5px;
  margin: 15px 0;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => 100 / (props.$stepsAmount / props.$activeStep)}%;
    background-color: ${(props) => props.theme.color.primary800};
  }
`;

const RangeScale = ({ stepsAmount, activeStep }: RangeScaleType) => (
  <Div $stepsAmount={stepsAmount} $activeStep={activeStep} />
);

export default RangeScale;
