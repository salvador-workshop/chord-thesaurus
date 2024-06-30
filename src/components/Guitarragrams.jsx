import {
    formatChordId,
    initialSettings,
} from '../style-utils';
import FbDiagramGroup from './FbDiagramGroup';
import ChordSection from './ChordSection';

import guitarragramsData from '../data/chord-data-svguitar.json';

export default function Guitarragrams() {
    const chordSections = guitarragramsData.sections;
    console.log(guitarragramsData, chordSections);

    return <>
        {chordSections.map(cSection => {
            return (
                <ChordSection sectionId={formatChordId(cSection.id)} sectionLabel={cSection.title}>
                    <FbDiagramGroup settings={initialSettings} chordSection={cSection} />
                </ChordSection>
            );
        })}
    </>;
}
