{
  let $slideBox = document.querySelector(".slide-box");
  let $slideImgs = document.querySelectorAll(".slide-img");
  let $next = document.querySelector(".next");
  let $prev = document.querySelector(".prev");

  // 슬라이드 박스 너비
  let slideWidth = 800;
  // 슬라이드 이미지 인덱스 번호
  let currentIdx = 0;
  // 총 슬라이드 이미지 수
  let slideCnt = $slideImgs.length;

  console.log("slideCnt : ", slideCnt);

  function moveNext() {
    console.log("next!!");
    currentIdx++;
    console.log("currentIdx : ", currentIdx);
    $slideBox.style.transition = "0.5s ease";
    $slideBox.style.left = `${-currentIdx * slideWidth}px`;
    checkEnd();
  }
  function moveFirst() {
    currentIdx = 0;
    $slideBox.style.transition = "none";
    $slideBox.style.left = "0";
  }

  setInterval(() => {
    if (currentIdx == slideCnt - 1) {
      moveFirst();
    } else {
      moveNext();
    }
  }, 1000);

  checkEnd();

  function checkEnd() {
    $prev.style.display = currentIdx <= 0 ? "none" : "block";

    $next.style.display = currentIdx >= slideCnt - 1 ? "none" : "block";
    // if (currentIdx <= 0) {
    //   $prev.style.disply = "none";
    // } else {
    //   $prev.style.disply = "block";
    // }
  }
}
