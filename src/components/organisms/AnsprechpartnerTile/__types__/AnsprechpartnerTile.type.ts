import type { AnsprechpartnerPortraitType } from '../../../molecules/AnsprechpartnerPortrait/__type__/AnsprechpartnerPortrait.type';
import type { AnsprechpartnerInfoType } from '../../../molecules/AnsprechpartnerInfo/__type__/AnsprechpartnerInfo.type';

export type AnsprechpartnerTileType = {
  portrait: AnsprechpartnerPortraitType;
  info: AnsprechpartnerInfoType;
  isOne?: boolean;
};
