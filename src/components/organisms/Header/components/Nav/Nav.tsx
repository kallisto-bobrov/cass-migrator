'use client';

import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';
import NavItem from './NavItem';
import type { NavType } from '../../__types__/Nav.type';
import SubNav from '../SubNav/SubNav';
import mq from '@/styles/mediaQueries/mediaQueries';

type Props = {
  nav: NavType;
  handleClick?: () => void;
  windowHeight?: number | undefined;
  navAnimationRef?: any;
};

const NavStyled = styled.ul`
  position: relative;
  display: flex;
  flex: 0 0 auto;

  @media (${mq.lgDown}) {
    display: block;
    padding: 0 30px;
  }
`;

const Nav = ({ nav, handleClick, windowHeight, navAnimationRef }: Props) => (
  <nav>
    <NavStyled>
      {nav &&
        map(nav, ({ primary, items }) => {
          const key = uniqueId(`nav-${primary.link_text}`);
          if (items && items.length > 0) {
            return (
              <SubNav
                key={key}
                {...{
                  primary,
                  subNav: items,
                  windowHeight,
                  navAnimationRef,
                }}
                handleOpen={handleClick}
              />
            );
          }

          return (
            <NavItem
              key={key}
              {...{
                link: primary.url,
                text: primary.link_text,
                anker_link: primary.anker_link,
                target: primary.link_target,
                title: primary.link_title,
                handleClick,
                $skin: 'nav',
              }}
            />
          );
        })}
    </NavStyled>
  </nav>
);

export default Nav;
