{
  let $menu1 = document.querySelector(".menu1");
  let $subMenu = document.querySelector(".sub-menu");

  $menu1.addEventListener("click", () => {
    console.dir($subMenu);

    // toggle 은 classList에 none값이 있으면 remove해주고
    // none값이 없으면 add해준다
    $subMenu.classList.toggle("none");
  });

  //   $subMenu.addEventListener("click", () => {
  //     $subMenu.classList.add("none");
  //   });
}
