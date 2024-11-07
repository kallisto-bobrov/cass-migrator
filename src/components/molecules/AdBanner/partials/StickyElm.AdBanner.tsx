import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import styled, { css } from 'styled-components';
import type { StickyElmType } from '../__types__/AdBanner.type';
import Icon from '../../../atoms/Icons/Icon';
import Link from '../../../atoms/Link/Link';
import {
  AD_BANNER_COLORS_MAP,
  AD_BANNER_TYPES_MAP,
} from '../__types__/AdBanner.type';

const Wrapper = styled(Link)<{
  $color: string;
  $isVisible: boolean;
  $type: string;
  $offsetTop: number;
  $mainBannerIsVisible: boolean;
  $adBannerLayoutSwitchMQ: string;
}>`
  display: none;
  background-color: ${(props) =>
    props.$color === AD_BANNER_COLORS_MAP.brand
      ? props.theme.color.primary800
      : props.theme.color.secondary900};
  position: fixed !important;
  z-index: 899;
  transition:
    color 0.25s ease-out,
    right 0.25s ease-out,
    transform 0.25s ease-out;
  color: ${(props) => props.theme.color.white};
  padding: 15px 60px 15px 15px;

  ${(props) =>
    props.$type === AD_BANNER_TYPES_MAP.relative &&
    css`
      top: 60%;
      right: ${props.$isVisible ? '0' : '-300'}px;
    `};

  ${(props) =>
    props.$type === AD_BANNER_TYPES_MAP.fixed &&
    css`
      top: ${props.$offsetTop}px;
      right: 0;
      transform-origin: right top;
      transition: transform 0.25s ease-out;
      transform: scale(${props.$mainBannerIsVisible ? '2' : '1'});
    `};

  &:hover {
    color: ${(props) => props.theme.color.secondary900};
    transform: scale(1.1);
  }

  @media (${(props) => props.$adBannerLayoutSwitchMQ}) {
    display: block;
  }

  svg {
    height: 33px;
    width: 30px;
  }
`;

const StickyElm = ({
  ctaTitle,
  ctaLink,
  color,
  icon,
  adBannerLayoutSwitchMQ,
  type,
  offsetTop,
  mainBannerIsVisible,
}: StickyElmType) => {
  const [isVisible, setVisibility] = useState(false);

  const handleScroll = debounce(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 230) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, 100);

  useEffect(() => {
    if (type === AD_BANNER_TYPES_MAP.fixed) {
      handleScroll();
      window.addEventListener('scroll', handleScroll, false);
      return function cleanup() {
        window.removeEventListener('scroll', handleScroll, false);
      };
    }
  }, []);

  return (
    <>
      {isVisible && (
        <Wrapper
          $type={type}
          $color={color}
          url={ctaLink.url}
          uid={ctaLink.uid}
          pageType={ctaLink.type}
          link_type={ctaLink.link_type}
          skin="cta"
          title={ctaTitle}
          target={ctaLink.target}
          $adBannerLayoutSwitchMQ={adBannerLayoutSwitchMQ}
          $isVisible={isVisible}
          $offsetTop={offsetTop}
          $mainBannerIsVisible={mainBannerIsVisible}
        >
          <Icon icon={icon} />
        </Wrapper>
      )}
    </>
  );
};

export default StickyElm;
