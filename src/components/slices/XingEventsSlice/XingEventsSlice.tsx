import React from 'react';
import get from 'lodash/get';
import XingEventCheckout from '../../molecules/XingEventCheckout/XingEventCheckout';

type XingEventsSlicePrimaryType = {
  ankerlink_titel?: string;
  xing_event_code?: string;
  cta_text?: string;
  cta_title?: string;
};

type XingEventsSliceType = {
  primary: XingEventsSlicePrimaryType;
};

const XingEventsSlice = ({ primary }: XingEventsSliceType) => (
  <div id={get(primary, 'ankerlink_titel', null)!}>
    <XingEventCheckout
      xing_event_code={get(
        primary,
        'xing_event_code',
        '<div>Leider kein Event...</div>',
      )}
      cta_text={get(primary, 'cta_text', 'Anmeldung')}
      cta_title={get(primary, 'cta_title', 'Anmeldung')}
    />
  </div>
);

export default XingEventsSlice;
