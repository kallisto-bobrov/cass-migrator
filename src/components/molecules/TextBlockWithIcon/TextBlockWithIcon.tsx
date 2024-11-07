import React from 'react';
import styled from 'styled-components';
import type { TextBlockWithIconType } from './__types__/TextBlockWithIcon.type';
import Icon from '../../atoms/Icons/Icon';
import CopyText from '../../atoms/CopyText/CopyText';

const Wrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  color: ${(props) => props.theme.color.primary800};
  width: 30px;
  margin-right: 20px;
`;

const CopyTextStyled = styled(CopyText)`
  line-height: 2;

  h3,
  h4 {
    margin-top: 0;
    margin-bottom: 5px;
    line-height: 1;
  }
`;

const TextBlockWithIcon = ({ icon, content }: TextBlockWithIconType) => (
  <Wrapper>
    {icon && (
      <IconWrapper>
        <Icon icon={icon} />
      </IconWrapper>
    )}
    <CopyTextStyled prismicRichText={content} skin="copyStandard" />
  </Wrapper>
);

export default TextBlockWithIcon;
