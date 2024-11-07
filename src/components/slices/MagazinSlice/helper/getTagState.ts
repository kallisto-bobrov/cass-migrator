import forEach from 'lodash/forEach';

function getTagState(value: string, checked: boolean, selectedTags: any): any {
  const state: any = {};

  forEach(selectedTags, (tagValue: any, tagKey: any) => {
    if (tagKey === value) {
      state[tagKey] = checked;
    } else {
      state[tagKey] = false;
    }
  });
  console.log('getTagState', state);
  return state;
}

export default getTagState;
