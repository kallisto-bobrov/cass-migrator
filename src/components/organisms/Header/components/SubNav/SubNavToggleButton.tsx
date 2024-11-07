import React, { ReactNode, useEffect } from 'react';
import styled, { css } from 'styled-components';
import ArrowCTA from '../../../../atoms/Icons/components/ArrowCTA.Icon';
import ArrowIcon from '../../../../atoms/Icons/components/Arrow.Icon';
import { navItemNavSkin } from '../Nav/NavItem.skin';
import mq from '@/styles/mediaQueries/mediaQueries';
import navSkin from '@/components/organisms/Header/Header.skin';

type Props = {
  isOpen: boolean;
  handleClick: () => void;
  children: ReactNode;
};

const SubNavToggleButtonStyled = styled.button`
  margin: 0;
  outline: none;
  display: block;
  width: 100%;

  &:focus > div {
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

const SubNavToggleSpan = styled.div`
  ${navSkin};
  ${navItemNavSkin};

  &:focus {
    outline: none;
  }

  @media (${mq.lgDown}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Arrow = styled(ArrowIcon)<{ isOpen: boolean }>`
  margin-left: 11px;
  width: 11px;
  height: 11px;
  transform: rotate(180deg);
  ${(props) =>
    props.isOpen ? 'transform: rotate(0);' : 'transform: rotate(180deg);'};
  display: inline;

  @media (${mq.lgDown}) {
    display: none;
  }
`;

const StyledArrowCTA = styled(ArrowCTA)`
  display: none;

  @media (${mq.lgDown}) {
    display: block;
  }
`;

const SubNavToggleButton = ({ isOpen, children, handleClick }: Props) => (
  <SubNavToggleButtonStyled
    aria-haspopup="true"
    aria-expanded={isOpen}
    onClick={handleClick}
  >
    <SubNavToggleSpan tabIndex={-1}>
      {children}
      <Arrow isOpen={isOpen} />
      <StyledArrowCTA />
    </SubNavToggleSpan>
  </SubNavToggleButtonStyled>
);

export default SubNavToggleButton;
