import React from 'react';

export const NavContext = React.createContext({
  navIsOpen: false,
  navToggle: (isOpen: boolean) => {},
});
export const NavProvider = NavContext.Provider;
export const NavConsumer = NavContext.Consumer;
