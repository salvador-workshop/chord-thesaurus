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
// 1st priority
const markerStyle1 = {strokeColor: '#000000', color: '#ffffff', textColor: "#000000", strokeWidth: baseStrokeWidth};
// 2nd priority
const markerStyle2 = {strokeColor: '#000000', color: '#dddddd', textColor: "#000000", strokeWidth: baseStrokeWidth};
// 3rd priority
const markerStyle3 = {strokeColor: '#000000', color: '#bbbbbb', textColor: "#000000", strokeWidth: baseStrokeWidth};
// 4th priority
const markerStyle4 = {strokeColor: '#000000', color: '#888888', textColor: "#ffffff", strokeWidth: baseStrokeWidth};
// 5th priority
const markerStyle5 = {strokeColor: '#000000', color: '#000000', textColor: "#ffffff", strokeWidth: baseStrokeWidth};

const markerKeyMap = {
    1: ['1', 'root', 'unison'],
    2: ['2', '2nd'],
    3: ['3', '3rd'],
    4: ['4', '4th'],
    5: ['5', '5th'],
    6: ['6', '6th'],
    7: ['7', '7th'],
    8: ['8', '8th', 'octave'],
    9: ['9', '9th'],
    10: ['10', '10th'],
    11: ['11', '11th'],
    12: ['12', '12th'],
    13: ['13', '13th'],
    14: ['14', '14th'],
    15: ['15', '15th', 'octave'],
}

const markerStyleMap = {
    // 1st priority
    1: {...markerStyle1, text: 'R'},
    8: {...markerStyle1, text: 'R'},
    15: {...markerStyle1, text: 'R'},
    // 2nd priority
    3: {...markerStyle2, text: '3'},
    10: {...markerStyle3, text: '3'},
    // 3rd priority
    7: {...markerStyle3, text: '7'},
    14: {...markerStyle3, text: '7'},
    // 4th priority
    2: {...markerStyle4, text: '9'},
    9: {...markerStyle4, text: '9'},
    // 5th priority
    4: {...markerStyle5, text: '11'},
    11: {...markerStyle5, text: '11'},
    5: {...markerStyle5, text: '5'},
    12: {...markerStyle5, text: '5'},
    6: {...markerStyle5, text: '6'},
    13: {...markerStyle5, text: '6'},
}

export const getMarkerStyle = (interval) => {
    const intervalNum = interval.charAt(0);
    let intervalKey = 0;
    for (const [intKey, intStrings] of Object.entries(markerKeyMap)) {
        if(intStrings.includes(intervalNum)) {
            intervalKey = intKey;
        }
    }

    return markerStyleMap[intervalKey] || defaultMarkerStyle;
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
