$(function() {
    var elementIds = [
        'element_17', 'element_24', 'element_30', 'element_141', 'element_142',
        'element_170', 'element_175', 'element_182', 'element_188', 'element_193',
        'element_199', 'element_206', 'element_212', 'element_219', 'element_224',
        'element_230', 'element_236', 'element_242', 'element_248', 'element_254'
    ];

    function calculateSum() {
        var sum = 0;
        elementIds.forEach(function(id) {
            sum += parseFloat($('#' + id).val()) || 0;
        });
        $('#element_262').val(sum);
    }

    // Bind the input event on all elements listed
    $(elementIds.map(id => '#' + id).join(',')).on('input', calculateSum);

    calculateSum(); // initial calculation
});