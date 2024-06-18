function printAlpha() {
  console.log("A");
}

printAlpha();

function addNumber(num1, num2) {
  return num1 + num2;
}

let result = addNumber(10, 20);
console.log(result);
// 템플릿 문자열 가능
console.log(`결과 : ${addNumber(10, 40)}`);

//-----------------------------------------------------------------
// js의 함수는 변수에 저장할 수 있다.
// 변수에 저장할 때에는 이름을 생략해도 된다.

let myfunc = function test() {
  console.log("안녕하세요!");
};

myfunc();

// ---------------------------------------------------------------
function test() {
  console.log("test() 실행!");
}

function start(a) {
  a();
}

start(test);
test(start);
// 함수를 매개변수로 넘겨줄 수 있다

function repeatNum(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

repeatNum(5);

// repeatNum 함수는 num만큼 반복적으로 i를 출력하는 함수이다.
// 그런데 내부에 console.log()를 사용하면 이 함수는 num만큼 i를 출력하는 기능밖에 수행하지 못한다.
// repeatNum()가 console.log() 함수에 강하게 의존하고 있는 상태이기 때문에
// 다른 기능을 수행할 수 없다.

let printAll = function (n) {
  console.log(n);
};

let printAdd10 = function (n) {
  if (n % 2 == 0) {
    console.log(n + 10);
  }
};

function repNum(num, callback) {
  for (let i = 0; i < num; i++) {
    callback(i);
  }
}

// 이렇게 매개변수를 통해 다른 함수의 내부로 전달되어 실행되는 함수를 콜백 함수라고 한다.
repNum(5, printAll);
repNum(10, printAdd10);

// 콜백 함수는 아래와 같이 익명함수로 만들어 전달할 수도 있다.
repNum(5, function (n) {
  console.log(`num : ${n}`);
});

// ------------------------------------------------------------------------------

let aa = function () {
  console.log("ㅎㅇ");
};
aa();

// 화살표 함수(arrow function)
// 익명함수를 더 편하게 만들 수 있는 표기법
let arrow = () => console.log("ㅎㅇ");
arrow();

let arrow2 = (a, b) => {
  console.log(a + b);
  return a + b;
};

arrow2(10, 20);

let arrow3 = (a, b) => a + b;

let resultNum = arrow3(100, 200);
console.log(resultNum);
