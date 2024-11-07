import React from 'react';
import uniqueId from 'lodash/uniqueId';
import get from 'lodash/get';
import styled from 'styled-components';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import TeaserTile from '../../molecules/TeaserTile/TeaserTile';
import Container from '../../grid/Container/Container';
import type { TeaserTilesBlockType } from '../../slices/TextTeaserSlice/__types__/TeaserTilesBlock.types';

const Wrapper = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const TeaserTilesBlock = ({ items }: TeaserTilesBlockType) => (
  <Wrapper>
    <Row>
      {items &&
        items[0] &&
        items.map((item) => (
          <Col
            key={uniqueId('teaser-')}
            colAmount={{ xl: 4, lg: 4, md: 6, sm: 6, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            <TeaserTile
              {...{
                bgColor: get(item, 'teaser_farbe', undefined),
                headline: get(
                  item,
                  'zielseite.data.teaser_uberschrift[0]',
                  undefined,
                ),
                text: get(item, 'zielseite.data.teaser_text', undefined),
                link_text: get(
                  item,
                  'zielseite.data.teaser_link_text',
                  undefined,
                ),
                link_title: get(
                  item,
                  'zielseite.data.teaser_link_title',
                  undefined,
                ),
                zielseite: get(item, 'zielseite', undefined),
              }}
            />
          </Col>
        ))}
    </Row>
  </Wrapper>
);

export default TeaserTilesBlock;
