import React, { Fragment } from 'react';
import styled from 'styled-components';
import uniqueId from 'lodash/uniqueId';
import Container, { gridGutterHalf } from '../../../grid/Container/Container';
import Row from '../../../grid/Row/Row';
import Col from '../../../grid/Col/Col';
import type { FooternavigationType } from '../__types__/Footer.type';
import { copySmall } from '../../../atoms/CopyText/CopyText.skins';
import Logo from '../../../atoms/Logo/Logo';
import Link from '../../../atoms/Link/Link';
import mq from '@/styles/mediaQueries/mediaQueries';
import { positions } from '@/components/atoms/Logo/helper/getLogo.helper';

const Wrapper = styled.div`
  ${copySmall};
  background: ${(props) => props.theme.skin.footer.secondaryBgcolor};
  padding: 35px 0;
  color: ${(props) => props.theme.skin.footer.secondaryTextcolor};

  @media (${mq.xs}) {
    padding: 55px ${`${gridGutterHalf}px`};
    margin: 0 -${`${gridGutterHalf}px`};
  }
`;

const LogoStyled = styled(Logo)`
  svg {
    width: 55%;
    max-height: 44px;

    @media (${mq.smDown}) {
      width: 45%;
    }
  }
`;

const RowStyled = styled(Row)`
  align-items: center;
`;

const Item = styled(Col)`
  @media (${mq.xs}) {
    margin-top: 0 !important;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  @media (${mq.xs}) {
    flex-direction: column;
    align-items: flex-start;
  }

  a {
    ${copySmall};
    color: ${(props) => props.theme.skin.footer.secondaryTextcolor};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.color.primary800};
    }
  }

  & > * {
    margin-right: 20px;

    @media (${mq.xs}) {
      margin-right: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  & > * + * {
    @media (${mq.xs}) {
      margin-top: 20px;
    }
  }
`;

const Navigation = ({
  copyright_text = '',
  navigationItems = [],
  homepage_link,
}: FooternavigationType) => {
  const year = new Date().getFullYear();

  const showCookieBotOverlay = (e: any) => {
    e.preventDefault();
    if (window && window.Cookiebot) {
      window.Cookiebot.show();
    }
  };

  return (
    <Wrapper>
      <Container>
        <RowStyled>
          <Col
            colAmount={{ xl: 3, lg: 3, md: 4, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            <Link
              {...{
                link_type: 'Document',
                url: homepage_link.url,
                pageType: homepage_link.type,
              }}
            >
              <LogoStyled position={positions.footer} />
            </Link>
          </Col>
          <Item
            colAmount={{ xl: 3, lg: 3, md: 4, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            {`© ${year} ${copyright_text}`}
          </Item>
          <Item
            colAmount={{ xl: 6, lg: 6, md: 4, sm: 12, xs: 12 }} // eslint-disable-line object-curly-newline, max-len
          >
            <LinksWrapper>
              {navigationItems[0]
                ? navigationItems.map((item) => {
                    if (!item.link_text) {
                      return <Fragment key={uniqueId('FooterNavItem-')} />;
                    }
                    return (
                      <Link
                        key={uniqueId('FooterNavItem-')}
                        {...{
                          link_type: item.url.link_type,
                          url:
                            item.url.link_type === 'Web'
                              ? item.url.url
                              : '/' + (item.url.url || item.url.uid!),
                          title: item.link_title,
                          target: item.link_target,
                        }}
                      >
                        {item.link_text}
                      </Link>
                    );
                  })
                : null}
              <a href="" onClick={(e) => showCookieBotOverlay(e)}>
                Cookie-Einstellungen anpassen
              </a>
            </LinksWrapper>
          </Item>
        </RowStyled>
      </Container>
    </Wrapper>
  );
};

export default Navigation;
