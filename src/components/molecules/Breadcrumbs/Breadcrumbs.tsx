'use client';

import React, { useContext } from 'react';
import styled from 'styled-components';
import Container, { gridGutter } from '../../grid/Container/Container';
import { removeProjectPrefix } from '@/helpers/removeProjectPrefix/removeProjectPrefix';
import { usePathname } from 'next/navigation';
import Link from '@/components/atoms/Link/Link';
import { GlobalConfigContext } from '@/contexts/globalConfig.context';
import mq from '@/styles/mediaQueries/mediaQueries';

type Props = {
  customBreadcrumbs?: any;
};

const BreadcrumbsStyled = styled.div`
  position: fixed;
  top: 76px;
  z-index: 9997;
  width: 100%;

  @media (${mq.xlUp}) {
    top: 82px;
  }
`;

const List = styled.ul`
  position: relative;
  width: 100%;
  padding: 5px 5px 5px ${gridGutter}px;
  background-color: rgba(255, 255, 255, 1);
  border-top: 1px solid ${(props) => props.theme.color.black};
  border-bottom: 1px solid ${(props) => props.theme.color.black};
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-right: 15px;
  padding-right: 20px;
  position: relative;

  &:last-child {
    margin-right: 0;
    padding-right: 0;

    &:after {
      content: '';
    }
  }

  &:after {
    position: absolute;
    transform: scaleY(2);
    top: 2px;
    right: 0;
    content: '>>';
    letter-spacing: -1px;
    font-size: 9px;
  }

  a {
    transition: opacity 0.25s ease-out;
    color: inherit;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const BreadcrumbLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const ContainerStyled = styled(Container)`
  @media (${mq.lgDown}) {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Breadcrumbs = ({ customBreadcrumbs }: Props) => {
  const blacklistedUids: string[] = [];
  const pathname = usePathname();
  const globalConfig = useContext(GlobalConfigContext);

  if (
    globalConfig &&
    globalConfig.breadcrumbs_blacklist &&
    globalConfig.breadcrumbs_blacklist.length > 0
  ) {
    globalConfig.breadcrumbs_blacklist.forEach(
      (bcItem: { breadcrumbs_blacklist_zielseite: { uid: string } }) => {
        blacklistedUids.push(
          removeProjectPrefix(bcItem.breadcrumbs_blacklist_zielseite.uid),
        );
      },
    );
  }

  if (
    blacklistedUids.includes(pathname.split('/').slice(-1)[0].split('?')[0]) ||
    pathname === '/'
  ) {
    return <></>;
  }

  const uids = pathname.split('/');
  uids.shift();
  customBreadcrumbs =
    customBreadcrumbs && customBreadcrumbs[0]?.breadcrumb_url.uid
      ? customBreadcrumbs
      : null;
  return (
    <BreadcrumbsStyled>
      <ContainerStyled>
        <List>
          <ListItem>
            <BreadcrumbLink url="/">
              {globalConfig.breadcrumbs_home_text}
            </BreadcrumbLink>
          </ListItem>
          {!customBreadcrumbs && uids.length > 0
            ? uids.map((uid, idx) => {
                const newPath = `/${uids.slice(0, idx + 1).join('/')}`;
                return (
                  <ListItem key={uid}>
                    <BreadcrumbLink url={newPath}>
                      {uid.replace(/-/g, ' ')}
                    </BreadcrumbLink>
                  </ListItem>
                );
              })
            : null}
          {customBreadcrumbs && customBreadcrumbs.length > 0
            ? customBreadcrumbs.map((breadcrumb: any, idx: number) => {
                return (
                  <ListItem key={idx}>
                    <BreadcrumbLink
                      url={
                        breadcrumb.breadcrumb_url.url ||
                        '/' + breadcrumb.breadcrumb_url.uid
                      }
                    >
                      {breadcrumb.breadcrumb_titel}
                    </BreadcrumbLink>
                  </ListItem>
                );
              })
            : null}
        </List>
      </ContainerStyled>
    </BreadcrumbsStyled>
  );
};

export default Breadcrumbs;
