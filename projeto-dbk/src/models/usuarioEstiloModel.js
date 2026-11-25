var database = require("../database/config");

function usuarioEstilo(idUsuario) {

// Estilos de jogo do usuário baseado nas suas respostas
var instrucaoSql = `
SELECT u.id_usuario, SUM(rq.alternativaA) 'A',
SUM(rq.alternativaB) 'B',
SUM(rq.alternativaC) 'C',
SUM(rq.alternativaD) 'D',
SUM(rq.alternativaE) 'E',
SUM(rq.alternativaF) 'F'
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
    usuarioEstilo
};