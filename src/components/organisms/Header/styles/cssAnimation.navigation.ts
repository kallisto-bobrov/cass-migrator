import { css } from 'styled-components';
import { transition200 } from '@/styles/transitions/transitions.styles';

const cssAnimationNavigation = (classPrefix: string) => css`
  &.${classPrefix}-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.${classPrefix}-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform ${transition200};
  }

  &.${classPrefix}-exit {
    transform: translateX(0);
  }

  &.${classPrefix}-exit-active {
    transform: translateX(100%);
    transition: transform ${transition200};
  }
`;

export default cssAnimationNavigation;
