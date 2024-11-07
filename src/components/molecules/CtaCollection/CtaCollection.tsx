import React from 'react';
import styled from 'styled-components';
import { CtaCollectionType } from './__types__/CtaCollection.type';
import Button from '../../atoms/Button/Button';
import { gridGutterHalf } from '../../grid/Container/Container';

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${gridGutterHalf}px;
`;

const CtaCollection = ({
  firstCta,
  summary,
  prevCta,
  nextCta,
  onCtaClick,
}: CtaCollectionType) => (
  <Div>
    {firstCta && firstCta[0] && (
      <Button
        handleClick={() => onCtaClick('start')}
        skin="primary"
        text={firstCta[0].text}
      />
    )}
    {!firstCta && !summary && prevCta[0].text && (
      <Button
        handleClick={() => onCtaClick('prev')}
        skin="secondary"
        text={prevCta[0].text}
        showArrow={false}
      />
    )}
    {!firstCta && !summary && nextCta[0].text && (
      <Button
        handleClick={() => onCtaClick('next')}
        skin="primary"
        text={nextCta[0].text}
      />
    )}
  </Div>
);

export default CtaCollection;
