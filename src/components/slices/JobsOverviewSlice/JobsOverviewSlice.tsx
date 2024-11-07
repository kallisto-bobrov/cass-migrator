import React, { useEffect, useState } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import type {
  FilterSelection,
  JobsOverviewSliceType,
} from './__types__/JobsOverviewSlice.type';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import sizesMap from '../../../constants/maps/sizes.map';
import JobsOverview from '../../organisms/JobsOverview/JobsOverview';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Filters from './components/Filters.JobOverviewSlice';
import InfoText from './components/InfoText.JobOverviewSlice';
import mq from '@/styles/mediaQueries/mediaQueries';
import fetchPrismicContent from '@/helpers/fetchPrismicContent/fetchPrismicContent';
import { jobsPredicates } from '@/constants/predicates/predicates';
import { InternalLink } from '@/components/atoms/Link/__types__/Link.type';
import { getFiltersNumber } from '@/components/slices/JobsOverviewSlice/hooks/useJobsFIlterLabels';
import * as prismic from '@prismicio/client';

const ContainerStyled = styled(Container)`
  @media (${mq.xs}) {
    padding: 0 ${`${gridGutterHalf * 2}px`};
  }
`;

const getValue = (tree: any, keys: any) => {
  const value = get(tree, keys, null);
  if (value && value !== '') {
    return get(tree, keys, null);
  }
  return null;
};

const JobsOverviewSlice = ({
  primary,
  slices,
  index,
  items,
}: JobsOverviewSliceType) => {
  const filter_reset = getValue(primary, 'filter_reset') || 'Alles anzeigen';
  const label_field =
    getValue(primary, 'label_field') || 'Beratungsfeld wählen:';
  const info_text =
    getValue(primary, 'info_text') ||
    'Es konnten leider keine freien Stellen gefunden werden.';

  const [jobs, setJobs] = useState<InternalLink[]>([]);
  const [filterSelections, setfilterSelections] = useState<FilterSelection>({});

  useEffect(() => {
    fetchPrismicContent({
      filters: [
        ...jobsPredicates(),
        prismic.filter.any('document.tags', defaultTags),
      ],
      pageSize: 100,
      page: 1,
    }).then((data) => {
      setJobs(data.results as unknown as InternalLink[]);
    });
  }, []);

  const defaultTags: any[] = [];

  const filtersNumber = getFiltersNumber(items);

  items.forEach((item) => {
    defaultTags.push(get(item, 'field.data.tag', null));
    for (let i = 1; i < filtersNumber; i += 1) {
      if (get(item, `filter_${i + 1}.data`, null)) {
        defaultTags.push(get(item, `filter_${i + 1}.data.tag`, null));
      }
    }
  });

  const handleChange = (event: {
    currentTarget: { id: string; value: string };
  }) => {
    const select = event.currentTarget;
    const filter = select.id;

    // handle filter interaction
    let filterOptions: FilterSelection = {};
    if (select.value === filter_reset) {
      // reset this filter
      filterOptions = { ...filterSelections };
      // @ts-ignore
      delete filterOptions[filter];
      setfilterSelections(filterOptions);
    } else {
      // @ts-ignore
      if (filterOptions[filter]) {
        // prevent multiple selection of same filter
        // @ts-ignore
        delete filterOptions[filter];
        filterOptions = { ...filterSelections, [filter]: select.value };
      } else {
        filterOptions = { ...filterSelections, [filter]: select.value };
      }
      setfilterSelections(filterOptions);
    }
  };

  function getFilteredJobs(
    jobs: InternalLink[],
    filterSelections: FilterSelection,
  ) {
    if (Object.values(filterSelections).length == 0) return jobs;
    return jobs.filter((job) => {
      const filterSelectionsList = Object.values(filterSelections);
      return filterSelectionsList.every((filter) => job.tags.includes(filter));
    });
  }

  return (
    <ErrorBoundary>
      <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.white}>
        <TeaserIntro
          headline={get(primary, 'uberschrift[0]', null)!}
          text={get(primary, 'text', null)!}
          chapter={get(primary, 'kapitel', null)}
          slices={slices}
          index={index}
          textgrosse={sizesMap.standard}
        />
        <ContainerStyled>
          <Filters
            items={items}
            filter_reset={filter_reset}
            filterSelections={filterSelections}
            handleChange={(event: any) => handleChange(event)}
            label_field={label_field}
            primary={primary}
          />
          {getFilteredJobs(jobs, filterSelections).length > 0 ? (
            <JobsOverview items={getFilteredJobs(jobs, filterSelections)} />
          ) : (
            <InfoText info_text={info_text} />
          )}
        </ContainerStyled>
      </SliceWrapper>
    </ErrorBoundary>
  );
};

export default JobsOverviewSlice;
