import React from 'react';
import styled from 'styled-components';
import type { AnsprechpartnerInfoType } from './__type__/AnsprechpartnerInfo.type';
import Link from '../../atoms/Link/Link';
import {
  headline600skin,
  headline700skin,
} from '../../atoms/Headline/Headline.skins';
import { copyStandard } from '../../atoms/CopyText/CopyText.skins';

const Name = styled.div`
  ${headline700skin};
  color: ${(props) => props.theme.color.primary800};
  margin-bottom: 18px;
`;

const Position = styled.p`
  ${copyStandard};
  margin-bottom: 11px;
`;

const Contact = styled(Link)`
  display: block;
  ${headline600skin};
  font-family: ${(props) => props.theme.skin.ansprechpartnerInfo.fontFamily};
  text-decoration: underline;
  overflow: hidden;
  overflow-wrap: break-word;
`;

const SocialWrapper = styled.div`
  margin-top: 35px;
  display: flex;
`;

const SocialLink = styled.a`
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

const AnsprechpartnerInfo = ({
  name,
  position,
  email,
  phone,
  className,
}: AnsprechpartnerInfoType) => (
  <div className={className}>
    <Name>{name}</Name>
    <Position>{position}</Position>
    <Contact url={`mailto:${email}`}>{email}</Contact>
    <Contact url={`tel:${phone}`}>{phone}</Contact>
  </div>
);

export default AnsprechpartnerInfo;
