import React from 'react';
import { getFbSectionPercentages, isOdd} from '../fingerboard-utils';
import PitchMarker from './PitchMarker';

const buildSvg = (maxPositions) => {
    // const lines = [100, 200, 300];
    const fbLength = 2400;
    const fbWidth = 300;
    const numSections = maxPositions * 2;
    const fbSections = getFbSectionPercentages(numSections);

    const addedFbSections = [];
    let total = 0;
    for (let i = 0; i < fbSections.length; i++) {
        addedFbSections.push(total + fbSections[i]);
        total += fbSections[i];
    }

    const fbSectionObjects = addedFbSections.map((fbDistance, idx) => {
        return {
            isVisible: isOdd(idx),
            fbDistance: fbDistance,
        }
    })

    return (
        <svg width={fbLength} height={fbWidth} viewBox="0 0 2400 300" stroke="#aa0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width={fbLength} height={fbWidth} fill="none" stroke-width="8.33"></rect>
            {fbSectionObjects.map(sect => {
                const calcPos = sect.fbDistance / 100 * fbLength;
                console.log(sect.fbDistance, calcPos);
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
