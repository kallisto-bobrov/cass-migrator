import React from 'react';

type Props = {
  iconActive?: boolean;
};

const FacebookScoopitIcon = ({ iconActive }: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny"
    width="20px"
    height="20px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
  >
    <path
      fillRule="evenodd"
      d="M18.4 5.7H22V0h-4.3c-5.2.2-6.2 3.3-6.3 6.5v2.9H7.9V15h3.5v15h5.3V15H21l.8-5.6h-5.2V7.7c.2-1.1.9-2 1.8-2"
      fill="currentColor"
    />
  </svg>
);

export default FacebookScoopitIcon;
