import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import type { TeaserIntroType } from './TeaserIntro.type';
import Headline from '../../atoms/Headline/Headline';
import CopyText from '../../atoms/CopyText/CopyText';
import Container, {
  gridGutter,
  gridGutterHalf,
} from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import sizesMap from '../../../constants/maps/sizes.map';
import Picture from '../../atoms/Picture/Picture';
import Link from '../../atoms/Link/Link';
import mq from '@/styles/mediaQueries/mediaQueries';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';

const Wrapper = styled.div<{ $hasHeadline?: boolean }>`
  @media (${mq.xs}) {
    margin-top: ${(props) => (props.$hasHeadline ? '45px' : '0')};
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const ContainerStyled = styled(Container)<{
  $hasHeadline?: boolean;
  $fullWidth?: boolean;
}>`
  ${(props) =>
    props.$hasHeadline &&
    css`
      padding-top: 50px;
    `};

  @media (${mq.xl}) {
    padding-top: ${(props) => (props.$fullWidth ? '0' : '25px')};
    padding-bottom: ${(props) => (props.$fullWidth ? '0' : '25px')};
  }

  @media (${mq.lg}) {
    padding-top: ${(props) => (props.$fullWidth ? '0' : '25px')};
    padding-bottom: ${(props) => (props.$fullWidth ? '0' : '25px')};
  }

  @media (${mq.mdDown}) {
    padding-top: ${(props) => (props.$fullWidth ? '0' : '25px')};
    padding-bottom: ${(props) => (props.$fullWidth ? '0' : '25px')};
  }

  @media (${mq.xs}) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const ColStyled = styled(Col)<{
  $isContent?: boolean;
  $isCTATeaser?: boolean;
  $isPicture?: boolean;
  $isLeft?: boolean;
}>`
  overflow: hidden;
  ${(props) =>
    props.$isContent &&
    props.$isCTATeaser &&
    css`
      padding: 50px;

      @media (${mq.mdUp}) {
        width: calc(66.66% - 0px);
      }

      @media (${mq.smUp}) {
        margin-right: 0;
        margin-top: 60px;
      }

      @media (${mq.xs}) {
        margin-bottom: 0;
      }
    `};

  ${(props) =>
    props.$isContent &&
    props.$isCTATeaser &&
    props.$isLeft &&
    css`
      @media (${mq.smUp}) {
        margin-left: 0;
      }

      @media (${mq.xs}) {
        margin-top: 0;
      }
    `};

  ${(props) =>
    props.$isPicture &&
    props.$isCTATeaser &&
    props.$isLeft &&
    css`
      @media (${mq.smUp}) {
        margin-right: 0;
        margin-left: 20px !important;
      }

      @media (${mq.xs}) {
        margin-bottom: 0;
      }
    `};

  ${(props) =>
    props.$isPicture &&
    props.$isCTATeaser &&
    css`
      @media (${mq.smUp}) {
        margin-left: 0;
        margin-top: 60px;
      }

      @media (${mq.xs}) {
        margin-top: 0;
      }
    `};

  ${(props) =>
    props.$isCTATeaser &&
    css`
      background-color: ${props.theme.color.primary800};
      position: relative;

      picture {
        margin-top: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;

        @media (${mq.smUp}) {
          width: calc(100% + ${gridGutter}px);
        }

        @media (${mq.xs}) {
          width: 100%;
          position: relative;
        }
      }

      img {
        height: 100%;
        object-fit: cover;
      }
    `};
`;

const StyledLink = styled(Link)`
  margin-top: 45px;
`;

const StyledPicture = styled(Picture)<{ $bild_position?: string }>`
  margin-top: 10px;

  @media (${mq.xs}) {
    margin-top: 0;
    margin-bottom: -20px;

    ${(props) =>
      props.$bild_position &&
      props.$bild_position === 'rechts' &&
      css`
        margin-top: -20px;
        margin-bottom: 25px;
      `};
  }
`;

const HeadlineStyled = styled(Headline)<{ $textgrosse: string }>`
  margin-bottom: ${(props) => {
    switch (props.$textgrosse) {
      case sizesMap.small:
        return '16px;';
      case sizesMap.standard:
        return '16px;';
      default:
        return '30px';
    }
  }};
`;

const getTextSkin = (textgrosse: string) => {
  switch (textgrosse) {
    case sizesMap.small:
      return 'copySmall';
    case sizesMap.standard:
      return 'copyStandard';
    default:
      return 'copyBig';
  }
};

const TeaserIntro = ({
  headline,
  text,
  textgrosse = sizesMap.big,
  textColor,
  fullWidth,
  bild_klein,
  bild_medium,
  bild_gross,
  bild_position,
  isCTATeaser,
  button_text,
  button_title,
  externe_url,
  ankerlink_ziel,
  zielseite,
  verlinkung_bild_url,
  verlinkung_link_titel,
}: TeaserIntroType) => {
  const breakpoint = useContext(BreakpointContext);
  const [image, setImage] = useState<any>(null);
  const imageWidthInsideCTA = 4;
  const hasLinkedImage = verlinkung_bild_url && verlinkung_bild_url.url;

  const getImage = () => {
    let img = null;
    const hasSmallImage = bild_klein && bild_klein.url;
    const hasMediumImage = bild_medium && bild_medium.url;
    const hasBigImage = bild_gross && bild_gross.url;

    if (hasSmallImage) {
      img = bild_klein;
    }

    if (hasMediumImage) {
      img = bild_medium;
    }

    if (hasBigImage) {
      img = bild_gross;
    }

    return img;
  };

  useEffect(() => {
    setImage(getImage());
  }, []);

  const getbtnUrl = () => {
    let url = {};

    if (zielseite && zielseite.id) {
      url = zielseite;
    }

    if (externe_url && externe_url.url) {
      url = externe_url;
    }
    return url;
  };

  const button_url: any = getbtnUrl();
  const getAnchorLink = (id?: string | null) => {
    let hash;
    if (button_url && button_url.url && button_url.url.split('#').length > 1) {
      hash = button_url.url.split('#')[1];
    }
    if (id) {
      hash = id.replace('#', '');
    }
    return hash;
  };

  const renderText = (isLeft?: boolean) => {
    if (text && text[0]) {
      const width = isCTATeaser ? 12 - imageWidthInsideCTA : 6;
      return (
        <ColStyled
          colAmount={{
            xl: image ? width : 12,
            lg: image ? width : 12,
            md: image ? width : 12,
            sm: 12,
            xs: 12,
          }} // eslint-disable-line object-curly-newline, max-len
          $isCTATeaser={isCTATeaser}
          $isContent
          $isLeft={isLeft}
        >
          {get(headline, 'text', null) && isCTATeaser && (
            <HeadlineStyled
              skin="headline800"
              type={headline?.type}
              $textgrosse={textgrosse}
            >
              {headline?.text}
            </HeadlineStyled>
          )}
          <CopyText
            textColor={textColor}
            prismicRichText={text}
            skin={getTextSkin(textgrosse)}
          />
          {isCTATeaser && button_text && button_text !== '' && (
            <StyledLink
              url={`${button_url.url || button_url.uid}${ankerlink_ziel || ''}`}
              link_type={get(button_url, 'link_type', null)}
              uid={get(button_url, 'uid', null)}
              target={get(button_url, 'target', null)}
              pageType={get(button_url, 'type', null)}
              skin="btn-light"
              title={button_title}
              anchor_id={getAnchorLink(ankerlink_ziel)}
            >
              {button_text}
            </StyledLink>
          )}
        </ColStyled>
      );
    }

    return null;
  };

  const renderPicture = () => {
    return (
      <StyledPicture
        image={image}
        $bild_position={bild_position}
        objectFit={breakpoint === 'md' || breakpoint === 'lg'}
      />
    );
  };

  const renderImage = (isLeft?: boolean) => {
    if (get(image, 'url', null)) {
      return (
        <ColStyled
          colAmount={{
            xl: isCTATeaser ? imageWidthInsideCTA : 6,
            lg: isCTATeaser ? imageWidthInsideCTA : 6,
            md: isCTATeaser ? imageWidthInsideCTA : 6,
            sm: 12,
            xs: 12,
          }} // eslint-disable-line object-curly-newline, max-len
          $isCTATeaser={isCTATeaser}
          $isPicture
          $isLeft={isLeft}
        >
          {hasLinkedImage ? (
            <a
              href={verlinkung_bild_url.url}
              target={verlinkung_bild_url?.target}
              title={verlinkung_link_titel}
            >
              {renderPicture()}
            </a>
          ) : (
            renderPicture()
          )}
        </ColStyled>
      );
    }

    return null;
  };

  return (
    <Wrapper $hasHeadline={!!get(headline, 'text', undefined)}>
      <ContainerStyled
        $fullWidth={fullWidth}
        $hasHeadline={!!get(headline, 'text', undefined)}
      >
        <Row>
          <Col
            colAmount={{
              xl: fullWidth ? 12 : 8,
              lg: fullWidth ? 12 : 8,
              md: 12,
              sm: 12,
              xs: 12,
            }}
            offset={{
              xl: fullWidth ? 0 : 1,
              lg: fullWidth ? 0 : 1,
              md: 0,
              sm: 0,
              xs: 0,
            }}
          >
            {get(headline, 'text', undefined) && !isCTATeaser && (
              <HeadlineStyled
                skin="headline800"
                type={headline?.type}
                $textgrosse={textgrosse}
              >
                {headline?.text}
              </HeadlineStyled>
            )}
            <Row>
              {image && bild_position === 'links' && renderImage(true)}
              {image && bild_position === 'links' && renderText(true)}
              {image && bild_position === 'rechts' && renderText()}
              {image && bild_position === 'rechts' && renderImage()}
              {!image && renderText()}
            </Row>
          </Col>
        </Row>
      </ContainerStyled>
    </Wrapper>
  );
};

export default TeaserIntro;
