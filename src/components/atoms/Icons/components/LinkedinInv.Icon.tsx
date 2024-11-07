import React from 'react';

type Props = {
  iconActive?: boolean;
};

const LinkedinInvIcon = ({ iconActive }: Props) => {
  if (iconActive) {
    return (
      <svg
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
      >
        <g>
          <circle fill="#D8D8D8" cx="15" cy="15" r="15" />
          <g fill="#313942">
            <path d="M11.5 11.4H8.9c-.1 0-.2.1-.2.2v9.1c0 .1.1.2.2.2h2.5c.1 0 .2-.1.2-.2v-9.1c.1-.1 0-.2-.1-.2M9.8 7C8.8 7 8 7.8 8 8.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8c.1-1-.7-1.8-1.8-1.8M18.5 11.4c-1.1 0-1.9.5-2.4 1v-.5c0-.1-.1-.2-.2-.2h-2.5c-.1 0-.2.1-.2.2v8.9c0 .1.1.2.2.2h2.7c.1 0 .2-.1.2-.2v-4.4c0-1.5.4-2.1 1.4-2.1 1.1 0 1.2.9 1.2 2.1v4.3c0 .1.1.2.2.2h2.7c.1 0 .2-.1.2-.2v-4.8c0-2.2-.4-4.5-3.5-4.5" />
          </g>
        </g>
      </svg>
    );
  }

  return (
    <svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
      <g id="Relaunch">
        <g
          id="Cassini_x5F_Security_x26_Privacy-andere-Font"
          transform="translate(-611 -10334)"
        >
          <g id="linkedin_icon" transform="translate(611 10334)">
            <circle id="Oval" cx="15" cy="15" r="15" fill="#313942" />
            <g id="Group-9" transform="translate(8 7)">
              <path
                id="Fill-1"
                fill="#ffffff"
                d="M3.5 4.4H.9c-.1 0-.2.1-.2.2v9.1c0 .1.1.2.2.2h2.5c.1 0 .2-.1.2-.2V4.6c.1-.1 0-.2-.1-.2"
              />
              <path
                id="Fill-3"
                fill="#ffffff"
                d="M1.8 0C.8 0 0 .8 0 1.8s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8C3.7.8 2.9 0 1.8 0"
              />
              <path
                id="Fill-6"
                fill="#ffffff"
                d="M10.5 4.4c-1.1 0-1.9.5-2.4 1v-.5c0-.1-.1-.2-.2-.2H5.4c-.1 0-.2.1-.2.2v8.9c0 .1.1.2.2.2h2.7c.1 0 .2-.1.2-.2V9.4c0-1.5.4-2.1 1.4-2.1 1.1 0 1.2.9 1.2 2.1v4.3c0 .1.1.2.2.2h2.7c.1 0 .2-.1.2-.2V8.9c0-2.2-.4-4.5-3.5-4.5"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LinkedinInvIcon;
