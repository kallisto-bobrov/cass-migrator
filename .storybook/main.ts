import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  /*
  stories: ['../src/components/slices/VollbildBildTextTeaserSlice/!*.stories.@(js|jsx|mjs|ts|tsx)'],
*/
  /*
  stories: ['../src/components/slices/VollbildBildTextTeaserSlice/VollbildBildTextTeaserSlice.stories.tsx', /!*'../src/!**!/!*.stories.@(js|jsx|mjs|ts|tsx)'*!/],
*/
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
};
export default config;
