import React from 'react';
import { getFbSectionPercentages } from '../fingerboard-utils';
import PitchMarker from './PitchMarker';

const buildSvg = () => {
    const lines = [100, 200, 300];

    return (
        <svg width="2400" height="300" viewBox="0 0 2400 300" stroke="#aa0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width="2400" height="300" fill="none" stroke-width="8.33"></rect>
            {lines.map(linePos => <line x1={`${linePos}`} y1="0" x2={`${linePos}`} y2="300" stroke-width="4.16"></line>)}
            <PitchMarker/>
        </svg>
    )
}

export default function Fingerboard({ isFretted, isReversed, stringPitches, maxPositions }) {
    const fretClass = isFretted ? 'fretted' : 'not-fretted';
    const revertedClass = isReversed ? 'reversed' : 'not-reversed';
    const fbSections = getFbSectionPercentages(7);

    return (
        <div className={`fingerboard ${fretClass} ${revertedClass}`}>
            <span>{fbSections.join(', ')}</span>
            <div className="fb-svg-wrapper">
                {buildSvg()}
            </div>
        </div>
    )
}
