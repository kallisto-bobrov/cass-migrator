import React, { useState } from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import type { LogoBanderoleType } from './__types__/LogoBanderole.type';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import mq from '@/styles/mediaQueries/mediaQueries';
import colorsMap from '@/constants/maps/colors.map';
import Overlay from '@/components/organisms/Overlay/Overlay';

const Wrapper = styled.div`
  @media (${mq.xs}) {
    padding: 0 ${gridGutterHalf}px;
  }
`;

const StyledRow = styled(Row)`
  margin-top: 35px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const getColAmountOnLargerBreakpoints = (itemsAmount: number) => {
  if (itemsAmount > 4) {
    return { xl: 12 / itemsAmount, lg: 12 / itemsAmount, md: 12 / itemsAmount };
  }
  return { xl: 3, lg: 3, md: 3 };
};

const OverlayWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: auto;
  }
`;

const LogoBanderole = ({ items }: LogoBanderoleType) => {
  const [logo, setLogo] = useState<{ url?: string; alt_text?: string }>({
    url: undefined,
    alt_text: undefined,
  });

  return (
    <>
      <Wrapper>
        <Container>
          <StyledRow>
            <Col
              key={uniqueId('logoBanderole-')}
              colAmount={{ xl: 8, lg: 8, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
              offset={{
                xl: 1,
                lg: 1,
                md: 0,
                sm: 0,
                xs: 0,
              }}
            >
              <Row gutter={20}>
                {items &&
                  items[0] &&
                  items.map((item) => (
                    <Col
                      gutter={20}
                      key={uniqueId('logoBanderole-')}
                      colAmount={{
                        ...getColAmountOnLargerBreakpoints(items.length),
                        sm: 6,
                        xs: 6,
                      }} // eslint-disable-line object-curly-newline, max-len
                    >
                      <Logo
                        src={item.logo.url}
                        alt={item.logo_alt}
                        role="button"
                        onClick={() =>
                          setLogo({
                            url: item.logo.url,
                            alt_text: item.logo_alt,
                          })
                        }
                      />
                    </Col>
                  ))}
              </Row>
            </Col>
          </StyledRow>
        </Container>
      </Wrapper>
      <Overlay
        shouldOpen={!!logo.url}
        shouldClose={() => setLogo({ url: undefined, alt_text: undefined })}
        bgColor={colorsMap.light}
        showIcon={false}
      >
        <OverlayWrapper>
          <Logo src={logo.url} alt={logo.alt_text} />
        </OverlayWrapper>
      </Overlay>
    </>
  );
};

export default LogoBanderole;
