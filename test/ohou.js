let $scrollRightButton = document.getElementById("scroll-right");
let $scrollLeftButton = document.getElementById("scroll-left");
let $scrollRightButton2 = document.getElementById("scroll-right2");
let $scrollLeftButton2 = document.getElementById("scroll-left2");
let $categoryBox = document.querySelector(".hidden-category-box");
let $imageBox = document.querySelector(".img-box");

$scrollRightButton.addEventListener("click", function () {
  $categoryBox.scroll({
    left: $categoryBox.scrollWidth,
    behavior: "smooth",
  });
  $scrollRightButton.style.display = "none";
  $scrollLeftButton.style.display = "block";
});

$scrollLeftButton.addEventListener("click", function () {
  $categoryBox.scroll({
    left: 0,
    behavior: "smooth",
  });
  $scrollLeftButton.style.display = "none";
  $scrollRightButton.style.display = "block";
});

$scrollRightButton2.addEventListener("click", function () {
  $imageBox.scroll({
    left: $imageBox.scrollWidth,
    behavior: "smooth",
  });
  $scrollRightButton2.style.display = "none";
  $scrollLeftButton2.style.display = "block";
});

$scrollLeftButton2.addEventListener("click", function () {
  $imageBox.scroll({
    left: 0,
    behavior: "smooth",
  });
  $scrollLeftButton2.style.display = "none";
  $scrollRightButton2.style.display = "block";
});
