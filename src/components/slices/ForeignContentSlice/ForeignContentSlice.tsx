import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import RenderSlices from '../RenderSlices/RenderSlices';
import fetchLinks from '../../../constants/maps/fetchLinks.map';
import Spinner from '../../atoms/Spinner/Spinner';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';

type Props = {
  primary: any;
};

const ForeignContentSliceWrapper = styled.div`
  min-height: 100vh;

  .hideIfForeignContent {
    display: none;
  }
`;

const SpinnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ForeignContentSlice = ({ primary }: Props) => {
  const [data, setDocData] = useState<any>(null);
  const client = createClient();
  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get({
        filters: [
          prismic.filter.at(
            `my.${get(primary, 'zielseite.type', null)}.uid`,
            get(primary, 'zielseite.uid', null),
          ),
        ],
        fetchLinks,
      });
      if (response) {
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  return (
    <ForeignContentSliceWrapper>
      {!data && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
      <RenderSlices slices={get(data, 'data.body', null)!} />
    </ForeignContentSliceWrapper>
  );
};

export default ForeignContentSlice;
