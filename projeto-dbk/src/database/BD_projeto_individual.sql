CREATE DATABASE projeto_individual_dbk;
USE projeto_individual_dbk;

CREATE TABLE perfil (
    id_perfil INT AUTO_INCREMENT PRIMARY KEY,
    letra_quiz CHAR(1) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    categoria VARCHAR(45)
    
    CONSTRAINT chkCategoria CHECK(categoria IN ('Assassino', 'Sobrevivente'))
);

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    fk_perfil_dominante INT,
    
    CONSTRAINT fkUsuarioPerfil FOREIGN KEY (fk_perfil_dominante)
        REFERENCES perfil(id_perfil)
);

CREATE TABLE resultado_quiz (
    id_resultado INT AUTO_INCREMENT PRIMARY KEY,
    alternativaA INT DEFAULT 0,
    alternativaB INT DEFAULT 0,
    alternativaC INT DEFAULT 0,
    alternativaD INT DEFAULT 0,
    alternativaE INT DEFAULT 0,
    alternativaF INT DEFAULT 0,
    dt_resposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT NOT NULL,
    fk_perfil_dominante INT NOT NULL, 

    CONSTRAINT fkResultadoUsuario FOREIGN KEY (fk_usuario)
        REFERENCES usuario(id_usuario),
    CONSTRAINT fkResultadoPerfil FOREIGN KEY (fk_perfil_dominante)
        REFERENCES perfil(id_perfil)
);

INSERT INTO perfil (letra_quiz, nome, descricao, categoria) VALUES
('A', 'Sobrevivente Looper', 'Você foca em atrair a atenção do assassino e mantê-lo ocupado
 em perseguições longas usando obstáculos do cenário, comprando tempo valioso para a equipe.', 'Sobrevivente'),
 
('B', 'Sobrevivente Gen Rush', 'Você prioriza exclusivamente o 
reparo rápido dos geradores, evitando perseguições e utilizando vantagens
 e itens voltados para acelerar os objetivos principais.', 'Sobrevivente'),
 
('C', 'Sobrevivente Suporte', 'Você se dedica a manter a equipe viva e funcional, 
 focando em curar aliados feridos, realizar resgates seguros nos ganchos, bloquear golpes e fornecer informações.', 'Sobrevivente'),
 
('D', 'Killer Chaser', 'Você foca em encerrar perseguições o mais rápido possível,
 utilizando poderes de mobilidade ou habilidades de combate direto para enganchar sobreviventes em ritmo acelerado.', 'Assassino'),
 
('E', 'Killer Tunneler', 'Você concentra seus esforços em perseguir e enganchar repetidamente um único sobrevivente recém-resgatado,
 buscando eliminá-lo da partida rapidamente para reduzir a força de trabalho da equipe adversária.', 'Assassino'),
 
('F', 'Killer Controlador de mapa', 'Você prioriza a defesa de áreas estratégicas e o atraso do progresso dos geradores,
 aplicando regressão nos objetivos e mantendo uma zona de difícil acesso para os sobreviventes.', 'Assassino');