import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Col from '../../../grid/Col/Col';
import type { FooterLocationType } from '../__types__/Footer.type';
import cookieBotCheckMap from '../cookieBotCheckMap';

const Iframe = styled.iframe`
  width: 100%;
  height: 350px;
`;

const LocationsMap = ({ locations = [] }: FooterLocationType) => (
  <Col
    colAmount={{
      xl: 9,
      lg: 9,
      md: 8,
      sm: 6,
      xs: 12,
    }}
  >
    <Iframe title="location_map" src={get(locations[0], 'embeded_map', '')} />
  </Col>
);

export default cookieBotCheckMap(LocationsMap);
