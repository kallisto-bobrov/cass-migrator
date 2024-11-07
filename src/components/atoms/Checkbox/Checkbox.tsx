import React from 'react';
import styled from 'styled-components';
import { CheckboxType } from './__types__/Checkbox.type';
import MaatooFormStyles from '../../organisms/JobsMaatooForm/components/Styles.JobsMaatooForm';
import CopyText from '../CopyText/CopyText';

const Div = styled.div`
  ${MaatooFormStyles};
  margin: 20px 0 !important;
  padding: 0 !important;
`;

const StyledCopyText = styled(CopyText)`
  margin-top: -3px;
`;

const Checkbox = ({ cbType, label, id, onChange, isChecked }: CheckboxType) => (
  <Div onClick={() => onChange()}>
    <div
      className={
        cbType === 'radio'
          ? 'mauticform-radiogrp-row'
          : 'mauticform-checkboxgrp-row'
      }
    >
      <label id={id} htmlFor={id} className="mauticform-checkboxgrp-label">
        <input
          className="mauticform-checkboxgrp-checkbox"
          name={id}
          id={id}
          type={cbType}
          checked={isChecked}
          readOnly
        />
        <StyledCopyText prismicRichText={label} />
        <div className="customElm" />
      </label>
    </div>
  </Div>
);

export default Checkbox;
