import React from 'react';

export const GlobalConfigContext = React.createContext({} as any);
export const GlobalConfigProvider = GlobalConfigContext.Provider;
export const GlobalConfigConsumer = GlobalConfigContext.Consumer;
