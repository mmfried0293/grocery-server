const knex = require('./db');


async function createItem(item) {
    return knex('items').insert(item);
}

module.exports = createItem;