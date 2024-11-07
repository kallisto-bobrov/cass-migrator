import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import type { JobTeaserType } from './__types__/JobTeaser.type';
import TeaserWrapper from '../../../../molecules/TeaserWrapper/TeaserWrapper';
import colorsMap from '../../../../../constants/maps/colors.map';
import Headline from '../../../../atoms/Headline/Headline';
import CopyText from '../../../../atoms/CopyText/CopyText';
import mq from '@/styles/mediaQueries/mediaQueries';

const TeaserWrapperStyled = styled(TeaserWrapper)`
  a > div {
    flex: 1 1 auto;

    @media (${mq.xl}) {
      flex-direction: row;
      align-items: flex-end;
    }
  }
`;

const HeadlineStyled = styled(Headline)`
  margin-bottom: 8px;
`;

const CopyTextStyled = styled(CopyText)`
  margin-bottom: 20px;

  @media (${mq.xl}) {
    margin-bottom: 0;
    line-height: 1;
  }
`;

const ContentWrapper = styled.div`
  flex: 0 1 auto;

  @media (${mq.smUp}) {
    max-width: 80%;
  }

  @media (${mq.xl}) {
    flex: 1 0 auto;
  }
`;

const JobTeaser = ({
  teaser_link_text,
  teaser_link_title,
  teaser_locations,
  teaser_uberschrift,
  link,
}: JobTeaserType) => {
  return link ? (
    <TeaserWrapperStyled
      {...{
        link,
        link_title: teaser_link_title,
        teaser_link_text,
        bgColor: colorsMap.light,
        no3dHover: true,
      }}
    >
      <ContentWrapper>
        {teaser_uberschrift && teaser_uberschrift[0] && (
          <HeadlineStyled
            type={get(teaser_uberschrift, '[0].type', undefined)}
            skin="headline600"
          >
            {get(teaser_uberschrift, '[0].text', null)}
          </HeadlineStyled>
        )}
        {teaser_locations && <CopyTextStyled text={teaser_locations} />}
      </ContentWrapper>
    </TeaserWrapperStyled>
  ) : null;
};

export default JobTeaser;
