import React, { useEffect } from 'react';
import { SVGuitarChord } from 'svguitar'
import { formatChord } from '../style-utils';

/**
 * Renders a group of fretboard diagrams as one SVG
 * @prop {string} sectionId
 * @prop {*} chordSection
 */
export default function FbDiagramGroup({ sectionId, settings, chordSection }) {
    console.log(`Drawing chord group ${sectionId}`, settings, chordSection);
    const domId = `fb-diagram-grp-${sectionId}`;

    const drawChords = (section) => {
        section.diagrams.forEach(diagram => {
            const chart = new SVGuitarChord(`.${domId}`);
            const formattedChord = formatChord(diagram);
            try {
                chart.configure({...settings, position: diagram.position}).chord(formattedChord).draw();
            } catch (err) {
                alert('Failed to create chart: ' + err.message)
                throw err
            }
        })
    }

    const positionDrawnChords = (svgChords) => {
        console.log(svgChords);
        const levelBreak = 4
        svgChords.forEach((svgEl, idx) => {
            const level = Math.floor(idx / levelBreak);
            const col = idx % levelBreak;
            console.log(level, col);

            svgEl.setAttribute('width', 400);
            svgEl.setAttribute('height', 400);
            svgEl.setAttribute('x', 500 * col);
            svgEl.setAttribute('y', 450 * level);
        });
    }

    useEffect(() => {
        drawChords(chordSection);
        positionDrawnChords(document.querySelectorAll(`.${domId} svg`));
    }, []);

    return (
        <svg className={domId} width={2000} height={900}></svg>
    )
}
