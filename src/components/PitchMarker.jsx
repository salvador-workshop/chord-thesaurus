export default function PitchMarker({pitch, stringId, stringPos, isVisible, highlightModes = []}) {
    const visClass = isVisible ? 'visible' : 'hidden';
    const highlightsClass = highlightModes.join(" ");

    return (
        <div className={`pitch-marker ${pitch} ${stringId}-${stringPos} ${visClass} ${highlightsClass}`}>PitchMarker</div>
    )
}
