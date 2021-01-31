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

  let user = null;

  if(data.id)
    user = await get(table, data.id);


  if(!user){
    data.id = calc.rand(100);
    db[table].push(data);
  }else{
    data = {
      ...user,
      ...data,
      id: user.id
    }
    const index = db[table].findIndex((record) => record.id === user.id);
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

module.exports = {
  list,
  get,
  upsert,
  remove,
};
