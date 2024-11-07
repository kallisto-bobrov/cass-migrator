import React from 'react';
import styled from 'styled-components';

type Props = {
  iconActive?: boolean;
};

const Wrapper = styled.div`
  background-color: #313942;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const TwitterInvIcon = ({ iconActive }: Props) => {
  if (iconActive) {
    return (
      <Wrapper>
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 600 600"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <polygon
              points="173.8,162 380.3,438 427,438 220.6,162"
              fill="#D8D8D8"
            />
            <path
              fill="#D8D8D8"
              d="M300,0.6C134.7,0.6,0.6,134.7,0.6,300s134,299.4,299.4,299.4s299.4-134,299.4-299.4S465.3,0.6,300,0.6z M369.2,460.1
   l-94-125.7L158.9,460.1H129l132.9-143.6L129.8,139.9h101.8l86.6,115.8l107.2-115.8h29.9L331.5,273.6L471,460.1H369.2z"
            />
          </g>
        </svg>
      </Wrapper>
    );
  }

  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 600 600"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <polygon points="173.8,162 380.3,438 427,438 220.6,162" />
        <path
          fill="#313942"
          d="M300,0.6C134.7,0.6,0.6,134.7,0.6,300s134,299.4,299.4,299.4s299.4-134,299.4-299.4S465.3,0.6,300,0.6z M369.2,460.1
 l-94-125.7L158.9,460.1H129l132.9-143.6L129.8,139.9h101.8l86.6,115.8l107.2-115.8h29.9L331.5,273.6L471,460.1H369.2z"
        />
      </g>
    </svg>
  );
};

export default TwitterInvIcon;
