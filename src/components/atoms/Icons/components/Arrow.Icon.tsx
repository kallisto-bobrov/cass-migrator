import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const PathStyled = styled.path`
  fill: currentColor;
`;

const ArrowIcon = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
  >
    <PathStyled d="M199.6 136.8l-27.6 28-72.4-73.6-72.4 73.6-27.6-28 100-101.6z" />
  </svg>
);

export default ArrowIcon;
