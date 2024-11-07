import React, { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import type { TeaserTileType } from './__types__/TeaserTile.type';
import colorsMap from '../../../constants/maps/colors.map';
import Headline from '../../atoms/Headline/Headline';
import CopyText from '../../atoms/CopyText/CopyText';
import { gridGutterHalf } from '../../grid/Container/Container';
import Link from '../../atoms/Link/Link';
import LinkImitator from '../../atoms/LinkImitator/LinkImitator';
import Picture from '../../atoms/Picture/Picture';
import Video from '../../atoms/Video/Video';
import skinMap from '../../../constants/maps/skin.map';
import mq from '@/styles/mediaQueries/mediaQueries';

export const tilePadding = '30px';

const Wrapper = styled.div`
  height: 100%;
`;

const LinkStyled = styled(Link)<{ $bgColor?: string }>`
  display: flex;
  background-color: ${(props) =>
    props.$bgColor === colorsMap.colored
      ? props.theme.color.primary900
      : props.theme.color.white};
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Div = styled.div<{ $bgColor?: string; [key: string]: any }>`
  display: flex;
  background-color: ${(props) =>
    props.$bgColor === colorsMap.colored
      ? props.theme.color.primary800
      : props.theme.color.white};
  height: 100%;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  padding: ${tilePadding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 0 auto;

  @media (${mq.xs}) {
    padding: ${`${gridGutterHalf}px`};
  }
`;

const StyledHeadline = styled(Headline)<{
  $bgColor?: string;
  $teaserSkin?: string;
}>`
  color: ${(props) =>
    props.$bgColor === colorsMap.colored
      ? props.theme.color.white
      : props.theme.color.black};
  ${(props) =>
    props.$teaserSkin === skinMap.magazin || props.$teaserSkin === skinMap.video
      ? 'min-height: 56px;'
      : ''};
  margin-bottom: 20px;
`;

const CopyTextStyled = styled(CopyText)`
  margin-bottom: 20px;
  flex: 1 0 auto;
`;

export const Overline = styled.div`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.skin.copySmall.xl.fontSize};
  line-height: ${(props) => props.theme.skin.copySmall.xs.lineHeight};
  color: ${(props) => props.theme.color.black};

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.copySmall.xs.fontSize};
    line-height: ${(props) => props.theme.skin.copySmall.xs.lineHeight};
  }
`;

const CtaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StandAloneCta = styled(Link)`
  line-height: 1 !important;
`;

const TAG_MAP = {
  [skinMap.magazin]: LinkStyled,
  [skinMap.video]: Div,
};

const TeaserTile = ({
  bgColor = colorsMap.white,
  headline,
  text,
  dachzeile,
  link_text,
  link_title = '',
  zielseite,
  teaser_bild_16_9,
  teaser_bild_title,
  skin,
  embedUrl,
  link_whitepaper,
  foreignContentLink,
}: TeaserTileType) => {
  const [active, setActive] = useState(false);
  let finalLink = link_whitepaper
    ? { url: link_whitepaper, link_type: 'Web' }
    : zielseite;

  if (
    foreignContentLink &&
    (foreignContentLink.url || foreignContentLink.uid)
  ) {
    finalLink = foreignContentLink;
  }

  function getHeadlineSkin(teaserSkin?: string): string {
    return teaserSkin === skinMap.magazin || teaserSkin === skinMap.video
      ? 'headline600'
      : 'headline700';
  }

  function getTextSkin(teaserSkin?: string): string {
    return teaserSkin === skinMap.magazin || teaserSkin === skinMap.video
      ? 'copyStandard'
      : 'copySmall';
  }
  const getUrl = (skin: any, finalLink: any) => {
    if (skin === skinMap.video) return '';
    if (finalLink && finalLink.url) return finalLink.url;
    if (finalLink && finalLink.uid) return finalLink.uid;
  };

  const linkProps = {
    $bgColor: bgColor,
    link_type: get(finalLink, 'type', undefined),
    url: getUrl(skin, finalLink),
    uid: get(finalLink, 'uid', undefined),
    pageType: get(finalLink, 'type', undefined),
    target: link_whitepaper ? '_blank' : get(finalLink, 'target', undefined),
    title: skin === skinMap.video ? undefined : link_title,
  };

  const divProps = {
    $bgColor: bgColor,
    uid: get(finalLink, 'uid', undefined),
  };

  // @ts-ignore
  return (
    <Wrapper
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {React.createElement(
        get(TAG_MAP, skin!, TAG_MAP[skinMap.magazin]),
        {
          ...(skin === skinMap.video ? divProps : linkProps),
        },
        <>
          {teaser_bild_16_9 ? (
            <Picture image={teaser_bild_16_9} image_alt={teaser_bild_title} />
          ) : null}
          {embedUrl && embedUrl !== '' ? <Video embedUrl={embedUrl} /> : null}
          <TextWrapper>
            {(dachzeile || skin === skinMap.video) && (
              <Overline>{dachzeile ? dachzeile : 'Video'}</Overline>
            )}
            <StyledHeadline
              $bgColor={bgColor}
              skin={getHeadlineSkin(skin)}
              $teaserSkin={skin}
              type="heading3"
            >
              {get(headline, 'text', '...')}
            </StyledHeadline>
            {bgColor !== colorsMap.colored && text && text[0] ? (
              <CopyTextStyled prismicRichText={text} skin={getTextSkin(skin)} />
            ) : null}
            {link_text && skin !== skinMap.video && (
              <LinkImitator
                bgColor={bgColor}
                link_text={link_text}
                active={active}
              />
            )}
            {link_text &&
              get(foreignContentLink, 'url', null) &&
              skin === skinMap.video && (
                <CtaWrapper>
                  <StandAloneCta
                    {...{
                      link_type: 'Web',
                      url: foreignContentLink!.url,
                      target: '_blank',
                      title: link_title,
                      skin: 'cta',
                    }}
                  >
                    {link_text}
                  </StandAloneCta>
                </CtaWrapper>
              )}
          </TextWrapper>
        </>,
      )}
    </Wrapper>
  );
};

export default TeaserTile;
