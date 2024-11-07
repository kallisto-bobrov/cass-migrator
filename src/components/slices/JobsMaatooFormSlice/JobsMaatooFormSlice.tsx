import React from 'react';
import get from 'lodash/get';
import JobsMaatooForm from '../../organisms/JobsMaatooForm/JobsMaatooForm';
import type { JobsMaatooFormType } from './__types__/JobsMaatooFormSlice.type';

const JobsMaatooFormSlice = ({ primary }: JobsMaatooFormType) => (
  <JobsMaatooForm
    headline={get(primary, 'uberschrift[0]', null)!}
    id={get(primary, 'job_id', '')}
  />
);

export default JobsMaatooFormSlice;
