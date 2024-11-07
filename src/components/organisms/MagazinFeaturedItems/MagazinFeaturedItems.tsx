import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Row from '../../grid/Row/Row';
import type { MagazinFeaturedItemsType } from './__types__/MagazinFeaturedItems.type';
import Col from '../../grid/Col/Col';
import chooseTile from '../../../helpers/chooseTile/chooseTile';
import Picture from '../../atoms/Picture/Picture';
import MainTeaserContentBlock from '../../molecules/MainTeaserContentBlock/MainTeaserContentBlock';
import { tilePadding } from '../../molecules/TeaserTile/TeaserTile';
import { gridGutterHalf } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';
import {
  HeadlineType,
  HeadlineTypes,
  PrismicHeadline,
} from '@/components/atoms/Headline/__types__/Headline.types';

const Wrapper = styled(Row)`
  margin-bottom: 0;

  @media (${mq.mdDown}) {
    margin-bottom: ${`${gridGutterHalf}px`};
  }
`;

const MainFeaturedTeaser = styled(Col)`
  position: relative;
  padding: ${tilePadding};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (${mq.smDown}) {
    padding: 0;
  }
`;

const PictureStyled = styled(Picture)`
  position: absolute;
  top: 0;
  left: 0;

  @media (${mq.smDown}) {
    position: relative;
    margin-bottom: -85px;
  }
`;

const Content = styled(MainTeaserContentBlock)`
  position: relative;
  z-index: 2;
  width: 100%;

  @media (${mq.lg}) {
    width: 50%;
  }

  @media (${mq.md}) {
    width: 50%;
  }
`;

const MagazinFeaturedItems = ({
  main,
  top,
  bottom,
}: MagazinFeaturedItemsType) => {
  const headline: PrismicHeadline = get(
    main,
    'data.teaser_uberschrift[0]',
    undefined,
  )!;
  if (headline) headline.type = 'heading1';

  return (
    <Wrapper>
      {get(main, 'type', null) && (
        <MainFeaturedTeaser
          colAmount={{ xl: 8, lg: 12, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        >
          <PictureStyled
            image={get(main, 'data.teaser_bild_1_1', undefined)!}
            objectFit
          />
          <Content
            {...{
              dachzeile: get(main, 'data.teaser_dachzeile', undefined),
              uberschrift: headline,
              text: get(main, 'data.teaser_text', undefined),
              button_url: main,
              button_text: get(main, 'data.teaser_link_text', undefined),
              button_title: get(main, 'data.teaser_link_title', undefined),
              smallerHeadline: true,
            }}
          />
        </MainFeaturedTeaser>
      )}
      <Col
        colAmount={{
          xl: get(main, 'type', null) ? 4 : 12,
          lg: 12,
          md: 12,
          sm: 12,
          xs: 12,
        }}
      >
        <Row>
          {get(top, 'type', null) && (
            <Col
              colAmount={{
                xl: get(main, 'type', null) ? 12 : 6,
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12,
              }}
            >
              {chooseTile(top)}
            </Col>
          )}
          {get(bottom, 'type', null) && (
            <Col
              colAmount={{
                xl: get(main, 'type', null) ? 12 : 6,
                lg: 6,
                md: 6,
                sm: 6,
                xs: 12,
              }}
            >
              {chooseTile(bottom)}
            </Col>
          )}
        </Row>
      </Col>
    </Wrapper>
  );
};

export default MagazinFeaturedItems;
