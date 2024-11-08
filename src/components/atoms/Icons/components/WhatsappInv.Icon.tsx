import React from 'react';

type Props = {
  iconActive?: boolean;
};

const WhatsappInv = ({ iconActive }: Props) => {
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
          <path d="M19.3 16.9l-1.6-.8c-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.3-.4c.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.3 1 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1s1.4-.6 1.6-1.1.2-1 .1-1.1c-.2-.1-.4-.1-.6-.2z" />
          <path d="M21.6 8.3c-1.8-1.8-4.1-2.7-6.6-2.7-5.1 0-9.3 4.2-9.3 9.3 0 1.6.4 3.3 1.2 4.7l-1.3 4.8 4.9-1.3c1.4.7 2.9 1.1 4.5 1.1 5.1 0 9.3-4.2 9.3-9.3.1-2.5-.9-4.8-2.7-6.6zM15 22.7c-1.7 0-2.9-.5-4.2-1.2l-2.9.8.8-2.9C7.8 18 7.3 16.7 7.3 15c.1-5.7 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8c-.1 4.2-3.6 7.7-7.9 7.7z" />
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
    >
      <path
        fill="#313942"
        d="M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0"
      />
      <g fill="#FFF">
        <path d="M19.3 16.9l-1.6-.8c-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1s-1-.4-1.9-1.2c-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.3-.4c.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.3 1 2.4.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.2-.1-.4-.1-.6-.2z" />
        <path d="M21.6 8.3c-1.8-1.8-4.1-2.7-6.6-2.7-5.1 0-9.3 4.2-9.3 9.3 0 1.6.4 3.3 1.2 4.7l-1.3 4.8 4.9-1.3c1.4.7 2.9 1.1 4.5 1.1 5.1 0 9.3-4.2 9.3-9.3.1-2.5-.9-4.8-2.7-6.6zM15 22.7c-1.7 0-2.9-.5-4.2-1.2l-2.9.8.8-2.9C7.8 18 7.3 16.7 7.3 15c.1-5.7 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8c-.1 4.2-3.6 7.7-7.9 7.7z" />
      </g>
    </svg>
  );
};

export default WhatsappInv;
