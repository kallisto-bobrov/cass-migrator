import { createClient } from '@/prismicio';
import Schema from '@/components/siteframes/Schema/Schema';
import React from 'react';
import RenderSlices from '@/components/slices/RenderSlices/RenderSlices';
import get from 'lodash/get';
import fetchLinks from '@/constants/maps/fetchLinks.map';
import { Metadata } from 'next';
import { getMetadata } from '@/app/lib/getMetadata';
import Tracking from '@/components/siteframes/Tracking/Tracking';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID('homepage', `cassini--homepage`, {
    fetchLinks: fetchLinks,
  });

  return getMetadata(page);
}

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID('homepage', `cassini--homepage`, {
    fetchLinks: fetchLinks,
  });

  return (
    <>
      <RenderSlices slices={get(page, 'data.body', undefined)!} />
      <Schema contentType={page.type} conf={page} />
      <Tracking contentType={page.type} />
    </>
  );
}
