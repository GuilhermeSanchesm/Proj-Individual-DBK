var express = require("express");
var router = express.Router();

var estiloComunidadeController = require("../controllers/estiloComunidadeController.js");

// Busca os dados dos estilos respondidos pela comunidade
router.get("/rankingEstilos", function (req, res) {
    estiloComunidadeController.rankingEstilos(req, res);
});

// Busca afinidades entre sobrevivente e assassino na comunidade
router.get("/comparacaoAfinidade", function (req, res) {
    estiloComunidadeController.comparacaoAfinidade(req, res);
});
module.exports = router;