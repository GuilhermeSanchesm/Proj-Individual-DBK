var database = require("../database/config")

// Consulta do perfil dominante
function buscarPerfilDominante(idUsuario) {

    var instrucaoSql = ` 
SELECT 
    u.nome AS 'Nome do usuario',
    IFNULL(p.nome, 'Sem perfil cadastrado') AS 'Perfil predominante',
    ROUND((COUNT(rq.fk_perfil_dominante) / (SELECT COUNT(*) FROM resultado_quiz WHERE fk_usuario = ${idUsuario})) * 100, 0) AS 'Porcentagem'
FROM resultado_quiz rq
JOIN usuario u ON rq.fk_usuario = u.id_usuario
JOIN perfil p ON rq.fk_perfil_dominante = p.id_perfil
WHERE u.id_usuario = ${idUsuario}
GROUP BY u.id_usuario, u.nome, p.id_perfil, p.nome
ORDER BY COUNT(rq.fk_perfil_dominante) DESC
LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Consulta dos lados de afinidade
function buscarLadoAfinidade(idUsuario) {

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
