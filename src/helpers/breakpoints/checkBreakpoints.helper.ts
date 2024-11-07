import breakpointNames from '@/helpers/breakpoints/breakpoints.map';

const { xs, sm, md, lg, xl } = breakpointNames;
export const mdDown = (breakpoint: string): boolean =>
  breakpoint === xs || breakpoint === sm || breakpoint === md;
export const mdUp = (breakpoint: string): boolean =>
  breakpoint === md || breakpoint === lg || breakpoint === xl;
export const lgDown = (breakpoint: string): boolean =>
  breakpoint === lg ||
  breakpoint === md ||
  breakpoint === sm ||
  breakpoint === xs;
export const lgUp = (breakpoint: string): boolean =>
  breakpoint === lg || breakpoint === xl;
export const smDown = (breakpoint: string): boolean =>
  breakpoint === xs || breakpoint === sm;
