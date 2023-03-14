const knex = require('./db');


async function createItem(item) {
    return knex('items').insert(item);
};

async function getAll(){
    return knex.from('items').select('*');
};

async function fetchItems() {
    let res = await fetch('http://localhost:8000/items/json');

}

module.exports = {createItem,
                getAll,
                fetchItems
};