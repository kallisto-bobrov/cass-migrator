import React from 'react';
import Row from '../../../grid/Row/Row';
import Col from '../../../grid/Col/Col';
import CopyText from '../../../atoms/CopyText/CopyText';

type Props = {
  info_text: string;
};

const InfoText = ({ info_text }: Props) => (
  <Row>
    <Col
      colAmount={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      offset={{ xl: 1, lg: 1, md: 0, sm: 0, xs: 0 }} // eslint-disable-line object-curly-newline, max-len
    >
      <CopyText text={info_text} />
    </Col>
  </Row>
);

export default InfoText;
