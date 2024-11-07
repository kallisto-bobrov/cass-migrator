import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { ZitatMitPortraitType } from './__types__/ZitatMitPortrait.type';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Picture from '../../atoms/Picture/Picture';
import Quote from '../Quote/Quote';

const Wrapper = styled(Row)`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ZitatMitPortrait = ({
  quote,
  authorName,
  image,
  bildgrosse,
  bild_medium,
  bild_gross,
}: ZitatMitPortraitType) => {
  const [requieredImage, setImage] = useState<any>(null);

  const getImage = () => {
    let img = null;
    const hasSmallImage = image && image.url;
    const hasMediumImage = bild_medium && bild_medium.url;
    const hasBigImage = bild_gross && bild_gross.url;

    if (hasSmallImage) {
      img = image;
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

  return (
    <Wrapper>
      {requieredImage && (
        <Col
          colAmount={{
            xl: 6,
            lg: 6,
            md: 6,
            sm: 12,
            xs: 12,
          }}
        >
          <Picture
            image={requieredImage}
            objectFit={bildgrosse === 'adaptiv'}
          />
        </Col>
      )}
      <Col
        colAmount={{
          xl: getImage() ? 6 : 12,
          lg: getImage() ? 6 : 12,
          md: getImage() ? 6 : 12,
          sm: 12,
          xs: 12,
        }}
      >
        <Quote quote={quote} authorName={authorName} />
      </Col>
    </Wrapper>
  );
};

export default ZitatMitPortrait;
