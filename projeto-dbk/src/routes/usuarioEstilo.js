var express = require("express");
var router = express.Router();

var usuarioEstiloController = require("../controllers/usuarioEstiloController.js");

router.get("/:idUsuario", function (req, res) {
    usuarioEstiloController.usuarioEstilo(req, res);
});

module.exports = router;