import React from 'react';
import uniqueId from 'lodash/uniqueId';
import get from 'lodash/get';
import styled from 'styled-components';
import type { BusinessCardType } from './__types__/BusinessCard.type';
import { gridGutterHalf } from '../../grid/Container/Container';
import Card from './components/Card.BusinessCard';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  margin-bottom: 35px;
  margin-top: 35px;

  @media (${mq.xs}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const Intro = styled.div`
  margin-bottom: 15px;
`;

const BusinessCard = ({ einleitung, items }: BusinessCardType) => (
  <Wrapper>
    <Intro>{einleitung !== null ? einleitung : 'Artikel von:'}</Intro>
    <Row>
      {items &&
        items[0] &&
        items.map((item) => (
          <Col
            key={uniqueId('card_')}
            colAmount={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            {/*@ts-ignore*/}
            <Card {...get(item, 'autor.data', null)} />
          </Col>
        ))}
    </Row>
  </Wrapper>
);

export default BusinessCard;
