import PitchMarker from '../components/PitchMarker';

export default {
  title: 'Fingerboard/PitchMarker',
  component: PitchMarker,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [(story) => {
    return (
      <svg width="48" height="48" viewBox="0 0 48 48" stroke="#aa0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        {story()}
      </svg>
    );
  }]
};

export const Default = {
  args: {
    pitch: 0,
    stringId: 0,
    stringPos: 0,
    isVisible: true,
    highlightModes: [],
  },
};

export const Hidden = {
  args: {
    pitch: 0,
    stringId: 0,
    stringPos: 0,
    isVisible: false,
    highlightModes: [],
  },
};
