import React from 'react';
import get from 'lodash/get';
import Row from '../../../grid/Row/Row';
import Col from '../../../grid/Col/Col';
import Select from '../../../atoms/Forms/Select/Select';
import useJobsFilterLabels from '../hooks/useJobsFIlterLabels';
import type { JobsOverviewFiltersType } from '../__types__/JobsOverviewSlice.type';

const Filters = ({
  items,
  filter_reset,
  filterSelections,
  handleChange,
  label_field,
  primary,
}: JobsOverviewFiltersType) => {
  const { fields, additionalFilters } = useJobsFilterLabels(
    items,
    filter_reset,
  );
  let additionalFilterNumber = 1;

  return (
    <Row>
      <Col
        colAmount={{ xl: 10, lg: 10, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
        offset={{ xl: 1, lg: 1, md: 0, sm: 0, xs: 0 }} // eslint-disable-line object-curly-newline, max-len
      >
        <Row gutter={10}>
          <Col
            gutter={10}
            colAmount={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            <Row gutter={10}>
              {fields && fields[0] && (
                <Col
                  gutter={10}
                  colAmount={
                    { xl: 4, lg: 4, md: 6, sm: 6, xs: 12 } // eslint-disable-line object-curly-newline, max-len
                  }
                >
                  <Select
                    id="field"
                    options={fields}
                    value={
                      (filterSelections.field as string | undefined) ||
                      filter_reset
                    }
                    label={label_field}
                    handleChange={handleChange}
                  />
                </Col>
              )}
              {additionalFilters &&
                additionalFilters[0] &&
                additionalFilters.map((filterFields) => {
                  additionalFilterNumber += 1;
                  if (
                    get(
                      primary,
                      `filter_${additionalFilterNumber}_label`,
                      null,
                    ) &&
                    get(
                      primary,
                      `filter_${additionalFilterNumber}_label`,
                      null,
                    ) !== ''
                  ) {
                    return (
                      <Col
                        key={`filter_${additionalFilterNumber}`}
                        gutter={10}
                        colAmount={{ xl: 4, lg: 4, md: 6, sm: 6, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
                      >
                        <Select
                          id={`filter_${additionalFilterNumber}`}
                          options={filterFields}
                          value={
                            // @ts-ignore
                            filterSelections[
                              `filter_${additionalFilterNumber}`
                            ] || filter_reset
                          }
                          label={
                            get(
                              primary,
                              `filter_${additionalFilterNumber}_label`,
                              null,
                            )!
                          }
                          handleChange={handleChange}
                        />
                      </Col>
                    );
                  }
                  return false;
                })}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Filters;
