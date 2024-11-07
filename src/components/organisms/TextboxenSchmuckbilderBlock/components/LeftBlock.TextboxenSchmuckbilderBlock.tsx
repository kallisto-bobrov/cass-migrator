import React, { Fragment } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import colorsMap from '../../../../constants/maps/colors.map';
import Col from '../../../grid/Col/Col';
import TextBox from '../../TextBox/TextBox';
import type { TextboxenSchmuckbilderLeftBlockType } from '../__types__/TextboxenSchmuckbilderBlock.type';
import Picture from '../../../atoms/Picture/Picture';
import mq from '@/styles/mediaQueries/mediaQueries';

const First = styled(Col)`
  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Second = styled(Col)`
  margin-top: 150px;

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Third = styled(Col)`
  margin-top: 150px;
  position: relative;
  z-index: -1;

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Fourth = styled(Col)<{ $hasImage?: boolean }>`
  margin-top: ${(props) => (props.$hasImage ? '-100px' : '35px')};

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Fifth = styled(Col)`
  margin-top: 60px;

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const LeftBlock = ({
  tiles,
  image16to9,
  image16to9_title,
}: TextboxenSchmuckbilderLeftBlockType) => (
  <Fragment>
    {get(tiles, '[0]', null) && (
      <First
        colAmount={{ xl: 10, lg: 12, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 2,
          lg: 0,
          md: 0,
          sm: 0,
          xs: 0,
        }}
      >
        <TextBox
          {...{
            bild: get(tiles[0], 'bild', null)!,
            uberschrift: get(tiles[0], 'uberschrift', null)!,
            text: get(tiles[0], 'text', null)!,
            zielseite: get(tiles[0], 'zielseite', null)!,
            zielseite_link_title: get(tiles[0], 'zielseite_link_title', null)!,
            ankerlink_ziel: get(tiles[0], 'ankerlink_ziel', null)!,
            text_uberlagerung: get(tiles[0], 'text_uberlagerung', null)!,
            textgrosse: get(tiles[0], 'textgrosse', null)!,
            bild_title: get(tiles[0], 'bild_title', null)!,
            bildunterschrift: get(tiles[0], 'bildunterschrift', null)!,
            bgColor: colorsMap.colored,
            farbschema: get(tiles[0], 'farbschema', null)!,
          }}
        />
      </First>
    )}
    {get(tiles, '[2]', null) && (
      <Second
        colAmount={{ xl: 10, lg: 11, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 0,
          lg: 0,
          md: 0,
          sm: 0,
          xs: 0,
        }}
      >
        <TextBox
          {...{
            bild: get(tiles[2], 'bild', null)!,
            uberschrift: get(tiles[2], 'uberschrift', null)!,
            text: get(tiles[2], 'text', null)!,
            zielseite: get(tiles[2], 'zielseite', null)!,
            zielseite_link_title: get(tiles[2], 'zielseite_link_title', null)!,
            ankerlink_ziel: get(tiles[2], 'ankerlink_ziel', null)!,
            text_uberlagerung: get(tiles[2], 'text_uberlagerung', null)!,
            textgrosse: get(tiles[2], 'textgrosse', null)!,
            bild_title: get(tiles[2], 'bild_title', null)!,
            bildunterschrift: get(tiles[2], 'bildunterschrift', null)!,
            bgColor: colorsMap.gray,
            farbschema: get(tiles[2], 'farbschema', null)!,
          }}
        />
      </Second>
    )}
    {get(image16to9, 'url', null) && get(tiles, '[4]', null) && (
      <Third
        colAmount={{ xl: 10, lg: 12, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      >
        <Picture image={image16to9} image_alt={image16to9_title} />
      </Third>
    )}
    {get(tiles, '[4]', null) && (
      <Fourth
        colAmount={{ xl: 10, lg: 12, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 2,
          lg: 2,
          md: 0,
          sm: 0,
          xs: 0,
        }}
        $hasImage={!!get(image16to9, 'url', null)}
      >
        <TextBox
          {...{
            bild: get(tiles[4], 'bild', null)!,
            uberschrift: get(tiles[4], 'uberschrift', null)!,
            text: get(tiles[4], 'text', null)!,
            zielseite: get(tiles[4], 'zielseite', null)!,
            zielseite_link_title: get(tiles[4], 'zielseite_link_title', null)!,
            ankerlink_ziel: get(tiles[4], 'ankerlink_ziel', null)!,
            text_uberlagerung: get(tiles[4], 'text_uberlagerung', null)!,
            textgrosse: get(tiles[4], 'textgrosse', null)!,
            bild_title: get(tiles[4], 'bild_title', null)!,
            bildunterschrift: get(tiles[4], 'bildunterschrift', null)!,
            bgColor: colorsMap.colored,
            farbschema: get(tiles[4], 'farbschema', null)!,
          }}
        />
      </Fourth>
    )}
    {get(tiles, '[6]', null) && (
      <Fifth
        colAmount={{ xl: 10, lg: 12, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      >
        <TextBox
          {...{
            bild: get(tiles[6], 'bild', null)!,
            uberschrift: get(tiles[6], 'uberschrift', null)!,
            text: get(tiles[6], 'text', null)!,
            zielseite: get(tiles[6], 'zielseite', null)!,
            zielseite_link_title: get(tiles[6], 'zielseite_link_title', null)!,
            ankerlink_ziel: get(tiles[6], 'ankerlink_ziel', null)!,
            text_uberlagerung: get(tiles[6], 'text_uberlagerung', null)!,
            textgrosse: get(tiles[6], 'textgrosse', null)!,
            bild_title: get(tiles[6], 'bild_title', null)!,
            bildunterschrift: get(tiles[6], 'bildunterschrift', null)!,
            bgColor: colorsMap.gray,
            farbschema: get(tiles[6], 'farbschema', null)!,
          }}
        />
      </Fifth>
    )}
  </Fragment>
);

export default LeftBlock;
