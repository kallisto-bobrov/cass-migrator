import React from 'react';

type Props = {
  iconActive?: boolean;
};

const LinkedinColoredIcon = ({ iconActive }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22px"
    height="22px"
    viewBox="0 0 200 200"
  >
    <path
      fill="#069"
      d="M185 200H15c-8.3 0-15-6.7-15-15V15C0 6.7 6.7 0 15 0h170c8.3 0 15 6.7 15 15v170c0 8.3-6.7 15-15 15z"
    />
    <path
      fill="#FFF"
      d="M42.8 27.9c-11.1 0-18.3 7.3-18.3 16.8 0 9.3 7 16.8 17.9 16.8h.2c11.3 0 18.3-7.5 18.3-16.8-.2-9.6-7-16.8-18.1-16.8zM26.4 74.8h32.4v97.3H26.4zm111.8-2.3c-17.2 0-24.9 9.4-29.2 16.1V74.8H76.7c.4 9.1 0 97.3 0 97.3h32.4v-54.4c0-2.9.2-5.8 1.1-7.9 2.3-5.8 7.7-11.8 16.6-11.8 11.7 0 16.4 8.9 16.4 22v52.1h32.4v-55.8c-.1-29.9-16.1-43.8-37.4-43.8z"
    />
  </svg>
);

export default LinkedinColoredIcon;
