import get from 'lodash/get';
import type { MagazinSliceItemType } from '../../__types__/MagazinSlice.type';

const useMagazinFilterTags = (
  items: [MagazinSliceItemType],
  tag_filter_reset?: string,
): { name: string; slug: string }[] | [] => {
  const tags = [];
  if (tag_filter_reset) {
    tags.push({ name: tag_filter_reset, slug: tag_filter_reset });
  }
  if (items && items.length > 0) {
    items.forEach((item: MagazinSliceItemType) => {
      tags.push({
        name: get(item, 'tag_name.data.tag', null),
        slug: get(item, 'tag_name.slug', null),
      });
    });
    return tags;
  }
  return [];
};

export default useMagazinFilterTags;
