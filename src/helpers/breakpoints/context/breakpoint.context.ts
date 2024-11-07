import React from 'react';

export const BreakpointContext = React.createContext('lg');

export const BreakpointProvider = BreakpointContext.Provider;
export const BreakpointConsumer = BreakpointContext.Consumer;
