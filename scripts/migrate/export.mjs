import * as prismic from '@prismicio/client';
import fs from 'fs/promises';

async function init() {
  const client = prismic.createClient('cassini', {
    accessToken:
      'MC5YQkRWbVJBQUFDd0F6UEsy.Su-_vRTvv70k77-977-977-9W--_ve-_vUtz77-977-977-977-977-977-977-977-977-9PQ9jNe-_vToeQjrvv70',
  });
  const response = await client.dangerouslyGetAll();
  console.log(response)
  await fs.writeFile(
    './scripts/migrate/response.json',
    JSON.stringify(response),
  );
  console.log('Export complete');
}

init();
