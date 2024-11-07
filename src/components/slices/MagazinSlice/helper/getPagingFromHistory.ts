import findLast from 'lodash/findLast';
import isEqual from 'lodash/isEqual';

function getPagingFromHistory(
  history: Array<any>,
  filterList: Array<string>,
  customTypeFilter: string,
  page: number,
  pageSize: number,
  setPageSize: Function,
): { page: number; pageSize: number } {
  // compare filterList and customTypeFilter to history
  const historyFilter = findLast(
    history,
    (event) =>
      isEqual(event.tagFilter, filterList) &&
      event.customType === customTypeFilter,
    history.length - 2,
  );
  const computedPageSize = historyFilter
    ? historyFilter.page * historyFilter.pageSize
    : pageSize;
  setPageSize(computedPageSize);
  const computedPage = historyFilter ? 1 : page;
  return {
    page: computedPage,
    pageSize: computedPageSize,
  };
}

export default getPagingFromHistory;
