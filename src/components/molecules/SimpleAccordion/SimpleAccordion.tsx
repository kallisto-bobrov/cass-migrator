import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import type { SimpleAccordionType } from './__types__/SimpleAccordion.type';
import {
  simpleAccordionBlack,
  simpleAccordionGray,
  simpleAccordionWhite,
} from './SimpleAccordion.skins';
import ArrowIcon from '../../atoms/Icons/components/Arrow.Icon';
import {
  headline200skin,
  headline300skin,
  headline500skin,
  headline600skin,
  headline700skin,
  headline800skin,
  headline900skin,
} from '../../atoms/Headline/Headline.skins';

const Wrapper = styled.div<{ $accordionSkin: string }>`
  ${(props) => props.$accordionSkin === 'gray' && simpleAccordionGray}

  button:focus {
    outline: none;
  }
`;

const HeadlineStyled = styled.div<{ $skin: string; $accordionSkin: string }>`
  ${(props) => props.$skin === 'headline900' && headline900skin}
  ${(props) => props.$skin === 'headline800' && headline800skin}
  ${(props) => props.$skin === 'headline700' && headline700skin}
  ${(props) => props.$skin === 'headline600' && headline600skin}
  ${(props) => props.$skin === 'headline500' && headline500skin}
  ${(props) => props.$skin === 'headline300' && headline300skin}
  ${(props) => props.$skin === 'headline200' && headline200skin}
  ${(props) => props.$accordionSkin === 'black' && simpleAccordionBlack}
  ${(props) => props.$accordionSkin === 'white' && simpleAccordionWhite}
  text-align: left;
`;

const Items = styled.div<{ $accordionSkin: string; $isOpen: boolean }>`
  ${(props) => props.$accordionSkin === 'black' && simpleAccordionBlack}
  ${(props) => props.$accordionSkin === 'white' && simpleAccordionWhite}

  margin-top: ${(props) => (props.$isOpen ? '15px' : '0')};
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  height: ${(props) => (props.$isOpen ? 'auto' : '0')};
  overflow: ${(props) => (props.$isOpen ? 'auto' : 'hidden')};
  transition:
    margin-top 0.25s ease-out,
    opacity 0.25s ease-out;
`;

const BtnStyled = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ArrowStyled = styled(ArrowIcon)<{ $btnClicked: boolean }>`
  height: 15px;
  width: 15px;
  transform: rotate(180deg);
  transition: transform 0.15s ease-out;

  ${(props) =>
    props.$btnClicked &&
    css`
      transform: rotate(0deg);
    `}
`;

const SimpleAccordion = ({
  headlineText,
  headlineType,
  headlineSkin = 'headline600',
  children,
  actualBreakpoint,
  accordionSkin = 'black',
  collapseAtBreakpoint,
}: SimpleAccordionType) => {
  const [isOpen, handleOpenState] = useState(true);
  const [btnClick, handleClick] = useState(false);
  const shouldNotBeOpen = collapseAtBreakpoint.indexOf(actualBreakpoint) > -1;

  useEffect(() => {
    handleOpenState(!shouldNotBeOpen);
  });

  return (
    <Wrapper $accordionSkin={accordionSkin}>
      {collapseAtBreakpoint.indexOf(actualBreakpoint) > -1 ? (
        <BtnStyled type="button" onClick={() => handleClick(!btnClick)}>
          <HeadlineStyled $skin={headlineSkin} $accordionSkin={accordionSkin}>
            {headlineText}
          </HeadlineStyled>
          <ArrowStyled $btnClicked={btnClick} />
        </BtnStyled>
      ) : (
        <HeadlineStyled $skin={headlineSkin} $accordionSkin={accordionSkin}>
          {headlineText}
        </HeadlineStyled>
      )}
      <Items $isOpen={isOpen || btnClick} $accordionSkin={accordionSkin}>
        {children}
      </Items>
    </Wrapper>
  );
};

export default SimpleAccordion;
