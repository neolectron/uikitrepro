import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// import { token } from '../styled-system/tokens'

import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: { hidden: false },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Get Started', 'Components'],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
    // backgrounds: {
    //   default: 'white',
    //   values: [
    //     {
    //       name: 'lightBlue',
    //       value: token('colors.lightBlue'),
    //     },
    //     {
    //       name: 'white',
    //       value: token('colors.offWhite'),
    //     },
    //     {
    //       name: 'lightGrey',
    //       value: token('colors.lightGrey'),
    //     },
    //   ],
    // },
  },
};

export default preview;
