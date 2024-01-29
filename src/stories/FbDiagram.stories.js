import FbDiagram from '../components/FbDiagram';

/**
 * Renders a fretboard diagram from the given settings
 */
export default {
  title: 'Fingerboard/FbDiagram',
  component: FbDiagram,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    key: 42342,
    settings: {
      title: 'F# minor',
      color: '#000000',
      strings: 6,
      frets: 4,
      position: 9,
      nutSize: 0.65,
      strokeWidth: 2,
      style: 'normal',
      orientation: 'vertical',
    },
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 2],
        [2, 3],
        [3, 3],
        [6, 'x'],
      ],

      // optional: barres for barre chords
      barres: [{ fromString: 5, toString: 1, fret: 1 }],
    }
  }
};
