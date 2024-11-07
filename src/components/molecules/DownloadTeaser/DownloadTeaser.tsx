import React from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';
import type { DownloadTeaserType } from './__types__/DownloadTeaser.type';
import Headline from '../../atoms/Headline/Headline';
import CopyText from '../../atoms/CopyText/CopyText';
import Icon from '../../atoms/Icons/Icon';

const HeadlineStyled = styled(Headline)`
  color: ${(props) => props.theme.color.white};
  margin-bottom: 15px;
`;
const TextStyled = styled(CopyText)`
  margin-bottom: 15px;
  flex: 1 0 auto;
  color: ${(props) => props.theme.skin.textOnPrimaryBg};
`;

const StyledIcon = styled.div`
  color: ${(props) => props.theme.color.white};
  margin-bottom: 15px;
`;

const DownloadTeaser = ({
  document_title,
  document_type,
  document_link,
  document_link_text,
  document_link_title,
  no3dHover,
}: DownloadTeaserType) => {
  const document_size =
    get(document_link, 'name', '') &&
    ((get(document_link, 'size', '') as any) / 10 ** 6)
      .toFixed(2)
      .replace('.', ',');
  const document_suffix =
    get(document_link, 'name', '') &&
    get(document_link, 'name', '').indexOf('.') !== -1
      ? `${get(document_link, 'name', '').split('.')[1].toUpperCase()},`
      : '';
  const link = document_link;
  link.target = '_blank';

  return document_link ? (
    <TeaserWrapper
      {...{
        link,
        link_title: document_link_title,
        teaser_link_text: document_link_text,
        linkIconType: 'downloadLink',
        no3dHover,
      }}
    >
      <StyledIcon>
        <Icon icon="download" />
      </StyledIcon>
      {document_title && document_title[0] && (
        <HeadlineStyled
          type={get(document_title, '[0].type', '') as any}
          skin="headline700"
        >
          {get(document_title, '[0].text', '')}
        </HeadlineStyled>
      )}
      <TextStyled
        text={`${document_type} / ${document_suffix} ${document_size} MB`}
      />
    </TeaserWrapper>
  ) : null;
};

export default DownloadTeaser;
