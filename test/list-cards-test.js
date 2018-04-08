// Call the mtgsdk to list cards for various reasons.

var test = require('tape');
var list_service = require('../service/list-cards');

test('Get loci', function (t) {
    t.plan(1);

    var s = new list_service.Service();
    var result = s.getCardsBySubtype('Locus');

    // result is async... we need to wait for the actual response...

    result.then(
        cards => {
            // We know there are 2 cards with the "Locus" sub-type...
            var actual = cards.length;
            var expected = 2;
            t.equal(actual, expected, "Unexpected number of locus cards (expected: " + expected + ", actual: " + actual + ")");
        }
    )

});
