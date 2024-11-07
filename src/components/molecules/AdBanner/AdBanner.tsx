import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import debounce from 'lodash/debounce';
import type { AdBannerType } from './__types__/AdBanner.type';
import CopyText from '../../atoms/CopyText/CopyText';
import Link from '../../atoms/Link/Link';
import { gridGutterHalf } from '../../grid/Container/Container';
import StickyElm from './partials/StickyElm.AdBanner';
import {
  AD_BANNER_COLORS_MAP,
  AD_BANNER_TYPES_MAP,
} from './__types__/AdBanner.type';
import useClickOutside from '../../hooks/useClickOutside';
import mq from '@/styles/mediaQueries/mediaQueries';

const adBannerLayoutSwitchMQ = mq.mdUp;
const offsetTop = 102;

const Wrapper = styled.div<{ $type: string; $isVisible: boolean }>`
  margin: -35px -${gridGutterHalf}px 35px;
  padding: 25px ${gridGutterHalf}px;
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.font.family.secondary};
  background-color: ${(props) =>
    props.color === AD_BANNER_COLORS_MAP.brand
      ? props.theme.color.primary800
      : props.theme.color.secondary900};

  ${(props) =>
    props.$type === AD_BANNER_TYPES_MAP.relative &&
    css`
      @media (${mq.mdUp}) {
        margin: -75px 0 25px;
      }

      @media (${adBannerLayoutSwitchMQ}) {
        margin: 0 0 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `};

  ${(props) =>
    props.$type === AD_BANNER_TYPES_MAP.fixed &&
    css`
      @media (${mq.mdUp}) {
        margin: 0;
        position: fixed;
        z-index: 900;
        right: 0;
        top: ${offsetTop + 50}px;
        width: 400px;
        padding: 35px 100px 35px 35px;
        transition: transform 0.25s ease-out;
        transform-origin: right top;
        transform: scale(${props.$isVisible ? 1 : 0});
      }
    `};
`;

const Headline = styled.div`
  margin-bottom: 10px;
`;

const StyledText = styled(CopyText)<{ $type?: string; $isVisible?: boolean }>`
  font-size: 24px;
  font-family: ${(props) => props.theme.font.family.secondary};
  color: ${(props) => props.theme.color.white};

  ${(props) =>
    props.$type === AD_BANNER_TYPES_MAP.fixed &&
    css`
      @media (${adBannerLayoutSwitchMQ}) {
        transition: opacity 0.1s ease-out;
        opacity: ${props.$isVisible ? '1' : '0'};
      }
    `}
`;

const StyledLink = styled(Link)<{ $type?: string }>`
  font-size: 20px;
  line-height: 29px;
  font-family: ${(props) => props.theme.font.family.secondary};
  color: ${(props) => props.theme.color.white};
  margin-top: 20px;

  &:hover {
    color: ${(props) => props.theme.color.secondary900};
  }

  @media (${adBannerLayoutSwitchMQ}) {
    ${(props) =>
      props.$type === AD_BANNER_TYPES_MAP.relative &&
      css`
        margin-top: 0;
      `};
  }
`;

const AdBanner = ({
  headline,
  text,
  ctaText,
  ctaTitle,
  ctaLink,
  color,
  icon,
  type,
}: AdBannerType) => {
  const [isVisible, setVisibility] = useState(false);
  const wrapperRef = useRef(null);

  const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition <= 10) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, 100);

  useClickOutside(wrapperRef, () => {
    setVisibility(false);
  });

  useEffect(() => {
    if (type === AD_BANNER_TYPES_MAP.fixed) {
      setTimeout(() => {
        setVisibility(false);
      }, 6000);
      handleScroll();
      window.addEventListener('scroll', handleScroll, false);
      return function cleanup() {
        window.removeEventListener('scroll', handleScroll, false);
      };
    }
  }, []);

  return (
    <>
      <Wrapper
        color={color}
        $type={type}
        $isVisible={isVisible}
        ref={wrapperRef}
      >
        <div>
          <Headline>{headline}</Headline>
          <StyledText
            prismicRichText={text}
            skin="copyBig"
            $type={type}
            $isVisible={isVisible}
          />
        </div>
        <StyledLink
          url={ctaLink.url}
          uid={ctaLink.uid}
          pageType={ctaLink.type}
          link_type={ctaLink.link_type}
          skin="cta"
          title={ctaTitle}
          target={ctaLink.target}
        >
          {ctaText}
        </StyledLink>
      </Wrapper>
      <StickyElm
        type={type}
        icon={icon}
        color={color}
        ctaLink={ctaLink}
        ctaTitle={ctaTitle}
        adBannerLayoutSwitchMQ={adBannerLayoutSwitchMQ}
        offsetTop={offsetTop}
        mainBannerIsVisible={isVisible}
      />
    </>
  );
};

export default AdBanner;
