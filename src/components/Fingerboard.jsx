import React from 'react';
import { getFbSectionPercentages, isOdd} from '../fingerboard-utils';
import PitchMarker from './PitchMarker';

const buildSvg = (maxPositions) => {
    const fbLength = 1600;
    const fbWidth = 200;

    const numSections = maxPositions * 2;
    const fbSectionLengths = getFbSectionPercentages(numSections);
    const addedFbSections = [];
    let total = 0;
    for (let i = 0; i < fbSectionLengths.length; i++) {
        addedFbSections.push(total + fbSectionLengths[i]);
        total += fbSectionLengths[i];
    }
    const fbSections = addedFbSections.map((distanceFromNut, idx) => {
        return {
            isVisible: isOdd(idx),
            distFromNut: distanceFromNut,
        }
    })

    return (
        <svg width={fbLength} height={fbWidth} viewBox={`0 0 ${fbLength} ${fbWidth}}`} stroke="#aa0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width={fbLength} height={fbWidth} fill="none" stroke-width="8.33"></rect>
            {fbSections.map(sect => {
                const calcPos = sect.distFromNut / 100 * fbLength;
                console.log(sect.distFromNut, calcPos);
                if (sect.isVisible) {
                    return <line key={calcPos} x1={`${calcPos}`} y1="0" x2={`${calcPos}`} y2={fbWidth} stroke-width="4.16"></line>
                } else {
                    return null;
                }
            })}
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
                {buildSvg(maxPositions)}
            </div>
        </div>
    )
}
