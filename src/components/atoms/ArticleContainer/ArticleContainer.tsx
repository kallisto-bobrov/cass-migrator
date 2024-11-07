import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Container from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';

type Props = {
  children: ReactNode;
  className?: string;
};

const ContainerStyled = styled(Container)`
  margin-bottom: 0;
`;

const ArticleContainer = ({ children, className }: Props) => (
  <ContainerStyled className={className}>
    <Row>
      <Col
        colAmount={{ xl: 8, lg: 8, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{ xl: 1, lg: 1, md: 0, sm: 0, xs: 0 }} // eslint-disable-line object-curly-newline, max-len
      >
        {children}
      </Col>
    </Row>
  </ContainerStyled>
);

export default ArticleContainer;
