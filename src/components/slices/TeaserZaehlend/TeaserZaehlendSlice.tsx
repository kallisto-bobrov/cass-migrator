import React, { useEffect, useRef } from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import { useCountUp } from 'react-countup';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';

import { TeaserZaehlendSliceType } from './__types__/TeaserZaehlendSlice.type';

import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Headline from '../../atoms/Headline/Headline';
import CopyText from '../../atoms/CopyText/CopyText';
import useIsInView from '../../../tools/IsInView/IsInView';
import mq from '@/styles/mediaQueries/mediaQueries';

const ContainerStyled = styled(Container)``;

const HeadlineStyled = styled(Headline)`
  & + div {
    margin-top: 10px;
  }
`;

const CounterTeaserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CounterTeaserWrapper = styled.div<{ $teasersAmount: number }>`
  display: flex;
  flex-direction: column;
  width: calc(${(props) => 100 / props.$teasersAmount}% - 50px);
  margin: 25px 0;

  @media (${mq.mdDown}) {
    width: 45%;
  }

  @media (${mq.smDown}) {
    width: 100%;
  }
`;

const Counter = styled.div`
  display: flex;
  flex: 0 0 auto;
  text-align: right;
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  line-height: 0.8;
  font-weight: bold;
  margin-bottom: 20px;

  @media (${mq.mdDown}) {
    font-size: 60px;
  }

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;
const CounterUnit = styled.div`
  flex: 0 0 auto;
  font-size: 40px;
  margin-top: auto;
`;
const TextStyled = styled(CopyText)``;

const CounterLoadingBar = styled.div<{
  $duration: number;
  $value: number;
  $isInView: boolean;
}>`
  background-color: lightgrey;
  height: 25px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  &:after {
    transition: width ${({ $duration }) => $duration}s ease-in-out;
    content: '';
    position: absolute;
    height: 100%;
    background-color: ${({ color }) => color && color};
    z-index: 2;
    width: 0;
  }

  ${({ $value, $isInView }) =>
    $isInView &&
    css`
      &:after {
        width: ${$value}%;
      }
    `}
`;

const SourceStyled = styled.span`
  margin-top: 20px;
  font-size: 14px;
  color: #333333;
`;

const RowStyled = styled(Row)`
  border-bottom: 2px solid black;

  margin-bottom: 100px;

  @media (${mq.mdDown}) {
    margin-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  @media (${mq.xs}) {
    margin-bottom: 90px;
    margin-top: 45px;
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const CounterTeaser = ({
  counterValue,
  counterUnit,
  text,
  color,
  colorCustom,
  i,
  isInView,
  textSource,
  teasersAmount,
}: {
  counterValue: number;
  counterUnit: string | null;
  text: Array<any>;
  color: string | null;
  colorCustom: string | null;
  i: number;
  isInView: boolean;
  textSource: string | null;
  teasersAmount: number;
}) => {
  const colorMap = {
    Grün: '#2CC700',
    Schwarz: '#000000',
    Grau: '#666666',
  };

  const duration = 5 * (counterValue / 100);

  const { start } = useCountUp({
    ref: `counter${i}`,
    start: 0,
    startOnMount: false,
    end: counterValue,
    useEasing: true,
    duration,
  });

  useEffect(() => {
    if (isInView) {
      start();
    }
  }, [isInView]);

  return (
    <CounterTeaserWrapper $teasersAmount={teasersAmount}>
      {/*@ts-ignore*/}
      <CounterWrapper color={colorCustom || colorMap[color!]}>
        <Counter id={`counter${i}`}>0</Counter>
        <CounterUnit>{counterUnit || '%'}</CounterUnit>
      </CounterWrapper>
      <CounterLoadingBar
        $duration={duration}
        $isInView={isInView}
        $value={counterValue}
        // @ts-ignore
        color={colorCustom || colorMap[color!]}
        onClick={start}
      />
      <TextStyled prismicRichText={text} />
      {textSource && <SourceStyled>{textSource}</SourceStyled>}
    </CounterTeaserWrapper>
  );
};

const TeaserZaehlendSlice = ({
  primary,
  items,
  index,
  slices,
}: TeaserZaehlendSliceType) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(counterRef, '-150px', true);

  return (
    <SliceWrapper id={get(primary, 'ankerlink_titel', null)!}>
      <Wrapper>
        <ContainerStyled>
          <RowStyled>
            <Col
              colAmount={{
                xl: 12,
                lg: 12,
                md: 12,
                sm: 12,
                xs: 12,
              }}
              offset={{
                xl: 0,
                lg: 0,
                md: 0,
                sm: 0,
                xs: 0,
              }}
            >
              {get(primary, 'uberschrift[0]', null) && (
                <HeadlineStyled
                  skin="headline800"
                  type={primary.uberschrift[0].type}
                >
                  {primary.uberschrift[0].text}
                </HeadlineStyled>
              )}
              {get(primary, 'text[0]', null) && (
                <CopyText skin="copyStandard" prismicRichText={primary.text} />
              )}
            </Col>
          </RowStyled>
          <CounterTeaserContainer ref={counterRef}>
            {items &&
              items.length > 0 &&
              items.map((teaser, i) => (
                <CounterTeaser
                  key={i}
                  textSource={teaser.source}
                  i={i}
                  isInView={isInView}
                  counterValue={teaser.counter_value!}
                  counterUnit={teaser.counter_unit}
                  text={teaser.text}
                  color={teaser.color}
                  colorCustom={teaser.color_custom}
                  teasersAmount={items.length}
                />
              ))}
          </CounterTeaserContainer>
        </ContainerStyled>
      </Wrapper>
    </SliceWrapper>
  );
};

export default TeaserZaehlendSlice;
