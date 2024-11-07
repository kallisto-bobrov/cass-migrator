import React, { useState } from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import type { TextBoxType } from './__types__/TextBox.type';
import colorsMap from '../../../constants/maps/colors.map';
import TextBoxContent from './components/Content.TextBox';
import { tilePadding } from '../../molecules/TeaserTile/TeaserTile';
import TextBoxCta from './components/Cta.TextBox';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import Overlay from '../Overlay/Overlay';
import Link from '../../atoms/Link/Link';
import MainContentOverlay from '../Overlay/components/MainContent.Overlay';

const shadowOffset = '10px';

const Wrapper = styled.div<{ $bgColor?: string; $sliceName?: string }>`
  ${(props) =>
    (props.$bgColor === colorsMap.dark ||
      props.$bgColor === colorsMap.colored ||
      (props.$sliceName &&
        props.$sliceName === 'TextboxenMitUeberlagerungSlice')) &&
    css`
      height: 100%;
    `};
`;

const TileCss = css<{ $bgColor?: string; $clickable?: boolean }>`
  background-color: ${(props) =>
    props.$bgColor === colorsMap.colored
      ? props.theme.color.primary900
      : props.theme.color.gray500};
  min-height: 250px;
  display: flex;
  box-shadow: none;
  transition: box-shadow 0.25s ease-out;
  cursor: ${(props) => (props.$clickable ? 'pointer' : 'initial')};
  height: 100%;

  ${(props) =>
    props.$bgColor === colorsMap.dark &&
    css`
      height: 100%;
      background-color: ${props.theme.color.secondary900};
    `};

  &:hover {
    ${(props) =>
      props.$clickable &&
      css`
        box-shadow: -${shadowOffset} ${shadowOffset} 0 0 ${props.$bgColor === colorsMap.colored ? props.theme.color.black : props.theme.color.primary800};
      `};
  }
`;

const TileChildrenCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const TileWrapper = styled.div<{ $bgColor?: string; $clickable?: boolean }>`
  ${TileCss};
  ${TileChildrenCss};
`;

const LinkStyled = styled(Link)<{ $bgColor?: string; $clickable?: boolean }>`
  ${TileCss};

  & > div {
    ${TileChildrenCss};
  }
`;

const ContentWrapper = styled.div`
  padding: ${tilePadding};
`;

const TAG = {
  link: LinkStyled,
  div: TileWrapper,
};

const TextBox = ({
  bild,
  uberschrift,
  text,
  zielseite,
  zielseite_link_title = '',
  ankerlink_ziel,
  text_uberlagerung,
  textgrosse,
  bild_title = '',
  bildunterschrift = '',
  bgColor = colorsMap.dark,
  farbschema = colorsMap.light,
  sliceName,
  zielseite_link_text,
}: TextBoxType) => {
  const [active, setActive] = useState(false);
  const [shouldOpen, handleOverlay] = useState(false);
  // @ts-ignore
  const isLink = get(zielseite, 'link_type', undefined) !== 'Any';
  const hasOverlay =
    get(text_uberlagerung, '[0]', null) &&
    get(text_uberlagerung, '[0].text', null) !== '';
  const hasLinkText = zielseite_link_text && zielseite_link_text !== '';

  const linkProps = () => {
    if (!isLink) return {};
    return {
      pageType: get(zielseite, 'type', null),
      link_type: get(zielseite, 'link_type', null),
      url: `${zielseite.url || `/${zielseite.uid}`}${ankerlink_ziel || ''}`,
      uid: get(zielseite, 'uid', null),
      target: get(zielseite, 'target', null),
    };
  };
  return (
    <>
      <Wrapper
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        $bgColor={bgColor}
        $sliceName={sliceName}
      >
        {React.createElement(
          get(TAG, isLink ? 'link' : 'div', TAG.div),
          {
            $bgColor: bgColor,
            onClick: () => handleOverlay(true),
            ...linkProps(),
            title: isLink || hasOverlay ? zielseite_link_title : null,
            $clickable: isLink || hasOverlay,
          },
          <>
            <ContentWrapper>
              <TextBoxContent
                headline={get(uberschrift, '[0]', undefined)}
                text={text}
                bgColor={bgColor}
              />
            </ContentWrapper>
            {(isLink || hasOverlay) && (
              <TextBoxCta
                active={active}
                ctaType={isLink ? elmStyleMap.arrow : elmStyleMap.plus}
                bgColor={bgColor}
                linkText={hasLinkText ? zielseite_link_text : undefined}
              />
            )}
          </>,
        )}
      </Wrapper>
      {!isLink && hasOverlay && (
        <Overlay
          shouldOpen={shouldOpen}
          shouldClose={() => handleOverlay(false)}
          bgColor={farbschema}
        >
          <MainContentOverlay
            text={text_uberlagerung}
            textgrosse={textgrosse}
            bgColor={farbschema}
            bild_title={bild_title}
            bildunterschrift={bildunterschrift}
            bild={bild}
            headline={get(uberschrift, '[0]', undefined)}
          />
        </Overlay>
      )}
    </>
  );
};

export default TextBox;
