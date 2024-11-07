'use client';

import { CassiniPrismicNextLink } from '@/components/atoms/CassiniPrismicNextLink';
import styled, { createGlobalStyle, css } from 'styled-components';
import { headerSkin } from '@/components/organisms/Header/Header.skin';
import { KeyTextField, LinkField } from '@prismicio/types';
import mq from '@/styles/mediaQueries/mediaQueries';
import Container, {
  gridGutter,
  gridGutterHalf,
} from '@/components/grid/Container/Container';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import { transition100 } from '@/styles/transitions/transitions.styles';
import { lgDown } from '@/helpers/breakpoints/checkBreakpoints.helper';
import { positions } from '@/components/atoms/Logo/helper/getLogo.helper';
import Logo from '@/components/atoms/Logo/Logo';
import cssAnimationNavigation from '@/components/organisms/Header/styles/cssAnimation.navigation';
import { CSSTransition } from 'react-transition-group';
import Nav from '@/components/organisms/Header/components/Nav/Nav';
import MetaNav from '@/components/organisms/Header/components/MetaNav/MetaNav';
import NavToggle from '@/components/organisms/Header/components/NavToggle/NavToggle';
import Breadcrumbs from '@/components/molecules/Breadcrumbs/Breadcrumbs';

type Props = {
  homepageLink: {
    link: LinkField;
    title: KeyTextField;
  };
  nav: any;
  metaNav: any;
  globalConfig: any;
};

const HeaderStyled = styled.header`
  ${headerSkin};
`;

const ContainerStyled = styled(Container)`
  @media (${mq.lgDown}) {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  background-color: ${(props) => props.theme.skin.header.background};
  display: flex;
  justify-content: stretch;
  padding-right: ${gridGutterHalf}px;

  @media (${mq.lgDown}) {
    flex-direction: column;
    background-color: ${(props) => props.theme.skin.header.mdDown.background};
    padding-right: 0;
  }
`;

const LogoWrapper = styled.div`
  display: flex;

  @media (${mq.lgDown}) {
    background-color: ${(props) => props.theme.color.white};
    justify-content: stretch;
    height: ${(props) => props.theme.skin.header.height};
  }
`;

const LinkStyled = styled(CassiniPrismicNextLink)<{ $isOpen: boolean }>`
  padding: 0 ${gridGutter}px;
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1 1 auto;

  ${(props) =>
    props.theme.skin.headerLogo.backgroundColorTransition
      ? css`
          background-color: ${props.theme.color.primary800};

          @media (${mq.lgDown}) {
            transition: background-color ${transition100};
            background-color: ${props.$isOpen
              ? props.theme.color.white
              : props.theme.color.primary800};
          }
        `
      : css`
          background-color: ${props.theme.color.white};
        `}
`;

const GlobalStyle = createGlobalStyle<{ navIsOpen: boolean }>`
  body {
    @media (${mq.lgDown}) {
      ${(props) =>
        props.navIsOpen
          ? css`
              overflow: hidden;
              position: fixed;
            `
          : ''}
    }
  }
`;

const NavAnimationWrapper = styled.div<{ $windowHeight: number | undefined }>`
  background-color: ${(props) => props.theme.skin.navigation.background};
  height: calc(
    ${(props) => `${props.$windowHeight}px` || '100vh'} -
      ${(props) => props.theme.skin.header.height}
  );
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  ${cssAnimationNavigation('nav')};
`;

const LogoStyled = styled(Logo)`
  svg {
    height: ${(props) => props.theme.skin.headerLogo.height};
    width: auto;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: stretch;
  flex: 1 0 auto;

  @media (${mq.lgDown}) {
    display: none;
  }
`;

function HeaderClient({ homepageLink, nav, metaNav, globalConfig }: Props) {
  const [navIsOpen, navToggle] = useState(false);
  const navAnimationRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState<number>();
  const breakpoint = useContext(BreakpointContext);

  function handleOpen() {
    setWindowHeight(window.innerHeight);
    navToggle(!navIsOpen);
  }

  return (
    <HeaderStyled>
      <GlobalStyle {...{ navIsOpen }} />
      <ContainerStyled>
        <Wrapper>
          <LogoWrapper
            onClick={() => lgDown(breakpoint) && navIsOpen && handleOpen()}
          >
            <LinkStyled field={homepageLink.link} $isOpen={navIsOpen}>
              <LogoStyled
                position={
                  lgDown(breakpoint) && navIsOpen
                    ? positions.navMdDown
                    : positions.nav
                }
              />
            </LinkStyled>
            <NavToggle handleOpen={handleOpen} isOpen={navIsOpen} />
          </LogoWrapper>
          <CSSTransition
            in={navIsOpen}
            timeout={1000}
            classNames="nav"
            nodeRef={navAnimationRef}
            unmountOnExit
          >
            <NavAnimationWrapper
              $windowHeight={windowHeight}
              ref={navAnimationRef}
            >
              <Nav
                nav={nav}
                handleClick={handleOpen}
                windowHeight={windowHeight}
                navAnimationRef={navAnimationRef}
              />
              <MetaNav metaNav={metaNav} handleClick={handleOpen} />
            </NavAnimationWrapper>
          </CSSTransition>
          <DesktopNav>
            <Nav nav={nav} />
            <MetaNav metaNav={metaNav} />
          </DesktopNav>
        </Wrapper>
        {/*<Breadcrumbs globalConfig={globalConfig} />*/}
      </ContainerStyled>
    </HeaderStyled>
  );
}

export default HeaderClient;
