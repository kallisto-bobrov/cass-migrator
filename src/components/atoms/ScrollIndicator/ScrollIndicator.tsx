import React from 'react';
import styled from 'styled-components';
import ScrollArrow from '../Icons/components/ScrollArrow.Icon';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  color: ${(props) => props.theme.color.white};
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${mq.mdDown}) {
    display: none;
  }

  svg {
    width: 15px;
  }
`;

const ScrollIndicatorStyled = styled.div`
  position: relative;
  margin-bottom: 10px;
  width: 32px;
  height: 51px;
  border: 2px solid ${(props) => props.theme.color.white};
  border-radius: 17px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;

  &.hidden {
    opacity: 0;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 10px;
    left: 11px;
    height: 0.375rem;
    width: 0.375rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.white};
    animation: scroll 1.5s infinite ease-in-out;
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 0;
    }

    8% {
      transform: translateY(0);
      opacity: 1;
    }

    20% {
      transform: translateY(0);
      opacity: 1;
    }

    25% {
      transform: translateY(-0.125rem);
      opacity: 1;
    }

    60% {
      transform: translateY(1rem);
      opacity: 0;
    }

    100% {
      transform: translateY(1rem);
      opacity: 0;
    }
  }
`;

const ScrollIndicator = () => (
  <Wrapper>
    <ScrollIndicatorStyled />
    <ScrollArrow />
  </Wrapper>
);

export default ScrollIndicator;
