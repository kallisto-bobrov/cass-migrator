import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const PathStyled = styled.path`
  fill: currentColor;
`;

const CassiniIcon = ({ className }: Props) => (
  <svg
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={className}
  >
    <PathStyled d="M96.4 400c-20.7 0-38.7-11.5-48.8-27.4-13.7-21.4-14.4-54.3 16.3-75.6 35.8-24.9 90.7-65.4 99.3-72.2 8.9-6.9 13.4-14.9 13.5-23.8.1-9.5-5.1-19.5-13.9-26.7-9.1-7.4-76.4-54.6-99.9-70.9-31.6-21.9-31.2-54.8-17.4-76.1C60.8 3.7 94.8-10.5 127.9 9.4c16.7 10.1 57.6 33.7 97.1 56.4 41.1 23.7 79.9 46.1 92.8 54 28.7 17.6 45.7 48.2 45.4 81.8-.3 32.8-17.4 62.3-45.7 78.8-23.8 14-81.7 47.6-130 75.6l-59.9 34.8c-10.5 6.5-21.2 9.2-31.2 9.2zM95.3 34.5c-9 0-16.6 5-20.8 11.6-3.2 4.9-8.7 17.4 8.1 29.1.9.6 89.9 62.5 102.1 72.5 16.8 13.8 26.7 33.8 26.5 53.7-.2 19.3-9.8 37.2-26.8 50.5-10.3 8-66.3 49.3-100.8 73.3-16.3 11.3-9.5 24.9-7 28.8 4.7 7.3 17 17.1 33.8 7.3l59.9-34.8c48.2-28 106.1-61.6 129.8-75.6 18-10.6 28.4-28.6 28.6-49.5.2-21.4-10.6-40.9-28.9-52.1-12.5-7.7-52.9-31-92-53.5-39.7-22.9-80.7-46.5-97.7-56.8-5.1-3.2-10.1-4.5-14.8-4.5z" />
  </svg>
);

export default CassiniIcon;