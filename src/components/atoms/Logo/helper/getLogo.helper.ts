const navLogos = {
  cassini: 'cassini-logo-white',
  ['cassini-navMdDown']: 'cassini-logo-greenBlack',
};

const footerLogos = {
  cassini: 'cassini-logo-greenwhite',
};

export const positions = {
  footer: 'footer',
  nav: 'nav',
  navMdDown: 'navMdDown',
};

const getLogo = (position: string): string => {
  let iconName = '';
  if (position === positions.nav) {
    iconName = navLogos.cassini;
  }
  if (position === positions.navMdDown) {
    iconName = navLogos['cassini-navMdDown'];
  }
  if (position === positions.footer) {
    iconName = footerLogos.cassini;
  }

  return iconName;
};

export default getLogo;
