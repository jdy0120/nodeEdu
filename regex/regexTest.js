const str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

console.log(/ipsum/.exec(str));
/**
 * .exec() : 일치하는 결과가 없다면 null
 */

console.log(/ipsum/i.exec(str));
/**
 * 일치하는 하나의 정보(Array) 반환
 */

console.log(str.match(/ipsum/));
/**
 * null
 */

console.log(str.match(/ipsum/i));
/**
 * 일치하는 문자의 배열(Array) 반환
 */

console.log(str.match(/ipsum/i));

console.log(str.match(/ipsum/ig));
/**
 * i : 영어 대소문자를 구분 않고 일치(insensitive, ignore case)
 * g : 모든 문자와 여러 줄 일치(global)
 * m : 여러 줄 일치(multi line)
 * u : 유니코드(unicode)
 * y : lastIndex 속성으로 지정된 인덱스에서만 1회 일치(sticky)
 */

 const strMultyLine = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

console.log(strMultyLine.match(/$/g));

console.log(strMultyLine.match(/$/gm));

console.log(strMultyLine.match(/$/gm));

/**
 * []를 이용하여 유니코드 문자의 범위(구간)를 지정할 수도 있다.
 */
console.log(/[0-9]/.test("5"));

const str2 = "Have a nice day!";
/**
 *  index => 0123456789012345
 */

const regexp = /nice/;

const stickyRegexp = /nice/y;
stickyRegexp.lastIndex = 3;

console.log(str2.match(regexp));

console.log(str2.search(regexp));

/**
 * lastIndex 속성은 1회용이며 'Read-only'입니다.
 * 한번 검색하는 데 사용되었다면 값이 초기화됩니다.
 */

console.log("abccc".match(/c*/));

console.log("ccabccc".match(/c*/));
/**
 * g가 없음
 * -------------------------------------------------------
 * g가 있음
 */
console.log("ccacc".match(/c*/g));

console.log("ccacc".match(/d*/g));

const ko = 'kokokoko';

const koooo = 'kooookoooo';

console.log(ko.match(/ko+/));

console.log(koooo.match(/ko+/));

console.log(ko.match(/(ko)+/));

console.log(koooo.match(/(ko)+/));

console.log('123abc'.match(/(\d+)(\w)/));
/**
 * \d는 숫자에 일치하며, \w는 63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))에 일치한다.
 */

console.log("aabbcc".match(/(a)\1/));

/**
 * 차량정보조회 api
 */

