function debounce(func, delay) {
  let timer; // Closure variable to store timeout reference

  return function (...args) {
    // Clear any previously set timeout
    clearTimeout(timer);

    // Set a new timeout
    timer = setTimeout(() => {
      func(...args); // Execute the function with correct `this` and arguments
    }, delay);
  };
}
