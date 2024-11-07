import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import Moment from 'moment';
import type { EventTeaserTileType } from './__type__/EventTeaserTile.type';
import Headline from '../../atoms/Headline/Headline';
import CopyText from '../../atoms/CopyText/CopyText';
import TeaserWrapper from '../TeaserWrapper/TeaserWrapper';
import Icon from '../../atoms/Icons/Icon';
import {
  ExternalLink,
  InternalLink,
} from '@/components/atoms/Link/__types__/Link.type';

const HeadlineStyled = styled(Headline)`
  color: ${(props) => props.theme.color.white};
  margin-bottom: 15px;
`;

const CopyTextStyled = styled(CopyText)`
  margin-bottom: 15px;
  flex: 1 0 auto;
  min-height: 200px;
  color: ${(props) => props.theme.color.white};
`;

const locationStyles = css`
  height: 27px;
  margin-bottom: 15px;
`;

const StyledIcon = styled.div`
  color: ${(props) => props.theme.color.white};
  margin-bottom: 15px;
`;

const StyledLocation = styled(CopyText)`
  ${locationStyles};
`;

const EventTeaserTile = ({
  teaser_uberschrift,
  teaser_text,
  teaser_link_text,
  link,
  link_title,
  event_schema_start_date,
  event_schema_location_city,
  no3dHover,
}: EventTeaserTileType) => {
  Moment.locale('de');
  const formattedDate = event_schema_start_date
    ? Moment(event_schema_start_date).format('L')
    : '';
  const teaserLink = { url: link };
  return link ? (
    <TeaserWrapper
      {...{
        link: teaserLink as unknown as InternalLink | ExternalLink,
        link_title,
        teaser_link_text,
        no3dHover,
      }}
    >
      <StyledIcon>
        <Icon icon="event" />
      </StyledIcon>
      <CopyText skin="copyStandard" text={formattedDate} />
      {teaser_uberschrift && (
        <HeadlineStyled skin="headline700" type={teaser_uberschrift.type}>
          {get(teaser_uberschrift, '[0].text', null)}
        </HeadlineStyled>
      )}
      {event_schema_location_city && (
        <StyledLocation
          skin="copyStandard"
          text={`${event_schema_location_city}`}
        />
      )}
      {teaser_text && teaser_text[0] && (
        <CopyTextStyled
          text={get(teaser_text, '[0].text', undefined)}
          skin="copyStandard"
        />
      )}
    </TeaserWrapper>
  ) : null;
};

export default EventTeaserTile;
