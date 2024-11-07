import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import type { CornerTeaserContentBlockType } from './__types__/CornerTeaserContentBlock.type';
import Link from '../../atoms/Link/Link';
import CopyText from '../../atoms/CopyText/CopyText';
import LinkImitator from '../../atoms/LinkImitator/LinkImitator';
import CTCBHeadline, {
  CornerTeaserHeader,
} from './components/Headline.CornerTeaserContentBlock';
import Headline from '../../atoms/Headline/Headline';
import { containerWidth } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

export const CornerTeaserWrapper = styled.div`
  width: 370px;

  @media (${mq.mdDown}) {
    width: 100%;
  }

  @media (${mq.mdDown}) {
    display: flex;
    justify-content: center;
  }
`;

export const CornerTeaserBody = styled(CornerTeaserHeader)<{
  $slider: boolean;
}>`
  background: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media (${mq.md}) {
    width: 60%;

    ${(props) =>
      props.$slider &&
      css`
        width: ${containerWidth.md};
        padding: 35px 40px;
      `}
  }

  @media (${mq.sm}) {
    ${(props) =>
      props.$slider &&
      css`
        width: ${containerWidth.sm};
        padding: 35px 40px;
      `}
  }

  @media (${mq.mdDown}) {
    min-height: 0;
  }
`;

const CopyTextStyled = styled(CopyText)`
  margin-bottom: 20px;
  flex: 1 0 auto;
`;

const LinkStyled = styled(Link)`
  display: block;

  & > div {
    display: flex;
    flex-direction: column;

    @media (${mq.md}) {
      flex-direction: row;
    }
  }
`;

const Overline = styled.div`
  font-family: ${(props) => props.theme.font.family.secondary};
  color: ${(props) => props.theme.color.black};
  margin-bottom: 10px;

  @media (${mq.smDown}) {
    font-size: ${(props) => props.theme.skin.copyStandard.xs.fontSize};
    line-height: ${(props) => props.theme.skin.copyStandard.xs.lineHeight};
  }
`;

const HeadlineStyled = styled(Headline)`
  margin-bottom: 25px;
`;

const CornerTeaserContentBlock = ({
  headline,
  text,
  chapter,
  slices,
  index,
  link,
  link_text,
  link_title = '',
  noHeadlineHighlight = false,
  overline,
  slider = false,
}: CornerTeaserContentBlockType) => {
  const [active, setActive] = useState(false);
  return (
    <CornerTeaserWrapper
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <LinkStyled
        {...{
          link_type: link?.link_type,
          url: link?.url,
          uid: link?.uid,
          pageType: link?.type,
          title: link_title,
        }}
      >
        {headline && !noHeadlineHighlight && (
          <CTCBHeadline
            {...{
              chapter,
              slices,
              index,
              headline,
            }}
          />
        )}
        <CornerTeaserBody $slider={slider}>
          {noHeadlineHighlight && overline && <Overline>{overline}</Overline>}
          {noHeadlineHighlight && headline && (
            <HeadlineStyled skin="headline700" type={headline.type}>
              {headline.text}
            </HeadlineStyled>
          )}
          {text && text[0] && (
            <CopyTextStyled prismicRichText={text} skin="copyStandard" />
          )}
          {link_text && <LinkImitator link_text={link_text} active={active} />}
        </CornerTeaserBody>
      </LinkStyled>
    </CornerTeaserWrapper>
  );
};

export default CornerTeaserContentBlock;
