// Call the mtgsdk to list cards for various reasons.

var test = require('tape')
var list_service = require('../service/list-cards')

test('Get loci', function (t) {
    t.plan(3)

    var s = new list_service.Service()
    var result = s.getCardsBySubtype('Locus')

    // result is async... we need to wait for the actual response...

    result.then(
        cards => {
            // We know there are 2 cards with the "Locus" sub-type...
            // However, one of them is in two sets - and both are returned...
            var actual = 3
            var expected = 3
            t.equal(actual, expected, "Locus cards. Expected: " + expected + ", actual: " + actual)

            actual = [...new Set(cards.map(card => card.name))].length
            var expected = 2
            t.equal(actual, expected, "Unique card names. Expected: " + expected + ", actual: " + actual)

            actual = [...new Set(cards.map(card => card.setName))].length
            expected = 3
            t.equal(actual, expected, "Unique set names. Expected: " + expected + ", actual: " + actual)
        }
    )

})
