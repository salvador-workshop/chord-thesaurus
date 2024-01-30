import { Fragment } from 'react';
import ChordData from '../data/chords.json';
import {
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';

export default function ChordThesaurus() {

    const chordSections = ChordData.sections.map(section => {
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

    return <>
        <h1>Guitar Chord Thesaurus</h1>
        {chordSections}
    </>;
}
