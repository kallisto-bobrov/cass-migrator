import React from 'react';

type Props = {
  iconActive?: boolean;
  className?: string;
};

const ArrowCTA = ({ iconActive, className }: Props) => (
  <svg
    className={className}
    width="18px"
    height="8px"
    viewBox="0 0 18 8"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="m003---Footer_XL"
        transform="translate(-382.000000, -601.000000)"
        fill="currentColor"
      >
        <g id="Group-14" transform="translate(300.000000, 422.000000)">
          <g id="Group-Copy-5" transform="translate(0.000000, 165.000000)">
            <polygon
              id="Fill-1"
              transform="translate(91.028008, 18.000000) rotate(-90.000000) translate(-91.028008, -18.000000) "
              points="90.1782098 8.97199207 90.1782098 23.7748389 88.2295517 21.8263225 87.0280079 23.0279371 91.0280079 27.0280079 95.0280079 23.0279371 93.8263225 21.8263225 91.8777353 23.7748389 91.8777353 8.97199207"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default ArrowCTA;
