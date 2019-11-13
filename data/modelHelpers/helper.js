const db = require('../../data/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    add,
}

function find() {
    return db('user').select('user.username','user.department');
};

function findBy(filter) {
    return db('user').where(filter);
}

function findById(id) {
    return db('user').where('id','=',id)
    .first();
};

function add(body) {
    return db('user').insert(body)
    .then(ids => {
        const [id] = ids
        return findById(id)
    });
};