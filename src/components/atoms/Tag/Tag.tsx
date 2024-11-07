import React from 'react';
import styled from 'styled-components';
import type { TagType } from './__types__/Tag.type';

const TagStyled = styled.div`
  background: ${(props) => props.theme.color.black};
  padding: 2px 10px;
  display: inline-block;
  font-size: ${(props) => props.theme.skin.copySmall.xl.fontSize};
  line-height: ${(props) => props.theme.skin.copySmall.xl.lineHeight};
  font-weight: ${(props) =>
    (props.theme.skin.tag && props.theme.skin.tag.fontWeight) || 'bold'};
  color: ${(props) => props.theme.color.white};
`;

const Tag = ({ className, text }: TagType) => (
  <TagStyled className={className}>{text}</TagStyled>
);

export default Tag;
