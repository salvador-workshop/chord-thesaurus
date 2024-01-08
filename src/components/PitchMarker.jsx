import React from 'react';

export default function PitchMarker({pitch, stringId, stringPos, isVisible, highlightModes = []}) {
    const visClass = isVisible ? 'visible' : 'hidden';
    const highlightsClass = highlightModes.join(" ");
    const pitchLabel = "NN";

    return (
        <div className={`pitch-marker ${pitch} ${stringId}-${stringPos} ${visClass} ${highlightsClass}`}>
            <div className="marker-outline" />
            <div className="marker-label">{pitchLabel}</div>
        </div>
    )
}
