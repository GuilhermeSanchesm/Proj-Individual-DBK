var kpisModel = require("../models/kpisModel")

// Função para descobrir o perfil dominante
   function buscarPerfilDominante(req, res) {
    var idUsuario = req.params.idUsuario;

    kpisModel.buscarPerfilDominante(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                var dados = resultado[0]; 

                var totalA = Number(dados.totalA || 0);
                var totalB = Number(dados.totalB || 0);
                var totalC = Number(dados.totalC || 0);
                var totalD = Number(dados.totalD || 0);
                var totalE = Number(dados.totalE || 0);
                var totalF = Number(dados.totalF || 0);

                var totalGeral = totalA + totalB + totalC + totalD + totalE + totalF;

                // Usuários sem registros de quiz
                if (totalGeral === 0 || isNaN(totalGeral)) {
                    res.status(200).json([{
                        'Nome do usuario': dados.nomeUsuario || 'Usuário',
                        'Perfil predominante': 'Sem perfil cadastrado',
                        'Porcentagem': 0
                    }]);
                    return;
                }

                var maior = totalA;
                var perfil = "Surv Looper";

                if (totalB > maior) { maior = totalB; perfil = "Surv Gen Rush"; }
                if (totalC > maior) { maior = totalC; perfil = "Surv Support"; }
                if (totalD > maior) { maior = totalD; perfil = "Killer Tunneler"; }
                if (totalE > maior) { maior = totalE; perfil = "Killer Chaser"; }
                if (totalF > maior) { maior = totalF; perfil = "Killer Controlador"; }

                var porcentagem = ((maior / totalGeral) * 100).toFixed(0);

                res.status(200).json([{
                    'Nome do usuario': dados.nomeUsuario,
                    'Perfil predominante': perfil,
                    'Porcentagem': porcentagem
                }]);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log("Erro no Controller de KPI Perfil Dominante:", erro);
            res.status(500).json(erro.sqlMessage || erro.message);
        });
}


function buscarLadoAfinidade(req, res) {
    
    const limite_linhas = 7;

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);
    
    kpisModel.buscarLadoAfinidade(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPerfilDominante,
    buscarLadoAfinidade
}