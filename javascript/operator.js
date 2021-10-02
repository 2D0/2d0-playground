'use strict';

// 1. String concatenation 
console.log( 'my' + 'cat' );
console.log( '1' + 2 );

// `(백틱) 을 이용하면 줄바꿈도 가능하다.
console.log( `string literals : 
    ''''
1 + 2 = ${1 + 2}` );

// '(싱글코트) 를 이용하면 중간에 있는 '가 인식이 안 되기 때문에 그 앞에 \(백슬러시)를 붙여주면 기호가 나타난다.
console.log( 'daine\'s book' );
// 자바스크립트에서 줄바꿈을 하고 싶은 경우 \n (백슬러시 + n)을 적어주면 줄바꿈이 된다.
console.log('hello\nworld')
// tab 들여쓰기는 \t 를 적어주면 된다.
console.log('my\nname\n\tdiane')



// 2. Numeric operators(누메릭 오퍼라이터) : 숫자 연산자 계산
console.log(1 + 1); //  add 더하기
console.log(1 - 1); //  substract 뺴기
console.log(1 / 1); //  divide 나누기
console.log(1 * 1); //  multiply 곱하기
console.log(5 % 2); //  remainder 나누고 나머지 값
console.log(2 ** 3);//  exponentiation 2의 3승



// 3. Increment : 증가, decrement : 감소 operators (인크리먼트 디크리먼트 오퍼라이터)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;  counter에 1을 더해서 counter 값을 할당한 다음
// preIncrement = counter;  counter의 값이 증가했기 때문에 결국 counter의 값은(preIncrement 값) 3이 된다.
// 결국 앞에 ++가 붙는 다는 건 counter 자체의 값에 영향을 주기 때문에 counter의 자체값이 변해 2가 아니라 3으로 되는 것이다.
// 앞에 붙으면 counter값을 업데이트 후 할당 뒤에 붙으면 counter값이 할당이 된 후 업데이트는 그 뒤에 된다.
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

// 반대로 postIncrement 는 뒤에 ++ 기호가 붙고 뒤에 마지막 값에만 영향을 준다.
const postIncrement = counter++;
// postIncrement = counter; counter의 값은 그대로 3이고
// counter = counter + 1; 그 이후의 답인 counter의 값이 4가 되는 것이다.
// (3인 이유는 위에서 ++를 줬기 때문이니 오해 말자)
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`)

// --(마이너스)도 위의 ++와 개념이 같다.
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`)

const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);



// 4. Assignment operators : 할당하는 오퍼라이터
let x = 3;
let y = 6;
x += y; //  x = x + y; 반복되는 것은 생략 가능 
x -= y; //
x *= y; //
x /= y; //
console.log(x += y, x -= y, x *= y, x /= y);



// 5. Comparison operators : 비교하는 오퍼라이터
console.log(10 < 6);  // 작거나
console.log(10 <= 6); // 작거나 같거나
console.log(10 > 6);  // 크거나
console.log(10 >= 6); // 크거나 같거나



// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or) : 어떤 것이든 하나라도 true가 있으면 true로 리턴한다.
// or 연산자는 어쨌든 true만 나오면 되기 때문에 처음으로 true가 나오면 멈춘다.
// 아래 value 값 2개는 false라 통과하고 마지막 check가 true이기 때문에 값이 결국 true이다.
// 만약 앞의 value 값이 true이면 거기서 멈추기 때문에 뒤의 check의 값은 출력이 안 된다.
console.log(`or : ${value1 || value2 || check()}`);

// 참고로 check의 값이 true 앞에 계산들을 떠나 return 값이 true라 결국 true로 return 되기 때문에 값이 true가 되는 것이다.
function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('🐶')
    }
    return true;
}
// 연산을 많이하는 함수를 호출하면 좋지 않다.
// 심플한 value를 앞에 두고 앞에 값이 false 일 때 마지막에 마지못해 함수를 호출하게 하는 게 좋다.



// &&(and) : 모든 것이 만족하여야 true로 리턴한다.
// and도 마찬가지로 앞에서 false가 나와버리면 false로 확정 되기 때문에 헤비한 함수는 뒤에 호출하는 것이 좋다.
console.log(`and : ${value1 && value2 && check()}`);

// and는 간편하게 null 체크할 때도 많이 쓰인다.
// nullableObject && nullableObject.somthing
// null 오브젝트가 null이 아닐 때만 .something 이라는 벨류를 받아오게 된다.
/* 궅이 표현하자면 아래 같은 느낌
    if (nullableObject != null){
        nullableObject.something;
    } 
*/


// !(not) : 값을 반대로 바꿔준다.
console.log(!value1); //value1 값이 false이기 때문에 true로 값을 바꿔서 출력



// 7. Equelity이퀄리티,이꼴)
const stringFive = '5';
const numberFive = 5;

// ==(두 개의 이꼴, 루즈 이퀄리티) :  타입을 변경해서 검사한다.
console.log(stringFive == numberFive); // 변환을 해서 똑같다고 인식하여 true로 나온다.
console.log(stringFive != numberFive); // 변환이 됐기 때문에 false로 나온다.

// ===(세 개의 이꼴, 스트릭 이퀄리티) : 타입도 값도 같아야지만 같다고 인식한다.
console.log(stringFive === numberFive); // 타입이 다르게 때문에(글자와 숫자라서) false
console.log(stringFive !== numberFive); // 다르다는 게(!=)맞기 때문에 true

// 이퀄리티를 공부할 때는 object를 신경 써서 공부해야 한다.
// object는 reference(레퍼런스) 형태로 저장된다. 
// 한 메모리에 저장되는 게 아니라 메모리는 따로 있고 값만 같기 때문에 결국은 서로 다르다.  
const diane1 = {name: 'diane'};
const diane2 = {name: 'diane'};
const diane3 = diane1;
console.log(diane1 == diane2);  // 레퍼런스(메모리) 값이 서로 다르기 때문에 false
console.log(diane1 === diane2); // 똑같은 타입이든 아니든 레퍼런스 값이 다르기 때문에 false
console.log(diane1 === diane3); // diane1이 가지고 있는 value를 diane3으로 할당 했기 때문에 값이 같아서 true



// 퀴즈 아래의 값은?
console.log(0 == false);           // 0은 false가 맞아서 true
console.log(0 === false);          // 하지만 boolean(불리언 : 참 혹은 거짓) 타입이 아니기 때문에 false
console.log('' == false);          // true 
console.log('' === false);         // false
console.log(null == undefined);    // true
console.log(null === undefined);   // false

// 0, null, undefined, NaN, '' 는 false로 간주됨.
// boolean (불리언 : 참과 거짓)



// 8. Conditional operators(컨디셔너 오퍼라이트) : if 
// if, else if, else

// if에서 바로 조건이 맞아져서 Welcome, Diane! 이 출력된다.
var name = 'diane';
if (name === 'diane'){
    console.log('Welcome, Diane!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// if에서 조건이 맞지 않아 다음 조건으로 넘어가니 조건이 맞아 You are amazing coder가 출력된다.
var name = 'coder';
if (name === 'diane'){
    console.log('Welcome, Diane!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// if에서도 else if에서도 둘 다 조건이 맞지 않아 unknown이 출력된다.
var name = "what";
if (name === 'diane'){
    console.log('welcome, diane');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}



// 9. Ternary operator(터너리 오퍼라이트) : ? (if를 더 간편하게 쓸 수 있음)
// condition ? value : value2;
// 조건 뒤에 ?(물음표) 를 붙이면 조건이 맞으면 :(콜론) 앞에 답 맞지 않으면 :(콜론) 뒤의 답이 출력된다.
// 걊을 할당하거나 간단하게 출력할 때 쓰지만 복잡해질 경우는 사용하지 않는 것이 좋다.
console.log(name === 'diane' ? 'yes' : 'no');


// 10. Switch statement :   value가 원하는 값일 경우 작동되게한다.
// if를 복잡하게 써야할 경우 switch(스위치)를 쓰는 게 가독성이 좋다.
const boyFriend = 'junseok';
switch (boyFriend) {
    case 'anotherMan':
        console.log('go away!');
        break; // switch에 있는 value값이 즉 boyFriend 값이 anotherMan이면 go away!를 출력하고 break로 멈추고
    case 'junseok':
    case 'me':  // 똑같은 값을 출력할 경우는 case를 이어 붙이면 된다.
        console.log('love you');
        break; // junseok이면 love you를 출력하고 break로 멈춘다.
    default: // 그 어떤 값도 없는 경우 아래의 값으로 출력되고 멈춘다.
        console.log('unknown');
        break;
}



// 11. Loops(반복문)
// while : 조건이 맞지 않을 때 까지(false가 나올 때 까지) 무한대로 반복된다.
// 아래의 경우는 값을 출력한 뒤 i-- 를 통해 나온 값마다 감소 시킨 뒤 값을 다시 출력하고를 반복하다가 
// i가 0이 되었을 때 i는 0보다 큰 게 아니기 때문에 0은(최종 값이 0) 출력되지 않는다.
let i = 3;
while (i > 0){
    console.log(`while : ${i}`);
    i--;
}


// do while : 먼저 블록을 실행한 다음 조건이 맞는지 안 맞는지 검사한다.
// 즉 먼저 값을 출력한 뒤 조건이 맞아야지만 멈추게 된다.
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);


// for loop : for (begin(시작하는 문장); condition(상태); step(어떤스텝을 밟아 나갈지))
// 아래의 경우 begin(i = 3); condition(i > 0); step(i--);
// 즉 i는 3이고(begin) i가 0보다 클 경우(condition) i--을 실행시킨다(step).
// begin은 최초 한 번만 실행되고 나머지 조건들이 맞을 때 까지 실행이(i--) 되다 조건이 맞지 않게 되면 자동으로 멈춘다.
for (i = 3; i > 0; i--){
    console.log(`for : ${i}`);
}

// 블럭안에 let이라는 지역변수를 선언하는 것도 좋음
for(let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for : ${i}`);
}


// nested loops (중첩 루프)
// for 안에 또 for을 넣을 수 있음.
// 하지만 이렇게 될 경우 cpu에 좋지 않아서 되도록 사용하지 않는 게 좋다.
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i : ${i}, j : ${j}`);
    }
}


// 루프안에서는 키워드를 써서 루프를 끝낼 수 있다.
// break : 루프를 완전히 끝내는 것
// continue : 지금 것만 스킵하고 다시 다음(step)으로 넘어가는 것

// 퀴즈1. 숫자를 0부터 10까지 짝수인 숫자만 나오게 하는 것을 continue를 이용해 만들기
for(let i = 0; i < 11; i++){
    if(i % 2 !== 0){
        continue; // 공부하려고 continue 를 쓴것이지 지금 상황은 여기에 값을(console.log) 적어도 된다.
    }
    console.log(`q1. ${i}`);
}


// 퀴즈2. 주어진 숫자의 범위 0부터 10까지를 루핑하는 것을 작성하되 숫자 8이 되면 멈추게(brake) 만들기
for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}














//