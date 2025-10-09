$(function() {
    function calculateSum() {
        var val1 = parseFloat($('#element_17').val()) || 0;
        var val2 = parseFloat($('#element_24').val()) || 0;
        var val3 = parseFloat($('#element_30').val()) || 0;

        var sum = val1 + val2 + val3;
        $('#element_262').val(sum);
    }

    $('#element_17, #element_24, #element_30').on('input', calculateSum);

    calculateSum(); // initial calculation
});