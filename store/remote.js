const request = require('request');

function createRemoteDB(host, port) {
    const URL = 'http://'+ host + ':' + port;

    function list(table) {
        return req('GET', table);
    }

    function get(table, id){
      return req('GET', table, id);
    }

    function upsert(table, data){
      return req('POST', table, null ,data);
    }

    function remove (table, id) {
      return req('DELETE', table, id );
    }

    /**TODO*/
    /*function query(table, query, join){

    }*/

    function req(method, table, id, data) {
        let url = URL + '/' + table;
        let body = '';

        if(id){
          url += '/' + id;
        }

        if(data){
          body = data;
        }

        

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json'
                },
                url,
                body,
            }, (err, req, body) => {
                if (err) {
                    console.error('Error with DB Connection', err);
                    return reject(err.message);
                }

                const resp = JSON.parse(body);
                return resolve(resp.body);
            })
        })
    }

    return {
        list,
        get,
        upsert,
        remove
    }
}

module.exports = createRemoteDB;