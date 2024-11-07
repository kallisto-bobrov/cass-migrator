import forEach from 'lodash/forEach';
import get from 'lodash/get';
import type { JobsOverviewItemType } from '../__types__/JobsOverviewSlice.type';

export function getFiltersNumber(items: JobsOverviewItemType[]) {
  let numberOfFilters = 0;
  for (const [key, value] of Object.entries(items[0])) {
    if (items[0][key].data) {
      numberOfFilters += 1;
    }
  }
  return numberOfFilters;
}

const useJobsFilterLabels = (
  items: JobsOverviewItemType[],
  filterReset: string,
) => {
  const filtersNumber = getFiltersNumber(items);
  const fields = [{ value: filterReset, text: filterReset }]; // filter is always there
  const additionalFilters: any[] = [];

  for (let i = 1; i < filtersNumber; i += 1) {
    additionalFilters.push([{ value: filterReset, text: filterReset }]);
  }

  forEach(items, (item) => {
    if (get(item, 'field.data', null)) {
      // @ts-ignore
      fields.push({
        value: item!.field!.data!.tag || '',
        text: item!.field!.data!.tag || '',
      });
    }

    for (let i = 1; i < filtersNumber; i += 1) {
      if (get(item, `filter_${i + 1}.data`, null)) {
        additionalFilters[i - 1].push({
          value: get(item, `filter_${i + 1}.data.tag`, null),
          text: get(item, `filter_${i + 1}.data.tag`, null),
        });
      }
    }
  });
  return {
    fields,
    additionalFilters,
  };
};

export default useJobsFilterLabels;
