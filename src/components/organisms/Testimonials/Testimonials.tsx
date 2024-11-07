import React from 'react';
import styled from 'styled-components';
import type { TestimonialsType } from './__types__/Testimonials.type';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import Slider from '../Slider/Slider';
import mq, { breakpoints } from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  .swiper-pagination-bullet {
    background: ${(props) => props.theme.color.gray700} !important;
  }

  .swiper-pagination-bullet-active {
    background: ${(props) => props.theme.color.secondary900} !important;
  }

  @media (${mq.xs}) {
    padding: 0 ${gridGutterHalf}px;
  }
`;

const Testimonials = ({ items }: TestimonialsType) => {
  return (
    <Wrapper>
      <Container>
        {items ? (
          <Slider
            items={items}
            sliderContentType={elmStyleMap.testimonial}
            sliderSettings={{
              loop: true,
              navigation: true,
              pagination: true,
              slidesPerView: 2,
              spaceBetween: 50,
              breakpoints: {
                [breakpoints.xl]: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                [breakpoints.lg]: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                [breakpoints.md]: {
                  slidesPerView: 1,
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
            navAlignment="testimonials"
          />
        ) : null}
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
