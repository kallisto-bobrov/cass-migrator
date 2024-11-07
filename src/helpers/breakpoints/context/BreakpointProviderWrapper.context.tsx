'use client';

import { useState, useEffect, type ReactNode } from 'react';
import debounce from 'lodash/debounce';
import getBreakpoint from '@/helpers/breakpoints/getBreakpoint/getBreakpoint';
import { BreakpointProvider } from './breakpoint.context';

type Props = {
  children: ReactNode | ReactNode[];
};

const BreakpointProviderWrapper = ({ children }: Props): ReactNode => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  const resizeListener = debounce(() => {
    setBreakpoint(getBreakpoint());
  }, 250);

  useEffect(() => {
    window?.addEventListener('resize', resizeListener);
    return () => {
      window?.removeEventListener('resize', resizeListener);
    };
  });
  return <BreakpointProvider value={breakpoint}>{children}</BreakpointProvider>;
};

export default BreakpointProviderWrapper;
