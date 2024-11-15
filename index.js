// Function to animate the number counter
function animateCounter(id, endValue, duration) {
  let startValue = 0;
  let element = document.getElementById(id);
  let increment = endValue / (duration / 50); // Increment value every 50ms

  // Start the interval to animate the number
  let interval = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
          startValue = endValue; // Ensure it stops at the target value
          clearInterval(interval); // Stop the interval when target is reached
      }
      element.textContent = Math.floor(startValue); // Update the text content
  }, 50); // Update every 50ms
}

// Call the function for each counter element when the page loads
window.onload = function () {
  animateCounter("client-count", 232, 3000);  // 232 clients over 3 seconds
  animateCounter("project-count", 521, 3000); // 521 projects over 3 seconds
  animateCounter("hours-count", 1453, 3000);  // 1453 hours over 3 seconds
  animateCounter("worker-count", 32, 3000);   // 32 workers over 3 seconds
};
