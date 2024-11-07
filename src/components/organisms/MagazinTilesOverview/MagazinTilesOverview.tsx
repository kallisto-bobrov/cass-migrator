import React, { memo } from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import chooseTile from '../../../helpers/chooseTile/chooseTile';

const Wrapper = styled.div`
  padding: 25px 0;
`;

type Props = {
  items: Array<any>;
};

const MagazinTilesOverview = ({ items }: Props) => {
  return (
    <Wrapper>
      <Row>
        {items &&
          items.map((item) => {
            return (
              <Col
                key={uniqueId('col_')}
                colAmount={{ xl: 4, lg: 4, md: 6, sm: 6, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
              >
                {chooseTile(item)}
              </Col>
            );
          })}
      </Row>
    </Wrapper>
  );
};

export default memo(MagazinTilesOverview);
