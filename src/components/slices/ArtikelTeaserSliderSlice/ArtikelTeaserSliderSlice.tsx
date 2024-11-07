import React, { useContext, useEffect, useState } from 'react';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import Slider from '../../organisms/Slider/Slider';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import sizesMap from '../../../constants/maps/sizes.map';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import type { ArtikelTeaserSliderType } from './__types__/ArtikelTeaserSliderSlice.type';
import Container from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import ArticleTeaserSlide from '../../organisms/Slider/components/ArtikelTeaserSlide.Slider';
import { breakpoints } from '@/styles/mediaQueries/mediaQueries';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import { mdDown } from '@/helpers/breakpoints/checkBreakpoints.helper';
import { ArticleTeaserSlideType } from '@/components/organisms/Slider/__types__/Slider.type';
import styled from 'styled-components';

function renderSlider(items: ArticleTeaserSlideType[]) {
  return (
    <Col>
      <Slider
        items={items}
        sliderContentType={elmStyleMap.articleTeaserSlide}
        paddingBottom={80}
        skin={elmStyleMap.articleTeaser}
        sliderSettings={{
          navigation: true,
          pagination: false,
          slidesPerView: 3,
          spaceBetween: 40,
          loop: true,
          breakpoints: {
            [breakpoints.xl]: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            [breakpoints.lg]: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            [breakpoints.md]: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            [breakpoints.sm]: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
          },
        }}
      />
    </Col>
  );
}

const ArtikelTeaserContainer = styled(Container)`
  padding-top: 50px;
`;

const ArtikelTeaserSliderSlice = ({
  primary,
  items,
  slices,
  index,
}: ArtikelTeaserSliderType) => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const breakpoint = useContext(BreakpointContext);

  useEffect(() => {
    if (mdDown(breakpoint)) {
      setSlidesPerView(2);
    }
  }, []);

  return (
    <SliceWrapper
      id={primary.ankerlink_titel}
      bgColor={colorsMap.white}
      className="hideIfForeignContent"
    >
      <TeaserIntro
        headline={get(primary, 'uberschrift[0]', null)!}
        text={get(primary, 'text', null)!}
        chapter={get(primary, 'kapitel', null)}
        slices={slices}
        index={index}
        textgrosse={sizesMap.standard}
      />
      <ArtikelTeaserContainer>
        <Row>
          {items && items.length > slidesPerView && renderSlider(items)}
          {items &&
            items.length <= slidesPerView &&
            items.map((item) => {
              return (
                <Col
                  colAmount={{
                    xl: 4,
                    lg: 4,
                    md: 6,
                    sm: 12,
                    xs: 12,
                  }}
                  key={uniqueId('articleTeaser_')}
                >
                  <ArticleTeaserSlide item={item} />
                </Col>
              );
            })}
        </Row>
      </ArtikelTeaserContainer>
    </SliceWrapper>
  );
};

export default ArtikelTeaserSliderSlice;
