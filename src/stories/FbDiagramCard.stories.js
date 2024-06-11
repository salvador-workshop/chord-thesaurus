import { ThemeUIProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';
import FbDiagram from '../components/FbDiagram';
import FbDiagramCard from '../components/FbDiagramCard';

/**
 * Renders a card component with a fretboard diagram and key info.
 * Inputs use the type formats from the _svguitar_ package.
 * 
 * - [ChordSettings](https://omnibrain.github.io/svguitar/docs/interfaces/ChordSettings.html)
 * - [Chord](https://omnibrain.github.io/svguitar/docs/types/Chord.html)
 * - [Barre](https://omnibrain.github.io/svguitar/docs/types/Barre.html)
 * - [FingerOptions](https://omnibrain.github.io/svguitar/docs/interfaces/FingerOptions.html)
 */
export default {
  title: 'Fingerboard/FbDiagramCard',
  component: FbDiagramCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

const sampleSettings = {
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
};

const sampleChord = {
  // array of [string, fret | 'x' | 0]
  fingers: [
    [1, 2, {strokeWidth: 4 }],
    [2, 3, {strokeWidth: 4 }],
    [3, 3, {strokeWidth: 4 }],
  ],
  barres: []
};

export const Default = {
  args: {
    diagramId: '42342',
    diagramInfo: {
      title: 'Maj7',
      subtitle: 'retarded 5th',
    },
    children: [<FbDiagram diagramId='42342' chord={sampleChord} settings={sampleSettings} key={1}/>],
  },
  decorators: [
    (Story) => (
      <ThemeUIProvider theme={preset}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeUIProvider>
    ),
  ],
};
