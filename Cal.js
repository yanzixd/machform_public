// Function to sum fields and display result
function calculateSum() {
    // Get the values of the input fields by their field IDs
    var val1 = parseFloat(document.getElementById('element_17').value) || 0;
    var val2 = parseFloat(document.getElementById('element_24').value) || 0;
    var val3 = parseFloat(document.getElementById('element_30').value) || 0;

    // Calculate the sum
    var sum = val1 + val2 + val3;

    // Display the sum in the result field
    document.getElementById('element_262').value = sum;
}

// Set event listeners on the input fields to recalculate when values change
document.getElementById('element_17').addEventListener('input', calculateSum);
document.getElementById('element_24').addEventListener('input', calculateSum);
document.getElementById('element_30').addEventListener('input', calculateSum);

// Initial calculation on page load
window.onload = calculateSum;