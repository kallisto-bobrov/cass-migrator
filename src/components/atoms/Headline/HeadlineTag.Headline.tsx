import React, { ReactNode } from 'react';
import findKey from 'lodash/findKey';
import type { HeadlineTypes } from './__types__/Headline.types';
import headlineMap from '@/components/atoms/Headline/headline.map';
import IntrinsicElements = React.JSX.IntrinsicElements;

const HeadlineTag = ({
  children,
  type = headlineMap.h2 as HeadlineTypes['type'],
  className,
}: HeadlineTypes) => {
  try {
    const Tag = findKey(
      headlineMap,
      (o) => o === type,
    ) as keyof IntrinsicElements;

    if (Tag) {
      return <Tag className={className}>{children}</Tag>;
    }
    return <h2 className={className}>{children}</h2>;
  } catch (e) {
    return <h2 className={className}>{children}</h2>;
  }
};

export default HeadlineTag;
