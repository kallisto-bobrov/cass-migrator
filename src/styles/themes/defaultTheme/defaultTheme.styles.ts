import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  name: 'cassini',
  maxWidth: '1920px',
  color: {
    primary800: '#2CC700',
    primary900: '#2CC700',
    primary1000: '#2CC700',
    secondary900: '#272D35',
    secondary800: '#313942',
    tertiary900: '#004F30',
    tertiary800: '#00673E',
    tertiary700: '#4AAD5D',
    tertiary600: '#B4E1A7',
    gray900: '#666666',
    gray800: '#A5A5A5',
    gray700: '#BFBFBF',
    gray600: '#D8D8D8',
    gray500: '#F3F3F3',
    white: '#FFFFFF',
    black: '#000000',
    error: 'red',
  },
  font: {
    family: {
      primary: '"GeomanistRegular", Arial, sans-serif',
      secondary: '"GeomanistMedium", Arial, sans-serif',
      tertiary: '"Merriweather700", serif',
    },
  },
  skin: {
    textOnPrimaryBg: '#000000',
    textOnPrimaryBgHover: '#000000',
    tagColor: '#000000',
    projectIcon: 'cassini-icon',
    headline900: {
      xl: {
        fontSize: '45px',
        lineHeight: '50px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '28px',
        lineHeight: '30px',
        fontWeight: 'normal',
      },
    },
    headline800: {
      xl: {
        fontSize: '35px',
        lineHeight: '43px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '20px',
        lineHeight: '26px',
        fontWeight: 'normal',
      },
    },
    headline700: {
      xl: {
        fontSize: '25px',
        lineHeight: '33px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '20px',
        lineHeight: '27px',
        fontWeight: 'normal',
      },
    },
    headline600: {
      xl: {
        fontSize: '20px',
        lineHeight: '27px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '18px',
        lineHeight: '25px',
        fontWeight: 'normal',
      },
    },
    headline500: {
      xl: {
        fontSize: '16px',
        lineHeight: '23px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '16px',
        lineHeight: '23px',
        fontWeight: 'normal',
      },
    },
    headline300: {
      xl: {
        fontSize: '35px',
        lineHeight: '45px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '35px',
        lineHeight: '45px',
        fontWeight: 'normal',
      },
    },
    headline200: {
      xl: {
        fontSize: '24px',
        lineHeight: '34px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '24px',
        lineHeight: '34px',
        fontWeight: 'normal',
      },
    },
    copyBig: {
      xl: {
        fontSize: '22px',
        lineHeight: '35px',
      },
      xs: {
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
    copyStandard: {
      xl: {
        fontSize: '16px',
        lineHeight: '28px',
      },
      xs: {
        fontSize: '16px',
        lineHeight: '28px',
      },
    },
    copySmall: {
      xl: {
        fontSize: '14px',
        lineHeight: '23px',
      },
      xs: {
        fontSize: '14px',
        lineHeight: '23px',
      },
    },
    linkCta: {
      xl: {
        fontSize: '16px',
        lineHeight: '37px',
        letterSpacing: '0.34px',
        fontWeight: 'normal',
      },
      xs: {
        fontSize: '16px',
        lineHeight: '37px',
        letterSpacing: '0.34px',
        fontWeight: 'normal',
      },
    },
    header: {
      height: '76px',
      background: '#fff',
      mdDown: {
        background: 'transparent',
      },
    },
    headerLogo: {
      backgroundColorTransition: true,
      height: '37px',
    },
    navigation: {
      color: '#000000',
      hoverColor: '#A5A5A5',
      focusColor: '#2CC700',
      background: '#F3F3F3',
      divider: '#D8D8D8',
      xl: {
        fontSize: '16px',
        lineHeight: '2',
        fontWeight: 'normal',
      },
      lg: {
        fontSize: '14px',
      },
      mdDown: {
        fontSize: '18px',
      },
    },
    metaNav: {
      xl: {
        fontFamily: '"GeomanistRegular", Arial, sans-serif',
        fontWeight: 'normal',
        fontSize: '14px',
      },
    },
    jobLink: {
      showNumber: true,
    },
    footer: {
      primaryBgcolor: '#313942',
      secondaryBgcolor: '#272D35',
      tertiaryBgcolor: 'none',
      textcolor: '#FFFFFF',
      secondaryTextcolor: '#FFFFFF',
      tertiaryTextcolor: '#FFFFFF',
      accordionColor: 'white',
      deviderColor: '#FFFFFF',
    },
    mainTeaserContentBlock: {
      headline: {
        color: '#ffffff',
        background: '#000000',
      },
    },
    ansprechpartnerInfo: {
      fontFamily: '"GeomanistMedium", Arial, sans-serif',
    },
    chapter: {
      fontWeight: '700',
    },
  },
};

export default defaultTheme;
