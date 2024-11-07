import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import CopyText from '../../atoms/CopyText/CopyText';
import Headline from '../../atoms/Headline/Headline';
import Link from '../../atoms/Link/Link';
import type { TeaserType } from './__types__/Teaser.type';

const Wrapper = styled.div`
  margin-bottom: 60px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: 20px;
`;

const Cta = styled(Link)`
  margin-top: 20px;
`;

const Teaser = ({ content }: TeaserType) => {
  return (
    <Wrapper>
      {get(content, 'data.teaser_uberschrift[0].text', null) && (
        <StyledHeadline skin="headline700" type="heading2">
          {content?.data?.teaser_uberschrift[0].text}
        </StyledHeadline>
      )}
      {get(content, 'data.teaser_text[0].text', null) && (
        <CopyText
          prismicRichText={content?.data?.teaser_text}
          skin="copyStandard"
        />
      )}
      {get(content, 'data.teaser_link_text', null) && (
        <Cta
          {...{
            link_type: 'Document',
            url: content.url,
            uid: content.uid,
            pageType: content.type,
            skin: 'btn-secondary-small',
            title: content?.data?.teaser_link_title,
          }}
        >
          {content?.data?.teaser_link_text}
        </Cta>
      )}
    </Wrapper>
  );
};

export default Teaser;
