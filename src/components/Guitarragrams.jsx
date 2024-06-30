import { Fragment } from 'react';
import {
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';
import ChordSection from './ChordSection';

// import majChords from '../data/maj-chords.json';
// import majExtChords from '../data/maj-ext-chords.json';
// import domChords from '../data/dom-chords.json';
// import minChords from '../data/min-chords.json';
// import minExtChords from '../data/min-ext-chords.json';
// import dimChords from '../data/dim-chords.json';
// import dimExtChords from '../data/dim-ext-chords.json';

import guitarragramsData from '../data/chord-data-svguitar.json';

export default function Guitarragrams() {
    const chordSections = guitarragramsData.chords;
    
    // const renderChordChapter = (chordChapter) => {
    //     return chordChapter.sections.map(section => {
    //         return (
    //             <Fragment key={section.id}>
    //                 <FbDiagramGroup settings={initialSettings} chordSection={section} />
    //             </Fragment>
    //         )
    //     });
    // }

    return <>
        {/* <ChordSection sectionId="maj" sectionLabel="Major">
            {renderChordChapter(majChords)}
            {renderChordChapter(majExtChords)}
        </ChordSection>

        <ChordSection sectionId="dom" sectionLabel="Dominant">
            {renderChordChapter(domChords)}
        </ChordSection>

        <ChordSection sectionId="min" sectionLabel="Minor">
            {renderChordChapter(minChords)}
            {renderChordChapter(minExtChords)}
        </ChordSection>

        <ChordSection sectionId="dim" sectionLabel="Diminished">
            {renderChordChapter(dimChords)}
            {renderChordChapter(dimExtChords)}
        </ChordSection> */}

        {chordSections.map(cSection => {
            <ChordSection sectionId={cSection.id} sectionLabel={cSection.title}>
                <FbDiagramGroup settings={initialSettings} chordSection={cSection} />
            </ChordSection>
        })}
    </>;
}
