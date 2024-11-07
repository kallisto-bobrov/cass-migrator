'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import {
  metaNavSkinReduced,
  navItemLiXsSkin,
  navItemNavSkin,
  navItemSubNavLiSkin,
  navItemSubNavSkin,
} from './NavItem.skin';
import * as prismic from '@prismicio/client';
import navSkin from '@/components/organisms/Header/Header.skin';
import Link from '@/components/atoms/Link/Link';
import { usePathname } from 'next/navigation';

type Props = {
  link: prismic.FilledContentRelationshipField;
  text: string;
  anker_link?: string;
  target?: string;
  title?: string;
  className?: string;
  $skin?: string;
  handleClick?: () => void;
  type?: string;
};

const StyledNavItem = styled.li<{ $skin?: string }>`
  ${(props) => props.$skin === 'subNav' && navItemSubNavLiSkin}
  ${(props) => props.$skin !== 'metaNav' && navItemLiXsSkin}
`;

const StyledLink = styled(Link)<{ $skin?: string; $currentPage: boolean }>`
  ${navSkin};
  display: block;
  ${(props) => props.$skin === 'nav' && navItemNavSkin}
  ${(props) => props.$skin === 'subNav' && navItemSubNavSkin}
  ${(props) => props.$skin === 'metaNav' && metaNavSkinReduced}
  ${(props) =>
    props.$currentPage &&
    css`
      color: ${props.theme.skin.navigation.focusColor};
      pointer-events: none;
    `}
`;

const NavItem = ({
  link,
  text,
  anker_link,
  target,
  title,
  $skin,
  type,
  className,
  handleClick,
}: Props) => {
  const pathname = usePathname();

  let url = '';
  if (!link.url) {
    url = `/${link.uid}`;
  } else {
    url = link.url;
  }

  return (
    <StyledNavItem className={className} $skin={$skin} onClick={handleClick}>
      <StyledLink
        {...{
          link_type: link.link_type,
          url: `${url}${anker_link ? `#${anker_link}` : ''}`,
          uid: link.uid,
          pageType: link.type,
          target,
          title,
          $skin: $skin,
          $currentPage: link.uid
            ? pathname
                .split('/')
                .slice(-1)
                .includes(link.uid?.replaceAll('cassini--', '') || '')
            : false,
          anker_link,
          id: link.id,
          type,
        }}
      >
        {text}
      </StyledLink>
    </StyledNavItem>
  );
};

export default NavItem;
