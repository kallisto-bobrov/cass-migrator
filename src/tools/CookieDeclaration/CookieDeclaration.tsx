import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '../../components/grid/Container/Container';
import Row from '../../components/grid/Row/Row';
import Col from '../../components/grid/Col/Col';
import { copyBig } from '@/components/atoms/CopyText/CopyText.skins';
import { cassiniCookiebotId } from '@/tools/CookieBot/CookieBot';

const margin = 20;
const ColStyled = styled(Col)`
  p,
  #CookieDeclarationUserStatusPanel {
    ${copyBig}
  }
  p + p,
  p + h4,
  p + h3 {
    margin-top: ${margin * 2}px;
  }
  a {
    color: ${(props) => props.theme.color.black};
    position: relative;
    opacity: 1;
    transition: opacity 0.25s ease-out;
    text-decoration: underline;

    &:hover {
      opacity: 0.3;
    }
  }
`;

const CookieDeclaration = () => {
  useEffect(() => {
    const cookieScript = document.getElementById('CookieDeclaration');
    if (!cookieScript) {
      const script = document.createElement('script');
      script.setAttribute('id', 'CookieDeclaration');
      script.async = true;
      script.src = `https://consent.cookiebot.com/${cassiniCookiebotId}/cd.js`;
      const cookieCol = document.getElementsByClassName('CookieCol')[0];
      // $FlowFixMe
      cookieCol.appendChild(script);
    }
  }, []);

  return (
    <Container>
      <Row>
        <ColStyled
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
          className="CookieCol"
        />
      </Row>
    </Container>
  );
};

export default CookieDeclaration;
