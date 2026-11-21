var express = require("express");
var router = express.Router();

var estiloComunidadeController = require("../controllers/estiloComunidadeController.js");

router.get("/rankingEstilos", function (req, res) {
    estiloComunidadeController.rankingEstilos(req, res);
});

router.get("/comparacaoAfinidade", function (req, res) {
    estiloComunidadeController.comparacaoAfinidade(req, res);
});
module.exports = router;