// 객체 생성
// js는 클래스 없이도 다양한 방법으로 객체를 만들 수 있다.
// 가장 간단한 방법은 객체 리터럴을 이용한 생성이다.
// 객체 리터럴은 {}를 이용하여 표현한다.

let obj = {
  num1: 10, // 키 : 값
  num2: 20,
  name: "홍길동",
  sum: function () {
    return this.num1 + this.num2;
  },
  "user-age": 10,
};

// 객체 사용
// 객체의 프로퍼티에 접근하는 방법은 2가지가 존재한다.
// 1. '.' 을 사용한다.
console.log(obj.name);
console.log(obj.num1 + obj.num2);
console.log(obj.sum());

// 2.[]를 사용한다.
// []를 사용하면 key를 반드시 ''로 감싸야 한다.
console.log(obj["name"]);

function test(name) {
  console.log(obj[name]);
}

test("user-age");

// 프로퍼티 생성과 삭제
// 객체를 생성한 후 프로퍼티를 생성하거나 삭제할 수 있다.
obj.num3 = 100;
console.log(obj);

delete obj.name;
console.log(obj);
