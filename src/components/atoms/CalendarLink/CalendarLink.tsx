import React from 'react';
import get from 'lodash/get';
import Event from '../Icons/components/Event.Icon';
import CalendarLinkStyled from './CalendarLink.skins';
import { CalendarLinkTypes } from './__types__/CalendarLink.types';
import createCalendarEvent from '@/components/atoms/CalendarLink/helpers/createCalendarEvent';

const CalendarLink = ({ summary, startDate, endDate }: CalendarLinkTypes) => (
  <CalendarLinkStyled
    onClick={() =>
      createCalendarEvent(startDate, endDate, get(summary, '[0].text', null))
    }
  >
    <Event />
    <p>Meinem Kalender hinzufügen</p>
  </CalendarLinkStyled>
);

export default CalendarLink;
