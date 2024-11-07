import forEach from 'lodash/forEach';

function initialSelectedTags(
  tagList: Array<string>,
  tag_filter_reset: string,
  queryParams: any,
): any {
  const initialTags: any = {};
  forEach(tagList, (tag) => {
    if (queryParams && queryParams.tag && queryParams.tag === tag) {
      initialTags[tag] = tag === queryParams.tag;
      initialTags[tag_filter_reset] = false;
    } else {
      initialTags[tag] = tag === tag_filter_reset;
    }
  });
  return initialTags;
}

export default initialSelectedTags;
