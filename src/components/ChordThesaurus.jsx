import { Fragment } from 'react';
import { ThemeUIProvider } from 'theme-ui';
import preset from '@theme-ui/preset-base';

import {
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';
import ChordSection from './ChordSection';

import majChords from '../data/maj-chords.json';
import majExtChords from '../data/maj-ext-chords.json';
import domChords from '../data/dom-chords.json';
import minChords from '../data/min-chords.json';
import minExtChords from '../data/min-ext-chords.json';
import dimChords from '../data/dim-chords.json';
import dimExtChords from '../data/dim-ext-chords.json';
import { Content, Message } from 'sw-design-system';

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
        <ThemeUIProvider theme={preset}>
        <Content>Yoooo</Content>
        <Message>Faaam</Message>
        <ChordSection sectionId="maj" sectionLabel="Major">
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
        </ChordSection>
        </ThemeUIProvider>
    </>;
}
