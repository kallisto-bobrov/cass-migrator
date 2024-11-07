'use client';

import React, { useEffect } from 'react';
import get from 'lodash/get';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import type { HubSpotContactSliceType } from './__types__/HubSpotContactSlice.type';
import ArticleContainer from '../../atoms/ArticleContainer/ArticleContainer';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import styled from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';
import cookieBotCheckHubSpot from '@/components/slices/HubSpotContactSlice/cookieBotCheckHubSpot';

const Wrapper = styled.div`
  padding: 50px 0;

  @media (${mq.xs}) {
    padding: 25px 0;
  }
`;

const HubSpotContactSlice = ({
  primary,
  slices,
  index,
}: HubSpotContactSliceType) => {
  const WrapperRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.setAttribute('data-cookieconsent', 'marketing');
    document.body.appendChild(script);
    script.onload = () => {
      const form = document.createElement('script');
      form.innerHTML = `
        hbspt.forms.create({
          region: "eu1",
          portalId: "${primary?.portalid}",
          formId: "${primary?.formid}"
        });
      `;
      if (WrapperRef?.current) WrapperRef?.current?.appendChild(form);
    };
  }, []);

  return (
    <SliceWrapper
      bgColor={colorsMap.white}
      id={get(primary, 'ankerlink_titel', undefined)}
    >
      <TeaserIntro
        headline={get(primary, 'uberschrift[0]', undefined)}
        text={get(primary, 'text', undefined)}
        chapter={get(primary, 'kapitel', undefined)}
        slices={slices}
        index={index}
      />
      <ArticleContainer>
        <Wrapper ref={WrapperRef}></Wrapper>
      </ArticleContainer>
    </SliceWrapper>
  );
};

export default cookieBotCheckHubSpot(HubSpotContactSlice);
