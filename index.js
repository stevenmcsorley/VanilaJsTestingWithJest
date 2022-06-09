import subtract from './subtract.js';
import Journal from './journal.js';

    
export const binarySubtraction = subtract(999, 777).toString(2);

let j = new Journal();
j.addEntry('I am a test entry');
j.addEntry('I am another test entry');
