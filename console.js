const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside: {
            key: 'value',
        },
    },
};
console.time('전체 시간');
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.logI(string,number,boolean);
console.error('에러 메시지는 console.error에 담아주세요');
