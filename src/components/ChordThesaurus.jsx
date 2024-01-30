import { Fragment } from 'react';
import {
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';

import majChords from '../data/maj-chords.json';
import minChords from '../data/min-chords.json';
import dimChords from '../data/dim-chords.json';

export default function ChordThesaurus() {
    const renderChordChapter = (chordChapter) => {
        return chordChapter.sections.map(section => {
            return (
                <Fragment key={section.id}>
                    <hgroup>
                        {section.title && <h2>{section.title}</h2>}
                        {section.subtitle && <h3>{section.subtitle}</h3>}
                        {section.description && <p>{section.description}</p>}
                    </hgroup>
                    <FbDiagramGroup sectionId={section.id} settings={initialSettings} chordSection={section}/>
                </Fragment>
            )
        });
    }

    return <>
        <h1>Guitar Chord Thesaurus</h1>

        {renderChordChapter(majChords)}
        {renderChordChapter(minChords)}
        {renderChordChapter(dimChords)}
    </>;
}
