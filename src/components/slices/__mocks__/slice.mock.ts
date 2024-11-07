const slice = {
  slice_type: 'componentMock',
  items: [
    {
      item: 'repeatable stuff',
    },
  ],
  primary: {
    item: 'non repeatable stuff',
  },
};

export const falsySlice = {
  slice_type: 'test',
  items: [{}],
  primary: {
    item: 'non repeatable stuff',
  },
};

export default slice;
