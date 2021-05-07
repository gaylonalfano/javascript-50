const progressBar = document.querySelector("#progress");
const progressCircles = document.querySelectorAll(".circle");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");

// Add global state to track current active progress circle
let currentActiveIndex = 1;

// Add click event listeners to our buttons
nextButton.addEventListener("click", progressForward);
previousButton.addEventListener("click", progressBackward);

// *** ADDING update() HELPER TO UPDATE UI
function progressForward(e) {
  // Progress forward by one circle
  currentActiveIndex++;
  // console.log({ currentActiveIndex });
  // Check that we have additional steps to progress
  if (currentActiveIndex > progressCircles.length) {
    // Already at final step so reset state and stop/return
    console.log("Already at final step. Cannot progress further!");
    currentActiveIndex = progressCircles.length;
  }

  updateProgressBar();

  // console.log(currentActiveIndex);
}

function progressBackward(e) {
  // Progress backward by one circle
  currentActiveIndex--;
  // console.log({ currentActiveIndex });
  // Check that we can go back a step
  if (currentActiveIndex < 1) {
    // Already at starting point
    console.log("Already at starting step! Cannot go backwards!");
    currentActiveIndex = 1;
  }

  updateProgressBar();

  // console.log(currentActiveIndex);
}

function updateProgressBar() {
  // 1. Loop through our progressCircles and add/remove active
  progressCircles.forEach((circle, index) => {
    if (index < currentActiveIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // 2. After loop is completed let's update active progressBar width
  // NOTE We're decrementing by 1/3 and width prop is a string with %
  let updatedProgressWidth =
    ((currentActiveIndex - 1) / (progressCircles.length - 1)) * 100 + "%";
  // console.log(updatedProgressWidth); // 33.33%, 66.666% etc. works
  // console.log("progressBar.style.width: ", progressBar.style.width); // <empty string>
  progressBar.style.width = updatedProgressWidth;

  // 3. Disable/enable buttons
  currentActiveIndex === 1
    ? (previousButton.disabled = true)
    : (previousButton.disabled = false);

  currentActiveIndex === progressCircles.length
    ? (nextButton.disabled = true)
    : (nextButton.disabled = false);
}

// *** MY ATTEMPT WITHOUT HELPER update()
// NOTE Best to create a separate function that runs on each button click
// that updates the DOM. Don't cram too much into one function!
// Create handlers
// function progressForward(e) {
//   // Progress forward by one circle
//   currentActiveIndex++;
//   // console.log({ currentActiveIndex });
//   // Check that we have additional steps to progress
//   if (currentActiveIndex > progressCircles.length) {
//     // Already at final step so reset state and stop/return
//     console.log("Already at final step. Cannot progress further!");
//     currentActiveIndex = progressCircles.length;
//     // Make nextButton disabled
//     // nextButton.disabled = true;
//     return;
//   }

//   // Grab new current active circle
//   let currentActiveCircle = progressCircles[currentActiveIndex - 1];
//   console.log({ currentActiveCircle });

//   // Expand the width of our progressBar by 33% (1/4 steps)
//   // NOTE We're incrementing by 1/3 and width prop is a string with %
//   let updatedProgressWidth =
//     ((currentActiveIndex - 1) / (progressCircles.length - 1)) * 100 + "%";
//   // console.log(updatedProgressWidth); // 33.33%, 66.666% etc. works
//   // console.log("progressBar.style.width: ", progressBar.style.width); // <empty string>
//   progressBar.style.width = updatedProgressWidth;

//   // Add the active class
//   currentActiveCircle.classList.add("active");

//   // Remove disabled from previousButton
//   previousButton.disabled = false;
// }

// function progressBackward(e) {
//   // Progress backward by one circle
//   currentActiveIndex--;
//   // console.log({ currentActiveIndex });
//   // Check that we can go back a step
//   if (currentActiveIndex < 1) {
//     // Already at starting point
//     console.log("Already at starting step! Cannot go backwards!");
//     currentActiveIndex = 1;
//     // Remove disabled from previousButton
//     previousButton.disabled = true;
//     return;
//   }

//   // Remove active class from previous current active circle (Meh!)
//   progressCircles[currentActiveIndex].classList.remove("active");

//   // Grab new current active circle
//   let currentActiveCircle = progressCircles[currentActiveIndex - 1];
//   console.log({ currentActiveCircle });

//   // Decrease the width of our progressBar by 33% (1/4 steps)
//   // NOTE We're decrementing by 1/3 and width prop is a string with %
//   let updatedProgressWidth =
//     ((currentActiveIndex - 1) / (progressCircles.length - 1)) * 100 + "%";
//   // console.log(updatedProgressWidth); // 33.33%, 66.666% etc. works
//   // console.log("progressBar.style.width: ", progressBar.style.width); // <empty string>
//   progressBar.style.width = updatedProgressWidth;

//   // NOTE Don't have to add active class because already added previously
//   // currentActiveCircle.classList.add("active");
// }
