import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const AgIcon = ({ className }: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 78.2 31.4"
  >
    <path
      fill="#A1B3C3"
      d="M54.9 15.7C54.9 7.3 48.4.4 40.1 0H15.5C6.9.1 0 7.1 0 15.7s6.9 15.6 15.5 15.7H40c8.3-.4 14.9-7.3 14.9-15.7"
    />
    <path
      fill="#A59D9C"
      d="M78.2 15.7C78.2 7.3 71.7.4 63.4 0H38.8c-8.6.1-15.5 7.1-15.5 15.7s6.9 15.6 15.5 15.7h24.5c8.4-.4 14.9-7.3 14.9-15.7"
    />
    <path
      fill="#5B6064"
      d="M40 0h-1.3c-8.6.1-15.5 7.1-15.5 15.7s6.9 15.6 15.5 15.7H39.9c8.3-.4 14.9-7.3 14.9-15.7C54.9 7.3 48.4.4 40 0"
    />
  </svg>
);

export default AgIcon;
