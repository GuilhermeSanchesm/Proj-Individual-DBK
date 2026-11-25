var express = require("express");
var router = express.Router();

var kpisController = require("../controllers/kpisController.js");

router.post("/cadastrar", function (req, res) {
    kpisController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    kpisController.listar(req, res);
});

// Busca perfil dominante
router.get("/perfilDominante/:idUsuario", function (req, res) {
    kpisController.buscarPerfilDominante(req, res);
});

// Busca afinidade do usuario entre sobrevivente e assassino
router.get("/ladoAfinidade/:idUsuario", function (req, res) {
    kpisController.buscarLadoAfinidade(req, res);
});



module.exports = router;