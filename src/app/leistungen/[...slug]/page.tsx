import { createClient } from '@/prismicio';
import RenderSlices from '@/components/slices/RenderSlices/RenderSlices';
import get from 'lodash/get';
import React from 'react';
import fetchLinks from '@/constants/maps/fetchLinks.map';
import Schema from '@/components/siteframes/Schema/Schema';
import { Metadata } from 'next';
import { getMetadata } from '@/app/lib/getMetadata';
import Tracking from '@/components/siteframes/Tracking/Tracking';
import Breadcrumbs from '@/components/molecules/Breadcrumbs/Breadcrumbs';
import { redirect } from 'next/navigation';

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('page', `cassini--${params.slug[0]}`, {
    fetchLinks: fetchLinks,
  });

  return getMetadata(page);
}

export default async function Page({
  params,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const client = createClient();
  try {
    const page = await client.getByUID('page', `cassini--${params.slug[0]}`, {
      fetchLinks: fetchLinks,
    });

    return (
      <>
        <Breadcrumbs customBreadcrumbs={page.data.custom_breadcrumbs} />
        <RenderSlices slices={get(page, 'data.body', undefined)!} />
        <Schema contentType={page.type} conf={page} />
        <Tracking contentType={page.type} />
      </>
    );
  } catch (error) {
    redirect(`/404`);
  }
}
