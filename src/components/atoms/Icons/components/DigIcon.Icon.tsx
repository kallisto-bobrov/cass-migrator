import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const DigIcon = ({ className }: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 259.6 282.1"
  >
    <g fill="currentColor">
      <path d="M203.8 142.7c0 15.4 12.5 27.9 27.9 27.9s27.9-12.5 27.9-27.9-12.5-27.9-27.9-27.9c-15.4 0-27.9 12.5-27.9 27.9m0-114.8c0 15.4 12.5 27.9 27.9 27.9s27.9-12.5 27.9-27.9S247.1 0 231.7 0c-15.4 0-27.9 12.5-27.9 27.9M45.6 128.5c0-2.6 1.3-3.9 3.9-3.9h38.7c8.4 0 15.5 1.1 21.4 3.2 5.9 2.1 10.7 5.4 14.4 9.9 3.7 4.5 6.3 10.3 7.9 17.4 1.6 7.1 2.4 15.7 2.4 25.6 0 10.2-.8 18.9-2.4 26-1.6 7.1-4.3 12.9-7.9 17.4-3.7 4.5-8.5 7.8-14.4 9.9-5.9 2.1-13 3.1-21.4 3.1H49.5c-2.6 0-3.9-1.3-3.9-3.9V128.5zM19.8 79.6H0v202.5h88.2c29.8 0 52.4-8.3 67.9-24.9s23.2-42 23.2-76.2-7.8-59.6-23.2-76.3C140.6 87.9 118 79.6 88.2 79.6H19.8z" />
    </g>
  </svg>
);

export default DigIcon;