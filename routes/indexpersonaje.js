
var express = require('express');
var router = express.Router();
const knex = require('../db/knex')

router.get('/', (req, res) => {
      console.log("hola");   
      res.render('front/index');
   
});


module.exports = router;