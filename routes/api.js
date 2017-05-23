var express = require("express");
var controllers = require('../controllers');

var router = express.Router();

router.get('/:resource', function(req, res, next) {

    var resource = req.params.resource;
    var controller = controllers[resource];

    if(controller == null) {
        res.json({
            error: "Resource not found"
        })
        return
    }

    controller.find(req.body, function(err, results) {
        if (err) {
            res.json({
                error: err
            })
            return
        }
        res.json({
            results
        })
    })
});

router.post('/:resource', function(req, res, next) {

    var resource = req.params.resource;
    var controller = controllers[resource];

    if(controller == null) {
        res.json({
            error: "Resource not found"
        })
        return
    }

    controller.create(req.body, function(err, result) {
        if (err) {
            res.json({
                error: err
            })
            return
        }
        res.json({
            result
        })
    })
});

router.get('/:resource/:id', function(req, res, next) {

    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller == null) {
        res.json({
            error: "Resource not found"
        })
        return
    }

    controller.findById(id, function(err, result) {
        if (err) {
            res.json({
                error: "User not found"
            })
            return
        }
        res.json({
            result
        })
    })
});

router.put('/:resource/:id', function(req, res, next) {

    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller == null) {
        res.json({
            error: "Resource not found"
        })
        return
    }

    controller.update(id, req.body, function(err, result) {
        if (err) {
            res.json({
                error: err
            })
            return
        }
        res.json({
            result
        })
    })
});

router.put('/:resource/:id', function(req, res, next) {

    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller == null) {
        res.json({
            error: "Resource not found"
        })
        return
    }

    controller.update(id, req.body, function(err, result) {
        if (err) {
            res.json({
                error: err
            })
            return
        }
        res.json({
            result
        })
    })
});

router.delete('/:resource/:id', function(req, res, next) {

    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller == null) {
        res.json({
            error: "Resource not found"
        })
        return
    }

    controller.destroy(id, function(err) {
        if (err) {
            res.json({
                error: err
            })
            return
        }
        res.json({
            message : resource+" "+id+" was removed"
        })
    })
});

module.exports = router
