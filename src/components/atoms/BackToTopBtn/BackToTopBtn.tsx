import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import Icon from '../Icons/Icon';

const Button = styled.button<{ $visible: boolean }>`
  background: ${(props) => props.theme.color.secondary900};
  color: ${(props) => props.theme.color.white};
  padding: 5px 15px;
  position: fixed;
  z-index: 996;
  transition:
    bottom 0.25s ease-out,
    opacity 0.25s ease-out;
  bottom: ${(props) => (props.$visible ? '15px' : '-45px')};
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  right: 15px;
  height: 45px;
  width: 45px;

  &:focus {
    outline: none;
  }

  svg {
    height: 15px;
    width: 15px;
  }
`;

const BackToTopBtn = () => {
  const [isVisible, toggleVisibility] = useState(false);

  const handleScroll = debounce(() => {
    if (window.scrollY > 666) {
      toggleVisibility(true);
    } else {
      toggleVisibility(false);
    }
  }, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Button onClick={() => scroll.scrollToTop()} $visible={isVisible}>
      <Icon icon="arrow" />
    </Button>
  );
};

export default BackToTopBtn;
