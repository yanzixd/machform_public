// Function to copy field values
function copyFieldValues() {
    // Get the values of the source fields
    var value6 = $('[name="element_6"]').val();
    var value7 = $('[name="element_7"]').val();
    var value8 = $('[name="element_8"]').val();

    // Copy the values to the target fields
    $('[name="element_34"]').val(value6);
    $('[name="element_35"]').val(value7);
    $('[name="element_36"]').val(value8);
}

// Call the function when the form is loaded or when the source fields change
$(document).ready(function() {
    copyFieldValues();

    // Listen for changes in the source fields
    $('[name="element_6"], [name="element_7"], [name="element_8"]').on('input', function() {
        copyFieldValues();
    });
});
