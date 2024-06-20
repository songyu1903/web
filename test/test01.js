{
  let $slideBox = document.querySelector(".img-box");
  let $slideImgs = document.querySelectorAll(".animal-img");
  let $next = document.querySelector(".next");
  let $prev = document.querySelector(".prev");

  // 슬라이드 박스 너비
  let slideWidth = 800;
  // 슬라이드 이미지 인덱스 번호
  let currentIdx = 0;
  // 총 슬라이드 이미지 수
  let slideCnt = $slideImgs.length;

  console.log("slideCnt : ", slideCnt);

  $next.addEventListener("click", function () {
    console.log("next!!");
    currentIdx++;
    console.log("currentIdx : ", currentIdx);
    $slideBox.style.transition = "0.5s ease";
    $slideBox.style.left = `${-currentIdx * slideWidth}px`;
    checkEnd();
  });

  $prev.addEventListener("click", function () {
    console.log("prev!!");
    currentIdx--;
    console.log("currentIdx : ", currentIdx);
    $slideBox.style.transition = "0.5s ease";
    $slideBox.style.left = `${-currentIdx * slideWidth}px`;
    checkEnd();
  });

  checkEnd();

  function checkEnd() {
    $prev.style.display = currentIdx <= 0 ? "none" : "block";

    $next.style.display = currentIdx >= slideCnt - 1 ? "none" : "block";
  }
}
