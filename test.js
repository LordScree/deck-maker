// Tests
var test = require('tape');

test('initial test', function(t) {
    t.plan(1);

    t.equal(typeof Date.now, 'function');
});