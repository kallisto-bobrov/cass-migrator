import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import type { CopyTextType } from './__types__/CopyText.type';
import { copyBig, copySmall, copyStandard } from './CopyText.skins';
import { headline600skin, headline700skin } from '../Headline/Headline.skins';
import mq from '@/styles/mediaQueries/mediaQueries';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import Link from '../../atoms/Link/Link';

const margin = 20;

// noinspection CssUnresolvedCustomProperty
const CopyStyled = styled.div<{
  $skin: string;
  $inView?: boolean;
}>`
  ${(props) => props.$skin === 'copyBig' && copyBig}
  ${(props) => props.$skin === 'copyStandard' && copyStandard}
  ${(props) => props.$skin === 'copySmall' && copySmall}

  color: ${(props) =>
    props.color === 'primary' && props.theme.color.primary900};

  strong {
    font-family: ${(props) => props.theme.font.family.secondary};
  }

  em {
    font-style: italic;
    font-weight: bold;
  }

  h3,
  h4 {
    ${(props) => props.$skin === 'copySmall' && headline600skin};
    ${(props) => props.$skin === 'copyStandard' && headline600skin};
    ${(props) => props.$skin === 'copyBig' && headline700skin};
    margin-bottom: ${margin}px;
    margin-top: 30px;
  }

  ul,
  ol {
    margin: ${margin}px 6px;
  }

  ul {
    list-style: disc;
    padding-left: 15px;
  }

  ul li {
    padding-left: 15px;
  }

  ol {
    margin-left: 13px;
    counter-reset: ol-counter;
    padding-left: 24px;
    list-style: none;
  }

  ol li {
    counter-increment: ol-counter;
    position: relative;
  }

  ol li:before {
    ${(props) =>
      props.$skin === 'copyStandard' &&
      css`
        --size: ${props.theme.skin.copySmall.xl.fontSize};
      `};

    ${(props) =>
      props.$skin === 'copyBig' &&
      css`
        --size: ${props.theme.skin.copyBig.xl.fontSize};
      `};

    ${(props) =>
      props.$skin === 'copySmall' &&
      css`
        --size: ${props.theme.skin.copySmall.xl.fontSize};
      `};

    ${(props) => css`
      content: counter(ol-counter);
      color: ${props.theme.color.white};
      position: absolute;
      left: calc(-1 * var(--size) - 15px);
      line-height: var(--size);
      width: var(--size);
      height: var(--size);
      top: 7px;
      background: ${props.theme.color.black};
      text-align: center;
      font-family: ${props.theme.font.family.secondary};
      font-size: calc(var(--size) - 1px);
    `};

    @media (${mq.smDown}) {
      ${(props) =>
        props.$skin === 'copyStandard' &&
        css`
          --size: ${props.theme.skin.copySmall.xs.fontSize};
        `}

      ${(props) =>
        props.$skin === 'copyBig' &&
        css`
          --size: ${props.theme.skin.copyBig.xs.fontSize};
        `}

      ${(props) =>
        props.$skin === 'copySmall' &&
        css`
          --size: ${props.theme.skin.copySmall.xs.fontSize};
        `}
    }
  }

  p + p,
  p + h4,
  p + h3 {
    margin-top: ${margin * 2}px;
  }

  a {
    color: ${(props) => props.theme.color.black};
    position: relative;
    opacity: 1;
    transition: opacity 0.25s ease-out;
    text-decoration: underline;

    &:hover {
      opacity: 0.3;
    }
  }
`;

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }: any) => {
    return (
      <Link
        link_type={node.data.link_type}
        url={node.data.url}
        uid={node.data.uid}
        skin="inline"
        isBroken={node.data.isBroken}
        isInsideRichtext
      >
        {children}
      </Link>
    );
  },
};

const CopyText = ({
  prismicRichText,
  className,
  skin = 'copyStandard',
  textColor,
  text,
}: CopyTextType) => {
  let textItems = text;
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  if (prismicRichText) {
    return (
      <CopyStyled
        className={className}
        $skin={skin}
        color={textColor}
        ref={ref}
        $inView={inView}
      >
        <PrismicRichText field={prismicRichText} components={components} />
      </CopyStyled>
    );
  }

  return (
    <CopyStyled className={className} $skin={skin} color={textColor}>
      <p>{textItems}</p>
    </CopyStyled>
  );
};

export default CopyText;
