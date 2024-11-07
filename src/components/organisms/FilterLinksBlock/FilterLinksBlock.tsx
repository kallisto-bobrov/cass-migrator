import React, { useContext } from 'react';
import styled from 'styled-components';
import type { FilterLinksBlockType } from './__types__/FilterLinksBlock.type';
import CTCBHeadline from '../../molecules/CornerTeaserContentBlock/components/Headline.CornerTeaserContentBlock';
import { CornerTeaserWrapper } from '../../molecules/CornerTeaserContentBlock/CornerTeaserContentBlock';
import Headline from '../../atoms/Headline/Headline';
import Filters from '../../molecules/Filters/Filters';
import Container, { gridGutter } from '../../grid/Container/Container';
import SimpleAccordion from '../../molecules/SimpleAccordion/SimpleAccordion';
import mq from '@/styles/mediaQueries/mediaQueries';
import { BreakpointContext } from '@/helpers/breakpoints/context/breakpoint.context';
import { lgUp, mdDown } from '@/helpers/breakpoints/checkBreakpoints.helper';
import breakpointNames from '@/helpers/breakpoints/breakpoints.map';

const Wrapper = styled.div`
  margin-top: 50px;
`;

const CornerTeaserWrapperStyled = styled(CornerTeaserWrapper)`
  @media (${mq.lg}) {
    width: 100%;
  }
`;

const FlexWrapper = styled.div`
  display: flex;

  @media (${mq.lg}) {
    flex-direction: column;
  }
`;

const FilterWrapper = styled.div`
  padding: 35px 60px;
  width: 100%;
  background: ${(props) => props.theme.color.gray500};
  flex: 1;

  @media (${mq.mdUp}) {
    padding: 35px;
  }

  @media (${mq.smDown}) {
    padding: ${`${gridGutter}px`};
  }
`;

const HeadlineStyled = styled(Headline)`
  margin-bottom: 5px;
`;

const ContainerStyled = styled(Container)`
  @media (${mq.mdDown}) {
    margin: 25px 0;
    max-width: 100%;
  }
`;

const FilterLinksBlock = ({
  tags,
  filterlink_title = '',
  chapter,
  headline,
  uberschrift_filter,
  filter_zielseite,
  slices,
  index,
  children,
}: FilterLinksBlockType) => {
  const breakpoint = useContext(BreakpointContext);

  return (
    <Wrapper>
      <FlexWrapper>
        <CornerTeaserWrapperStyled>
          <CTCBHeadline
            {...{
              chapter,
              slices,
              index,
              headline,
              standAlone: true,
            }}
          />
        </CornerTeaserWrapperStyled>
        {lgUp(breakpoint) ? (
          <FilterWrapper>
            <HeadlineStyled skin="headline500" type="heading3">
              {uberschrift_filter}
            </HeadlineStyled>
            <Filters
              tags={tags}
              filter_zielseite={filter_zielseite}
              filterlink_title={filterlink_title}
            />
          </FilterWrapper>
        ) : null}
      </FlexWrapper>
      {mdDown(breakpoint) ? (
        <ContainerStyled>
          <SimpleAccordion
            headlineText={uberschrift_filter}
            headlineType="heading3"
            collapseAtBreakpoint={[
              breakpointNames.xs,
              breakpointNames.sm,
              breakpointNames.md,
            ]}
            accordionSkin="gray"
            actualBreakpoint={breakpoint}
          >
            <Filters
              tags={tags}
              filter_zielseite={filter_zielseite}
              filterlink_title={filterlink_title}
            />
          </SimpleAccordion>
        </ContainerStyled>
      ) : null}
      {children}
    </Wrapper>
  );
};

export default FilterLinksBlock;
