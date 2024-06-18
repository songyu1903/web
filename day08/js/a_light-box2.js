let $smallImgList = document.querySelectorAll(".img-box > button");
let $bigImgBg = document.querySelector(".big-img-background");

console.log($smallImgList);

for (let i = 0; i < $smallImgList.length; i++) {
  $smallImgList[i].addEventListener("click", function () {
    console.log(this);
    console.log(this.getAttribute("data-src"));
    console.log(this.dataset.src);

    let src = this.dataset.src;
    let $bigImg = document.querySelector(".big-img");

    $bigImg.setAttribute("src", src);

    $bigImgBg.style.display = "flex";
  });
}

$bigImgBg.addEventListener("click", function () {
  this.style.display = "none";
});
