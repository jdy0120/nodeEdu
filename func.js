import { even, odd } from './var.js';

function checkOddOrEven(num) {
    if (num % 2) { // 홀수일 경우
        return odd;
    } else {
        return even;
    }
}

export default checkOddOrEven;