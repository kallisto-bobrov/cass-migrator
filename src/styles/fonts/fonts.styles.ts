import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
    @font-face {
      font-family: 'GeomanistMedium';
      font-weight: normal;
      font-style: normal;
      font-display: fallback;
      src:
        url('/fonts/geomanist-medium-webfont.woff2') format('woff2'),
        url('/fonts/geomanist-medium-webfont.woff') format('woff');
    }

    @font-face {
      font-family: 'GeomanistRegular';
      font-weight: normal;
      font-style: normal;
      font-display: fallback;
      src:
        url('/fonts/geomanist-regular-webfont.woff2') format('woff2'),
        url('/fonts/geomanist-regular-webfont.woff') format('woff');
    }

    @font-face {
      font-family: 'Merriweather700';
      font-style: normal;
      font-weight: 700;
      font-display: fallback;
      src:
        url('/fonts/merriweather-v19-latin-700.woff2') format('woff2'),
        url('/fonts/merriweather-v19-latin-700.woff') format('woff');
    }
`;

export default Fonts;
