const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
}

function find() {
    return db('user');
};

function findById(id) {
    return db('user').where('id','=',id);
};

function add(body) {
    return db('user').insert(body);
};