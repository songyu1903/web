{
  let $input1 = document.querySelector(".input-test1");
  let $input2 = document.querySelector(".input-test2");
  let $form = document.querySelector("form");

  $input1.addEventListener("focus", () => {
    console.log("focus~~!@");
  });

  $input1.addEventListener("blur", () => {
    console.log("blur@@@@");
  });

  //  키가 눌리면 입력과 상관없이 발생
  $input2.addEventListener("keydown", () => {
    console.log("down!!!!!");
  });

  // 키보드로 무언가 입력되어야 발생
  $input2.addEventListener("keypress", () => {
    console.log("press@@@@@@");
  });

  $input2.addEventListener("keyup", () => {
    console.log("up~~~~~");
  });

  $input2.addEventListener("change", (e) => {
    console.log("change$$$$$");
    console.dir(e.target);
    console.dir(e.target.value);
  });

  $form.addEventListener("submit", () => {
    alert("submit!@!@!@!@!@");
  });

  let $colors = document.querySelector(".color");
  let $foods = document.querySelector(".food");

  $colors.forEach((ele) =>
    ele.addEventListener("change", (e) => {
      console.log("color change!!!");
      console.log(e.target.value);
    })
  );
}
