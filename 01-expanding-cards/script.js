// Grab our panel elements
const panels = Array.from(document.querySelectorAll(".panel"));

// Add a click event listener to each
panels.forEach((p) => {
  p.addEventListener("click", makeActive);
});

// Build click handler to add/remove active class
function makeActive(e) {
  // 1. Remove active class from all panels
  removeActiveClassFromAllPanels();
  // 2. Add active class to target
  e.target.classList.add("active");
}

function removeActiveClassFromAllPanels() {
  panels.forEach((p) => p.classList.remove("active"));
}
