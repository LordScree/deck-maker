const mtg = require('mtgsdk');

function Service() {

};

Service.prototype.getCardsBySubtype = function (subtypes) {
    return mtg.card.where({ subtypes: subtypes });
};

module.exports.Service = Service;