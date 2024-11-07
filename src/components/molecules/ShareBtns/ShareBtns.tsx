import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import type { ShareBtnsPrimaryType } from '../../slices/ShareBtnsSlice/__types__/ShareBtnsSlice.type';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import Icon from '../../atoms/Icons/Icon';
import shareUrl from '../../../helpers/shareUrl/shareUrl';
import mq from '@/styles/mediaQueries/mediaQueries';
import isClient from '@/helpers/isClient/isClient.helper';

const ShareBtnsWrapper = styled(Container)`
  &&& {
    margin-bottom: 50px;
  }
`;

const RowStyled = styled(Row)`
  align-items: center;
`;

const Intro = styled(Col)`
  margin-right: 20px;
  color: ${(props) => props.theme.color.primary800};
  font-family: ${(props) => props.theme.font.family.secondary};
  line-height: 1;

  @media (${mq.xl}) {
    width: calc(8.333333% - ${`${gridGutterHalf}px`});
  }

  @media (${mq.mdDown}) {
    margin-bottom: 0;
  }

  @media (${mq.smDown}) {
    padding: 0;
  }
`;

const ShareBtnsBlock = styled(Col)`
  display: flex;
  align-items: center;

  @media (${mq.xl}) {
    margin-left: 0;
  }

  @media (${mq.lg}) {
    margin-left: -20px;
  }

  @media (${mq.smDown}) {
    padding: 0;
  }
`;

const Button = styled.button`
  & + & {
    margin-left: 30px;
  }

  &:focus {
    outline: none;
  }
`;

const ShareBtns = ({ einleitungstext }: ShareBtnsPrimaryType) => {
  const url = isClient() ? get(window, 'location.href', undefined) : '';

  return (
    <ShareBtnsWrapper>
      <RowStyled>
        <Intro
          colAmount={{
            xl: 1,
            lg: 2,
            md: 12,
            sm: 12,
            xs: 12,
          }}
        >
          {einleitungstext && einleitungstext !== null
            ? einleitungstext
            : 'Seite teilen'}
        </Intro>
        <ShareBtnsBlock
          colAmount={{
            xl: 8,
            lg: 8,
            md: 12,
            sm: 12,
            xs: 12,
          }}
        >
          <Button type="button" onClick={() => shareUrl('linkedin', url)}>
            <Icon icon="linkedin-inv" />
          </Button>
          <Button type="button" onClick={() => shareUrl('xing', url)}>
            <Icon icon="xing-inv" />
          </Button>
          <Button type="button" onClick={() => shareUrl('twitter', url)}>
            <Icon icon="twitter-inv" />
          </Button>
          <Button type="button" onClick={() => shareUrl('facebook', url)}>
            <Icon icon="facebook-inv" />
          </Button>
          <Button type="button" onClick={() => shareUrl('whatsapp', url)}>
            <Icon icon="whatsapp-inv" />
          </Button>
        </ShareBtnsBlock>
      </RowStyled>
    </ShareBtnsWrapper>
  );
};

export default ShareBtns;
