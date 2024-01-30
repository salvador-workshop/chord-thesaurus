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

    // base values for positioning calcs
    const svgGroupWidth = 2000;
    const diagramsPerRow = 4;

    // positions of charts
    const svgBaseX = svgGroupWidth / diagramsPerRow;
    const svgWidth = svgBaseX - 100;
    const svgHeight = svgWidth;
    const svgBaseY = svgHeight + 50;

    const numRows = Math.floor(chordSection.diagrams.length / 4) + 1;
    const svgGroupHeight = svgBaseY * numRows;

    const drawChords = (section) => {
        section.diagrams.forEach(diagram => {
            const chart = new SVGuitarChord(`.${domId}`);
            const formattedChord = formatChord(diagram);
            try {
                chart.configure({
                    ...settings,
                    position: diagram.position,
                    frets: diagram.frets,
                    title: diagram.title,
                }).chord(formattedChord).draw();
            } catch (err) {
                alert('Failed to create chart: ' + err.message);
                throw err;
            }
        })
    }

    const positionDrawnChords = (svgChords) => {
        console.log(svgChords);
        svgChords.forEach((svgEl, idx) => {
            const level = Math.floor(idx / diagramsPerRow);
            const col = idx % diagramsPerRow;
            console.log(level, col);

            svgEl.setAttribute('width', svgWidth);
            svgEl.setAttribute('height', svgHeight);
            svgEl.setAttribute('x', svgBaseX * col);
            svgEl.setAttribute('y', svgBaseY * level);
        });
    }

    useEffect(() => {
        drawChords(chordSection);
        positionDrawnChords(document.querySelectorAll(`.${domId} svg`));
    }, []);

    return (
        <svg className={domId} width={svgGroupWidth} height={svgGroupHeight}></svg>
    )
}
