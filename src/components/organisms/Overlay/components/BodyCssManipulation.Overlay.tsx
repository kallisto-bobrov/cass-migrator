import { createGlobalStyle, css } from 'styled-components';
import mq from '@/styles/mediaQueries/mediaQueries';

// prevent content from jumping due to overflow:hidden

const BodyBehindOverlay = createGlobalStyle<{ $isOpened: boolean }>`

  ${(props) =>
    props.$isOpened &&
    css`
      body {
        @media (${mq.lgUp}) {
          overflow: hidden;
          padding-right: 17px;
        }
      }

      header {
        @media (${mq.lgUp}) {
          margin-left: -8px;
        }
      }
    `}
`;

export default BodyBehindOverlay;
