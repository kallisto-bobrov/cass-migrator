import React, { Fragment } from 'react';
import styled from 'styled-components';
import { copyStandard } from '../../../atoms/CopyText/CopyText.skins';
import Link from '../../../atoms/Link/Link';
import type { LocationDataBlockType } from '../__types__/LocationDataBlock.type';

const ItemsBlock = styled.div`
  margin-bottom: 10px;
`;

const Item = styled.div`
  ${copyStandard};
  color: ${(props) => props.theme.skin.footer.textcolor};
`;

const LinkedItem = styled.a`
  ${copyStandard};
  display: inline-block;
  color: ${(props) => props.theme.skin.footer.textcolor};
  text-decoration: none;
`;

const CTA = styled(Link)`
  color: ${(props) => props.theme.skin.footer.textcolor};
`;

const LocationDataBlock = ({
  address,
  city,
  zip,
  tel,
  fax,
  ctaText,
  linkUrl,
}: LocationDataBlockType) => (
  <Fragment>
    <ItemsBlock>
      <Item>{address}</Item>
      <Item>{city}</Item>
    </ItemsBlock>
    <ItemsBlock>
      <LinkedItem href={`tel:${tel}`}>{`T ${tel}`}</LinkedItem>
      <Item>{`F ${fax}`}</Item>
    </ItemsBlock>
    <CTA
      link_type="Web"
      target="_blank"
      skin="cta"
      url={linkUrl}
      title={ctaText}
    >
      {ctaText}
    </CTA>
  </Fragment>
);

export default LocationDataBlock;
