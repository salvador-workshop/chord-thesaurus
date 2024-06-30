import React, { useEffect } from 'react';
import { SVGuitarChord } from 'svguitar'

/**
 * Renders a fretboard diagram from the given settings
 * @prop {string} diagramId
 * @prop {Chord} chord
 * @prop {ChordSettings} settings
 */
export default function FbDiagram({ diagramId, chord, settings }) {
    console.log(`Drawing chord ${diagramId}`, chord, ' with settings', settings)
    const domId = `fb-diagram-${diagramId}`;
    const drawChord = (diagramId, chord, settings) => {
        const chart = new SVGuitarChord(`.${diagramId}`);
        try {
            chart.configure(settings).chord(chord).draw();
        } catch (err) {
            console.error(`Failed to create chart: ${err.message}\n ${err.cause}`);
            throw err
        }
    }

    useEffect(() => {
        drawChord(domId, chord, settings);
    }, []);

    return (
        <div className={domId}></div>
    )
}
