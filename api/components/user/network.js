const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', function (req, res) {
  Controller.list()
      .then((lista) => {
          response.success(req, res, 'succes', 200, lista);
      })
      .catch((err) => {
          response.error(req, res, err.message, 500);
      });
  
});

router.get('/:id', function (req, res) {
  Controller.get(req.params.id)
      .then((user) => {
          response.success(req, res, "succes", 200, user);
      })
      .catch((err) => {
          response.error(req, res, err.message, 500);
      });
  
});

router.post('/', function (req, res) {
  Controller.upsert(req.body)
      .then((user) => {
          response.success(req, res, 'succes', 200, user);
      })
      .catch((err) => {
          response.error(req, res, err.message, 500);
      });
  
});

router.delete('/', function (req, res) {
  Controller.remove(req.body.id)
      .then((user) => {
          response.success(req, res, 'succes', 200, user);
      })
      .catch((err) => {
          response.error(req, res, err.message, 500);
      });
  
});


module.exports = router; 