import React from 'react';

export default function Fingerboard({isFretted, isReversed, stringPitches, maxPositions}) {
    const fretClass = isFretted ? 'fretted' : 'not-fretted';
    const revertedClass = isReversed ? 'reversed' : 'not-reversed';

    return (
        <div className={`fingerboard ${fretClass} ${revertedClass}`}>
            <div className="strings">
                <div className="fb-string" />
                <div className="fb-string" />
                <div className="fb-string" />
                <div className="fb-string" />
            </div>
            <div className="frets">
                <div className="fb-fret" />
                <div className="fb-fret" />
                <div className="fb-fret" />
                <div className="fb-fret" />
            </div>
        </div>
    )
}
