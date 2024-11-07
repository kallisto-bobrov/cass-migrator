import React, { useState } from 'react';
import map from 'lodash/map';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import type { TeaserOverviewType } from './__types__/TeaserOverview.type';
import Container from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Button from '../../atoms/Button/Button';
import DownloadTeaser from '../../molecules/DownloadTeaser/DownloadTeaser';
import EventTeaserTile from '../../molecules/EventTeaserTile/EventTeaserTile';

const ColStyled = styled(Col)`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
const ButtonStyled = styled(Button)`
  flex: 0 0 auto;
`;

const componentMap = {
  download: DownloadTeaser,
  event: EventTeaserTile,
};

const TeaserOverview = ({
  items,
  teaserType,
  buttonText,
  pageSize,
}: TeaserOverviewType) => {
  const [tilePage, setTilePage] = useState(1);
  const PAGE_SIZE = pageSize || 3;
  function showMore() {
    setTilePage(tilePage + 1);
  }
  return (
    items && (
      <Container>
        <Row>
          {items.length > 0 &&
            map(items, (item, index) => {
              return (
                index < PAGE_SIZE * tilePage && (
                  <Col
                    key={uniqueId('TeaserOverview')}
                    colAmount={{ xl: 4, lg: 4, md: 6, sm: 6, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
                  >
                    {React.createElement(
                      // @ts-ignore
                      componentMap[teaserType],
                      item,
                    )}
                  </Col>
                )
              );
            })}
        </Row>
        {tilePage < items.length / PAGE_SIZE && (
          <Row>
            <ColStyled>
              <ButtonStyled
                text={buttonText}
                skin="secondary"
                showArrow={false}
                handleClick={showMore}
              />
            </ColStyled>
          </Row>
        )}
      </Container>
    )
  );
};

export default TeaserOverview;
