var express = require('express');
var router = express.Router();
var professorService = require("../services/professor.sevices")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.get(
    "/listar"
    ,
    (req,res,next) => {
        res.json(professorService.list())
    }
)

module.exports = router;
