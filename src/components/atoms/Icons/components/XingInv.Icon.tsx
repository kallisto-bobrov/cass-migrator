import React from 'react';

type Props = {
  iconActive?: boolean;
};

const XingInvIcon = ({ iconActive }: Props) => {
  if (iconActive) {
    return (
      <svg
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
      >
        <path
          fill="#D8D8D8"
          d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0"
        />
        <g fill="#313942">
          <path d="M22.9 6.2c.1-.1.1-.3 0-.4s-.2-.2-.4-.2h-2.7c-.4 0-.6.3-.7.5 0 0-5.8 10.3-6 10.7l3.8 7.1c.1.2.3.5.8.5h2.7c.2 0 .3-.1.4-.2s.1-.3 0-.4l-3.8-7 5.9-10.6zM11.9 9.8c-.1-.2-.3-.5-.8-.5H8.5c-.2 0-.3.1-.4.2-.1.1-.1.3 0 .4l1.8 3.2L7 18.2c-.1.1-.1.3 0 .4s.2.2.4.2h2.7c.4 0 .6-.3.7-.5 0 0 2.8-5 2.9-5.2.1 0-1.8-3.3-1.8-3.3z" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path
        fill="#313942"
        d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0"
      />
      <g fill="#FFF">
        <path d="M22.9 6.2c.1-.1.1-.3 0-.4-.1-.1-.2-.2-.4-.2h-2.7c-.4 0-.6.3-.7.5 0 0-5.8 10.3-6 10.7l3.8 7.1c.1.2.3.5.8.5h2.7c.2 0 .3-.1.4-.2.1-.1.1-.3 0-.4l-3.8-7 5.9-10.6zM11.9 9.8c-.1-.2-.3-.5-.8-.5H8.5c-.2 0-.3.1-.4.2-.1.1-.1.3 0 .4l1.8 3.2L7 18.2c-.1.1-.1.3 0 .4.1.1.2.2.4.2h2.7c.4 0 .6-.3.7-.5 0 0 2.8-5 2.9-5.2.1 0-1.8-3.3-1.8-3.3z" />
      </g>
    </svg>
  );
};

export default XingInvIcon;
