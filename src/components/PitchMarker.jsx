import React from 'react';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function PitchMarker({pitch, stringId, stringPos, isVisible, highlightModes = []}) {
    const visClass = isVisible ? 'visible' : 'hidden';
    const highlightsClass = highlightModes.join(" ");
    const pitchLabel = "NN";

    const highlightMap = {
        'base': {
            // 0 means "no highlight at all"
            thickness: 0,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 255, 255, 0)',
            priority: 0,
        },
        '13th': {
            thickness: 1,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 255, 255, 0)',
            priority: 1,
        },
        '11th': {
            thickness: 1,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 255, 255, 0)',
            priority: 2,
        },
        '9th': {
            thickness: 1,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 255, 255, 0)',
            priority: 3,
        },
        '7th': {
            thickness: 2,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 0, 0, 0.0625)',
            priority: 4,
        },
        '5th': {
            thickness: 3,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 0, 0, 0.25)',
            priority: 5,
        },
        '3rd': {
            thickness: 4,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 0, 0, 0.125)',
            priority: 6,
        },
        'root': {
            thickness: 5,
            outline: 'rgba(0, 0, 0, 1)',
            fill: 'rgba(255, 0, 0, 0.5)',
            priority: 7,
        },
    }

    /** Gets the top priority highlight from a given list */
    const getTopHighlight = (highlightModes) => {
        return getRandomIntInclusive(0, 5);
    }

    return (
        <>
            <circle cx="24" cy="24" r="18" stroke-width="4" fill="none"></circle>
            <text x="11.5" y="30" class="svg-text" font-weight="normal" font-size="18px">{pitchLabel}</text>
        </>
    )
}
