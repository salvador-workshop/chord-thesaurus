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
      nutWidth: 18,
      strokeWidth: 6,
      fingerSize: 0.8,
      fingerTextSize: 22,
      style: 'normal',
      orientation: 'vertical',
    },
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 2, {strokeWidth: 4 }],
        [2, 3, {strokeWidth: 4 }],
        [3, 3, {strokeWidth: 4 }],
      ],
      barres: []
    }
  }
};

export const Barre = {
  args: {
    diagramId: 12123,
    settings: Default.args.settings,
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 3, {strokeWidth: 4 }],
      ],

      // optional: barres for barre chords
      barres: [{ fromString: 5, toString: 1, fret: 2 }],
    }
  }
};

export const Title = {
  args: {
    diagramId: 4145,
    settings: {
      ...Default.args.settings,
      title: 'F# minor',
      position: 3,
    },
    chord: Default.args.chord,
  }
};

/**
 * Yerrrrr
 * */
export const MutesOpens = {
  args: {
    diagramId: 5646548,
    settings: Default.args.settings,
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 'x', {strokeWidth: 4 }],
        [2, 'x', {strokeWidth: 4 }],
        [3, 'x', {strokeWidth: 4 }],
        [4, 0, {strokeWidth: 4 }],
        [5, 0, {strokeWidth: 4 }],
        [6, 0, {strokeWidth: 4 }],
      ],

      // optional: barres for barre chords
      barres: [],
    }
  }
};

export const ColouredFingerMarkers = {
  args: {
    diagramId: 465465,
    settings: Default.args.settings,
    chord: {
      // array of [string, fret | 'x' | 0]
      fingers: [
        [1, 2, { strokeColor: '#ff0000', color: '#00ff00', strokeWidth: 4 }],
        [2, 3, { strokeColor: '#ff0000', color: '#0000ff', strokeWidth: 4 }],
        [3, 4, { strokeColor: '#00ff00', color: '#ff0000', strokeWidth: 4 }],
        [4, 3, { color: '#111111', text: 'E#', textColor: "#ff8888", strokeWidth: 4 }],
      ],

      // optional: barres for barre chords
      barres: [],
    }
  }
};
