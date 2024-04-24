// Get all the checkboxes
const checkboxes = document.querySelectorAll('.list-group-item input[type="checkbox"]');

// Add an event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    // Get the corresponding element
    const element = document.querySelector(`.col-6 .bg-dark`);

    // If the checkbox is checked, hide the element
    if (event.target.checked) {
      element.classList.add('hidden');
    } else {
      // If the checkbox is unchecked, show the element
      element.classList.remove('hidden');
    }
  });
});