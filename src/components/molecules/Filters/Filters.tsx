import React from 'react';
import uniqueId from 'lodash/uniqueId';
import styled, { css } from 'styled-components';
import type { FiltersType } from './__types__/Filters.type';
import Link from '../../atoms/Link/Link';
import { copyStandard } from '../../atoms/CopyText/CopyText.skins';
import mq from '@/styles/mediaQueries/mediaQueries';

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
`;

export const filterStyle = css`
  ${copyStandard};
  padding: 9px 30px;
  color: ${(props) => props.theme.color.white};
  margin: 2px;
  cursor: pointer;

  @media (${mq.lgUp}) {
    &:hover {
      background: ${(props) => props.theme.color.primary800};
      color: ${(props) => props.theme.skin.textOnPrimaryBgHover};
    }
  }
`;

const FilterLink = styled(Link)`
  ${filterStyle};
  background-color: ${(props) => props.theme.color.secondary900};
`;

const Filters = ({
  tags,
  filterlink_title = '',
  filter_zielseite,
}: FiltersType) => {
  return (
    <FilterWrapper>
      {tags &&
        tags[0] &&
        tags.map((tag) => {
          return (
            <FilterLink
              key={uniqueId('filter_')}
              url={`${filter_zielseite.uid}?tag=${encodeURIComponent(tag)}`}
              link_type="Document"
              uid={filter_zielseite.uid}
              pageType={filter_zielseite.type}
              title={`${filterlink_title} ${tag}`}
              query={{ tag }}
            >
              {tag}
            </FilterLink>
          );
        })}
    </FilterWrapper>
  );
};

export default Filters;
