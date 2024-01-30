import { Fragment } from 'react';
import {
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';

import majChords from '../data/maj-chords.json';
import domChords from '../data/dom-chords.json';
import minChords from '../data/min-chords.json';
import dimChords from '../data/dim-chords.json';

export default function ChordThesaurus() {
    const renderChordChapter = (chordChapter) => {
        return chordChapter.sections.map(section => {
            return (
                <Fragment key={section.id}>
                    <hgroup>
                        {section.title && <h3>{section.title}</h3>}
                        {section.subtitle && <h4>{section.subtitle}</h4>}
                        {section.description && <p>{section.description}</p>}
                    </hgroup>
                    <FbDiagramGroup sectionId={section.id} settings={initialSettings} chordSection={section}/>
                </Fragment>
            )
        });
    }

    return <>
        <h1>Guitar Chord Thesaurus</h1>

        <h2>Major Chords</h2>
        {renderChordChapter(majChords)}
        
        <h2>Dominant Chords</h2>
        {renderChordChapter(domChords)}
        
        <h2>Minor Chords</h2>
        {renderChordChapter(minChords)}
        
        <h2>Diminished Chords</h2>
        {renderChordChapter(dimChords)}
    </>;
}
