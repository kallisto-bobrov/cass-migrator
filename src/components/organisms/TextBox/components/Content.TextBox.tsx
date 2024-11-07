import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import type { TextBoxContentType } from '../__types__/TextBox.type';
import Headline from '../../../atoms/Headline/Headline';
import colorsMap from '../../../../constants/maps/colors.map';
import CopyText from '../../../atoms/CopyText/CopyText';

const Wrapper = styled.div`
  margin-bottom: 15px;
`;

const HeadlineStyled = styled(Headline)<{ $bgColor?: string }>`
  ${(props) =>
    (props.$bgColor === colorsMap.colored ||
      props.$bgColor === colorsMap.dark) &&
    css`
      color: ${props.theme.color.white};
    `}
`;

const CopyTextStyled = styled(CopyText)<{ $bgColor?: string }>`
  margin-top: 20px;
  color: ${(props) =>
    props.$bgColor === colorsMap.dark
      ? props.theme.color.white
      : props.theme.color.black};
`;

const TextBoxContent = ({ headline, text, bgColor }: TextBoxContentType) => (
  <Wrapper>
    <HeadlineStyled
      skin="headline700"
      type={get(headline, 'type', undefined)}
      $bgColor={bgColor}
    >
      {get(headline, 'text', null)}
    </HeadlineStyled>
    {text && text[0] && (
      <CopyTextStyled
        prismicRichText={text}
        skin="copyStandard"
        $bgColor={bgColor}
      />
    )}
  </Wrapper>
);

export default TextBoxContent;
