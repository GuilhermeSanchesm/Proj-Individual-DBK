var database = require("../database/config");

function rankingEstilos() {

    var instrucaoSql = `
SELECT 
    SUM(alternativaA) AS 'A',
    SUM(alternativaB) AS 'B',
    SUM(alternativaC) AS 'C',
    SUM(alternativaD) AS 'D',
    SUM(alternativaE) AS 'E',
    SUM(alternativaF) AS 'F'
FROM resultado_quiz;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function comparacaoAfinidade() {

    var instrucaoSql = `
SELECT 
    SUM(alternativaA + alternativaB + alternativaC) AS 'Sobreviventes',
    SUM(alternativaD + alternativaE + alternativaF) AS 'Assassinos'
FROM resultado_quiz;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    rankingEstilos,
    comparacaoAfinidade
};