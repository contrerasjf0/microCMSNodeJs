const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/', function (req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, 'succes', 200, lista);
        })
        .catch(next);
    
});

router.get('/:id', function (req, res, next) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, "succes", 200, user);
        })
        .catch(next);
    
});

router.post('/', function (req, res, next) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, 'succes', 200, user);
        })
        .catch(next);
    
});

router.put('/', secure('update'), function (req, res, next) {
    Controller.upsert(req.body)
        .then((user) => {
            response.success(req, res, 'succes', 200, user);
        })
        .catch(next);
    
});

router.delete('/', function (req, res, next) {
    Controller.remove(req.body.id)
        .then((user) => {
            response.success(req, res, 'succes', 200, user);
        })
        .catch(next);
    
});

router.post('/follow/:id', secure('follow'), function (req, res, next) {
    Controller.follow(req.user.id, req.params.id)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(next);
});

router.get('/:id/following', function (req, res, next) {
	return Controller.following(req.params.id)
		.then( (data) => {
			return response.success(req, res, data, 200);
		})
		.catch(next);
});




module.exports = router; 