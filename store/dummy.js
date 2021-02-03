const calc = require("../utils/calc");

const db = {
  'user': [
      { id: 1, name: 'Frank' },
      { id: 2, name: 'Chiviscovis' },
  ],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  let col = await list(table);
  return col.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data) {

  if (!db[tabla]) {
    db[tabla] = [];
}

  let record = await get(table, data.id);


  if(!record){
    db[table].push(data);
  }else{
    data = {
      ...record,
      ...data
    }
    const index = db[table].findIndex((item) => item.id === record.id);
    db[table].splice(index, 1);
    db[table].push(data);   
  }
  

  return data;
}

async function remove(table, id) {
  const index = db[table].findIndex((record) => record.id === id);
  const deletedItems = db[table].splice(index, 1);

  return deletedItems;
}

async function query(tabla, q) {
  let col = await list(tabla);
  let keys = Object.keys(q);
  let key = keys[0];
  
  return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query
};
