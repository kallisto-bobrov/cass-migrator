import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Button from '../../atoms/Button/Button';

type XingEventCheckoutType = {
  xing_event_code?: string;
  cta_text?: string;
  cta_title?: string;
};

const Wrapper = styled(Container)`
  margin-bottom: 35px;

  iframe {
    width: 100%;
  }
`;

const CheckoutIframeWrapper = styled.div`
  border: 10px solid ${(props) => props.theme.color.primary800};
  padding: 35px;
`;

const XingEventCheckout = ({
  xing_event_code,
  cta_text,
  cta_title,
}: XingEventCheckoutType) => {
  const [isVisible, toggleCheckoutVisibility] = useState(false);
  return (
    <Wrapper>
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
          {!isVisible && (
            <Button
              text={cta_text}
              title={cta_title}
              skin="primary"
              handleClick={() => toggleCheckoutVisibility(true)}
            />
          )}
          {isVisible && (
            <CheckoutIframeWrapper
              dangerouslySetInnerHTML={{ __html: xing_event_code! }}
            />
          )}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default XingEventCheckout;
