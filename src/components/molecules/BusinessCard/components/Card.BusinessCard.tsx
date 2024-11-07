import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Row from '../../../grid/Row/Row';
import Picture from '../../../atoms/Picture/Picture';
import type { BusinessCardCardType } from '../__types__/BusinessCard.type';
import Col from '../../../grid/Col/Col';
import Icon from '../../../atoms/Icons/Icon';
import mq from '@/styles/mediaQueries/mediaQueries';

const PictureStyled = styled(Picture)`
  @media (${mq.xs}) {
    width: 146px;
    height: 146px;
    padding-top: 0;
  }
`;

const ColStyled = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const Bold = styled.div`
  font-family: ${(props) => props.theme.font.family.secondary};
  line-height: 23px;
`;

const SocialChannelsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

const SocialLink = styled.a`
  opacity: 1;
  transition: opacity 0.25s ease-out;

  &:not(:last-of-type) {
    margin-right: 20px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Card = ({
  portrait,
  xing,
  linkedin,
  twitter,
  facebook,
  name,
  position,
}: BusinessCardCardType) => (
  <Row>
    {get(portrait, 'url', null) && (
      <Col
        colAmount={{ xl: 4, lg: 4, md: 3, sm: 4, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
      >
        <PictureStyled image={portrait!} />
      </Col>
    )}
    <ColStyled
      colAmount={{ xl: 8, lg: 8, md: 9, sm: 8, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
    >
      <Bold>{name}</Bold>
      <Bold>{position}</Bold>
      <SocialChannelsWrapper>
        {linkedin && (
          <SocialLink href={linkedin} rel="noreferrer noopener" target="_blank">
            <Icon icon="linkedinColored" />
          </SocialLink>
        )}
        {xing && (
          <SocialLink href={xing} rel="noreferrer noopener" target="_blank">
            <Icon icon="xingColored" />
          </SocialLink>
        )}
        {twitter && (
          <SocialLink href={twitter} rel="noreferrer noopener" target="_blank">
            <Icon icon="twitterColored" />
          </SocialLink>
        )}
        {facebook && (
          <SocialLink href={facebook} rel="noreferrer noopener" target="_blank">
            <Icon icon="facebookColored" />
          </SocialLink>
        )}
      </SocialChannelsWrapper>
    </ColStyled>
  </Row>
);

export default Card;
