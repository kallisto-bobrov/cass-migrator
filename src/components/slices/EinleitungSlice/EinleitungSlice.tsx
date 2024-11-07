import React from 'react';
import get from 'lodash/get';
import type { EinleitungSliceType } from './__types__/EinleitungSlice.type';
import Introduction from '../../molecules/Introduction/Introduction';

const EinleitungSlice = ({ primary, amIfirst }: EinleitungSliceType) => (
  <div id={primary.ankerlink_titel}>
    <Introduction
      overline={get(primary, 'dachzeile', null)!}
      headline={get(primary, 'uberschrift[0]', null)!}
      text={get(primary, 'text', null)!}
      image={get(primary, 'bild', null)!}
      amIfirst={amIfirst}
      button_text={get(primary, 'button_text', null)!}
      button_url={get(primary, 'button_url', null)!}
      button_title={get(primary, 'button_title', null)!}
      videoMobile={get(primary, 'video_url_mobile', undefined)}
      videoDesktop={get(primary, 'video_url_desktop', undefined)}
    />
  </div>
);

export default EinleitungSlice;
