import React, { useState, useContext } from 'react';
import get from 'lodash/get';
import styled, { ThemeContext } from 'styled-components';
import colorsMap from '../../../constants/maps/colors.map';
import type { OverlayType } from './__types__/Overlay.type';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import BodyBehindOverlay from './components/BodyCssManipulation.Overlay';
import elmStyleMap from '../../../constants/maps/elmStyle.map';
import ControlElm from '../../atoms/Controls/Controls';
import Icon from '../../atoms/Icons/Icon';
import mq from '@/styles/mediaQueries/mediaQueries';

const OverlayStyled = styled.div<{ $opened?: boolean; $bgColor?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: ${(props) => (props.$opened ? '1' : '0')};
  transform: scale(${(props) => (props.$opened ? '1' : '0')});
  z-index: 9999;
  background: ${(props) =>
    props.$bgColor === colorsMap.light
      ? props.theme.color.gray500
      : props.theme.color.secondary900};
  color: ${(props) =>
    props.$bgColor === colorsMap.light
      ? props.theme.color.black
      : props.theme.color.white};
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 65px 65px 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3,
  h4 {
    color: ${(props) =>
      props.$bgColor === colorsMap.light
        ? props.theme.color.black
        : props.theme.color.white};
  }

  @media (${mq.smDown}) {
    padding: 40px ${`${gridGutterHalf}px`} 80px;
  }
`;

const ContainerStyled = styled(Container)`
  margin: auto;
  z-index: 2;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const ControlElmStyled = styled(ControlElm)`
  @media (${mq.smDown}) {
    height: 35px;
    width: 35px;
  }
`;

const IconWrapper = styled.div`
  color: ${(props) => props.theme.color.primary800};
  width: 40px;
  margin-bottom: 25px;
`;

const Overlay = ({
  shouldOpen,
  children,
  shouldClose,
  bgColor = colorsMap.light,
  showIcon = true,
}: OverlayType) => {
  let opened = true;
  const [clickLock, preventClick] = useState(false);
  const theme = useContext(ThemeContext);
  const handleOverlay = () => {
    if (!clickLock) {
      shouldClose();
      opened = false;
    }
  };

  return (
    <OverlayStyled
      $opened={!!shouldOpen && opened}
      $bgColor={bgColor}
      onClick={() => handleOverlay()}
    >
      <CloseBtn onClick={() => handleOverlay()}>
        <ControlElmStyled ctaType={elmStyleMap.close} />
      </CloseBtn>
      <ContainerStyled
        onMouseEnter={() => preventClick(true)}
        onMouseLeave={() => preventClick(false)}
      >
        {showIcon && (
          <IconWrapper>
            <Icon icon={get(theme, 'skin.projectIcon', 'cassini-icon')} />
          </IconWrapper>
        )}
        {children}
      </ContainerStyled>
      <BodyBehindOverlay $isOpened={!!shouldOpen && opened} />
    </OverlayStyled>
  );
};

export default Overlay;
