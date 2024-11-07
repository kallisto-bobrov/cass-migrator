import React from 'react';

type Props = {
  className?: string;
};

const ScrollArrow = ({ className }: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path
      fill="currentColor"
      d="M20.6 0v33.3l-10-10-6.1 6.2L25 50l20.5-20.5-6.2-6.2-9.9 10V0z"
    />
  </svg>
);

export default ScrollArrow;
