import { createClient } from '@/prismicio';
import HeaderClient from '@/components/organisms/Header/Header.client';
import { LinkField } from '@prismicio/types';

async function HeaderServer({ globalConfig }: { globalConfig: any }) {
  const client = createClient();
  const header = await client.getByUID('header', 'cassini--header');
  const homepageLink = {
    link: header.data.homepage_link_url as LinkField,
    title: header.data.homepage_link_title,
  };
  return (
    // <pre>{JSON.stringify(header.data, null, 2)}</pre>
    <HeaderClient
      globalConfig={globalConfig}
      homepageLink={homepageLink}
      nav={header.data.body}
      metaNav={header.data.meta_navigation}
    />
  );
}

export default HeaderServer;
