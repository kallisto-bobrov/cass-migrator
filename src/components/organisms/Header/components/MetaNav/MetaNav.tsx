import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';
import type { MetaNavProps } from './__types__/MetaNav.types';
import NavItem from '../Nav/NavItem';
import mq from '@/styles/mediaQueries/mediaQueries';
import type { NavLink } from '@/components/organisms/Header/__types__/Nav.type';

const MetaNavStyled = styled.ul`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;

  @media (${mq.lgDown}) {
    display: block;
    padding: 0 30px;
  }
`;

const MetaNav = ({ metaNav, handleClick }: MetaNavProps) => (
  <MetaNavStyled>
    {metaNav &&
      map(
        metaNav,
        ({ url, anker_link, link_text, link_target, link_title }: NavLink) => {
          const key = uniqueId(`metaNav-${link_text}`);
          return (
            <NavItem
              key={key}
              {...{
                link: url,
                uid: url.uid,
                pageType: url.type,
                text: link_text,
                target: link_target || '',
                anker_link,
                title: link_title,
                link_type: url.link_type,
                $skin: 'metaNav',
                handleClick,
              }}
            />
          );
        },
      )}
  </MetaNavStyled>
);

export default MetaNav;
