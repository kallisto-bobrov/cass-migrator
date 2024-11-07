import React, { Fragment, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import LocationDataBlock from './LocationDataBlock.Footer';
import Col from '../../../grid/Col/Col';
import Row from '../../../grid/Row/Row';
import type { FooterLocationType } from '../__types__/Footer.type';
import SimpleAccordion from '../../../molecules/SimpleAccordion/SimpleAccordion';
import Divider from '../Divider.Footer';
import LocationsMap from './LocationsMap.Footer';
import {
  headline200skin,
  headline300skin,
  headline500skin,
  headline600skin,
  headline700skin,
  headline800skin,
  headline900skin,
} from '../../../atoms/Headline/Headline.skins';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import mq from '@/styles/mediaQueries/mediaQueries';
import breakpointNames from '@/helpers/breakpoints/breakpoints.map';

const Wrapper = styled.div`
  padding: 35px 0;
`;

const HeadlineStyled = styled.div<{ $skin: string }>`
  ${(props) => props.$skin === 'headline900' && headline900skin}
  ${(props) => props.$skin === 'headline800' && headline800skin}
  ${(props) => props.$skin === 'headline700' && headline700skin}
  ${(props) => props.$skin === 'headline600' && headline600skin}
  ${(props) => props.$skin === 'headline500' && headline500skin}
  ${(props) => props.$skin === 'headline300' && headline300skin}
  ${(props) => props.$skin === 'headline200' && headline200skin}
  color: ${(props) => props.theme.skin.footer.textcolor};
  margin-bottom: 35px;
`;

const ColStyled = styled(Col)`
  @media (${mq.xs}) {
    margin-bottom: 0;
  }
`;

const DividerStyled = styled(Divider)`
  @media (${mq.smUp}) {
    display: none;
  }
`;

const Locations = ({
  headline = '',
  locations = [],
  ctaText = '',
}: FooterLocationType) => {
  const breakpoint = useContext(BreakpointContext);
  const theme = useContext(ThemeContext);

  return (
    <Wrapper id="locations">
      <Row>
        <Col
          colAmount={
            locations && locations.length > 1
              ? { xl: 12, lg: 12, md: 12, sm: 12, xs: 12 } // eslint-disable-line
              : { xl: 3, lg: 3, md: 4, sm: 6, xs: 12 } // eslint-disable-line
          }
        >
          <HeadlineStyled $skin="headline700">{headline}</HeadlineStyled>
          <Row>
            {locations &&
              locations.length &&
              locations.map((location) => (
                <Fragment key={uniqueId('location-')}>
                  <ColStyled
                    colAmount={
                      locations && locations.length > 1
                        ? { xl: 3, lg: 3, md: 4, sm: 6, xs: 12 } // eslint-disable-line
                        : { xl: 12, lg: 12, md: 12, sm: 12, xs: 12 } // eslint-disable-line
                    }
                  >
                    <SimpleAccordion
                      headlineText={location.name}
                      headlineType="heading4"
                      collapseAtBreakpoint={
                        locations.length > 1 ? [breakpointNames.xs] : []
                      }
                      accordionSkin={theme?.skin.footer.accordionColor}
                      actualBreakpoint={breakpoint}
                    >
                      <LocationDataBlock
                        address={location.address}
                        zip={location.zip}
                        city={`${location.zip ? location.zip : ''} ${
                          location.city ? location.city : ''
                        }`}
                        tel={location.tel}
                        fax={location.fax}
                        linkUrl={location.map}
                        ctaText={locations.length > 1 ? ctaText : ''}
                      />
                    </SimpleAccordion>
                    {locations.length > 1 && (
                      <DividerStyled margin="20px 0 0" />
                    )}
                  </ColStyled>
                </Fragment>
              ))}
          </Row>
        </Col>
        {locations && locations.length === 1 && (
          <LocationsMap locations={locations} />
        )}
      </Row>
    </Wrapper>
  );
};

export default Locations;
