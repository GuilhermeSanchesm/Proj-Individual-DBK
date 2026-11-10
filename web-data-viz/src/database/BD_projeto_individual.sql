CREATE DATABASE projeto_individual_dbk;
USE projeto_individual_dbk;

CREATE TABLE usuario(
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(255) NOT NULL
);

SELECT * FROM usuario;
