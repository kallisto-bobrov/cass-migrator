import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import type { AnsprechpartnerPortraitType } from './__type__/AnsprechpartnerPortrait.type';
import Overlay from '../../organisms/Overlay/Overlay';
import MainContentOverlay from '../../organisms/Overlay/components/MainContent.Overlay';
import Picture from '../../atoms/Picture/Picture';
import TextBoxCta from '../../organisms/TextBox/components/Cta.TextBox';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import colorsMap from '../../../constants/maps/colors.map';
import sizesMap from '../../../constants/maps/sizes.map';

const shadowOffset = '10px';

const hover = css<{ $bgColor: string }>`
  &:hover {
    ${(props) =>
      props.$bgColor !== colorsMap.dark &&
      css`
        box-shadow: -${shadowOffset} ${shadowOffset} 0 0 ${props.theme.color.black};
      `};
  }
`;

const PortraitWrapper = styled.div<{ $overlay?: boolean }>`
  position: relative;
  cursor: ${(props) => (props.$overlay ? 'pointer' : '')};
  transition: box-shadow 0.25s ease-out;
  ${(props) => (props.$overlay ? 'hover' : '')}
`;

const TextBoxCtaStyled = styled(TextBoxCta)`
  position: absolute;
  bottom: 0;
`;

const AnsprechpartnerPortrait = ({
  portrait,
  bild_uberlagerung,
  text_uberlagerung,
  bildunterschrift_uberlagerung,
  textgrosse = sizesMap.standard,
  uberschrift_uberlagerung,
  farbschema = colorsMap.light,
  profil_link,
  profil_link_text,
  profil_link_title,
  check_uberlagerung,
  className,
}: AnsprechpartnerPortraitType) => {
  const [active, setActive] = useState(false);
  const [shouldOpen, handleOverlay] = useState(false);
  const hasTextInsideOverlay =
    check_uberlagerung === 'anzeigen' &&
    get(text_uberlagerung, '[0].text', null) &&
    get(text_uberlagerung, '[0].text', null) !== '';

  return (
    <Fragment>
      <PortraitWrapper
        onClick={() => handleOverlay(true)}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        $overlay={hasTextInsideOverlay!}
        className={className}
      >
        <Picture image={portrait} />
        {hasTextInsideOverlay && (
          <TextBoxCtaStyled
            active={active}
            ctaType={elmStyleMap.plus}
            bgColor={colorsMap.dark}
          />
        )}
      </PortraitWrapper>

      {hasTextInsideOverlay && (
        <Overlay
          shouldOpen={shouldOpen}
          shouldClose={() => handleOverlay(false)}
          bgColor={farbschema}
        >
          <MainContentOverlay
            text={text_uberlagerung}
            textgrosse={textgrosse}
            bgColor={farbschema}
            bildunterschrift={bildunterschrift_uberlagerung}
            bild={bild_uberlagerung}
            headline={get(uberschrift_uberlagerung, '[0]', undefined)}
            cta={profil_link}
            ctaText={profil_link_text}
            ctaTitle={profil_link_title}
          />
        </Overlay>
      )}
    </Fragment>
  );
};

export default AnsprechpartnerPortrait;
