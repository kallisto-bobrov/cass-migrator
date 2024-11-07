import React from 'react';

type Props = {
  iconActive?: boolean;
};

const XingScoopitIcon = ({ iconActive }: Props) => (
  <svg
    version="1.2"
    width="18px"
    height="18px"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
  >
    <g fillRule="evenodd">
      <path
        d="M27.7.9l-9.6 16.9 6.1 11.1c.1.2.1.5 0 .7-.1.2-.3.3-.6.3h-4.3c-.7 0-1-.4-1.2-.8 0 0-6.1-11.2-6.1-11.3.3-.5 9.6-17.1 9.6-17.1.2-.3.5-.7 1.1-.7h4.4c.3 0 .5.1.6.3.1.2.1.4 0 .6M7.2 21H2.9c-.3 0-.5-.1-.6-.3-.1-.2-.1-.4 0-.7l4.6-8.1-2.9-5c-.1-.3-.1-.5 0-.7.1-.2.3-.3.6-.3h4.3c.7 0 1 .4 1.2.8l3 5.2c-.2.3-4.7 8.3-4.7 8.3-.2.4-.5.8-1.2.8"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default XingScoopitIcon;
