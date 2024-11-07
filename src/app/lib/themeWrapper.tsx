'use client';

import defaultTheme from '@/styles/themes/defaultTheme/defaultTheme.styles';
import { ThemeProvider } from 'styled-components';
import Fonts from '@/styles/fonts/fonts.styles';
import BasicStyles from '@/styles/basic/basicStyles.styles';
import BreakpointProviderWrapper from '@/helpers/breakpoints/context/BreakpointProviderWrapper.context';
import React, { ReactNode } from 'react';
import { GlobalConfigProvider } from '@/contexts/globalConfig.context';
import BackToTopBtn from '@/components/atoms/BackToTopBtn/BackToTopBtn';

export default function ThemeWrapper({
  globalConfig,
  children,
}: {
  globalConfig: any;
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Fonts />
      <BasicStyles />
      <GlobalConfigProvider value={globalConfig}>
        <BreakpointProviderWrapper>{children}</BreakpointProviderWrapper>
        <BackToTopBtn />
      </GlobalConfigProvider>
    </ThemeProvider>
  );
}
