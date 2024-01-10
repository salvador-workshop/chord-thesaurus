import Fingerboard from '../components/Fingerboard';

export default {
  title: 'Fingerboard/Fingerboard',
  component: Fingerboard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    isFretted: false,
    isReversed: false,
    stringPitches: [50, 40, 30, 20],
    maxPositions: 18,
  },
};
