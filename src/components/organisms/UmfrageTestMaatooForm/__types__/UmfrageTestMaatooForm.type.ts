export type UmfrageTestSummaryType = {
  headline: string;
  text: string;
  score: number;
};

export type UmfrageTestMaatooFormType = {
  score: number;
  umfrage_test_id: string;
  summary: Array<UmfrageTestSummaryType>;
};
