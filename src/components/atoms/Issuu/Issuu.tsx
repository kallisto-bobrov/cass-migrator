import React from 'react';
import styled from 'styled-components';
import type { IssuuType } from './__types__/Issuu.type';
import cookieBotCheckVideo from '../Video/cookieBotCheckVideo';
import Row from '../../grid/Row/Row';
import SliceWrapper from '../SliceWrapper/SliceWrapper';

const StyledRow = styled(Row)`
  margin: 25px 0;
  position: relative;
  padding-top: max(60%, 326px);
  height: 0;
  width: 100%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Issuu = ({ embeddedUrl, ankerlink_titel }: IssuuType) => (
  <StyledRow>
    <SliceWrapper id={ankerlink_titel}>
      <StyledIframe
        title="issuu"
        allow="clipboard-write"
        src={`https:${embeddedUrl}`}
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
        allowFullScreen
      />
    </SliceWrapper>
  </StyledRow>
);

export default cookieBotCheckVideo(Issuu);
