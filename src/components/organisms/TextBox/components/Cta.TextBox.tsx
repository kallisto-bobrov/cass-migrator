import React from 'react';
import styled, { css } from 'styled-components';
import type { TextBoxCtaType } from '../__types__/TextBox.type';
import ControlElm from '../../../atoms/Controls/Controls';
import elmStyleMap from '../../../../constants/maps/elmStyle.map';
import colorsMap from '../../../../constants/maps/colors.map';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ControlElmStyled = styled(ControlElm)<{ $bgColor?: string }>`
  background: ${(props) => props.theme.color.secondary900};

  ${(props) =>
    props.$bgColor === colorsMap.dark &&
    css`
      background: ${props.theme.color.primary800};
    `}
`;

const LinkText = styled.div<{ $bgColor?: string }>`
  height: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.color.secondary900};
  color: ${(props) => props.theme.color.white};
  padding-left: 20px;

  ${(props) =>
    props.$bgColor === colorsMap.dark &&
    css`
      background: ${props.theme.color.primary800};
    `}
`;

const TextBoxCta = ({
  active,
  ctaType = elmStyleMap.arrow,
  bgColor,
  className,
  linkText,
}: TextBoxCtaType) => (
  <Wrapper className={className}>
    {linkText && (
      <LinkText $bgColor={bgColor}>
        <span>{linkText}</span>
      </LinkText>
    )}
    <ControlElmStyled
      parentStateImport={active}
      ctaType={ctaType}
      $bgColor={bgColor}
    />
  </Wrapper>
);

export default TextBoxCta;
