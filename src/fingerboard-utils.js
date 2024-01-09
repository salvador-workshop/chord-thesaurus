
export const TWELFTH_ROOT_OF_TWO = Math.pow(2, 1 / 12);

export const getFbSectionPercentages = (numNotePositions) => {
    var sectionPercentages = [];
    var previousVibratingLength = 100;
    var currentVibratingLength = 100;
    var diff = 0;
    var diffTotal = 0;
    var ratio = 0;
    
    for(var j = 1; j <= numNotePositions; j++) {
        currentVibratingLength = currentVibratingLength / TWELFTH_ROOT_OF_TWO;
        diff = previousVibratingLength - currentVibratingLength;
        sectionPercentages.push(diff);
        diffTotal += diff;
        previousVibratingLength = currentVibratingLength;
    }

    ratio = 100 / diffTotal;
    
    for(var k = 0; k < sectionPercentages.length; k++) {
        sectionPercentages[k] = sectionPercentages[k] * ratio;
    }
    
    return sectionPercentages;
}
