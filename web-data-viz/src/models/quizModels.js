var database = require("../database/config");

function cadastrar(alternativaA, alternativaB, alternativaC, alternativaD,
     alternativaE, alternativaF, idUsuario, fkPerfilDominante) {
        
    var instrucaoSql = `
        INSERT INTO resultado_quiz 
        (alternativaA, alternativaB, alternativaC, alternativaD, alternativaE, alternativaF, fk_usuario, fk_perfil_dominante)
        VALUES (${alternativaA}, ${alternativaB}, ${alternativaC}, ${alternativaD}, ${alternativaE}, ${alternativaF}, 
        ${idUsuario}, ${fkPerfilDominante});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarPerfil(fkPerfilDominante, idUsuario) {
        
    var instrucaoSql = `
        UPDATE usuario 
        SET fk_perfil_dominante = ${fkPerfilDominante} 
        WHERE id_usuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    atualizarPerfil,
    cadastrar
};