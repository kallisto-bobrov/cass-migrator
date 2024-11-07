import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Container from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import type { IntroductionType } from './__types__/Introduction.type';
import MainTeaserContentBlock from '../MainTeaserContentBlock/MainTeaserContentBlock';
import IntroWithImage from './components/WithImage.Introduction';

const ContainerStyled = styled(Container)<{ $amIfirst: boolean }>`
  margin-top: ${(props) => (props.$amIfirst ? '140px' : '0')};
`;

const Introduction = ({
  overline,
  headline,
  text,
  image,
  amIfirst,
  button_text,
  button_url,
  button_title = '',
  videoMobile,
  videoDesktop,
}: IntroductionType) => {
  const heading = headline;
  if (heading && heading.type) {
    heading.type = 'heading1';
  }

  return (
    <ContainerStyled $amIfirst={amIfirst}>
      <Row>
        <Col
          colAmount={{ xl: 8, lg: 8, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          offset={{ xl: 1, lg: 1, md: 0, sm: 0, xs: 0 }} // eslint-disable-line object-curly-newline, max-len
        >
          {get(image, 'url', null) && (
            <IntroWithImage
              videoMobile={videoMobile}
              videoDesktop={videoDesktop}
              overline={overline}
              image={image}
              headline={heading}
            />
          )}
          <MainTeaserContentBlock
            {...{
              dachzeile: get(image, 'url', null) ? undefined : overline,
              uberschrift: get(image, 'url', null) ? undefined : headline,
              text,
              fullWidth: true,
              button_text,
              button_url,
              button_title,
            }}
          />
        </Col>
      </Row>
    </ContainerStyled>
  );
};

export default Introduction;
