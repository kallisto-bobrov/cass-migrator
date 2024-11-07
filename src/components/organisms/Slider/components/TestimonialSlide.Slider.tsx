import React from 'react';
import styled from 'styled-components';
import { TestimonialType } from '../../Testimonials/__types__/Testimonials.type';
import Quote from '../../../molecules/Quote/Quote';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  display: block;
  margin-bottom: 25px;
`;

const TestimonialSlide = ({ item }: { item: TestimonialType }) => (
  <Wrapper>
    <Logo src={item.logo.url} alt={item.logo_alt} />
    <Quote quote={item.zitat} authorName={item.author} />
  </Wrapper>
);

export default TestimonialSlide;
