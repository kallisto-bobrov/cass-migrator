import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import type { DisclaimerFixedElmType } from './__types__/DisclaimerFixedElm.type';
import Container from '../../grid/Container/Container';
import CopyText from '../../atoms/CopyText/CopyText';
import Icon from '../../atoms/Icons/Icon';
import { copySmall } from '../../atoms/CopyText/CopyText.skins';
import { btnSecodarySkinSmallSkin } from '../../atoms/Button/Button.skins';
import Button from '../../atoms/Button/Button';
import CloseBtnAnimation from '../../atoms/CloseBtnAnimation/CloseBtnAnimation';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div<{ $ie11: boolean }>`
  bottom: 116px;
  z-index: 9999;
  position: fixed;
  right: 6%;

  @media (min-width: 1400px) {
    right: 10%;
  }

  @media (${mq.smDown}) {
    bottom: 0;
    position: sticky;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid ${(props) => props.theme.color.gray600};
    padding: 15px 0;
  }

  ${(props) =>
    props.$ie11 &&
    css`
      width: 100%;
      left: 0;
      bottom: auto;
      top: 0;
      background: ${props.theme.color.white};
      border-top: 0;
      border-bottom: 1px solid ${props.theme.color.gray600};
      padding: 20px 0;
    `}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  @media (${mq.mdUp}) {
    width: 400px;
  }

  @media (${mq.mdUp}) {
    display: block;
    position: relative;
    background: rgba(255, 255, 255, 0.9);
    padding: 35px 35px 15px;
  }

  @media (${mq.smDown}) {
    flex-wrap: wrap;
  }
`;

const CopyTextStyled = styled(CopyText)`
  padding-right: 25px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (${mq.mdUp}) {
    display: block;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Btn = styled(Button)`
  ${btnSecodarySkinSmallSkin};
  padding: 3px 10px;
  flex-shrink: 0;

  &&& {
    ${copySmall};
    color: ${(props) => props.theme.color.white};
  }

  &:focus {
    outline: none;
  }

  @media (${mq.mdUp}) {
    margin-bottom: 30px;
  }

  @media (${mq.smDown}) {
    margin: 15px 0 20px;
  }
`;

const CloseButton = styled.button`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const StyledCloseBtnAnimation = styled(CloseBtnAnimation)`
  height: 20px;
  width: 20px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 15px;

  @media (${mq.mdUp}) {
    margin-top: 0;
  }
`;

const IconWrapper = styled.div<{ $ie11: boolean }>`
  height: 20px;
  width: 20px;

  @media (${mq.mdUp}) {
    width: 27px;
    margin-bottom: 15px;
  }

  ${(props) =>
    props.$ie11 &&
    css`
      display: none;
    `};

  @media (${mq.mdDown}) {
    height: 30px;
    width: 30px;
  }

  @media (${mq.smDown}) {
    display: none;
  }

  svg {
    fill: ${(props) => props.theme.color.gray800};
  }
`;

const Close = styled.div`
  position: absolute;
  top: -20px;
  right: 0;
  height: 15px;
  width: 15px;
  cursor: pointer;

  @media (${mq.smTillmd}) {
    top: 15px;
  }

  @media (${mq.mdUp}) {
    right: 15px;
    top: 10px;
    bottom: auto;
  }
`;

const DisclaimerFixedElm = ({
  cta_text,
  text,
  acceptClick,
  declinedClick,
}: DisclaimerFixedElmType) => {
  const [ie11, detectIe11] = useState(false);

  useEffect(() => {
    const isIE11 = !!window.MSInputMethodContext && !!document.DOCUMENT_NODE;
    if (isIE11) {
      detectIe11(true);
    }
  });

  return (
    <Wrapper $ie11={ie11}>
      <StyledContainer>
        <Content>
          <Close>
            <CloseButton type="button" onClick={() => declinedClick()}>
              <StyledCloseBtnAnimation minimalistic />
            </CloseButton>
          </Close>
          <TextWrapper>
            <IconWrapper $ie11={ie11}>
              <Icon icon="cookie" />
            </IconWrapper>
            <CopyTextStyled prismicRichText={text} skin="copySmall" />
          </TextWrapper>
          <Btn
            text={cta_text}
            type="button"
            handleClick={() => acceptClick()}
          />
        </Content>
      </StyledContainer>
    </Wrapper>
  );
};

export default DisclaimerFixedElm;
