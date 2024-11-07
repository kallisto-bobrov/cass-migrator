import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const ScoopItIcon = ({ className }: Props) => (
  <svg viewBox="0 0 85.5 110" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m68 .3c-7.5 1.6-12.3 9-10.7 16.5s9 12.3 16.5 10.7 12.3-9 10.7-16.5-9-12.3-16.5-10.7z"
      fill="#ee7429"
    />
    <path
      d="m45.1 24.5c-.8 0-1.5-.1-2.3-.1-23.7 0-42.8 19.2-42.8 42.8s19.1 42.8 42.8 42.8c23.6 0 42.8-19.2 42.8-42.8 0-9.8-3.4-18.9-8.9-26.1-1.5.3-3.1.5-4.7.6-12.1.4-22.6-6.7-26.9-17.2zm-2.3 20.4c12.3 0 22.3 10 22.3 22.3s-10 22.3-22.3 22.3-22.3-10-22.3-22.3 10-22.3 22.3-22.3z"
      fill="#848386"
    />
  </svg>
);

export default ScoopItIcon;
