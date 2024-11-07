import React from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import map from 'lodash/map';
import get from 'lodash/get';
import type { JobsOverviewType } from './__types__/JobsOverview.type';
import JobTeaser from './components/JobTeaser/JobTeaser';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import { PrismicHeadline } from '@/components/atoms/Headline/__types__/Headline.types';

const ColStyled = styled(Col)`
  margin-bottom: 10px;
`;

const JobsOverview = ({ items }: JobsOverviewType) => {
  return items
    ? items.length > 0 &&
        map(items, (item) => {
          return (
            <Row key={uniqueId('jobsOverview-')}>
              <ColStyled
                colAmount={{
                  xl: 10,
                  lg: 10,
                  md: 12,
                  sm: 12,
                  xs: 12,
                }} // eslint-disable-line object-curly-newline, max-len
                offset={{ xl: 1, lg: 1, md: 0, sm: 0, xs: 0 }} // eslint-disable-line object-curly-newline, max-len
              >
                <JobTeaser
                  teaser_uberschrift={
                    get(
                      item,
                      'data.teaser_uberschrift',
                      undefined,
                    ) as PrismicHeadline[]
                  }
                  teaser_link_text={get(
                    item,
                    'data.teaser_link_text',
                    undefined,
                  )}
                  teaser_link_title={get(
                    item,
                    'data.teaser_link_title',
                    undefined,
                  )}
                  teaser_locations={get(
                    item,
                    'data.teaser_locations',
                    undefined,
                  )}
                  link={item}
                />
              </ColStyled>
            </Row>
          );
        })
    : null;
};

export default JobsOverview;
