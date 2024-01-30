import { Fragment } from 'react';
import ChordData from '../data/chords.json';
import FbDiagram from './FbDiagram';

const initialSettings = {
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

const diagramContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

const diagramWrapperStyle = {
    flex: '0 0 25%',
}

const markerStyleMap = {
    "root": {strokeColor: '#000000', color: '#ffffff', text: 'R', textColor: "#000000", strokeWidth: 4 },
    "3rd": {strokeColor: '#000000', color: '#bbbbbb', text: '3', textColor: "#000000", strokeWidth: 4 },
    "5th": {strokeColor: '#000000', color: '#000000', text: '5', textColor: "#ffffff", strokeWidth: 4 },
    "7th": {strokeColor: '#000000', color: '#bbbbbb', text: '7', textColor: "#000000", strokeWidth: 4 },
}

function DiagramContainer({ children }) {
    return <div className='diagram-container' style={diagramContainerStyle}>{children}</div>
}

function DiagramWrapper({ children }) {
    return <div className='diagram-wrapper' style={diagramWrapperStyle}>{children}</div>
}

export default function ChordThesaurus() {

    const chordSections = ChordData.sections.map(section => {
        return (
            <Fragment key={section.id}>
                <hgroup>
                    <h2>{section.title}</h2>
                    <h3>{section.subtitle}</h3>
                    <p>{section.description}</p>
                </hgroup>
                <DiagramContainer>
                    {section.diagrams.map((diagram, idx) => {
                        const id = `${section.id}-${idx}`;
                        const formattedChord = {
                            fingers: diagram.fingers.map(fing => {
                                return [fing[0], fing[1], markerStyleMap[fing[2]]]
                            }),
                            barres: diagram.barres,
                        }

                        return (
                            <DiagramWrapper>
                                <FbDiagram diagramId={id} settings={{...initialSettings, position: diagram.position}} chord={formattedChord} />
                            </DiagramWrapper>
                        )
                    })}
                </DiagramContainer>
            </Fragment>
        )
    })

    return <>
        <h1>Guitar Chord Thesaurus</h1>
        {chordSections}
    </>;
}
