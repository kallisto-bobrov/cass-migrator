'use client';
import React from 'react';
import styled from 'styled-components';
import type { FooterMainType } from './__types__/Footer.type';
import Locations from './components/Locations.Footer';
import SocialMedia from './components/SocialMedia.Footer';
import Navigation from './components/Navigation.Footer';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.skin.footer.primaryBgcolor};
  color: ${(props) => props.theme.skin.footer.textcolor};

  @media (${mq.xs}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const FooterClient = ({ footer, globalConfig }: FooterMainType) => (
  <FooterStyled>
    <Container>
      <Locations
        headline={footer.locations_headline1}
        locations={globalConfig.schema_location}
        ctaText={footer.locations_cta_text}
      />
    </Container>
    <SocialMedia
      headline={footer.sm_headline}
      channels={globalConfig.social_media_channels}
    />
    <Navigation
      copyright_text={footer.copyright_text}
      homepage_link={footer.homepage_link}
      navigationItems={footer.navigation}
    />
  </FooterStyled>
);

export default FooterClient;
