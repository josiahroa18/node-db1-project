const db = require("../data/dbConfig.js");

// Db helper functions
module.exports = {
    get,
    insert,
    getById,
    update,
    remove
}

function get(){
    return db('accounts')
}

function insert(account){
    return db('accounts')
    .insert(account)
    .then(id => {
        return getById(id[0]);
    })
}

function getById(id){
    return db('accounts')
    .where({ id })
    .first();
}

function update(id, changes){
    return db('accounts')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('accounts')
    .where('id', id)
    .del()
}