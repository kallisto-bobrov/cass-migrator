import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from '../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */

const router = {};

const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'page',
    path: '/:category/:uid',
    resolvers: {
      category: 'category',
    },
  },
  {
    type: 'interview',
    path: '/:category/:uid',
    resolvers: {
      category: 'category',
    },
  },
  {
    type: 'job',
    path: '/:category/:uid',
    resolvers: {
      category: 'category',
    },
  },
  {
    type: 'event',
    path: '/:category/:uid',
    resolvers: {
      category: 'category',
    },
  },
  {
    type: 'article',
    path: '/:category/:uid',
    resolvers: {
      category: 'category',
    },
  },
  {
    type: 'podcast',
    path: '/:category/:uid',
    resolvers: {
      category: 'category',
    },
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    // src Token
    accessToken:
      'MC5YQkRWbVJBQUFDd0F6UEsy.Su-_vRTvv70k77-977-977-9W--_ve-_vUtz77-977-977-977-977-977-977-977-977-9PQ9jNe-_vToeQjrvv70',
    fetchOptions: { next: { revalidate: 0 } },
    /*
      // Uncomment the following lines to enable caching.
      // The cache is disabled until cassini decides to use prismic releases.
      // process.env.NODE_ENV === 'production'
      //   ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
      //   : { next: { revalidate: 5 } },
       */
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
