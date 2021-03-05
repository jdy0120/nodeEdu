import { even, odd } from './var.js';

import checkNumber from './func.js';

const checkStringOddOrEven = (str) => {
    if (str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));