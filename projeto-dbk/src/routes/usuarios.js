var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Rota para validação de email repetido ao cadastrar conta
router.post("/emailRepetido", function (req, res) {
    usuarioController.emailRepetido(req, res);
});

module.exports = router;