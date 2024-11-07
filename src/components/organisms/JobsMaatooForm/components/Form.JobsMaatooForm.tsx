import React from 'react';
import CassiniForm from './CassiniForm.JobsMaatooForm';

type Props = {
  id: string;
};

const MaatooApplicationForm = ({ id }: Props) => (
  <>
    <CassiniForm id={id} />
  </>
);

export default MaatooApplicationForm;
