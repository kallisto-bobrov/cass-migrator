import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import type { JobsMaatooFormType } from './__types__/JobsMaatooForm.type';
import ArticleContainer from '../../atoms/ArticleContainer/ArticleContainer';
import Headline from '../../atoms/Headline/Headline';
import MaatooFormStyles from './components/Styles.JobsMaatooForm';
import MaatooApplicationForm from './components/Form.JobsMaatooForm';
import { HeadlineType } from '@/components/atoms/Headline/__types__/Headline.types';

const Wrapper = styled.div`
  ${MaatooFormStyles};
`;

const HeadlineStyled = styled(Headline)`
  margin-bottom: 30px;
`;

const JobsMaatooForm = ({ headline, id }: JobsMaatooFormType) => {
  return (
    <Wrapper>
      <ArticleContainer>
        <HeadlineStyled
          skin="headline800"
          type={get(headline, 'type', null) as HeadlineType}
        >
          {get(headline, 'text', null) && get(headline, 'text', null) !== ''
            ? get(headline, 'text', null)
            : 'Bewerbung'}
        </HeadlineStyled>
        <MaatooApplicationForm id={id} />
      </ArticleContainer>
    </Wrapper>
  );
};

export default JobsMaatooForm;
