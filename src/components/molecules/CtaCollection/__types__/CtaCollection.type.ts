export type CtaCollectionBtnType = 'next' | 'prev' | 'start';

export type CtaCollectionType = {
  firstCta?: Array<any>;
  summary: boolean;
  prevCta: Array<any>;
  nextCta: Array<any>;
  onCtaClick: (ctaType: CtaCollectionBtnType) => void;
};
