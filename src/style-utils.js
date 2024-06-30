const baseStrokeWidth = 5;

export const initialSettings = {
    color: '#000000',
    strings: 6,
    frets: 12,
    position: 1,
    nutWidth: 18,
    strokeWidth: baseStrokeWidth,
    fingerSize: 0.8,
    fingerTextSize: 22,
    style: 'normal',
    orientation: 'vertical',
};

export const diagramContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

export const diagramWrapperStyle = {
    flex: '0 0 25%',
}

const defaultMarkerStyle = {strokeColor: '#000000', color: '#000000', strokeWidth: baseStrokeWidth};

const markerStyleMap = {
    // 1st priority
    "root": {strokeColor: '#000000', color: '#ffffff', text: 'R', textColor: "#000000", strokeWidth: baseStrokeWidth},
    // 2nd priority
    "3rd": {strokeColor: '#000000', color: '#dddddd', text: '3', textColor: "#000000", strokeWidth: baseStrokeWidth},
    // 3rd priority
    "7th": {strokeColor: '#000000', color: '#bbbbbb', text: '7', textColor: "#000000", strokeWidth: baseStrokeWidth},
    // 4th priority
    "9th": {strokeColor: '#000000', color: '#888888', text: '9', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    // 5th priority
    "10th": {strokeColor: '#000000', color: '#000000', text: '10', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    "11th": {strokeColor: '#000000', color: '#000000', text: '11', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    "4th": {strokeColor: '#000000', color: '#000000', text: '4', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    "12th": {strokeColor: '#000000', color: '#000000', text: '12', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    "5th": {strokeColor: '#000000', color: '#000000', text: '5', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    "13th": {strokeColor: '#000000', color: '#000000', text: '13', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
    "6th": {strokeColor: '#000000', color: '#000000', text: '6', textColor: "#ffffff", strokeWidth: baseStrokeWidth},
}

export const getMarkerStyle = (key) => {
    return markerStyleMap[key] || defaultMarkerStyle;
}

/**
 * Converts a JSON chord to the svguitar format
 * @param {*} jsonChord 
 */
export const formatChord = (jsonChord) => {
    return {
        fingers: jsonChord.fingers.map(fing => {
            return [fing[0], fing[1], getMarkerStyle(fing[2])];
        }),
        barres: jsonChord.barres,
    }
}

/**
 * Converts invalid characters in chord IDs (for DOM purposes)
 * @param {*} chordId 
 */
export const formatChordId = (chordId) => {
    return chordId.replace('#', 'sharp');
}
