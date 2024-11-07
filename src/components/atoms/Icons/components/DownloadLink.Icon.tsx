import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const PathStyled = styled.path`
  fill: currentColor;
`;

const DownloadLinkIcon = ({ className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="13px"
    height="13px"
    viewBox="0 0 200 200"
    baseProfile="tiny"
  >
    <PathStyled d="M90.4-.1h26.4v122.4l30.3-30.6 18.7 18.8-62.2 62.7-62.2-62.7 18.7-18.8 30.3 30.6V-.1zm-84.3 200v-23.5h188.2v23.5H6.1z" />
  </svg>
);

export default DownloadLinkIcon;
