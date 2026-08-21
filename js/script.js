/* ============================================================
   MIN'S LAB JavaScript
   현재 Hover 메뉴는 CSS만으로 작동합니다.
   나중에 필요한 JavaScript 기능을 이 파일에 추가하세요.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', e => {
    if (window.innerWidth <= 800) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

