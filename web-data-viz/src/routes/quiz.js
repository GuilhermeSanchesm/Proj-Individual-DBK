var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController.js");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});

router.put("/atualizarPerfil", function (req, res) {
    quizController.atualizarPerfil(req, res);
});

module.exports = router;