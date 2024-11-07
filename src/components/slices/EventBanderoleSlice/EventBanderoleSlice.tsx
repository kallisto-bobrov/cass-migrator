import React from 'react';
import get from 'lodash/get';
import type { EventBanderoleSliceType } from './__types__/EventBanderoleSlice.type';
import ArticleContainer from '../../atoms/ArticleContainer/ArticleContainer';
import TextBlockBanderole from '../../organisms/TextBlockBanderole/TextBlockBanderole';

const EventBanderoleSlice = ({ primary }: EventBanderoleSliceType) => (
  <ArticleContainer>
    <TextBlockBanderole
      ort={get(primary, 'ort', null)!}
      datum={get(primary, 'datum', null)!}
      zusatzinformation={get(primary, 'zusatzinformation', null)!}
      anmeldelink={get(primary, 'anmeldelink', null)!}
      anmeldelink_title={get(primary, 'anmeldelink_title', null)!}
      anmeldelink_text={get(primary, 'anmeldelink_text', null)!}
      calendarSummary={get(primary, 'calendar_event_name', null)!}
      calendarStartDate={get(primary, 'calendar_start_date', null)!}
      calendarEndDate={get(primary, 'calendar_end_date', null)!}
    />
  </ArticleContainer>
);

export default EventBanderoleSlice;
