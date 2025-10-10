$(function() {
    var quantityIds = [
        'element_17', 'element_24', 'element_30', 'element_141', 'element_142',
        'element_170', 'element_175', 'element_182', 'element_188', 'element_193',
        'element_199', 'element_206', 'element_212', 'element_219', 'element_224',
        'element_230', 'element_236', 'element_242', 'element_248', 'element_254'
    ];

    var mcAssociations = [
        { mc: 'element_14', dc: 'element_14_1', ac: 'element_14_2', quantity: 'element_17' },
        { mc: 'element_22', dc: 'element_22_1', ac: 'element_22_2', quantity: 'element_24' },
        { mc: 'element_28', dc: 'element_28_1', ac: 'element_28_2', quantity: 'element_30' },
        { mc: 'element_132', dc: 'element_132_1', ac: 'element_132_2', quantity: 'element_141' },
        { mc: 'element_137', dc: 'element_137_1', ac: 'element_137_2', quantity: 'element_142' },
        { mc: 'element_168', dc: 'element_168_1', ac: 'element_168_2', quantity: 'element_170' },
        { mc: 'element_174', dc: 'element_174_1', ac: 'element_174_2', quantity: 'element_175' },
        { mc: 'element_180', dc: 'element_180_1', ac: 'element_180_2', quantity: 'element_182' },
        { mc: 'element_186', dc: 'element_186_1', ac: 'element_186_2', quantity: 'element_188' },
        { mc: 'element_192', dc: 'element_192_1', ac: 'element_192_2', quantity: 'element_193' },
        { mc: 'element_198', dc: 'element_198_1', ac: 'element_198_2', quantity: 'element_199' },
        { mc: 'element_205', dc: 'element_205_1', ac: 'element_205_2', quantity: 'element_206' },
        { mc: 'element_211', dc: 'element_211_1', ac: 'element_211_2', quantity: 'element_212' },
        { mc: 'element_217', dc: 'element_217_1', ac: 'element_217_2', quantity: 'element_219' },
        { mc: 'element_223', dc: 'element_223_1', ac: 'element_223_2', quantity: 'element_224' },
        { mc: 'element_229', dc: 'element_229_1', ac: 'element_229_2', quantity: 'element_230' },
        { mc: 'element_235', dc: 'element_235_1', ac: 'element_235_2', quantity: 'element_236' },
        { mc: 'element_241', dc: 'element_241_1', ac: 'element_241_2', quantity: 'element_242' },
        { mc: 'element_247', dc: 'element_247_1', ac: 'element_247_2', quantity: 'element_248' },
        { mc: 'element_253', dc: 'element_253_1', ac: 'element_253_2', quantity: 'element_254' }
    ];

    function calculateSum() {
        var totalSum = 0;
        quantityIds.forEach(function(id) {
            totalSum += parseFloat($('#' + id).val()) || 0;
        });
        $('#element_262').val(totalSum);

        var dcTotal = 0;
        var acTotal = 0;
        mcAssociations.forEach(function(item) {
            var isDCSelected = $('#' + item.dc).is(':checked');
            var isACSelected = $('#' + item.ac).is(':checked');
            var quantityVal = parseFloat($('#' + item.quantity).val()) || 0;

            if (isDCSelected) dcTotal += quantityVal;
            if (isACSelected) acTotal += quantityVal;
        });

        $('#element_264').val(dcTotal);
        $('#element_265').val(acTotal);
    }

    var bindIds = quantityIds.concat(mcAssociations.flatMap(function(item) {
        return [item.dc, item.ac];
    }));

    $(bindIds.map(id => '#' + id).join(',')).on('input change', calculateSum);

    calculateSum(); // initial calculation
});
