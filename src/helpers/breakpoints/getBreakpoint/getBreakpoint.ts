'use client';

import { breakpoints } from '@/styles/mediaQueries/mediaQueries';
import breakpointNames from '@/helpers/breakpoints/breakpoints.map';

const currentBreakpoint = (width: number): string => {
  if (width <= breakpoints.xs) {
    return breakpointNames.xs;
  }
  if (width >= breakpoints.sm && width < breakpoints.md) {
    return breakpointNames.sm;
  }
  if (width >= breakpoints.md && width < breakpoints.lg) {
    return breakpointNames.md;
  }
  if (width >= breakpoints.lg && width < breakpoints.xl) {
    return breakpointNames.lg;
  }
  return breakpointNames.xl;
};

const getBreakpoint = () => {
  let breakpoint = 'lg';

  if (typeof window === 'undefined') {
    return breakpoint;
  }
  breakpoint = currentBreakpoint(window?.innerWidth);

  return breakpoint;
};

export default getBreakpoint;
