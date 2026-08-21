/* ============================================================
   MIN'S LAB JavaScript
   현재 Hover 메뉴는 CSS만으로 작동합니다.
   나중에 필요한 JavaScript 기능을 이 파일에 추가하세요.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  dropdownItems.forEach(item => {
    const link = item.querySelector(":scope > a");

    link.addEventListener("click", e => {
      e.preventDefault();

      dropdownItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("open");
        }
      });

      item.classList.toggle("open");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".has-dropdown")) {
      dropdownItems.forEach(item => {
        item.classList.remove("open");
      });
    }
  });
});