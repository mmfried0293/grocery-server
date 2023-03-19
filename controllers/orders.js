const {knex} = require('./db');

async function createOrder(order) {
    return knex('orderLineItems').insert(order);
};



async function getAll(order){
    return knex.from('orderLineItems').select('*')
}

module.exports = {createOrder, getAll};