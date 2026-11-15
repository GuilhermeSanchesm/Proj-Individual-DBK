var quizModel = require("../models/quizModels");

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var fkPerfilDominante = req.body.fkPerfilDominanteServer;
    var alternativaA = req.body.survLooperServer;
    var alternativaB = req.body.survGenRushServer;
    var alternativaC = req.body.survSuportServer;
    var alternativaD = req.body.killerTunnelerServer;
    var alternativaE = req.body.killerChaserServer;
    var alternativaF = req.body.killerControladorServer;

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (fkPerfilDominante == undefined) {
        res.status(400).send("A fkPerfilDominante está undefined!");
    } else {
        quizModel.cadastrar(alternativaA, alternativaB, alternativaC, alternativaD, alternativaE, alternativaF, idUsuario, fkPerfilDominante)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function atualizarPerfil(req, res) { 
    var idUsuario = req.body.idUsuarioServer;
    var fkPerfilDominante = req.body.fkPerfilDominanteServer;

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (fkPerfilDominante == undefined) {
        res.status(400).send("A fkPerfilDominante está undefined!");
    } else {
        quizModel.atualizarPerfil(fkPerfilDominante, idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    atualizarPerfil
};