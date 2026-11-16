var database = require("../database/config")

// Consulta do perfil dominante
function buscarPerfilDominante(idUsuario) {

    var instrucaoSql = ` 
       SELECT u.nome AS 'Nome do usuario', p.nome 'Perfil predominante',
ROUND(
CASE 
    WHEN rq.fk_perfil_dominante = 1 THEN alternativaA
    WHEN rq.fk_perfil_dominante = 2 THEN alternativaB
    WHEN rq.fk_perfil_dominante = 3 THEN alternativaC
    WHEN rq.fk_perfil_dominante = 4 THEN alternativaD
    WHEN rq.fk_perfil_dominante = 5 THEN alternativaE
    WHEN rq.fk_perfil_dominante = 6 THEN alternativaF
END / 
	IFNULL((alternativaA + alternativaB + alternativaC + alternativaD + alternativaE + alternativaF), 0) * 100, 0) AS 'Porcentagem'
FROM resultado_quiz rq
JOIN usuario u 
    ON rq.fk_usuario = u.id_usuario
JOIN perfil p 
    ON rq.fk_perfil_dominante = p.id_perfil
WHERE u.id_usuario = ${idUsuario}
ORDER BY rq.dt_resposta DESC
LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Consulta dos lados de afinidade
function buscarLadoAfinidade(idUsuario) {

    var instrucaoSql = ` 
SELECT u.id_usuario,
ROUND(((rq.alternativaA + rq.alternativaB + rq.alternativaC) / 
(rq.alternativaA + rq.alternativaB + rq.alternativaC + rq.alternativaD + rq.alternativaE + rq.alternativaF) * 100) ,0)
AS porcentagem_sobrevivente,

ROUND(((rq.alternativaD + rq.alternativaE + rq.alternativaF) /
(rq.alternativaA + rq.alternativaB + rq.alternativaC + rq.alternativaD + rq.alternativaE + rq.alternativaF) * 100), 0)
AS porcentagem_assassino

FROM resultado_quiz rq
	JOIN usuario u
		ON rq.fk_usuario = u.id_usuario
WHERE u.id_usuario = ${idUsuario}
ORDER BY rq.dt_resposta DESC
LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPerfilDominante,
    buscarLadoAfinidade
}
