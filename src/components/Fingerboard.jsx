export default function Fingerboard({isFretted, isReversed, stringPitches, maxPositions}) {
    const fretClass = isFretted ? 'fretted' : 'not-fretted';
    const revertedClass = isReversed ? 'reversed' : 'not-reversed';

    return (
        <div className={`fingerboard ${fretClass} ${revertedClass}`}>Fingerboard</div>
    )
}
