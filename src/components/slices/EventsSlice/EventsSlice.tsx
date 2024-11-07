import React, { Fragment, useEffect, useState } from 'react';
import get from 'lodash/get';
import type { EventsSliceType } from './__type__/EventsSlice.type';
import TeaserIntro from '../../molecules/TeaserIntro/TeaserIntro';
import sizesMap from '../../../constants/maps/sizes.map';
import SliceWrapper from '../../atoms/SliceWrapper/SliceWrapper';
import colorsMap from '../../../constants/maps/colors.map';
import TeaserOverview from '../../organisms/TeaserOverview/TeaserOverview';
import fetchPrismicContent from '@/helpers/fetchPrismicContent/fetchPrismicContent';
import { eventsPredicates } from '@/constants/predicates/predicates';
import { InternalLink } from '@/components/atoms/Link/__types__/Link.type';

function mapEvents(events: InternalLink[]) {
  return events.map((event) => ({
    teaser_uberschrift: get(event, 'data.teaser_uberschrift', null),
    teaser_text: get(event, 'data.teaser_text', null),
    link: event,
    teaser_link_text: get(event, 'data.teaser_link_text', null),
    link_title: get(event, 'data.link_title', null),
    event_schema_start_date: get(event, 'data.event_schema_start_date', null),
    event_schema_location_city: get(
      event,
      'data.event_schema_location_city',
      null,
    ),
    event_schema_location_country: get(
      event,
      'data.event_schema_location_country',
      null,
    ),
  }));
}

function filterEventsByTag(events: InternalLink[], tag: string) {
  return events.filter((event) => event.tags.indexOf(tag) !== -1);
}

const filterEvents = (events: InternalLink[], tag: string) => {
  const filteredEvents = filterEventsByTag(events, tag);
  if (filteredEvents.length === 0) {
    return [];
  }
  return mapEvents(filteredEvents);
};

const EventsSlice = ({ primary, slices, index }: EventsSliceType) => {
  const [events, setEvents] = useState<InternalLink[]>([]);
  const tag = get(primary, 'tag.data.tag', undefined);
  useEffect(() => {
    fetchPrismicContent({
      filters: eventsPredicates(),
      page: 1,
      pageSize: 100,
      // orderings: { field: '[my.event.event_schema_start_date]' },
    })
      .then((response) => {
        setEvents(response.results as unknown as InternalLink[]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {filterEvents(events, tag!).length > 0 ? (
        <SliceWrapper id={primary.ankerlink_titel} bgColor={colorsMap.white}>
          <TeaserIntro
            headline={get(primary, 'uberschrift[0]', null)!}
            text={get(primary, 'text', null)!}
            chapter={get(primary, 'kapitel', null)}
            slices={slices}
            index={index}
            textgrosse={sizesMap.standard}
          />
          <TeaserOverview
            items={filterEvents(events, tag!)}
            teaserType="event"
            buttonText={get(
              primary,
              'primary.showMore',
              'Weitere Events anzeigen',
            )}
            pageSize={6}
          />
        </SliceWrapper>
      ) : null}
    </>
  );
};

export default EventsSlice;
