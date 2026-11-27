var database = require("../database/config")

// Consulta do perfil dominante
function buscarPerfilDominante(idUsuario) {
    var instrucaoSql = ` 
        SELECT 
            u.nome AS nomeUsuario,
            IFNULL(SUM(rq.alternativaA), 0) AS totalA,
            IFNULL(SUM(rq.alternativaB), 0) AS totalB,
            IFNULL(SUM(rq.alternativaC), 0) AS totalC,
            IFNULL(SUM(rq.alternativaD), 0) AS totalD,
            IFNULL(SUM(rq.alternativaE), 0) AS totalE,
            IFNULL(SUM(rq.alternativaF), 0) AS totalF
        FROM usuario u
        LEFT JOIN resultado_quiz rq ON u.id_usuario = rq.fk_usuario
        WHERE u.id_usuario = ${idUsuario}
        GROUP BY u.id_usuario, u.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Consulta dos lados de afinidade
function buscarLadoAfinidade(idUsuario) {

    // Lado afinidade do usuário logado
    var instrucaoSql = ` 
SELECT 
    u.id_usuario,
    ROUND((SUM(rq.alternativaA + rq.alternativaB + rq.alternativaC) / 
        IFNULL(SUM(rq.alternativaA + rq.alternativaB + rq.alternativaC + 
                   rq.alternativaD + rq.alternativaE + rq.alternativaF), 0)) * 100, 0) AS porcentagem_sobrevivente,
    ROUND(
        (SUM(rq.alternativaD + rq.alternativaE + rq.alternativaF) / 
        IFNULL(SUM(rq.alternativaA + rq.alternativaB + rq.alternativaC + 
                   rq.alternativaD + rq.alternativaE + rq.alternativaF), 0)) * 100, 0) AS porcentagem_assassino
FROM usuario u
JOIN resultado_quiz rq 
    ON rq.fk_usuario = u.id_usuario
WHERE u.id_usuario = ${idUsuario}
GROUP BY u.id_usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPerfilDominante,
    buscarLadoAfinidade
}
