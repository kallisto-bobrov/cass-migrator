import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import colorsMap from '../../../constants/maps/colors.map';
import { linkCtaSkin } from '../Link/Link.skins';
import ArrowAnimation from '../ArrowAnimation/ArrowAnimation';
import type { LinkImitatorType } from './__types__/LinkImitator.type';
import Icon from '../Icons/Icon';

const CtaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

function colorSwitch({
  $bgColor,
  theme,
}: {
  $active: boolean;
  $bgColor?: string;
  theme: DefaultTheme;
}) {
  switch ($bgColor) {
    case colorsMap.colored:
      return theme.color.white;
    case colorsMap.light:
      return theme.color.black;
    default:
      return theme.color.primary800;
  }
}

const Cta = styled.div<{ $active: boolean; $bgColor?: string }>`
  ${linkCtaSkin};
  display: flex;
  line-height: 1 !important;

  ${(props) =>
    props.$active &&
    css`
      color: ${colorSwitch(props)};
    `}
`;

const LinkImitator = ({
  bgColor,
  link_text,
  active,
  iconType = 'arrow',
}: LinkImitatorType) => (
  <CtaWrapper>
    <Cta $bgColor={bgColor} $active={active}>
      <div>{link_text}</div>
      {iconType === 'arrow' ? (
        <ArrowAnimation active={active} />
      ) : (
        <Icon icon={iconType} />
      )}
    </Cta>
  </CtaWrapper>
);

export default LinkImitator;
