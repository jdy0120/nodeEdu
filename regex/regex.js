/**
 * 생성자 함수 방식
 * new RegExp(표현식)
 * new RegExg(표현식, 플래그)
 */
const regexp1 = new RegExp("^abc");

const regexp2 = new RegExp("^abc","gi");

/**
 * 리터럴(Literal) 방식
 *  /표현식/
 */
const regexp1 = /^abc/;

const regexp2 = /^abc/gi;
/**
 * /표현식/플래그
 * 
 * RegExp로 생성, /표현식/으로 생성
 */

/**
 * 재할당(Re-complile)
 */
let regexp1 = /ipsum/g;
regexp1 = /lorem/i;

console.log(regexp1);

const regexp2 = /ipsum/g;

regexp2 = /lorem/i; // TypeError

new RegExp("^abc","gi").flags;
/**
 * "gi"
 */

/^abc/igy.flags;
/**
 * "giy"
 */

new RegExp("^abc","gi").source;
/**
 * "^abc"
 */

/^abc/igy.source;

/^abc/giy.global;
/**
 * true
 */

/^abc/igy.ignoreCase;
/**
 * true
 */

/^abc/igy.unicode;
/**
 * false
 */

