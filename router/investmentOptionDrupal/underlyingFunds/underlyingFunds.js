var express = require('express');
var router = express.Router();
var rootPath = require('../../../util')

router.get('/vceptpl/api/underlyingFunds', function(req, res){
  var options = rootPath('public/investmentOptionDrupal');
    var fileName = "underlyingFunds"+".json";
          res.sendFile(fileName, options, (err) =>  {
            if (err) {
              next(err);
            } else {
              console.log('Sent:', fileName);
            }
          });
});

module.exports = router;
