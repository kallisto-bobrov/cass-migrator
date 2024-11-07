import React from 'react';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import Divider from '../Divider.Footer';
import type { FooterSocialMedia } from '../__types__/Footer.type';
import getSocialChannel from '../../../../helpers/getSocialChannel/getSocialChannel';
import Row from '../../../grid/Row/Row';
import Col from '../../../grid/Col/Col';
import Container, { gridGutterHalf } from '../../../grid/Container/Container';
import { headline700skin } from '../../../atoms/Headline/Headline.skins';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  background: ${(props) => props.theme.skin.footer.tertiaryBgcolor};
  color: ${(props) => props.theme.skin.footer.tertiaryTextcolor};

  @media (${mq.xs}) {
    padding: 55px ${`${gridGutterHalf}px`};
    margin: 0 -${`${gridGutterHalf}px`};
  }
`;

const ContentWrapper = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 35px 0;

  @media (${mq.xs}) {
    padding: 20px 0 35px;
  }
`;

const DividerStyled = styled(Divider)`
  @media (${mq.xs}) {
    display: none;
  }
`;

const HeadlineStyled = styled.div`
  ${headline700skin};
  color: ${(props) => props.theme.skin.footer.tertiaryTextcolor};
`;

const Channels = styled(Col)`
  display: flex;
  flex-wrap: wrap;

  @media (${mq.smDown}) {
    margin-top: 0 !important;
  }

  & > * {
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    opacity: 1;
    transition: opacity 0.25s ease-out;
    display: flex;
    color: ${(props) => props.theme.skin.footer.tertiaryTextcolor};

    &:hover {
      opacity: 0.5;
      color: ${(props) => props.theme.skin.footer.tertiaryTextcolor};
    }
  }
`;

const SocialMedia = ({ headline, channels }: FooterSocialMedia) => (
  <Wrapper>
    <Container>
      <DividerStyled />
      <ContentWrapper>
        <Col
          colAmount={{
            xl: 3,
            lg: 3,
            md: 4,
            sm: 12,
            xs: 12,
          }}
        >
          <HeadlineStyled>{headline}</HeadlineStyled>
        </Col>
        <Channels
          colAmount={{
            xl: 9,
            lg: 9,
            md: 8,
            sm: 12,
            xs: 12,
          }}
        >
          {channels &&
            channels[0] &&
            channels.map((channel) => (
              <div key={uniqueId('sm-')}>{getSocialChannel(channel)}</div>
            ))}
        </Channels>
      </ContentWrapper>
    </Container>
  </Wrapper>
);

export default SocialMedia;
