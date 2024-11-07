import React, { ReactNode, useState } from 'react';
import { NavProvider } from '../nav.context';

type Props = {
  children: ReactNode | ReactNode[];
};

const NavProviderWrapper = ({ children }: Props) => {
  const [nav, setNav] = useState({
    navIsOpen: false,
    navToggle: handleNavToggle, // eslint-disable-line no-use-before-define
  });
  function handleNavToggle(isOpen: boolean) {
    setNav({ navIsOpen: isOpen, navToggle: nav.navToggle });
  }
  return <NavProvider value={nav}>{children}</NavProvider>;
};

export default NavProviderWrapper;
