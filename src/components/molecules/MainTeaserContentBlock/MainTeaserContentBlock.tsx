import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import type { MainTeaserContentBlockType } from './__types__/MainTeaserContentBlock.type';
import Tag from '../../atoms/Tag/Tag';
import Headline from '../../atoms/Headline/Headline';
import CopyText from '../../atoms/CopyText/CopyText';
import Link from '../../atoms/Link/Link';
import { gridGutterHalf } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div<{ $fullWidth?: boolean; $hasImage?: boolean }>`
  width: ${(props) => (props.$fullWidth ? '100%' : '55%')};
  padding: ${(props) => (props.$hasImage ? `35px ${gridGutterHalf}px` : '0')};

  @media (${mq.lgUp}) {
    margin-top: 50px;
  }

  @media (${mq.mdDown}) {
    width: 100%;
  }

  @media (${mq.xs}) {
    padding: ${(props) => (props.$hasImage ? `10px ${gridGutterHalf}px` : '0')};
  }

  h3,
  h4 {
    margin: 0 0 10px;
  }
`;

const TagStyled = styled(Tag)`
  margin-bottom: 15px;
`;

const HeadlineWrapper = styled.div`
  width: 100%;
  margin-bottom: 23px;

  @media (${mq.mdDown}) {
    width: calc(100% - ${`${gridGutterHalf}px`});
  }
`;

const HeadlineStyled = styled(Headline)`
  color: ${(props) => props.theme.skin.mainTeaserContentBlock.headline.color};
  background: ${(props) =>
    props.theme.skin.mainTeaserContentBlock.headline.background};
  padding: 10px 20px;
  -webkit-box-decoration-break: clone;
  display: inline;
  line-height: 1.5;

  @media (${mq.smDown}) {
    line-height: 1.7;
  }
`;

const TextStyled = styled(CopyText)<{ $fullWidth?: boolean }>`
  background: ${(props) =>
    props.$fullWidth ? props.theme.color.gray500 : props.theme.color.white};
  padding: ${`${gridGutterHalf}px`};
  font-size: 18px;
`;

const LinkWrapper = styled.div`
  @media (${mq.smDown}) {
    padding: ${`${gridGutterHalf}px`};
    background: ${(props) => props.theme.color.white};
  }

  a {
    margin-top: 15px;
  }
`;

const Cta = styled(Link)`
  @media (${mq.smDown}) {
    width: 100%;
    margin-top: 0;
  }
`;

const MainTeaserContentBlock = ({
  dachzeile,
  uberschrift,
  text,
  button_text,
  button_url,
  ankerlink_ziel,
  button_title = '',
  fullWidth,
  hasImage = false,
  smallerHeadline = false,
  className,
}: MainTeaserContentBlockType) => {
  const getAnchorLink = (id?: string) => {
    let hash;
    if (button_url && button_url.url && button_url.url.split('#').length > 1) {
      hash = button_url.url.split('#')[1];
    }
    if (id) {
      hash = id.replace('#', '');
    }
    return hash;
  };

  return (
    <Wrapper $fullWidth={fullWidth} $hasImage={hasImage} className={className}>
      {dachzeile && <TagStyled text={dachzeile} />}
      {get(uberschrift, 'text', null) && (
        <HeadlineWrapper>
          <HeadlineStyled
            skin={fullWidth || smallerHeadline ? 'headline800' : 'headline900'}
            type={get(uberschrift, 'type', undefined)}
          >
            {get(uberschrift, 'text', null)}
          </HeadlineStyled>
        </HeadlineWrapper>
      )}
      {text && text[0] && get(text[0], 'text', null) !== '' && (
        <TextStyled
          prismicRichText={text}
          skin="copyStandard"
          $fullWidth={fullWidth}
        />
      )}
      {button_text && (
        <LinkWrapper>
          <Cta
            url={`${button_url?.url || button_url?.uid}${ankerlink_ziel || ''}`}
            link_type={
              get(button_url, 'link_type', null) as
                | 'Web'
                | 'Media'
                | 'Document'
                | undefined
            }
            uid={get(button_url, 'uid', undefined)}
            target={get(button_url, 'target', undefined)}
            pageType={get(button_url, 'type', undefined)}
            skin="btn-primary"
            title={button_title}
            anchor_id={getAnchorLink(ankerlink_ziel)}
          >
            {button_text}
          </Cta>
        </LinkWrapper>
      )}
    </Wrapper>
  );
};

export default MainTeaserContentBlock;
