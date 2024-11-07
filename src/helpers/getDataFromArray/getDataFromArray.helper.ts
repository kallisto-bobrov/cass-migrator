import get from 'lodash/get';
import filter from 'lodash/filter';

const getDataFromArray = (items: any, key: string, mustContain?: string) => {
  let tags: any = [];

  if (items && items[0]) {
    items.map((item: any) => {
      if (get(item, key, null)) {
        tags.push(get(item, key, null));
      }
      return false;
    });
  }

  if (mustContain) {
    tags = filter(tags, (o) => get(o, mustContain, null));
  }

  return tags;
};

export default getDataFromArray;
