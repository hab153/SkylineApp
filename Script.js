console.log("SkylineApp prototype is running!");

// Example: add click event for buttons
document.querySelectorAll("footer button").forEach(button => {
  button.addEventListener("click", () => {
    alert("Button clicked: " + button.textContent);
  });
});
