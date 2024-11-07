import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import uniqueId from 'lodash/uniqueId';
import type { TextTeaserKompositionType } from './__types__/TextTeaserKomposition.type';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import moduletypeMap from '../../../constants/maps/moduleTypes.map';
import TwoTeaserTtk from './components/TwoTeaser.TextTeaserKomposition';
import TwoTeaserVerticalImg from './components/TwoTeaserVerticalImg.TextTeaserKomposition';
import OneTeaserImg from './components/OneTeaserImg.TextTeaserKomposition';
import mq from '@/styles/mediaQueries/mediaQueries';

const ContainerStyled = styled(Container)`
  margin-top: 80px;

  @media (${mq.xs}) {
    margin-bottom: 60px;
  }
`;

const Wrapper = styled(Row)`
  margin-bottom: 60px;

  @media (${mq.xs}) {
    margin-bottom: 30px;
    padding: 0 ${gridGutterHalf}px;
  }
`;

const COMPOSITION_TYPE = {
  [moduletypeMap.twoTeaser]: TwoTeaserTtk,
  [moduletypeMap.twoTeaserVerticalImg]: TwoTeaserVerticalImg,
  [moduletypeMap.oneTeaserImg]: OneTeaserImg,
};

const TextTeaserKomposition = ({ items }: TextTeaserKompositionType) => (
  <ContainerStyled>
    <Row>
      <Col
        colAmount={{
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 12,
        }}
        offset={{
          xl: 1,
          lg: 1,
          md: 0,
          sm: 0,
          xs: 0,
        }}
      >
        {!isEmpty(items) &&
          items.map((item) => (
            <Wrapper key={uniqueId('composition_')}>
              {React.createElement(
                // @ts-ignore
                get(
                  COMPOSITION_TYPE,
                  item.kompositionstyp,
                  COMPOSITION_TYPE[moduletypeMap.twoTeaser],
                )!,
                {
                  teaser_one: item.zielseite_1,
                  teaser_two: item.zielseite_2,
                  bild_2_3: item.bild_2_3,
                  bild_2_3_title: item.bild_2_3_title,
                  bild_16_9: item.bild_16_9,
                  bild_16_9_title: item.bild_16_9_title,
                },
              )}
            </Wrapper>
          ))}
      </Col>
    </Row>
  </ContainerStyled>
);

export default TextTeaserKomposition;
