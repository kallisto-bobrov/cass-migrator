import React, { useContext } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import { GlobalConfigContext } from '@/contexts/globalConfig.context';
import CopyText from '../../CopyText/CopyText';
import Button from '../../Button/Button';

const Content = styled.div`
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

const VideoPlaceholder = () => {
  const config = useContext(GlobalConfigContext);

  const inhaltText = get(
    config,
    'cb_externer_inhalt_platzhalter_text',
    undefined,
  );
  const buttonTitle = get(config, 'cb_externer_inhalt_cta_title', undefined);
  const buttonText = get(config, 'cb_externer_inhalt_cta_text', undefined);

  const showCookieBotOverlay = (e: any) => {
    e.preventDefault();
    if (window && (window as any).Cookiebot) {
      (window as any).Cookiebot.show();
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

export default VideoPlaceholder;
