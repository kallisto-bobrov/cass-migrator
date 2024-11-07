import React from 'react';

type Props = {
  iconActive?: boolean;
};

const FacebookColoredIcon = ({ iconActive }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22px"
    height="22px"
    viewBox="0 0 200 200"
  >
    <path
      fill="#3C5A99"
      d="M189 200c6.1 0 11-4.9 11-11V11c0-6.1-4.9-11-11-11H11C4.9 0 0 4.9 0 11v178c0 6.1 4.9 11 11 11h178z"
    />
    <path
      fill="#FFF"
      d="M140.8 200v-78.8h26.8l4-30.7h-30.8V70.9c0-8.9 2.5-14.9 15.4-14.9h16.5V28.5c-2.8-.4-12.6-1.2-24-1.2-23.8 0-40 14.3-40 40.6v22.6H81.8v30.7h26.9V200h32.1z"
    />
  </svg>
);

export default FacebookColoredIcon;
