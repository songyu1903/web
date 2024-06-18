console.log("시작");

setInterval(function () {
  console.log("setTimeout() 내부에서 콜백함수 실행!");
}, 2000);

console.log("끝");
