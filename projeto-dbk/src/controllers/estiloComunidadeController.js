var estiloComunidadeModel = require("../models/estiloComunidadeModel");

function rankingEstilos(req, res) {
   
        estiloComunidadeModel.rankingEstilos()
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar os estilos da comunidade! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }

function comparacaoAfinidade(req, res) {
   
        estiloComunidadeModel.comparacaoAfinidade()
            .then(function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar os lados de afinidade! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }


module.exports = {
    rankingEstilos,
    comparacaoAfinidade
};