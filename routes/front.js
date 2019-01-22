var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
      console.log("hola");   
      res.render('front/indexp');
   
});


module.exports = router;