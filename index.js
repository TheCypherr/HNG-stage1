"use strict";
// DOM ELEMENTS
const menuSection = document.querySelector("#menuSection");
const menuToggle = document.querySelector("#menuToggle");

// Function to toggle the menu
function toggleMenu() {
  if (menuSection.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Function to show the Menu
const openMenu = function () {
  menuSection.classList.add("active");
};

// Function to hide the menu
const closeMenu = function () {
  menuSection.classList.remove("active");
};

// Add event listener to menu toggle button
menuToggle.addEventListener("click", toggleMenu);

function updateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const utcDayContainer = document.getElementById("utc-day");
  const utcTimeContainer = document.getElementById("utc-time");
  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");

  utcDayContainer.textContent = `Day: ${dayOfWeek}`;
  utcTimeContainer.textContent = `Time: ${hours}:${minutes}:${seconds} UTC`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to display time immediately
