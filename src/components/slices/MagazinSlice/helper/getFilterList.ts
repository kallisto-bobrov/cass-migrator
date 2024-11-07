import forEach from 'lodash/forEach';

function getFilterList(
  selectedTags: any,
  tag_filter_reset: string,
): Array<string> {
  const filterList: any = [];
  forEach(selectedTags, (tagValue, tagKey) => {
    if (
      selectedTags[tag_filter_reset] === true &&
      tagKey !== tag_filter_reset
    ) {
      filterList.push(tagKey);
    } else if (tagKey !== tag_filter_reset && tagValue === true) {
      filterList.push(tagKey);
    }
  });
  return filterList;
}

export default getFilterList;
