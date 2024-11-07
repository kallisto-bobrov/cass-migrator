import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import ArrowCTA from '../Icons/components/ArrowCTA.Icon';
import type { ArrowAnimationType } from './__types__/ArrowAnimation.type';

const Wrapper = styled.div<{ $active: boolean }>`
  width: 18px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    transition: right 0.25s ease-out;
    top: 50%;
    transform: translateY(-47%);

    &:first-of-type {
      right: 0;
    }

    &:last-of-type {
      right: 25px;
    }
  }

  ${(props) =>
    props.$active &&
    css`
      svg {
        &:first-of-type {
          right: -18px;
        }

        &:last-of-type {
          right: 0;
        }
      }
    `}
`;

const ArrowAnimation = ({ active = false }: ArrowAnimationType): ReactNode => (
  <Wrapper $active={active}>
    <ArrowCTA />
    <ArrowCTA />
  </Wrapper>
);

export default ArrowAnimation;
