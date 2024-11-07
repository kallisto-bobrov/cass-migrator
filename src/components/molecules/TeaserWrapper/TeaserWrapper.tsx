import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Link from '../../atoms/Link/Link';
import LinkImitator from '../../atoms/LinkImitator/LinkImitator';
import colorsMap from '../../../constants/maps/colors.map';
import type { TeaserWrapperType } from './__type__/TeaserWrapper.type';
import { tilePadding } from '../TeaserTile/TeaserTile';

const shadowOffset = '10px';

const Wrapper = styled.div`
  height: 100%;
`;

const LinkStyled = styled(Link)<{ $bgColor?: string; $no3dHover?: boolean }>`
  background-color: ${(props) =>
    props.$bgColor === colorsMap.colored
      ? props.theme.color.primary900
      : props.theme.color.gray500};
  display: flex;
  height: 100%;
  padding: ${tilePadding};
  transition: box-shadow 0.25s ease-out;

  ${(props) =>
    props.$no3dHover &&
    css`
      transition: background-color 0.25s ease-out;

      &:hover {
        background-color: ${props.$bgColor === colorsMap.colored
          ? props.theme.color.primary800
          : props.theme.color.gray600};
      }
    `}

  ${(props) =>
    !props.$no3dHover &&
    css`
      &:hover {
        box-shadow: -${shadowOffset} ${shadowOffset} 0 0 ${props.$bgColor === colorsMap.colored ? props.theme.color.black : props.theme.color.primary800};
      }
    `}

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const TeaserWrapper = ({
  children,
  link,
  link_title,
  teaser_link_text,
  bgColor = colorsMap.colored,
  linkIconType = 'arrow',
  className,
  no3dHover,
}: TeaserWrapperType) => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={className}
    >
      <LinkStyled
        {...{
          link_type: get(link, 'type', undefined),
          url: link.url,
          uid: link.uid,
          pageType: link.type,
          target: link.target,
          title: link_title,
          $bgColor: bgColor,
          $no3dHover: no3dHover,
        }}
      >
        {children}
        {teaser_link_text && (
          <LinkImitator
            bgColor={bgColor}
            link_text={teaser_link_text}
            active={active}
            iconType={linkIconType}
          />
        )}
      </LinkStyled>
    </Wrapper>
  );
};

export default TeaserWrapper;
