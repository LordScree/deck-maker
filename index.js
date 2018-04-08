// Root
var list_service = require('./service/list-cards');

var s = new list_service.Service();

var result = s.getCardsBySubtype('Locus');

console.log('End Result Length = ' + result);