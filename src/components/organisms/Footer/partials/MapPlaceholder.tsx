'use client';

import React, { useContext } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import CopyText from '../../../atoms/CopyText/CopyText';
import Button from '../../../atoms/Button/Button';
import { GlobalConfigContext } from '@/contexts/globalConfig.context';

const Content = styled.div`
  * {
    color: ${(props) => props.theme.skin.footer.textcolor} !important;
  }
  padding: 35px;
`;
const CbText = styled(CopyText)`
  p + p {
    margin: 20px auto;
  }
`;
const CbButton = styled(Button)`
  text-align: left;
  line-height: 25px;
  padding: 10px 20px;
`;

const MapPlaceholder = () => {
  const globalConfig = useContext(GlobalConfigContext);

  const inhaltText = get(
    globalConfig,
    'cb_externer_inhalt_platzhalter_text',
    null,
  );
  const buttonTitle = get(
    globalConfig,
    'cb_externer_inhalt_cta_title',
    undefined,
  );
  const buttonText = get(
    globalConfig,
    'cb_externer_inhalt_cta_text',
    undefined,
  );

  const showCookieBotOverlay = (e: any) => {
    e.preventDefault();
    if (window && (window as unknown as any).Cookiebot) {
      (window as unknown as any).Cookiebot.show();
    }
  };

  return (
    <Content>
      {inhaltText && <CbText prismicRichText={inhaltText} skin="copySmall" />}
      <CbButton
        skin="primary-small"
        title={buttonTitle}
        text={buttonText}
        handleClick={(e: any) => showCookieBotOverlay(e)}
        showArrow
      />
    </Content>
  );
};

export default MapPlaceholder;
