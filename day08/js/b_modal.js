let $modalBg = document.querySelector(".modal-bg");
let $loginMenu = document.querySelector(".login-menu");

$loginMenu.addEventListener("click", function () {
  console.log(this);

  $modalBg.style.display = "flex";
});

let $xBox = document.querySelector(".x-box");

$xBox.addEventListener("click", function () {
  $modalBg.style.display = "none";
});
