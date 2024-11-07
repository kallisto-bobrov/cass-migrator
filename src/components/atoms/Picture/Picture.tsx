import React, { Fragment, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Breakpoint, PictureType } from './__types__/Picture.type';
import mq from '@/styles/mediaQueries/mediaQueries';

export const getAspectRatio = (view: Breakpoint): number => {
  let transformToPercent = 0;

  if (view && view.dimensions && view.dimensions.height) {
    const aspect = view.dimensions!.height! / view.dimensions!.width!;
    transformToPercent = aspect * 100;
  }

  return transformToPercent;
};

const PictureStyled = styled.picture<{
  $objectFit?: boolean;
  $aspectLG?: number;
  $aspectMD?: number;
  $aspectXS?: number;
  $ie11: boolean;
}>`
  display: block;
  height: ${(props) => (props.$objectFit ? '100%' : '0')};
  min-height: ${(props) => (props.$objectFit ? '211px' : '0')};
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: ${(props) => (props.$objectFit ? '0' : props.$aspectLG)}%;

  @media (${mq.smTillmd}) {
    padding-top: ${(props) => (props.$objectFit ? '0' : props.$aspectMD)}%;
  }

  @media (${mq.xs}) {
    padding-top: ${(props) => (props.$objectFit ? '0' : props.$aspectXS)}%;
  }

  ${(props) =>
    props.$objectFit &&
    !props.$ie11 &&
    css`
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    `}
`;

const ImageStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Picture = ({
  image,
  image_alt = '',
  className,
  objectFit = false,
}: PictureType) => {
  const imgLG = image;
  const imgMD = image && image.MD ? image.MD : undefined;
  const imgXS = image && image.XS ? image.XS : undefined;
  const aspectLG = getAspectRatio(imgLG as Breakpoint);
  const aspectMD =
    getAspectRatio(imgMD!) === 0
      ? getAspectRatio(imgLG as Breakpoint)
      : getAspectRatio(imgMD!);
  const aspectXS =
    getAspectRatio(imgXS!) === 0
      ? getAspectRatio(imgLG as Breakpoint)
      : getAspectRatio(imgXS!);
  const imgLGfallback = imgLG && imgLG.url ? imgLG.url : '';

  const [ie11, detectIe11] = useState(false);

  useEffect(() => {
    const isIE11 = !!window.MSInputMethodContext && !!document.DOCUMENT_NODE;
    if (isIE11) {
      detectIe11(true);
    }
  });

  return (
    <PictureStyled
      $aspectLG={aspectLG}
      $aspectMD={aspectMD}
      $aspectXS={aspectXS}
      className={className}
      $objectFit={objectFit}
      $ie11={ie11}
    >
      {image && image.url && (
        <Fragment>
          <source
            media={`(${mq.lgUp})`}
            srcSet={imgLG && imgLG.url ? imgLG.url : imgLGfallback}
          />
          <source
            media={`(${mq.smTillmd})`}
            srcSet={imgMD && imgMD.url ? imgMD.url : imgLGfallback}
          />
          <source
            media={`(${mq.xs})`}
            srcSet={imgXS && imgXS.url ? imgXS.url : imgLGfallback}
          />
          <ImageStyled
            width={image?.dimensions?.width}
            height={image?.dimensions?.height}
            src={imgLG && imgLG.url ? imgLG.url : imgLGfallback}
            alt={image_alt && image_alt !== '' ? image_alt : image.alt}
          />
        </Fragment>
      )}
    </PictureStyled>
  );
};

export default Picture;
