import React from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import type { MainContentOverlayType } from '../__types__/Overlay.type';
import CopyText from '../../../atoms/CopyText/CopyText';

import colorsMap from '../../../../constants/maps/colors.map';
import Row from '../../../grid/Row/Row';
import Col from '../../../grid/Col/Col';
import Picture from '../../../atoms/Picture/Picture';
import {
  copyBig,
  copySmall,
  copyStandard,
} from '../../../atoms/CopyText/CopyText.skins';
import Headline from '../../../atoms/Headline/Headline';
import Link from '../../../atoms/Link/Link';
import sizesMap from '@/constants/maps/sizes.map';

const CopyTextStyled = styled(CopyText)<{ $bgColor?: string }>`
  color: ${(props) =>
    props.$bgColor === colorsMap.light
      ? props.theme.color.black
      : props.theme.color.white};
`;

const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Description = styled.div<{ $textgrosse?: string; $bgColor?: string }>`
  ${(props) => props.$textgrosse === sizesMap.big && copyBig}
  ${(props) => props.$textgrosse === sizesMap.standard && copyStandard}
  ${(props) => props.$textgrosse === sizesMap.small && copySmall}
  color: ${(props) =>
    props.$bgColor === colorsMap.light
      ? props.theme.color.black
      : props.theme.color.white};
  margin-top: 15px;
`;

const HeadlineStyled = styled(Headline)<{ $bgColor?: string }>`
  margin-bottom: 25px;

  ${(props) =>
    props.$bgColor === colorsMap.dark &&
    css`
      color: ${props.theme.color.white};
    `}
`;

const LinkWrapper = styled.div`
  margin-top: 30px;
`;

const SIZES = {
  [sizesMap.standard]: 'copyStandard',
  [sizesMap.big]: 'copyBig',
  [sizesMap.small]: 'copySmall',
};

const MainContentOverlay = ({
  text,
  textgrosse = sizesMap.standard,
  bgColor = colorsMap.light,
  bild_title = '',
  bildunterschrift,
  bild,
  headline,
  cta,
  ctaTitle,
  ctaText,
}: MainContentOverlayType) => (
  <Row>
    <Col
      colAmount={{
        xl: get(bild, 'url', null) ? 7 : 12,
        lg: get(bild, 'url', null) ? 7 : 12,
        md: 12,
        sm: 12,
        xs: 12,
      }}
    >
      <HeadlineStyled
        skin="headline700"
        type={get(headline, 'type', undefined)}
        $bgColor={bgColor}
      >
        {get(headline, 'text', null)}
      </HeadlineStyled>
      <CopyTextStyled
        prismicRichText={text}
        skin={get(SIZES, textgrosse, SIZES[sizesMap.standard])}
        $bgColor={bgColor}
      />
      {cta && ctaText && (
        <LinkWrapper>
          <Link
            url={cta.url}
            link_type={get(cta, 'link_type', undefined)}
            uid={get(cta, 'uid', undefined)}
            pageType={get(cta, 'type', undefined)}
            skin="btn-primary-small"
            title={ctaTitle}
            target="_self"
          >
            {ctaText}
          </Link>
        </LinkWrapper>
      )}
    </Col>
    {get(bild, 'url', null) && (
      <ColStyled
        colAmount={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      >
        <Picture image={bild} image_alt={bild_title} />
        {bildunterschrift && (
          <Description $textgrosse={sizesMap.small} $bgColor={bgColor}>
            {bildunterschrift}
          </Description>
        )}
      </ColStyled>
    )}
  </Row>
);

export default MainContentOverlay;
