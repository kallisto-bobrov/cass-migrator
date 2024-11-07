import map from 'lodash/map';
import type { SelectOptions } from '../../../../atoms/Forms/Select/__types__/Select.type';
import { magazineCustomTypes } from '@/constants/predicates/predicates';
import CUSTOMTYPES_TEXT_MAP from '@/constants/maps/customTypesTextMap.map';

const useFilterCustomTypes = (
  typeLabel: string,
  typeReset: string,
): SelectOptions[] => {
  const filter = [
    { value: typeLabel, text: typeLabel },
    { value: typeReset, text: typeReset },
  ];
  const customTypeMap = map(magazineCustomTypes, (item) => ({
    value: item,
    text: CUSTOMTYPES_TEXT_MAP[item],
  }));
  return [...filter, ...customTypeMap];
};

export default useFilterCustomTypes;
