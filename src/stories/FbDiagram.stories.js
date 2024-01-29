import FbDiagram from '../components/FbDiagram';

/**
 * Renders a fretboard diagram from the given settings.
 * Inputs use the type formats from the _svguitar_ package.
 * 
 * - [ChordSettings](https://omnibrain.github.io/svguitar/docs/interfaces/ChordSettings.html)
 * - [Chord](https://omnibrain.github.io/svguitar/docs/types/Chord.html)
 * - [Barre](https://omnibrain.github.io/svguitar/docs/types/Barre.html)
 * - [FingerOptions](https://omnibrain.github.io/svguitar/docs/interfaces/FingerOptions.html)
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
    diagramId: '42342',
    settings: {
      color: '#000000',
      strings: 6,
      frets: 4,
      position: 1,
      nutWidth: 20,
      strokeWidth: 6,
      fingerSize: 0.8,
      style: 'normal',
      orientation: 'vertical',
    },
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 2],
        [2, 3],
        [3, 3],
      ],
      barres: []
    }
  }
};

export const Barre = {
  args: {
    diagramId: 12123,
    settings: {
      color: '#000000',
      strings: 6,
      frets: 4,
      position: 9,
      nutWidth: 20,
      strokeWidth: 6,
      fingerSize: 0.8,
      style: 'normal',
      orientation: 'vertical',
    },
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 2],
      ],

      // optional: barres for barre chords
      barres: [{ fromString: 5, toString: 1, fret: 1 }],
    }
  }
};

export const Title = {
  args: {
    diagramId: 4145,
    settings: {
      title: 'F# minor',
      color: '#000000',
      strings: 6,
      frets: 4,
      position: 9,
      nutWidth: 20,
      strokeWidth: 6,
      fingerSize: 0.8,
      style: 'normal',
      orientation: 'vertical',
    },
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [2, 3],
      ],

      // optional: barres for barre chords
      barres: [],
    }
  }
};

/**
 * Yerrrrr
 * */
export const MutesOpens = {
  args: {
    diagramId: 5646548,
    settings: {
      color: '#000000',
      strings: 6,
      frets: 4,
      position: 1,
      nutWidth: 20,
      strokeWidth: 6,
      fingerSize: 0.8,
      style: 'normal',
      orientation: 'vertical',
    },
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 'x'],
        [2, 'x'],
        [3, 'x'],
        [4, 0],
        [5, 0],
        [6, 0],
      ],

      // optional: barres for barre chords
      barres: [],
    }
  }
};
