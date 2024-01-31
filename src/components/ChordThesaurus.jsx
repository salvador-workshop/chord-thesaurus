import { Fragment } from 'react';
import {
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';

import majChords from '../data/maj-chords.json';
import majExtChords from '../data/maj-ext-chords.json';
import domChords from '../data/dom-chords.json';
import minChords from '../data/min-chords.json';
import minExtChords from '../data/min-ext-chords.json';
import dimChords from '../data/dim-chords.json';
import dimExtChords from '../data/dim-ext-chords.json';

export default function ChordThesaurus() {
    const renderChordChapter = (chordChapter) => {
        return chordChapter.sections.map(section => {
            return (
                <Fragment key={section.id}>
                    <FbDiagramGroup settings={initialSettings} chordSection={section} />
                </Fragment>
            )
        });
    }

    return <>
        {renderChordChapter(majChords)}
        {renderChordChapter(majExtChords)}

        {renderChordChapter(domChords)}

        {renderChordChapter(minChords)}
        {renderChordChapter(minExtChords)}

        {renderChordChapter(dimChords)}
        {renderChordChapter(dimExtChords)}
    </>;
}
