const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/', list);
router.get('/:id', get);
router.post('/', insert);
router.put('/:id', update);

// functions
function list(req, res, next) {
    Controller.list()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
      .then(data => {
          response.success(req, res, data, 200);
      })
      .catch(next);
}

function insert(req, res, next) {
  Controller.insert(req.body)
      .then(data => {
          response.success(req, res, data, 200);
      })
      .catch(next);
}

function update(req, res, next) {
  Controller.list(req.params.id, req.body)
      .then(data => {
          response.success(req, res, data, 200);
      })
      .catch(next);
}

module.exports = router;
