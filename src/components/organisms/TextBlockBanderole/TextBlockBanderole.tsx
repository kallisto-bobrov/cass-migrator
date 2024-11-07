import React, { Fragment } from 'react';
import get from 'lodash/get';
import styled from 'styled-components';
import type { TextBlockBanderoleType } from './__types__/TextBlockBanderole.type';
import CalendarLink from '../../atoms/CalendarLink/CalendarLink';
import TextBlockWithIcon from '../../molecules/TextBlockWithIcon/TextBlockWithIcon';
import { gridGutterHalf } from '../../grid/Container/Container';
import Link from '../../atoms/Link/Link';
import Spacer from '../../atoms/Spacer/Spacer';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  margin: 25px 0;

  @media (${mq.xs}) {
    padding: 0 ${gridGutterHalf}px;
  }
`;

const BanderoleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (${mq.mdDown}) {
    flex-direction: column;
  }
`;

const Divider = styled.div`
  height: 107px;
  width: 1px;
  border: 1px solid ${(props) => props.theme.color.gray600};
  margin: 0 55px 0 65px;

  @media (${mq.lg}) {
    margin: 0 15px 0 25px;
  }

  @media (${mq.mdDown}) {
    height: 1px;
    width: 100%;
    margin: 35px 0;
  }
`;

const LinkStyled = styled(Link)`
  @media (${mq.smDown}) {
    width: 100%;
  }
`;

const TextBlockBanderole = ({
  ort,
  datum,
  zusatzinformation,
  anmeldelink_text,
  anmeldelink_title,
  anmeldelink,
  calendarSummary,
  calendarStartDate,
  calendarEndDate,
}: TextBlockBanderoleType) => (
  <Wrapper>
    <BanderoleWrapper>
      {get(ort, '[0].text', null) && (
        <Fragment>
          <TextBlockWithIcon icon="place" content={ort} />
          <Divider />
        </Fragment>
      )}
      {get(datum, '[0].text', null) && (
        <Fragment>
          <TextBlockWithIcon icon="time" content={datum} />
          <Divider />
        </Fragment>
      )}
      {get(zusatzinformation, '[0].text', null) && (
        <TextBlockWithIcon icon="tickets" content={zusatzinformation} />
      )}
    </BanderoleWrapper>
    {get(calendarSummary, '[0].text', null) &&
      calendarStartDate &&
      calendarEndDate && (
        <>
          <Spacer />
          <CalendarLink
            summary={calendarSummary!}
            startDate={calendarStartDate!}
            endDate={calendarEndDate!}
          />
        </>
      )}
    {anmeldelink_text && get(anmeldelink, 'url', null) && (
      <Fragment>
        <Spacer />
        <LinkStyled
          url={anmeldelink?.url}
          uid={anmeldelink?.uid}
          link_type="Web"
          skin="btn-primary"
          title={anmeldelink_title}
          target="_blank"
        >
          {anmeldelink_text}
        </LinkStyled>
      </Fragment>
    )}
  </Wrapper>
);

export default TextBlockBanderole;
