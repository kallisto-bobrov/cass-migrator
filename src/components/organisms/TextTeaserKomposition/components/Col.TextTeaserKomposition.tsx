import React from 'react';
import Col from '../../../grid/Col/Col';
import type { ColTtkType } from '../__types__/TextTeaserKomposition.type';

const ColTtk = ({ children }: ColTtkType) => (
  <Col
    colAmount={{ xl: 6, lg: 6, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
  >
    {children}
  </Col>
);

export default ColTtk;
