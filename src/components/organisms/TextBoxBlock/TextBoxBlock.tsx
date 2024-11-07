import React from 'react';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import Container from '../../grid/Container/Container';
import type { TextBoxBlockType } from './__types__/TextBoxBlock.type';
import Col from '../../grid/Col/Col';
import Row from '../../grid/Row/Row';
import colorsMap from '../../../constants/maps/colors.map';
import TextBox from '../TextBox/TextBox';

const Wrapper = styled(Container)`
  padding-bottom: 50px;
`;

const TextBoxBlock = ({ items, sliceName }: TextBoxBlockType) => (
  <Wrapper>
    <Row>
      {items &&
        items[0] &&
        items.map((item) => (
          <Col
            key={uniqueId('teaser-')}
            colAmount={{ xl: 4, lg: 4, md: 6, sm: 6, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            <TextBox
              {...{
                bild: get(item, 'bild', undefined)!,
                uberschrift: get(item, 'uberschrift', undefined)!,
                text: get(item, 'text', undefined)!,
                zielseite: get(item, 'zielseite', undefined)!,
                zielseite_link_title: get(
                  item,
                  'zielseite_link_title',
                  undefined,
                )!,
                zielseite_link_text: get(
                  item,
                  'zielseite_link_text',
                  undefined,
                )!,
                ankerlink_ziel: get(item, 'ankerlink_ziel', undefined)!,
                text_uberlagerung: get(item, 'text_uberlagerung', undefined)!,
                textgrosse: get(item, 'textgrosse', undefined)!,
                bild_title: get(item, 'bild_title', undefined),
                bildunterschrift: get(item, 'bildunterschrift', undefined),
                bgColor: get(item, 'bgcolor', undefined) || colorsMap.dark,
                farbschema: get(item, 'farbschema', undefined),
                sliceName,
              }}
            />
          </Col>
        ))}
    </Row>
  </Wrapper>
);

export default TextBoxBlock;
