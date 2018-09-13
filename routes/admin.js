var express = require('express');
var router = express.Router();

const io = require('../services/io')

/* GET home page. */
router.get('/default', function(req, res) {
    console.log(io.getCurrentDefault())
        res.json(io.getCurrentDefault())
});
router.post('/default', function(req, res) {
    if (req.body) {
        
        io.setCurrentDefault(req.body)
        
        res.json('ok')
    }
});
router.post('/default/reset', function(req, res) {
        io.resetDefault()
        res.json('reset')
});
router.post('/delete', function (req, res) {
    io.deleteFile()
    res.json('delete')
})

module.exports = router;