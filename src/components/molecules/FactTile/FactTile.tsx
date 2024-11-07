import React from 'react';
import styled from 'styled-components';
import type { FactTileType } from './__type__/FactTile.type';
import { Overline, tilePadding } from '../TeaserTile/TeaserTile';
import {
  headline700skin,
  headline900skin,
} from '../../atoms/Headline/Headline.skins';

const Fact = styled.div`
  background: ${(props) => props.theme.color.secondary800};
  color: ${(props) => props.theme.color.white};
  height: 100%;
  padding: ${tilePadding};
`;

const OverlineStyled = styled(Overline)`
  color: ${(props) => props.theme.color.white};
  margin-bottom: 15px;
`;

const Number = styled.div`
  ${headline900skin};
  margin-bottom: 15px;
  color: ${(props) => props.theme.color.white};
`;

const Text = styled.div`
  ${headline700skin};
  color: ${(props) => props.theme.color.white};
`;

export const TileSource = styled.div`
  font-size: ${(props) => props.theme.skin.copySmall.xl.fontSize};
  margin-top: 25px;
`;

const FactTile = ({ dachzeile, kennziffer, text, quelle }: FactTileType) => (
  <Fact>
    <OverlineStyled>
      {dachzeile && dachzeile !== null ? dachzeile : 'Fact Snack'}
    </OverlineStyled>
    {kennziffer && kennziffer !== '' && <Number>{kennziffer}</Number>}
    {text && text !== '' && <Text>{text}</Text>}
    {quelle && quelle !== '' && <TileSource>Quelle: {quelle}</TileSource>}
  </Fact>
);

export default FactTile;
