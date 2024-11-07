import React from 'react';

type Props = {
  iconActive?: boolean;
};

const SpotifyIcon = ({ iconActive }: Props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Relaunch">
      <g
        id="Cassini_x5F_Security_x26_Privacy-andere-Font"
        transform="translate(-490 -10334)"
      >
        <g id="spotify_icon" transform="translate(490 10334)">
          <g id="Group-3">
            <path id="Clip-2" fill="none" d="M0 .1h29.9V30H0z" />
            <path
              id="Fill-1"
              d="M14.9.1C23.2.1 29.8 6.8 29.8 15c0 8.3-6.7 14.9-14.9 14.9C6.7 30 0 23.3 0 15.1 0 6.8 6.7.1 14.9.1"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#fff"
            />
          </g>
        </g>
      </g>
    </g>
    <path
      d="M20.3 19.5C17 17.5 12.8 17 8 18.1c-.4.1-.7.5-.6.9.1.4.5.7.9.6 4.4-1 8.1-.6 11.1 1.2.4.2.9.1 1.1-.3.3-.3.1-.8-.2-1zM21.8 15.8c-3.9-2.4-9.6-3.1-14.2-1.7-.5.2-.8.7-.7 1.2.2.5.7.8 1.2.7 4-1.2 9.2-.6 12.6 1.5.5.3 1.1.1 1.4-.3.3-.5.1-1.1-.3-1.4zM23.4 11.5c-4.7-2.8-12.1-3-16.6-1.7-.6.2-1 .9-.8 1.5.2.6.9 1 1.5.8 3.9-1.2 10.6-1 14.7 1.5.6.3 1.3.1 1.6-.4.4-.6.2-1.3-.4-1.7z"
      fill="#313942"
    />
  </svg>
);
export default SpotifyIcon;
