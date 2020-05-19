const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/todo', { useMongoClient: true });
//tive que colocar este { useMongoClient: true } pq nao estava funcionando sem !!!