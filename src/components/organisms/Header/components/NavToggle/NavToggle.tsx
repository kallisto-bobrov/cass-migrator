/* eslint-disable no-undef */
import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { css } from 'styled-components';
import { transition100 } from '@/styles/transitions/transitions.styles';
import mq from '@/styles/mediaQueries/mediaQueries';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

type Props = {
  isOpen: boolean;
  handleOpen: () => void;
};

const NavToggleStyled = styled.div<{ $isOpen?: boolean }>`
  cursor: pointer;
  width: 92px;
  height: ${(props) => props.theme.skin.header.height};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  transition: background-color ${transition100};
  ${(props) =>
    props.$isOpen &&
    css`
      background-color: ${props.theme.skin.navigation.background};
    `};

  @media (${mq.xlUp}) {
    display: none;
  }
`;

const SVG = styled.svg`
  display: block;
  width: 30px;
  height: 30px;
`;

const TopRect = styled.path`
  opacity: 1;
`;

const BottomRect = styled.path`
  opacity: 1;
`;

const CenterRect = styled.path<{ $isOpen?: boolean }>`
  opacity: 0;
  transition: opacity ${transition100};

  ${(props) =>
    !props.$isOpen &&
    css`
      opacity: 1;
    `}
`;

const Tween = ({
  children,
  playState,
  attr,
}: {
  children: ReactNode;
  attr: { d: string };
  playState: 'reverse' | 'play' | 'pause';
}) => {
  const el = useRef<SVGGElement>(null);
  const animation = useRef<GSAPTimeline>();
  useGSAP(() => {
    animation.current = gsap.timeline().to(el.current!.children, {
      attr,
      ease: 'Power1.easeInOut',
      duration: 0.3,
    });
  });
  useGSAP(() => {
    if (playState === 'play') {
      animation.current?.play();
    } else if (playState === 'reverse') {
      animation.current?.reverse();
    } else if (playState === 'pause') {
      animation.current?.pause();
    }
  }, [playState]);
  return <g ref={el}> {children} </g>;
};

const NavToggle = ({ isOpen, handleOpen }: Props): ReactNode => {
  const [initial, setInitial] = useState(true);
  const container = useRef(null);

  function playState(): 'reverse' | 'play' | 'pause' {
    if (initial) {
      return isOpen ? 'play' : 'reverse';
    }
    return 'pause';
  }

  return (
    <NavToggleStyled ref={container} $isOpen={isOpen} onClick={handleOpen}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <Tween
          playState={playState()}
          attr={{ d: 'M25.607 4.393 L4.393 25.607' }}
        >
          <TopRect
            className="top"
            d="M30 5 L0 5"
            strokeWidth="4"
            stroke="currentColor"
          />
        </Tween>
        <CenterRect
          $isOpen={isOpen}
          d="M0 15 h30"
          strokeWidth="4"
          stroke="currentColor"
        />
        <Tween
          playState={playState()}
          attr={{ d: 'M25.607 25.607 L4.393 4.393' }}
        >
          <BottomRect
            className="bottom"
            d="M30 25 L0 25"
            strokeWidth="4"
            stroke="currentColor"
          />
        </Tween>
      </SVG>
    </NavToggleStyled>
  );
};

export default NavToggle;
