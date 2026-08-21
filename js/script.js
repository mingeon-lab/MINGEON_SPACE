document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".has-dropdown");

  items.forEach(item => {
    const link = item.querySelector(".nav-link");

    link.addEventListener("click", e => {
      e.preventDefault();

      items.forEach(other => {
        if (other !== item) other.classList.remove("open");
      });

      item.classList.toggle("open");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".has-dropdown")) {
      items.forEach(item => item.classList.remove("open"));
    }
  });
});
