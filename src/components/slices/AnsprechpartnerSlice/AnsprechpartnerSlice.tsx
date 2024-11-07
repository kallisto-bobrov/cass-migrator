import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import type { AnsprechpartnerSliceType } from './__types__/AnsprechpartnerSlice.type';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import sizesMap from '../../../constants/maps/sizes.map';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import AnsprechpartnerTile from '../../organisms/AnsprechpartnerTile/AnsprechpartnerTile';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  @media (${mq.xs}) {
    padding: 0 ${gridGutterHalf}px;
  }
`;

const AnsprechpartnerSlice = ({
  primary,
  items,
  slices,
  index,
}: AnsprechpartnerSliceType) => (
  <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.white}>
    <TeaserIntro
      headline={get(primary, 'uberschrift[0]', null)!}
      text={get(primary, 'text', null)!}
      chapter={get(primary, 'kapitel', null)!}
      slices={slices}
      index={index}
      textgrosse={sizesMap.big}
    />
    <Wrapper>
      <Container>
        <Row>
          <Col
            colAmount={{ xl: 9, lg: 9, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
            offset={{
              xl: 1,
              lg: 1,
              md: 0,
              sm: 0,
              xs: 0,
            }}
          >
            <Row>
              {items &&
                items.length > 0 &&
                items.map((item) => {
                  let isOne = false;
                  if (items.length === 1) {
                    isOne = true;
                  }
                  return (
                    <Col
                      key={uniqueId('ansprechpartner-')}
                      colAmount={{
                        xl: isOne ? 12 : 4,
                        lg: isOne ? 12 : 5,
                        md: isOne ? 12 : 5,
                        sm: isOne ? 12 : 6,
                        xs: 12,
                      }} // eslint-disable-line object-curly-newline, max-len
                    >
                      <AnsprechpartnerTile
                        portrait={{
                          portrait: get(
                            item,
                            'ansprechpartner.data.portrait',
                            null,
                          )!,
                          bild_uberlagerung: get(
                            item,
                            'ansprechpartner.data.bild_uberlagerung',
                            null,
                          )!,
                          text_uberlagerung: get(
                            item,
                            'ansprechpartner.data.text_uberlagerung',
                            null,
                          )!,
                          bildunterschrift_uberlagerung: get(
                            item,
                            'ansprechpartner.data.bildunterschrift_uberlagerung',
                            null,
                          )!,
                          uberschrift_uberlagerung: get(
                            item,
                            'ansprechpartner.data.uberschrift_uberlagerung',
                            null,
                          )!,
                          profil_link: get(item, 'profil_link', null)!,
                          profil_link_text: get(
                            item,
                            'profil_link_text',
                            null,
                          )!,
                          profil_link_title: get(
                            item,
                            'profil_link_title',
                            null,
                          )!,
                          check_uberlagerung: get(
                            item,
                            'check_uberlagerung',
                            null,
                          )!,
                          textgrosse: sizesMap.standard,
                        }}
                        info={{
                          name: get(item, 'ansprechpartner.data.name', null)!,
                          email: get(item, 'ansprechpartner.data.email', null)!,
                          position: get(
                            item,
                            'ansprechpartner.data.position',
                            null,
                          )!,
                          phone: get(item, 'ansprechpartner.data.phone', null)!,
                          linkedin: get(
                            item,
                            'ansprechpartner.data.linkedin',
                            null,
                          )!,
                          xing: get(item, 'ansprechpartner.data.xing', null)!,
                          twitter: get(
                            item,
                            'ansprechpartner.data.twitter',
                            null,
                          )!,
                          facebook: get(
                            item,
                            'ansprechpartner.data.facebook',
                            null,
                          )!,
                          whatsapp: get(
                            item,
                            'ansprechpartner.data.whatsapp',
                            null,
                          )!,
                        }}
                        isOne={isOne}
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </SliceWrapper>
);

export default AnsprechpartnerSlice;
