import type { PrismicPictureType } from '../../../atoms/Picture/__types__/Picture.type';
import { PrismicHeadline } from '@/components/atoms/Headline/__types__/Headline.types';

export type UmfrageTestSlicePrimaryType = {
  ankerlink_titel: string;
  uberschrift_intro: Array<PrismicHeadline>;
  text_intro: Array<any>;
  textgrosse_intro?: string;
  bild_klein_intro?: PrismicPictureType;
  bild_medium_intro?: PrismicPictureType;
  bild_gross_intro?: PrismicPictureType;
  bild_position_intro?: 'links' | 'rechts';
  text_outro: Array<any>;
  textgrosse_outro?: string;
  bild_klein_outro?: PrismicPictureType;
  bild_medium_outro?: PrismicPictureType;
  bild_gross_outro?: PrismicPictureType;
  bild_position_outro?: 'links' | 'rechts';
  btn_prev: Array<any>;
  btn_next: Array<any>;
  btn_start: Array<any>;
  btn_end: Array<any>;
  umfrage_test_id: string;
};

export type UmfrageTestSliceItemsType = {
  frage: Array<PrismicHeadline>;
  antwort_1: Array<any>;
  score_1: number;
  antwort_2: Array<any>;
  score_2: number;
  antwort_3: Array<any>;
  score_3: number;
  antwort_4: Array<any>;
  score_4: number;
  antwort_5: Array<any>;
  score_5: number;
  antwort_6: Array<any>;
  score_6: number;
  antwort_7: Array<any>;
  score_7: number;
  antwort_8: Array<any>;
  score_8: number;
  antwort_9: Array<any>;
  score_9: number;
  antwort_10: Array<any>;
  score_10: number;
  antwort_11: Array<any>;
  score_11: number;
  antwort_12: Array<any>;
  score_12: number;
  antwort_13: Array<any>;
  score_13: number;
  antwort_14: Array<any>;
  score_14: number;
  antwort_15: Array<any>;
  score_15: number;
  mehrfachauswahl: boolean;
  onChange?: (score: number) => void;
  aktive_antwort_bei_einzelauswahl: string;
  aktive_antworten_bei_mehrfachauswahl: string;
};

export type UmragetestItemAntwortType = {
  antwort: Array<any>;
  score: number;
};

export type UmfrageTestActiveItemtypes = {
  id: string;
  score: number;
};

export type UmfrageTestItemType = {
  frage: Array<PrismicHeadline>;
  antworten: Array<UmragetestItemAntwortType>;
  mehrfachauswahl: boolean;
  activeItems: Array<UmfrageTestActiveItemtypes>;
  onChange: (score: number, id: string, text: string, headline: string) => void;
  activeStep: number;
};

export type UmfrageTestSliceType = {
  slices: number;
  index: number;
  primary: UmfrageTestSlicePrimaryType;
  items: Array<UmfrageTestSliceItemsType>;
};
