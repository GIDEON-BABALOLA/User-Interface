const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const inputIcons = document.querySelectorAll(".input__icon");
const inputFields = document.querySelectorAll(".input__field");
// Attach a single click event listener to a common parent element
document.addEventListener("click", (event) => {
  // Check if a click occurred on an ".input__icon" element
  if (event.target.classList.contains("input__icon")) {
    // Find the index of the clicked icon
    const iconIndex = Array.from(inputIcons).indexOf(event.target);

    // Toggle the classes and password type for the corresponding input field
    if (iconIndex !== -1) {
      inputIcons[iconIndex].classList.toggle("ri-eye-off-line");
      inputIcons[iconIndex].classList.toggle("ri-eye-line");
      inputFields[iconIndex].type = inputFields[iconIndex].type === "password" ? "text" : "password";
    }
  }
});
