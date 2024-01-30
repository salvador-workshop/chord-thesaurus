import { Fragment } from 'react';
import ChordData from '../data/chords.json';
import FbDiagram from './FbDiagram';
import {
    initialSettings,
    diagramContainerStyle,
    diagramWrapperStyle,
    formatChord
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';

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
                        const formattedChord = formatChord(diagram);
                        return (
                            <DiagramWrapper>
                                <FbDiagram diagramId={id} settings={{...initialSettings, position: diagram.position}} chord={formattedChord} />
                            </DiagramWrapper>
                        )
                    })}
                </DiagramContainer>
                <div>
                <FbDiagramGroup sectionId={section.id} settings={initialSettings} chordSection={section}/>
                </div>
            </Fragment>
        )
    });

    return <>
        <h1>Guitar Chord Thesaurus</h1>
        {chordSections}
    </>;
}
