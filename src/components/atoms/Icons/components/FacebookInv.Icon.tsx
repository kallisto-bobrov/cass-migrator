import React from 'react';

type Props = {
  iconActive?: boolean;
};

const FacebookInvIcon = ({ iconActive }: Props) => {
  if (iconActive) {
    return (
      <svg
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
      >
        <path fill="none" d="M0 .1h29.9V30H0z" />
        <path
          fill="#D8D8D8"
          d="M15 0c8.3 0 15 6.7 15 15s-6.7 15-15 15S0 23.3 0 15 6.7 0 15 0"
        />
        <path
          fill="#313942"
          d="M16.9 10.2H19V7h-2.4c-2.9.1-3.5 1.9-3.6 3.7v1.6h-2v3.2h2V24h3v-8.5h2.5l.5-3.2h-3v-1c0-.6.4-1.1.9-1.1"
        />
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
      <path fill="none" d="M0 .1h29.9V30H0z" />
      <path
        fill="#313942"
        d="M15 0c8.3 0 15 6.7 15 15s-6.7 15-15 15S0 23.3 0 15 6.7 0 15 0"
      />
      <path
        fill="#FFF"
        d="M16.9 10.2H19V7h-2.4c-2.9.1-3.5 1.9-3.6 3.7v1.6h-2v3.2h2V24h3v-8.5h2.5l.5-3.2h-3v-1c0-.6.4-1.1.9-1.1"
      />
    </svg>
  );
};

export default FacebookInvIcon;
