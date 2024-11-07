import { NextRequest } from 'next/server';

import { createClient } from '@/prismicio';
import { redirectToPreviewURL } from '@prismicio/next';

export async function GET(request: NextRequest) {
  const client = createClient();
  const linkResolver = (doc: any) => {
    if (doc.url) return doc.url.replaceAll('cassini--', '');
    if (doc.uid) return `/${doc.uid.replace('cassini--', '')}`;
    return '/';
  };
  return await redirectToPreviewURL({ client, linkResolver, request });
}
