import React from 'react';

type Props = {
  iconActive?: boolean;
};

const LinkedinScoopitIcon = ({ iconActive }: Props) => (
  <svg
    width="15px"
    height="15px"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 9.4H1.9c-.2 0-.4.2-.4.4v19.5c0 .2.2.4.4.4h5.4c.2 0 .4-.2.4-.4V9.9c.2-.3 0-.5-.2-.5M3.9 0C1.7 0 0 1.7 0 3.9s1.7 3.9 3.9 3.9S7.7 6 7.7 3.9C7.9 1.7 6.2 0 3.9 0m18.6 9.4c-2.4 0-4.1 1.1-5.1 2.1v-1.1c0-.2-.2-.4-.4-.4h-5.4c-.2 0-.4.2-.4.4v19.1c0 .2.2.4.4.4h5.8c.2 0 .4-.2.4-.4v-9.4c0-3.2.9-4.5 3-4.5 2.4 0 2.6 1.9 2.6 4.5v9.2c0 .2.2.4.4.4h5.8c.2 0 .4-.2.4-.4V19.1c0-4.7-.9-9.7-7.5-9.7"
      fill="currentColor"
    />
  </svg>
);

export default LinkedinScoopitIcon;
