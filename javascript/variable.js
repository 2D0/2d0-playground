// 1. use strict
// 순수 자바스크립트를 쓸 때는 use strict를 쓰는 게 좋다.
// 자바 스크립트가 유연하게 만들어 졌기 때문에 개발자가 실수를 할 수 있어서 그 부분을 보완해주는 게 use strict이다.
// 자바 스크립트에서는 선언하지 않은 값을 할당한다 던지 비상식 적인 것들이 더이상 쓸 수 없게 해준다.
// 스크릭 모드로 개발할 경우 상식적인 범위에서 이용할 수 있게 해준다
// 자바 스크립트 엔진이 더 빠르고 성능 개선을 해줄 수 있다.
'use strict';

console.log('hello wold');

let a;
a = 6;
console.log(a);



// 2. Variable (Mutable 데이트 타입)
// let = Es6 에 추가 된 언어다.
// {} = 블록 안에 정의 하면 블록 밖에서는 블록 안에 있는 내용들을 볼 수 없게 된다. (단 var는 안 됨)
// 블록에 없이 그냥 쓰는 변수들은 글로벌 스콥이라 메모리에 처음부터 끝까지 탑재 되어 있기 때문에 가능한 쓰지 않는 게 좋다.
// (class, 함수, if, for 등 필요한 부분에서만 쓰는 게 좋다.)
let globalName = 'globalNameAA';
{
    let name = 'daine'
    console.log(name);
    name = 'hi'
    console.log(name)
}
console.log(name);
console.log(globalName);



// var 를 쓰면 안 좋은 이유
// 선언하기 전에 값을 할당할 수도 있고, 값을 할당하기 전에도 출력할 수 있다.
// var = hoisting (호이스팅 = 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 말한다.)
// var 는 {} 블록 스콥이 없다.
// 하지만 호완성이 익스플로러에선 지원하지 않기 때문에 사용해야하는 경우가 있다.



// 3. Constant (Immutable 데이트 타입)
// 값을 선언함과 동시에 할당한 이후는 절대 값이 바뀌지 않느다. 한 번 할당하면 절대 바뀌지 않는다.

const dayInWeek = 7;
const maxNumber = 5;

// Immutable = 값이 한 번 지정 되면 변경이 불가능하다. 
// primitive 타입으로 string 통째로 바꾸는 게 가능하지 수정은 불가능하다. frozen objects는 아예 변경 불가.

// Mutable = 값이 계속 변경 될 수 있다.
// object가 변경이 가능하기 때문에 mutable 데이터 타입이다. 자바스크립트에서는 기본적으로 오브젝트 변경이 가능하다.
// object는 reference(레퍼런스) 형태로 저장된다. 
// 한 메모리에 저장되는 게 아니라 메모리는 따로 있고 값만 같기 때문에 결국은 서로 다르다.  

// 웬만하면 값을 할당하고 값이 바뀌지 않는 데이터 타입을 사용해라
// - 보안상의 이유 (한 번 작성한 값을 해커들이 다른 코드를 입력해서 값을 바꾸는 것을 방지)
// - 동시에 값을 바꾸는 것은 위험하기 때문에 값이 바뀌지 않는 값에 바껴야할 경우 아니면 웬만하면 const를 쓰는 것이 좋다.
// - 내가 나중에 코드를 변경하거나 다른 개발자가 코드를 바꿀 때도 실수를 방지해 줄 수 있다.






// 4. Variable types
// primitive(더이상 쪼개지지 않는 작은 데이터) = number, string, boolean, null, undefined, symbol
// object = 위의ㅡ싱글 아이템들을 여러개로 묶어서 한 단위로 한 박스로 관리할 수 있게 해줌
// function = 다른 데이터 타입처럼 변수에 할당 가능하고, 함수의 파라미터(인자)로도 전달이 되고, return도 가능하다.

const me = {name : 'daine' , age : 27}; // object를 만들어서 이름과 나이를 지정했다.
//const 로 지정해서 me 포인트 값을 변결 할 수 없지만 오브젝트 안에 name과 age의 값은 변경이 가능하다.
me.age = 21;
console.log(me);



// number
// 자바스크립트에서는 정수나 소수점의 숫자 상관없이 number타입으로 할당 된다.
const count = 17; //integer(인티저:정수)
const size = 17.1; // decimal number(데시멀 넘버:소수점)
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`)



// 숫자를 0으로 나누면 무한대의 숫자값이 생긴다.
// 그것을 infinity(인피티니)라 부른다.
// 숫자가 아닌 경우를 숫자로 나누게 되면 NaN 값이 출력된다.
// 나중에 dom 요소를 포지션을 바꾸고 계산을 해야할 때 나누고자 하는 값이 0인지 아닌지 숫자인지 아닌지 확인 하지 않고 연산을 바로 하면
// 숫자가 아닌 infinity나 NaN을 받을 수 있기 때문에 에러가 발 생할 수가 있어서 항상 연산할 때는 잘 확인 해야한다.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);



// bigInt (최근에 추가된 것이라 크롬이랑 파이어 폭스에서만 지원 된다.)
const bigInt = 123456789012345678901234567890n; //숫자의 제일 마지막에 n만 붙이면 bigint(빅인트)로 간주된다. 
// 자바스크립트의 넘버는 (-2**53) ~ (2*53) 범위의 숫자만 표현 가능하다. -2의 53승 ~ 2의 53승
console.log(`value : ${bigInt}, type : ${typeof bigInt}`)



// string
// template literals(string) = 원하는 string(글자)와 함께 `(백틱)기호를 이용해서 원하는 string을 적고 $사인과 기호를 이용하면
// 변수의 값이 자동적으로 붙여져서 나온다.
const char = 'c';
const junseock = 'junseock';
const greeting = 'hello' + junseock;
console.log(`value : ${greeting}, type : ${typeof greeting}`);

const helloBob = `hi ${junseock}!`; // template literals(string) 템플릿 리터스
console.log(`value : ${helloBob}, type : ${typeof helloBob}`); //  ` 백틱을 이용한 경우
console.log('value : ' + helloBob + 'type : ' + typeof helloBob); // ` 백틱을 이용하지 않은 경우



// boolean (불리언 : 참과 거짓)
// false : 0, null, undefined, NaN, ''
// true  : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);



// null
let  noting = null;
console.log(`value : ${noting}, type : ${typeof noting}`);



// undefined
let x; // let x = undefined 랑 같음
console.log(`value : ${x}, type : ${typeof x}`);



// Symbol (심볼)
// 나중에 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을 떄 정말 고유한 식별자가 필요할 때 쓴다.
// 식별자를 string으로 이용하는 경우 동일한 식별자로 간주되지만 symbol은 동일한 값이라도 동일하게 나오지 않는다.
// 동일한 string으로 사용했어도 다른 symbol을 사용했기 때문에 값이 다르기 때문에 고유한 식별자를 만들 때 사용한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// string이 똑같은 상태에서 동일한 symbol을 만들고 싶다면
// .for을 붙이면 주어진 스트링에 맞는 심볼을 만들어준다.
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true

// 심볼은 바로 출력하게 되면 에러가 나기 때문에 뒤에 .desciption(디스크립션)을 이용해서 string으로 변환해서 출력해야 한다.
console.log(`value = ${symbol1.desciption}, type : ${typeof symbol1}`);



// 5. Dynamic typing
// 어떤 타입인지 선언하지 않고 런타임을 프로그램이 동작할 때 할당 된 값에 따라서 타입이 변경될 수 있다.
// 빠르게 프로토 타입을 하고 싶을 때 빠르게 유연하게 쓸 수 있는 용어
// 다수의 엔지니어 혹은 규모있는 프로젝트를 만들 때는 위험하다.
let text = 'hello';
console.log(text.charAt(0)); // 0번 째 캐릭터값 불러오는 거
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);

// string(글자) +(-+/*연산자) number(숫자) 가 있으면 숫자가 글자로 변환해서 글자와 글자를 합해준다.
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);

// string(글자) /(-+/*연산자) string(글자) 인 경우는 글자를 숫자로 변환해 계산한 값이 나온다.
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);

// 중간에 글자를 숫자타입으로 바꿔 버리고 글자 함수를 호출하게 되면 에러가 난다.
// 그래서 타입 스크립트가 나왔다.
console.log(text.charAt(0));






































//
