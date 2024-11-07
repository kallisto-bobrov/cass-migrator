import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import type { CTAstandaloneSliceType } from './__types__/CTAstandaloneSlice.type';
import Container, { gridGutterHalf } from '../../grid/Container/Container';
import Link from '../../atoms/Link/Link';
import Row from '../../grid/Row/Row';
import Col from '../../grid/Col/Col';
import mq from '@/styles/mediaQueries/mediaQueries';

const Wrapper = styled.div`
  @media (${mq.xs}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }
`;

const LinkWrapper = styled.div<{ $position: string }>`
  width: 100%;
  text-align: left;
  ${(props) =>
    props.$position === 'zentriert' &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.$position === 'rechts' &&
    css`
      text-align: right;
    `}
`;

const CTAstandaloneSlice = ({
  primary,
  alwaysFullWidthContainer,
}: CTAstandaloneSliceType) => {
  const getbtnUrl = (): { url: string } => {
    let url = { url: '' };

    if (primary.zielseite && primary.zielseite.id) {
      url = primary.zielseite;
    }

    if (primary.externe_url && primary.externe_url.url) {
      url = primary.externe_url;
    }

    return url;
  };

  const button_url = getbtnUrl();

  const getAnchorLink = (id: string) => {
    let hash;
    if (button_url && button_url.url && button_url.url.split('#').length > 1) {
      hash = button_url.url.split('#')[1];
    }
    if (id) {
      hash = id.replace('#', '');
    }
    return hash;
  };

  const colLayout = {
    colAmount: {
      xl: alwaysFullWidthContainer ? 12 : 8,
      lg: alwaysFullWidthContainer ? 12 : 8,
      md: 12,
      sm: 12,
      xs: 12,
    },
    offset: {
      xl: alwaysFullWidthContainer ? 0 : 1,
      lg: alwaysFullWidthContainer ? 0 : 1,
      md: 0,
      sm: 0,
      xs: 0,
    },
  };

  return (
    <Wrapper id={primary.ankerlink_titel!}>
      <Container>
        <Row>
          <Col {...colLayout}>
            <LinkWrapper $position={primary.position}>
              <Link
                url={`${button_url.url}${primary.ankerlink_ziel || ''}`}
                link_type={get(button_url, 'link_type', null)!}
                uid={get(button_url, 'uid', null)!}
                target={get(button_url, 'target', null)!}
                pageType={get(button_url, 'type', null)!}
                skin={
                  primary.farbe === 'primary'
                    ? alwaysFullWidthContainer
                      ? 'btn-primary'
                      : 'btn-primary-small'
                    : alwaysFullWidthContainer
                      ? 'btn-secondary'
                      : 'btn-secondary-small'
                }
                title={primary.button_title!}
                anchor_id={getAnchorLink(primary.ankerlink_ziel!)}
              >
                {primary.button_text}
              </Link>
            </LinkWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default CTAstandaloneSlice;
