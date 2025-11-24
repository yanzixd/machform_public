<script>
$(function() {

  // Run when the form is submitted (Continue / Next / Submit)
  $('form.appnitro').submit(function() {

    // Remove any previous error state/message for this field
    var $fieldWrapper = $("#element_745").parentsUntil("ul").last();
    $fieldWrapper.removeClass("error");
    $fieldWrapper.find("p.error").remove();

    // Get current value
    var val = $("#element_745").val();

    // Check for exact match (case-sensitive)
    if (val !== "ABC") {

      // Add red error style and message under the field
      $fieldWrapper
        .addClass("error")
        .append('<p class="error">Incorrect bank code</p>');

      // Re-enable buttons in case MachForm disabled them
      $("#li_buttons > input[type=submit], #li_buttons > input[type=image]")
        .prop("disabled", false);

      // Block going to the next page / submitting
      return false;
    }

    // Allow normal continue/next if value is correct
    return true;
  });

});
</script>
