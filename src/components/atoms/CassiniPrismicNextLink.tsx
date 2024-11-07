'use client';

import * as React from 'react';
import * as prismic from '@prismicio/client';
import Link from 'next/link';

export type PrismicNextLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  'field' | 'document' | 'href' | 'rel'
> & {
  linkResolver?: prismic.LinkResolverFunction;
  rel?: string | prismic.AsLinkAttrsConfig['rel'];
} & (
    | {
        field: prismic.LinkField | null | undefined;
        document?: never;
        href?: never;
      }
    | {
        field?: never;
        document: prismic.PrismicDocument | null | undefined;
        href?: never;
      }
    | {
        field?: never;
        document?: never;
        href: React.ComponentProps<typeof Link>['href'];
      }
  );

export const CassiniPrismicNextLink = React.forwardRef<
  HTMLAnchorElement,
  PrismicNextLinkProps
>(function CassiniPrismicNextLink(
  { field, document, linkResolver, ...restProps },
  ref,
) {
  const {
    href: computedHref,
    rel: computedRel,
    ...attrs
  } = prismic.asLinkAttrs(field ?? document, {
    linkResolver,
    rel: typeof restProps.rel === 'function' ? restProps.rel : undefined,
  });
  let href =
    (('href' in restProps ? restProps.href : computedHref) as string) || '';

  let rel = computedRel;
  if ('rel' in restProps && typeof restProps.rel !== 'function') {
    rel = restProps.rel;
  }
  if (!href) {
    // @ts-ignore
    href = '/' + field?.uid;
  }
  const newHref = href.replaceAll('cassini--', '');
  return <Link ref={ref} {...attrs} {...restProps} href={newHref} rel={rel} />;
});
