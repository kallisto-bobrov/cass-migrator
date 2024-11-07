import React from 'react';
import styled from 'styled-components';
import type { TextboxenSchmuckbilderBlockType } from './__types__/TextboxenSchmuckbilderBlock.type';
import Container from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import LeftBlock from './components/LeftBlock.TextboxenSchmuckbilderBlock';
import RightBlock from './components/RightBlock.TextboxenSchmuckbilderBlock';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled(Container)`
  margin-top: 80px;

  @media (${mq.xs}) {
    margin-bottom: 60px;
  }
`;

const TextboxenSchmuckbilderBlock = ({
  tiles,
  image2to3,
  image2to3_title = '',
  image16to9,
  image16to9_title = '',
}: TextboxenSchmuckbilderBlockType) => (
  <Wrapper>
    <Row>
      <Col
        colAmount={{ xl: 5, lg: 5, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 1,
          lg: 1,
          md: 0,
          sm: 0,
          xs: 0,
        }}
      >
        <Row>
          <LeftBlock
            tiles={tiles}
            image16to9={image16to9}
            image16to9_title={image16to9_title}
          />
        </Row>
      </Col>
      <Col
        colAmount={{ xl: 6, lg: 6, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      >
        <Row>
          <RightBlock
            tiles={tiles}
            image2to3={image2to3}
            image2to3_title={image2to3_title}
          />
        </Row>
      </Col>
    </Row>
  </Wrapper>
);

export default TextboxenSchmuckbilderBlock;
