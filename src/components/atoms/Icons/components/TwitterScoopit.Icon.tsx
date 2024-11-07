import React from 'react';

type Props = {
  iconActive?: boolean;
};

const TwitterScoopitIcon = ({ iconActive }: Props) => (
  <svg
    version="1.2"
    width="25px"
    height="25px"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
  >
    <path
      fillRule="evenodd"
      d="M30 6.1c-1.1.5-2.3.8-3.5.9 1.3-.7 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.9 1.4-1.1-1.1-2.7-1.9-4.5-1.9-3.4 0-6.2 2.6-6.2 5.9 0 .5.1.9.2 1.3-5.1-.1-9.7-2.4-12.7-6-.5.9-.8 1.9-.8 3 0 2 1.1 3.8 2.7 4.9-1 0-2-.3-2.8-.7v.1c0 2.9 2.1 5.2 4.9 5.8-.5.1-1.1.2-1.6.2-.4 0-.8 0-1.2-.1.8 2.3 3.1 4 5.8 4.1-2.1 1.6-4.8 2.5-7.6 2.5-.5 0-1 0-1.5-.1 2.7 1.7 6 2.6 9.4 2.6 11.3 0 17.5-9 17.5-16.8v-.8c1.2-.8 2.3-1.8 3.1-3"
      fill="currentColor"
    />
  </svg>
);

export default TwitterScoopitIcon;
