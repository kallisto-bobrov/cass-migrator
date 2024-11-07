import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ArrowCTA from '../../../../atoms/Icons/components/ArrowCTA.Icon';
import {
  navItemLiXsSkin,
  navItemSubNavLiSkin,
  navItemSubNavSkin,
} from '../Nav/NavItem.skin';
import navSkin from '@/components/organisms/Header/Header.skin';

type Props = {
  handleClick: () => void;
  children: ReactNode;
  className?: string;
};

const BackLi = styled.li`
  ${navItemSubNavLiSkin};
  ${navItemLiXsSkin}
`;

const BackLink = styled.div`
  ${navSkin};
  ${navItemSubNavSkin}
`;

const ArrowBack = styled(ArrowCTA)`
  margin-right: 11px;
  transform: rotate(180deg);
`;

const SubNavBackButton = ({ children, handleClick, className }: Props) => (
  <BackLi className={className}>
    <BackLink onClick={handleClick}>
      <ArrowBack />
      {children}
    </BackLink>
  </BackLi>
);

export default SubNavBackButton;
