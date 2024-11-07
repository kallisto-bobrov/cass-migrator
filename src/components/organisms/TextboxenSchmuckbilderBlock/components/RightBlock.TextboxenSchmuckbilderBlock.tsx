import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import colorsMap from '../../../../constants/maps/colors.map';
import Col from '../../../grid/Col/Col';
import TextBox from '../../TextBox/TextBox';
import type { TextboxenSchmuckbilderRightBlockType } from '../__types__/TextboxenSchmuckbilderBlock.type';
import Picture from '../../../atoms/Picture/Picture';
import { gridGutter, gridGutterHalf } from '../../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

const First = styled(Col)`
  margin-top: 150px;

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Second = styled(Col)`
  margin: -100px 0 35px -${`${gridGutter}px`};
  position: relative;
  z-index: -1;

  @media (${mq.mdDown}) {
    margin: 35px 0 35px ${`${gridGutterHalf}px`};
  }
`;

const Third = styled(Col)<{ $hasImage?: boolean }>`
  margin-top: ${(props) => (props.$hasImage ? '-185px' : '35px')};

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Fourth = styled(Col)`
  margin-top: 150px;

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const Fifth = styled(Col)`
  margin-top: 150px;

  @media (${mq.mdDown}) {
    margin-top: 35px;
  }
`;

const RightBlock = ({
  tiles,
  image2to3,
  image2to3_title,
}: TextboxenSchmuckbilderRightBlockType) => (
  <>
    {get(tiles, '[1]', null) && (
      <First
        colAmount={{ xl: 8, lg: 12, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
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
            bild: get(tiles[1], 'bild', undefined)!,
            uberschrift: get(tiles[1], 'uberschrift', undefined)!,
            text: get(tiles[1], 'text', undefined)!,
            zielseite: get(tiles[1], 'zielseite', undefined)!,
            zielseite_link_title: get(
              tiles[1],
              'zielseite_link_title',
              undefined,
            )!,
            ankerlink_ziel: get(tiles[1], 'ankerlink_ziel', undefined)!,
            text_uberlagerung: get(tiles[1], 'text_uberlagerung', undefined)!,
            textgrosse: get(tiles[1], 'textgrosse', undefined)!,
            bild_title: get(tiles[1], 'bild_title', undefined)!,
            bildunterschrift: get(tiles[1], 'bildunterschrift', undefined)!,
            bgColor: colorsMap.gray,
            farbschema: get(tiles[1], 'farbschema', undefined)!,
          }}
        />
      </First>
    )}
    {get(image2to3, 'url', null) && get(tiles, '[2]', null) && (
      <Second
        colAmount={{ xl: 8, lg: 8, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      >
        <Picture image={image2to3} image_alt={image2to3_title} />
      </Second>
    )}
    {get(tiles, '[3]', null) && (
      <Third
        colAmount={{ xl: 8, lg: 9, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 4,
          lg: 3,
          md: 0,
          sm: 0,
          xs: 0,
        }}
        $hasImage={!!get(image2to3, 'url', undefined)!}
      >
        <TextBox
          {...{
            bild: get(tiles[3], 'bild', undefined)!,
            uberschrift: get(tiles[3], 'uberschrift', undefined)!,
            text: get(tiles[3], 'text', undefined)!,
            zielseite: get(tiles[3], 'zielseite', undefined)!,
            zielseite_link_title: get(
              tiles[3],
              'zielseite_link_title',
              undefined,
            )!,
            ankerlink_ziel: get(tiles[3], 'ankerlink_ziel', undefined)!,
            text_uberlagerung: get(tiles[3], 'text_uberlagerung', undefined)!,
            textgrosse: get(tiles[3], 'textgrosse', undefined)!,
            bild_title: get(tiles[3], 'bild_title', undefined)!,
            bildunterschrift: get(tiles[3], 'bildunterschrift', undefined)!,
            bgColor: colorsMap.colored,
            farbschema: get(tiles[3], 'farbschema', undefined)!,
          }}
        />
      </Third>
    )}
    {get(tiles, '[5]', null) && (
      <Fourth
        colAmount={{ xl: 8, lg: 12, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 2,
          lg: 2,
          md: 0,
          sm: 0,
          xs: 0,
        }}
      >
        <TextBox
          {...{
            bild: get(tiles[5], 'bild', undefined)!,
            uberschrift: get(tiles[5], 'uberschrift', undefined)!,
            text: get(tiles[5], 'text', undefined)!,
            zielseite: get(tiles[5], 'zielseite', undefined)!,
            zielseite_link_title: get(
              tiles[5],
              'zielseite_link_title',
              undefined,
            )!,
            ankerlink_ziel: get(tiles[5], 'ankerlink_ziel', undefined)!,
            text_uberlagerung: get(tiles[5], 'text_uberlagerung', undefined)!,
            textgrosse: get(tiles[5], 'textgrosse', undefined)!,
            bild_title: get(tiles[5], 'bild_title', undefined)!,
            bildunterschrift: get(tiles[5], 'bildunterschrift', undefined)!,
            bgColor: colorsMap.gray,
            farbschema: get(tiles[5], 'farbschema', undefined)!,
          }}
        />
      </Fourth>
    )}
    {get(tiles, '[7]', null) && (
      <Fifth
        colAmount={{ xl: 8, lg: 10, md: 6, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{
          xl: 4,
          lg: 2,
          md: 0,
          sm: 0,
          xs: 0,
        }}
      >
        <TextBox
          {...{
            bild: get(tiles[7], 'bild', undefined)!,
            uberschrift: get(tiles[7], 'uberschrift', undefined)!,
            text: get(tiles[7], 'text', undefined)!,
            zielseite: get(tiles[7], 'zielseite', undefined)!,
            zielseite_link_title: get(
              tiles[7],
              'zielseite_link_title',
              undefined,
            )!,
            ankerlink_ziel: get(tiles[7], 'ankerlink_ziel', undefined)!,
            text_uberlagerung: get(tiles[7], 'text_uberlagerung', undefined)!,
            textgrosse: get(tiles[7], 'textgrosse', undefined)!,
            bild_title: get(tiles[7], 'bild_title', undefined)!,
            bildunterschrift: get(tiles[7], 'bildunterschrift', undefined)!,
            bgColor: colorsMap.colored,
            farbschema: get(tiles[7], 'farbschema', undefined)!,
          }}
        />
      </Fifth>
    )}
  </>
);

export default RightBlock;
