export const initialSettings = {
    color: '#000000',
    strings: 6,
    frets: 4,
    position: 1,
    nutWidth: 18,
    strokeWidth: 6,
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

const markerStyleMap = {
    "root": {strokeColor: '#000000', color: '#ffffff', text: 'R', textColor: "#000000", strokeWidth: 4 },
    "3rd": {strokeColor: '#000000', color: '#bbbbbb', text: '3', textColor: "#000000", strokeWidth: 4 },
    "5th": {strokeColor: '#000000', color: '#000000', text: '5', textColor: "#ffffff", strokeWidth: 4 },
    "7th": {strokeColor: '#000000', color: '#bbbbbb', text: '7', textColor: "#000000", strokeWidth: 4 },
}

export const getMarkerStyle = (key) => {
    return markerStyleMap[key];
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
