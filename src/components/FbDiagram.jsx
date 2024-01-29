import React, { useEffect } from 'react';
import { SVGuitarChord } from 'svguitar'

function drawChord(diagramId, chord, settings) {
    console.log('Drawing chord ', chord, ' with settings', settings)
    const chart = new SVGuitarChord(`#${diagramId}`);
    try {
        chart.configure(settings).chord(chord).draw();
    } catch (err) {
        alert('Failed to create chart: ' + err.message)
        throw err
    }
}

/**
 * Renders a fretboard diagram from the given settings
 * @prop {string} key
 * @prop {Chord} chord
 * @prop {ChordSettings} settings
 */
export default function FbDiagram({ key, chord, settings }) {
    const diagramId = `fb-diagram-${key}`;

    useEffect(() => {
        drawChord(diagramId, chord, settings);
    }, []);

    return (
        <div id={diagramId} className={diagramId}></div>
    )
}
