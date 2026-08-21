document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  dropdownItems.forEach(item => {
    const link = item.querySelector(":scope > a");
    const dropdown = item.querySelector(":scope > .dropdown");

    link.addEventListener("click", e => {
      e.preventDefault();

      dropdownItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("open");
        }
      });

      const isOpen = item.classList.toggle("open");

      if (window.innerWidth <= 800 && isOpen) {
        const nav = document.querySelector(".main-nav");
        const rect = nav.getBoundingClientRect();

        dropdown.style.top = `${rect.bottom}px`;
      } else {
        dropdown.style.top = "";
      }
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".has-dropdown")) {
      dropdownItems.forEach(item => {
        item.classList.remove("open");

        const dropdown = item.querySelector(":scope > .dropdown");

        if (dropdown) {
          dropdown.style.top = "";
        }
      });
    }
  });

  window.addEventListener("resize", () => {
    dropdownItems.forEach(item => {
      const dropdown = item.querySelector(":scope > .dropdown");

      if (!item.classList.contains("open") || !dropdown) return;

      if (window.innerWidth <= 800) {
        const nav = document.querySelector(".main-nav");
        const rect = nav.getBoundingClientRect();

        dropdown.style.top = `${rect.bottom}px`;
      } else {
        dropdown.style.top = "";
      }
    });
  });
});