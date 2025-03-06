// Function to concatenate fields
function concatenateFields() {
    var field1 = document.querySelector('[name="element_30"]').value;
    var field2 = document.querySelector('[name="element_32"]').value;
    var field3 = document.querySelector('[name="element_29"]').value;

    // Format the concatenated value in the desired format
    var concatenatedValue = field1 + ' (' + field3 + ') included GI ingredient of ' + field2;

    // Assign the concatenated value to the target field
    document.querySelector('[name="element_39"]').value = concatenatedValue;
}

// Call the function on form submission or whenever you want to update the field
document.addEventListener('DOMContentLoaded', function() {
    // You can call the function here if you want it to run immediately
    // concatenateFields();

    // Alternatively, call it on form submission
    document.querySelector('form').addEventListener('submit', function() {
        concatenateFields();
    });

    // Or call it on input change if needed
    document.querySelectorAll('input[name="element_30"], input[name="element_32"], input[name="element_29"]').forEach(function(input) {
        input.addEventListener('input', function() {
            concatenateFields();
        });
    });
});
