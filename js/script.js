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

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeIcon) themeIcon.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    localStorage.setItem("theme", dark ? "dark" : "light");

    if (themeIcon) {
      themeIcon.textContent = dark ? "☀️" : "🌙";
    }
  });
}

const startDate = new Date("2026-08-20");
const today = new Date();

const days = Math.floor(
  (today - startDate) / (1000 * 60 * 60 * 24)
) + 1;

const daysCount = document.getElementById("days-count");

if (daysCount) {
  daysCount.textContent = days;
}