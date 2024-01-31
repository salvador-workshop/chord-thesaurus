import React, { useEffect } from 'react';
import { SVGuitarChord } from 'svguitar'
import { formatChord } from '../style-utils';

/**
 * Renders a group of fretboard diagrams as one SVG
 * @prop {*} settings
 * @prop {*} chordSection
 */
export default function FbDiagramGroup({ settings, chordSection }) {
    const domId = `fb-diagram-grp-${chordSection.id}`;
    
    // base values for positioning calcs
    const svgGroupWidth = 2000;
    const diagramsPerRow = 6;

    const textTopPadding = 72;
    const textPadding = 16;
    const titleFontSize = 84;
    const subtitleFontSize = 48;
    const descFontSize = 32;
    const labelLeftOffset = 60;

    const getDiagramLabels = () => {
        const labels = [];
        let currentY = 0;

        if(chordSection.title) {
            currentY += textTopPadding;
            labels.push({
                content: chordSection.title,
                x: labelLeftOffset,
                y: currentY,
                fontSize: titleFontSize,
            })
        }
        if(chordSection.subtitle) {
            currentY += subtitleFontSize + textPadding;
            labels.push({
                content: chordSection.subtitle,
                x: labelLeftOffset,
                y: currentY,
                fontSize: subtitleFontSize,
            })
        }
        if(chordSection.description) {
            currentY += descFontSize + textPadding;
            labels.push({
                content: chordSection.description,
                x: labelLeftOffset,
                y: currentY,
                fontSize: descFontSize,
            })
        }
        const labelData = {
            labels: labels,
            totalSize: currentY,
        };
        console.log(labelData);
        return labelData;
    }

    const textVertOffset = getDiagramLabels().totalSize + 16;

    // calculating dimensions and positioning for diagrams
    const svgBaseX = svgGroupWidth / diagramsPerRow;
    const svgWidth = svgBaseX;
    const svgHeight = svgWidth;
    const svgBaseY = svgHeight * 1.125;

    // calculating number of rows and group height
    const numRows = 1 + Math.floor((chordSection.diagrams.length - 1) / diagramsPerRow);
    const svgGroupHeight = svgBaseY * numRows + textVertOffset;

    const drawChords = () => {
        chordSection.diagrams.forEach(diagram => {
            const chart = new SVGuitarChord(`.${domId}`);
            const formattedChord = formatChord(diagram);
            try {
                chart.configure({
                    ...settings,
                    position: diagram.position,
                    frets: diagram.frets || settings.frets,
                    title: diagram.title,
                }).chord(formattedChord).draw();
            } catch (err) {
                alert('Failed to create chart: ' + err.message);
                throw err;
            }
        })
    }

    const positionDrawnChords = (svgChords) => {
        // console.log(svgChords);
        svgChords.forEach((svgEl, idx) => {
            const level = Math.floor(idx / diagramsPerRow);
            const col = idx % diagramsPerRow;
            // console.log(level, col);

            svgEl.setAttribute('width', svgWidth);
            svgEl.setAttribute('height', svgHeight);
            svgEl.setAttribute('x', svgBaseX * col);
            svgEl.setAttribute('y', svgBaseY * level + textVertOffset);
        });
    }

    const drawLabel = (svg, content, x, y, fontSize) => {
        const newText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        newText.textContent = content;
        newText.setAttribute("x", x);
        newText.setAttribute("y", y);
        newText.style.fontFamily = "Arial, Helvetica, sans-serif";
        newText.style.fontSize = fontSize;
        newText.style.color = "#000000";
        svg.appendChild(newText);
    }

    const drawLabels = (svg) => {
        getDiagramLabels().labels.forEach(label => {
            drawLabel(svg, label.content, label.x, label.y, label.fontSize);
        })
    }

    useEffect(() => {
        drawChords();
        positionDrawnChords(document.querySelectorAll(`.${domId} svg`));
        drawLabels(document.querySelector(`.${domId}`));
    }, []);

    return (
        <svg className={domId} viewBox={`0 0 ${svgGroupWidth} ${svgGroupHeight}`}></svg>
    )
}
