'use client';

import React, { useState, useEffect, memo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import type { MagazinSliceType } from './__types__/MagazinSlice.type';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import useMagazinFilterTags from './hooks/useMagazinFilterTags/useMagazinFilterTags';
import MagazinFeaturedItems from '../../organisms/MagazinFeaturedItems/MagazinFeaturedItems';
import Container from '../../grid/Container/Container';
import Select from '../../atoms/Forms/Select/Select';
import MagazinTilesOverview from '../../organisms/MagazinTilesOverview/MagazinTilesOverview';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import FilterMagazin from './components/FilterMagazin/Filter.magazin';
import Button from '../../atoms/Button/Button';
import Spinner from '../../atoms/Spinner/Spinner';
import useFilterCustomTypes from './hooks/useFilterCustemTypes/useFilterCustomTypes';
import AdBanner from '../../molecules/AdBanner/AdBanner';
import AdBannerMock from '../../molecules/AdBanner/__mocks__/AdBannerMock.mock';
import mq from '@/styles/mediaQueries/mediaQueries';
import * as prismic from '@prismicio/client';
import { magazineCustomTypes } from '@/constants/predicates/predicates';
import fetchPrismicContent from '@/helpers/fetchPrismicContent/fetchPrismicContent';
import { AllDocumentTypes } from '../../../../prismicio-types';

const Styled = styled.div<{ $wrapperHeight?: number }>`
  padding: 100px 0;
  background: ${(props) => props.theme.color.gray500};
  min-height: ${(props) => props.$wrapperHeight}px;

  @media (${mq.smDown}) {
    padding: 50px 0;
  }
`;

const SelectStyled = styled(Select)`
  margin: 2px;
`;

const ColStyled = styled(Col)`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const ButtonStyled = styled(Button)`
  flex: 0 0 auto;
`;

const MagazinSlice = ({ items, primary }: MagazinSliceType) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const tag_filter_reset = primary.tag_filter_reset || 'Entdecken';
  const type_filter_label = primary.type_filter_label || 'Filtern';
  const type_filter_reset = primary.type_filter_reset || 'Alle anzeign';
  const show_more = primary.show_more || 'Weitere Inhalte einblenden';
  const info_text =
    primary.info_text || 'Zur Auswahl konnten keine Inhalte gefunden werden.';

  const [teasers, setTeasers] = useState<AllDocumentTypes[]>([]);

  const [pageSize, setPageSize] = useState(12);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  /*
   *
   * filters
   *
   * */
  const tags = useMagazinFilterTags(items, tag_filter_reset);
  function getTagsForPrismicFilter() {
    if (!items) return [];
    return items.map((tag) => tag.tag_name.data.tag);
  }

  const tagsForPrismicFilter = getTagsForPrismicFilter();

  const customTypes = useFilterCustomTypes(
    type_filter_label,
    type_filter_reset,
  );
  const [selectedTag, setSelectedTag] = useState<string>();
  const [selectedCustomType, setSelectedCustomType] = useState<string>();

  let featuredTeasers = [
    primary.featured_article.id,
    primary.featured_box_top.id,
    primary.featured_box_bottom.id,
  ];

  const featuredTeasersFilter = () => {
    return featuredTeasers.filter((teaser) => teaser !== undefined);
  };

  useEffect(() => {
    const filters = [prismic.filter.any('document.type', magazineCustomTypes)];
    const queryTags = searchParams.get('tag');
    const queryType = searchParams.get('type');

    setPage(1);
    setIsError(false);

    // prevent race condition
    let ignore = false;

    fetchPrismicContent({
      filters: [
        ...filters,
        queryType
          ? prismic.filter.at('document.type', decodeURIComponent(queryType))
          : '',
        queryTags
          ? prismic.filter.at('document.tags', [decodeURIComponent(queryTags)])
          : prismic.filter.any('document.tags', tagsForPrismicFilter),
        ...featuredTeasersFilter().map((featuredTeaser) =>
          prismic.filter.not('document.id', featuredTeaser),
        ),
      ],
      pageSize: pageSize,
      page: page,
      orderings: {
        field: 'document.last_publication_date',
        direction: 'desc',
      },
    }).then(
      (data) => {
        if (!ignore) {
          setTeasers(data.results);
          setTotalPages(data.total_pages);
          setIsSuccess(true);
          setIsLoading(false);
          setIsError(false);
        }
      },
      () => {
        setIsLoading(false);
        setIsError(true);
      },
    );
    if (queryTags && queryType) {
      setSelectedTag(decodeURIComponent(queryTags));
      setSelectedCustomType(decodeURIComponent(queryType));
    } else if (queryTags) {
      setSelectedTag(decodeURIComponent(queryTags));
      setSelectedCustomType(type_filter_label);
    } else if (queryType) {
      setSelectedCustomType(decodeURIComponent(queryType));
      setSelectedTag(tag_filter_reset);
    } else {
      setSelectedTag(tag_filter_reset);
      setSelectedCustomType(type_filter_label);
    }
    return () => {
      ignore = true;
    };
  }, [searchParams]);

  const handleTagChange = (event: any) => {
    const newTag = event.target.value;
    const queryType = searchParams.get('type');
    const queryTypeString = queryType ? `type=${queryType}` : null;

    if (newTag === tag_filter_reset) {
      setSelectedTag(tag_filter_reset);
      router.push(`${pathname}?${queryTypeString || ''}`, { scroll: false });
    } else {
      setSelectedTag(newTag);
      router.push(
        `${pathname}?tag=${encodeURIComponent(newTag)}${queryTypeString ? `&${queryTypeString}` : ''}`,
        { scroll: false },
      );
    }
  };

  const handleCustomTypeChange = (event: any) => {
    const newCustomType = event.target.value;
    const queryTags = searchParams.get('tag');
    const queryTagString = queryTags
      ? `tag=${encodeURIComponent(queryTags)}`
      : '';
    if (
      newCustomType === type_filter_reset ||
      newCustomType === type_filter_label
    ) {
      setSelectedCustomType(newCustomType);
      router.push(`${pathname}?${queryTagString}`, { scroll: false });
    } else {
      setSelectedCustomType(newCustomType);
      router.push(
        `${pathname}?${queryTagString}&type=${encodeURIComponent(newCustomType)}`,
        {
          scroll: false,
        },
      );
    }
  };

  const handleLoadMore = () => {
    const queryTags = searchParams.get('tag');
    const queryType = searchParams.get('type');
    setIsLoading(true);
    setIsError(false);
    fetchPrismicContent({
      filters: [
        prismic.filter.any('document.type', magazineCustomTypes),
        queryType
          ? prismic.filter.at('document.type', decodeURIComponent(queryType))
          : '',
        queryTags
          ? prismic.filter.at('document.tags', [decodeURIComponent(queryTags)])
          : prismic.filter.any('document.tags', tagsForPrismicFilter),
        ...featuredTeasersFilter().map((featuredTeaser) =>
          prismic.filter.not('document.id', featuredTeaser),
        ),
      ],
      pageSize: pageSize,
      page: page + 1,
      orderings: {
        field: 'document.last_publication_date',
        direction: 'desc',
      },
    }).then(
      (data) => {
        setTeasers([...teasers, ...data.results]);
        setPage(page + 1);
        setIsLoading(false);
        setIsError(false);
      },
      () => {
        setIsLoading(false);
        setIsError(true);
      },
    );
  };

  return (
    <ErrorBoundary>
      <Styled>
        <Container>
          {/*<AdBanner {...(AdBannerMock as any)} />*/}
          <Row>
            {tags ? (
              <Col
                colAmount={{
                  xl: 10,
                  lg: 9,
                  md: 8,
                  sm: 12,
                  xs: 12,
                }}
              >
                <FilterMagazin {...{ tags, selectedTag, handleTagChange }} />
              </Col>
            ) : null}
            {customTypes && customTypes[0] ? (
              <Col
                colAmount={{
                  xl: 2,
                  lg: 3,
                  md: 4,
                  sm: 12,
                  xs: 12,
                }}
              >
                <SelectStyled
                  id="customTypes"
                  options={customTypes}
                  handleChange={handleCustomTypeChange}
                  value={selectedCustomType}
                  skin="selectSecondary"
                />
              </Col>
            ) : null}
          </Row>
          {selectedTag === tag_filter_reset &&
          (selectedCustomType === type_filter_reset ||
            selectedCustomType === type_filter_label) &&
          (primary.featured_article.data ||
            primary.featured_box_top.data ||
            primary.featured_box_bottom.data) ? (
            <MagazinFeaturedItems
              main={primary.featured_article}
              top={primary.featured_box_top}
              bottom={primary.featured_box_bottom}
            />
          ) : null}

          {teasers && teasers.length > 0 ? (
            <MagazinTilesOverview items={teasers} />
          ) : null}
          {isLoading ? <Spinner /> : null}
          {totalPages > page && isSuccess ? (
            <Row>
              <ColStyled>
                <ButtonStyled
                  text={show_more}
                  skin="secondary"
                  showArrow={false}
                  handleClick={handleLoadMore}
                />
              </ColStyled>
            </Row>
          ) : null}
          {isError ? <h1>{info_text}</h1> : null}
        </Container>
      </Styled>
    </ErrorBoundary>
  );
};

export default MagazinSlice as any;
