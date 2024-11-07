import { ReactNode } from 'react';

type Cols = {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
};

export type ColsStyledType = {
  xl: string;
  lg: string;
  md: string;
  sm: string;
  xs: string;
};

export type ColType = {
  className?: string;
  colAmount?: Cols;
  offset?: Cols;
  gutter?: number;
  children?: ReactNode | ReactNode[];
};
