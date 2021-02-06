const { nanoid } = require('nanoid');

const error = require('../../../utils/error');

const TABLE = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLE);
    }

    function get(id) {
      return store.get(TABLE, id);
    }

    function insert(data) {

      const post = {
        id: nanoid(),
        title: data.title,
        body: data.body
      }

      return store.insert(TABLE, post);
    }

    function update(id, data) {
      data.id = id;

      return store.update(TABLE, data)
    }



    return {
        list,
        get,
        insert,
        update
    };
}
