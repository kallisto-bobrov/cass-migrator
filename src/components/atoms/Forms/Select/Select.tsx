import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';
import type { SelectType } from './__types__/Select.type';
import ArrowIcon from '../../Icons/components/Arrow.Icon';
import { copyStandard } from '../../CopyText/CopyText.skins';
import {
  iconSelectPrimary,
  iconSelectSecondary,
  selectPrimary,
  selectSecondary,
} from './Select.skins';

const LabelStyled = styled.label`
  display: block;
  ${copyStandard};
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectIcon = styled(ArrowIcon)<{ $skin: string }>`
  transform: rotate(180deg) translateY(50%);
  position: absolute;
  top: 50%;
  right: 20px;
  pointer-events: none;
  ${(props) =>
    props.$skin === 'selectPrimary' ? iconSelectPrimary : iconSelectSecondary};
`;

const SelectStyled = styled.select<{ $skin: string }>`
  ${(props) =>
    props.$skin === 'selectPrimary' ? selectPrimary : selectSecondary};
`;

const OptionStyled = styled.option`
  padding: 10px;
`;

const Select = ({
  options,
  value,
  handleChange,
  label,
  id,
  skin = 'selectPrimary',
  className,
}: SelectType) => (
  <LabelStyled className={className}>
    {label}
    <SelectWrapper>
      <SelectStyled
        value={value}
        onChange={handleChange}
        id={id}
        name={id}
        $skin={skin}
      >
        {options &&
          options[0] &&
          map(options, (option) => (
            <OptionStyled key={uniqueId('SelectOption-')} value={option.value}>
              {option.text}
            </OptionStyled>
          ))}
      </SelectStyled>
      <SelectIcon $skin={skin} />
    </SelectWrapper>
  </LabelStyled>
);

export default Select;
