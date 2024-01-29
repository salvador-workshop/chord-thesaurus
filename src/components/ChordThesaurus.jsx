import { Children } from 'react';
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

const diagramContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}
const diagramWrapperStyle = {
    flex: '0 0 25%',
}

function DiagramContainer({children}) {
    return <div className='diagram-container' style={diagramContainerStyle}>{children}</div>
}
function DiagramWrapper({children}) {
    return <div className='diagram-wrapper' style={diagramWrapperStyle}>{children}</div>
}

export default function ChordThesaurus() {
    return <>
        <h1>Guitar Chord Thesaurus</h1>

        <h2>Minor 99th</h2>
        <DiagramContainer>
            <DiagramWrapper><FbDiagram diagramId={231231} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={898} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={45548} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={47847} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={7487} settings={settings} chord={chord} /></DiagramWrapper>
        </DiagramContainer>

        <h2>Minor 99th</h2>
        <DiagramContainer>
            <DiagramWrapper><FbDiagram diagramId={65465} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={546} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={654} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={324324} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={5465} settings={settings} chord={chord} /></DiagramWrapper>
        </DiagramContainer>

        <h2>Minor 99th</h2>
        <DiagramContainer>
            <DiagramWrapper><FbDiagram diagramId={564} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={54} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={213} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={21} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={56} settings={settings} chord={chord} /></DiagramWrapper>
        </DiagramContainer>

        <h2>Minor 99th</h2>
        <DiagramContainer>
            <DiagramWrapper><FbDiagram diagramId={487589} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={5646} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={6546} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={516} settings={settings} chord={chord} /></DiagramWrapper>
            <DiagramWrapper><FbDiagram diagramId={2132} settings={settings} chord={chord} /></DiagramWrapper>
        </DiagramContainer>

    </>;
}
