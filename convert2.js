// Function to copy field values
function copyFieldValue() {
    // Get the value of the source field
    var value6 = $('[name="element_6"]').val();

    // Copy the value to the target field
    $('[name="element_34"]').val(value6);
}

// Call the function when the form is loaded or when the source field changes
$(document).ready(function() {
    copyFieldValue();

    // Listen for changes in the source field
    $('[name="element_6"]').on('input', function() {
        copyFieldValue();
    });
});
