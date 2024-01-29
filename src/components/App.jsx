import FbDiagram from './FbDiagram';

const settings = {
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
const chord = {
    // array of [string, fret | 'x' | 0]
    fingers: [
        [1, 2, { strokeWidth: 4 }],
        [2, 3, { strokeWidth: 4 }],
        [3, 3, { strokeWidth: 4 }],
    ],
    barres: []
};

export default function App() {
    return <>
        <h1>Guitar Chord Diagrams</h1>
        <h2>Minor 99th</h2>
        <FbDiagram diagramId={231231} settings={settings} chord={chord} />
        <FbDiagram diagramId={45548} settings={settings} chord={chord} />
        <FbDiagram diagramId={898} settings={settings} chord={chord} />
    </>;
}
