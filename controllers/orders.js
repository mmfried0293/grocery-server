const {knex} = require('./db');

async function createOrder(order) {
    return knex('orderLineItems').insert(order);
};


module.exports = {createOrder};