import * as prismic from '@prismicio/client';

import dotenv from 'dotenv';
dotenv.config();

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function init() {
  console.log(process.argv);

  //Get all documents
  const client = prismic.createClient(process.env.Src_Repository, {
    accessToken: process.env.Src_Token,
  });
  let response1 = await client.getByUID(
    process.argv[2],
    `cassini--${process.argv[3]}`,
  );
  let failures = 0;
  //Migrate documents
  let document = JSON.stringify(response1);
  console.log(document);
  const response = await fetch('https://migration.prismic.io/documents', {
    method: 'POST',
    headers: {
      repository: process.env.Dest_Repository,
      'x-api-key': process.env.Dest_Migration_API_Demo_Token,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.Dest_Write_Token}`,
    },

    body: JSON.stringify({
      ...JSON.parse(document),
      title: `document ${process.argv[3]}`,
    }),
  });
  const ans = await response.text();
  console.log(ans);
  //Number of failures
  if (ans.search(`"id":`) === -1) failures++;
}

init();
