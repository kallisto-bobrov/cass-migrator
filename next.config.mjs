import withBundleAnalyzer from '@next/bundle-analyzer';
import { getRedirects } from './src/redirects.mjs';
import * as redirects1 from './scripts/convertRedirects/dist/redirects-19-08-24.json' assert { type: 'json' };
import * as redirects2 from './scripts/convertRedirects/dist/redirects-22-08-24.json' assert { type: 'json' };
import * as redirects3 from './scripts/convertRedirects/dist/redirects-07-10-24.json' assert { type: 'json' };
import * as redirects4 from './scripts/convertRedirects/dist/redirects_11-10-24.json' assert { type: 'json' };

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  redirects: async () => [
    ...redirects1.default,
    ...redirects2.default,
    ...redirects3.default,
    ...redirects4.default,
    ...(await getRedirects()),
  ],
};

export default bundleAnalyzer(nextConfig);
