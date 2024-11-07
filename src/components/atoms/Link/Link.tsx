'use client';

import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import type { LinkType } from './__types__/Link.type';
import { linkInlineskin, linkCtaSkin } from './Link.skins';
import {
  btnLightSkinSkin,
  btnPrimarySkin,
  btnPrimarySkinSmallSkin,
  btnSecodarySkin,
  btnSecodarySkinSmallSkin,
} from '../Button/Button.skins';
import ArrowCTA from '../Icons/components/ArrowCTA.Icon';
import ArrowAnimation from '@/components/atoms/ArrowAnimation/ArrowAnimation';
import NextLink from 'next/link';
import { Link as RsLink } from 'react-scroll';

export const LinkStyled = styled(NextLink)<{ $skin: string }>`
  ${(props) => props.$skin === 'inline' && linkInlineskin}
  ${(props) => props.$skin === 'cta' && linkCtaSkin}
  ${(props) => props.$skin === 'btn-primary' && btnPrimarySkin}
  ${(props) => props.$skin === 'btn-secondary' && btnSecodarySkin}
  ${(props) => props.$skin === 'btn-primary-small' && btnPrimarySkinSmallSkin}
  ${(props) =>
    props.$skin === 'btn-secondary-small' && btnSecodarySkinSmallSkin}
  ${(props) => props.$skin === 'btn-light' && btnLightSkinSkin}

  display: inline-flex;
`;

const StyledAnchor = styled.div<{ $skin: string }>`
  cursor: pointer;

  a {
    ${(props) => props.$skin === 'inline' && linkInlineskin}
    ${(props) => props.$skin === 'cta' && linkCtaSkin}
    ${(props) => props.$skin === 'btn-primary' && btnPrimarySkin}
    ${(props) => props.$skin === 'btn-secondary' && btnSecodarySkin}
    ${(props) => props.$skin === 'btn-primary-small' && btnPrimarySkinSmallSkin}
    ${(props) =>
      props.$skin === 'btn-secondary-small' && btnSecodarySkinSmallSkin}
    ${(props) => props.$skin === 'btn-light' && btnLightSkinSkin}
  }
`;

const Link = ({
  children,
  className,
  link_type,
  url,
  uid,
  skin = 'inline',
  target,
  title = '',
  isBroken = false,
  isInsideRichtext,
  anchor_id,
}: LinkType): ReactNode => {
  const [active, setActive] = useState(false);
  const hasAnchor = anchor_id && anchor_id !== '';
  const targetShoulbBeBlank =
    (link_type === 'Web' || link_type === 'Media') && !hasAnchor;
  let href = '';

  const handleAnchorClick = (hash: string) => {
    setTimeout(() => {
      window.location.hash = `#${hash}`;
    }, 500);
  };

  if (anchor_id && anchor_id !== '') {
    return (
      <StyledAnchor $skin={skin}>
        <RsLink
          title={title || ''}
          to={anchor_id}
          spy
          smooth
          duration={1000}
          offset={-100}
          onClick={() => handleAnchorClick(anchor_id)}
        >
          <span>{children}</span>
        </RsLink>
      </StyledAnchor>
    );
  }

  // linkresolver
  if (url) {
    href = url.replaceAll('cassini--', '');
  } else if (uid) {
    href = `/${uid.replaceAll('cassini--', '')}`;
  }

  if (isBroken) {
    return null;
  }

  return (
    <LinkStyled
      className={className}
      href={href}
      $skin={skin}
      target={targetShoulbBeBlank ? '_blank' : target}
      rel={
        target === '_blank' || targetShoulbBeBlank
          ? 'noreferrer noopener'
          : undefined
      }
      title={title}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {!isInsideRichtext ? <div>{children}</div> : children}
      {skin === 'cta' && <ArrowAnimation active={active} />}
      {(skin === 'btn-primary' ||
        skin === 'btn-secondary' ||
        skin === 'btn-secondary-small' ||
        skin === 'btn-primary-small') && (
        <div>
          <ArrowCTA />
        </div>
      )}
    </LinkStyled>
  );
};

export default Link;
