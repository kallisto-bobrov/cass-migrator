import React from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import map from 'lodash/map';
import {
  filterStyle,
  FilterWrapper,
} from '../../../../molecules/Filters/Filters';

type FilterMagazinType = {
  tags: { name: string; slug: string }[];
  selectedTag: any;
  handleTagChange: Function;
};

const FilterStyled = styled.label<{ $checked: boolean }>`
  ${filterStyle};
  background-color: ${(props) =>
    props.$checked
      ? props.theme.color.primary800
      : props.theme.color.secondary900};
`;

const RadioStyled = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
`;

const FilterMagazin = ({
  tags,
  selectedTag,
  handleTagChange,
}: FilterMagazinType) => {
  return (
    <FilterWrapper>
      {tags &&
        tags.length > 0 &&
        map(tags, (tag) => {
          return (
            <FilterStyled
              htmlFor={`tags-${tag.name}`}
              key={uniqueId('inspireTags-')}
              $checked={selectedTag === tag.name}
            >
              <RadioStyled
                type="radio"
                name="tags"
                value={tag.name || ''}
                id={`tags-${tag.name}`}
                checked={selectedTag === tag.name}
                onChange={(event) => handleTagChange(event)}
              />
              {tag.name}
            </FilterStyled>
          );
        })}
    </FilterWrapper>
  );
};

export default FilterMagazin;
