import React from 'react';

type Props = {
  iconActive?: boolean;
};

const LogoDig = ({ iconActive }: Props) => (
  <svg
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 561.3 283.5"
  >
    <path
      fill="#706F6F"
      d="M204 143.1c0 15.4 12.5 27.9 27.9 27.9 15.4 0 27.9-12.5 27.9-27.9 0-15.4-12.5-27.9-27.9-27.9-15.4 0-27.9 12.5-27.9 27.9m0-114.8c0 15.4 12.5 27.9 27.9 27.9 15.4 0 27.9-12.5 27.9-27.9 0-15.4-12.5-27.9-27.9-27.9C216.5.4 204 12.9 204 28.3"
    />
    <path
      fill="#009A9A"
      d="M467.2 80c-29.6 0-52.3 8.4-68 25.1-15.7 16.7-23.5 42.2-23.5 76.3 0 34 7.8 59.4 23.5 76 15.7 16.7 38.3 25.1 68 25.1h94.2v-64.2c0-18.2-4.5-32.5-13.5-42.9-9-10.4-22.6-15.6-40.8-15.6h-48v39.3h43.2c12 0 18 6.1 18 18.3v20.1H467.2c-16.8 0-28.7-4.4-35.7-13.1-7-8.7-10.5-23.1-10.5-43.4 0-20 3.5-34.3 10.5-43 7-8.7 18.9-13.1 35.7-13.1h83.4V80h-83.4zM292.3 282.5h45.6V80h-45.6v202.5z"
    />
    <path
      fill="#706F6F"
      d="M45.8 128.9c0-2.6 1.3-3.9 3.9-3.9h38.7c8.4 0 15.5 1.1 21.4 3.2 5.9 2.1 10.7 5.4 14.4 9.9 3.7 4.5 6.3 10.3 7.9 17.4 1.6 7.1 2.4 15.7 2.4 25.6 0 10.2-.8 18.9-2.4 26-1.6 7.1-4.3 12.9-7.9 17.4-3.7 4.5-8.5 7.8-14.4 9.9-5.9 2.1-13 3.1-21.4 3.1H49.7c-2.6 0-3.9-1.3-3.9-3.9V128.9zM20 80H.2v202.5h88.2c29.8 0 52.4-8.3 67.9-24.9 15.5-16.6 23.2-42 23.2-76.2s-7.8-59.6-23.2-76.3C140.8 88.3 118.2 80 88.4 80H20z"
    />
  </svg>
);

export default LogoDig;
