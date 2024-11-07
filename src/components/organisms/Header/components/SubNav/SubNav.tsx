'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';
import * as ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import NavItem from '../Nav/NavItem';
import SubNavToggleButton from './SubNavToggleButton';
import SubNavBackButton from './SubNavBackButton';
import { navItemLiXsSkin } from '../Nav/NavItem.skin';
import { NavLink } from '@/components/organisms/Header/__types__/Nav.type';
import { transition100 } from '@/styles/transitions/transitions.styles';
import mq from '@/styles/mediaQueries/mediaQueries';
import cssAnimationNavigation from '@/components/organisms/Header/styles/cssAnimation.navigation';

type Props = {
  primary: NavLink;
  subNav: [NavLink];
  handleOpen?: Function;
  windowHeight: number | undefined;
  navAnimationRef: any;
};

const SubNavStyled = styled.ul<{
  $windowHeight: number | undefined;
  $isOpen: boolean;
}>`
  position: absolute;
  background-color: ${(props) => props.theme.skin.navigation.background};
  padding: 0 15px 5px;

  @media (${mq.xl}) {
    display: grid;
    grid-template-rows: repeat(5, min-content);
    grid-auto-flow: column;
    gap: 10px;

    &.subNav-enter {
      opacity: 0;
    }

    &.subNav-enter-active {
      opacity: 1;
      transition: opacity ${transition100};
    }

    &.subNav-exit {
      opacity: 1;
    }

    &.subNav-exit-active {
      opacity: 0;
      transition: opacity ${transition100};
    }
  }

  @media (${mq.xl}) {
    padding: 0 10px 5px;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: ${(props) => props.theme.skin.navigation.background};
    }
  }

  @media (${mq.lgDown}) {
    padding: 0 30px;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(
      ${(props) => `${props.$windowHeight}px` || '100vh'} -
        ${(props) => props.theme.skin.header.height}
    );
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    z-index: 9999;
    ${cssAnimationNavigation('subNav')};
  }
`;

const LiStyled = styled.li<{ $isOpen: boolean }>`
  flex: 0 0 auto;
  overflow: visible;
  transition: background-color 0.5s;
  background-color: ${(props) =>
    props.$isOpen ? props.theme.skin.navigation.background : 'transparent'};
  ${navItemLiXsSkin};
`;

const SubNavWrapper = styled.div<{ $isVisible: boolean }>`
  visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
`;

const SubNavBackButtonStyled = styled(SubNavBackButton)`
  display: none;
  @media (${mq.lgDown}) {
    display: block;
  }
`;

const SubNav = ({
  primary,
  subNav,
  handleOpen,
  windowHeight,
  navAnimationRef,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // workaround to SSR of the sub nav due to seo agency requirements
  const liRef = useRef(null);
  const nodeRef = useRef(null);

  function handleClickOutside(event: MouseEvent) {
    if (liRef) {
      // eslint-disable-next-line react/no-find-dom-node
      const liNavDomNode = ReactDOM.findDOMNode(liRef.current);
      if (liNavDomNode && !liNavDomNode.contains(event.target as Node | null)) {
        setIsOpen(false);
      }
    }
  }

  function closeAll() {
    if (handleOpen && isOpen) {
      handleOpen();
    } else {
      setIsOpen(!isOpen);
    }
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
    window.addEventListener('mousedown', handleClickOutside, false);
    return function cleanup() {
      window.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, []);

  useEffect(() => {
    if (navAnimationRef) {
      const navWrapper = navAnimationRef.current;
      if (isOpen) {
        navWrapper.setAttribute('style', 'overflow: hidden;');
        navWrapper.scrollTop = 0;
      } else {
        navWrapper.removeAttribute('style');
      }
    }
  }, [isOpen]);

  return (
    <LiStyled ref={liRef} $isOpen={isOpen}>
      <SubNavToggleButton
        isOpen={isOpen && isVisible}
        handleClick={handleClick}
      >
        {primary.link_text}
      </SubNavToggleButton>
      <SubNavWrapper $isVisible={isVisible}>
        <CSSTransition
          in={isOpen}
          timeout={500}
          classNames="subNav"
          unmountOnExit
          nodeRef={nodeRef}
        >
          {() => (
            <SubNavStyled
              ref={nodeRef}
              $isOpen={isOpen}
              $windowHeight={windowHeight}
            >
              <SubNavBackButtonStyled handleClick={handleClick}>
                zurück
              </SubNavBackButtonStyled>
              <NavItem
                {...{
                  link: primary.url,
                  text: primary.link_text_sub || 'Übersicht',
                  target: primary.link_target,
                  title: primary.link_title,
                  anker_link: primary.anker_link,
                  $skin: 'subNav',
                  handleClick: closeAll,
                  type: 'category',
                }}
              />
              {map(subNav, (subNavItem) => {
                const subNavKey = uniqueId(`subNav-${subNavItem.link_text}`);
                return (
                  <NavItem
                    key={subNavKey}
                    {...{
                      link: subNavItem.url,
                      text: subNavItem.link_text,
                      target: subNavItem.link_target,
                      title: subNavItem.link_title,
                      $skin: 'subNav',
                      handleClick: closeAll,
                    }}
                  />
                );
              })}
            </SubNavStyled>
          )}
        </CSSTransition>
      </SubNavWrapper>
    </LiStyled>
  );
};

export default SubNav;
