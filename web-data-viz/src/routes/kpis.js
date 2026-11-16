var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController.js");

router.post("/cadastrar", function (req, res) {
    kpisController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    kpisController.listar(req, res);
});

router.get("/perfilDominante/:idUsuario", function (req, res) {
    kpisController.buscarPerfilDominante(req, res);
});

router.get("/ladoAfinidade/:idUsuario", function (req, res) {
    kpisController.buscarLadoAfinidade(req, res);
});



module.exports = router;