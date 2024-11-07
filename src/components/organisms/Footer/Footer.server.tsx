import { createClient } from '@/prismicio';
import FooterClient from '@/components/organisms/Footer/Footer.client';

export default async function FooterServer({
  globalConfig,
}: {
  globalConfig: any;
}) {
  const client = createClient();
  const footer = await client.getByUID('footer', 'cassini--footer');
  return (
    <FooterClient
      globalConfig={globalConfig}
      // @ts-ignore
      footer={footer.data}
    />
  );
}
