var express = require('express');
var router = express.Router();

const io = require('../services/io')

/* GET home page. */
router.get('/default', function(req, res) {
    console.log(io.getCurrentDefault())
        res.json(io.getCurrentDefault())
});
router.post('/default', function(req, res) {
    console.log("POSTPOSTPOST")
    console.log(req.body)
    if (req.body) {
        // let bodyJson = JSON.parse(req.body.toString())
        io.setCurrentDefault(req.body)
        // console.log(bodyJson)
        res.json('ok')
    } else {
        // res.json(500, "Missing required query param 'user'")
    }
});
router.post('/default/reset', function(req, res) {
        io.resetDefault()
        res.json('ok')
});

module.exports = router;