# DBK — Dead by Daylight Knowledge

O **DBK** é um projeto web desenvolvido individualmente como parte das atividades da faculdade. Inspirado no universo de *Dead by Daylight*, o site reúne conteúdos sobre o jogo e oferece uma experiência interativa para que os usuários explorem personagens, mapas e descubram seu estilo de jogo.

## Sobre o projeto

A proposta do DBK é apresentar informações relacionadas ao universo de *Dead by Daylight* em uma plataforma web, combinando páginas informativas, cadastro e autenticação de usuários, um quiz interativo e uma dashboard com indicadores e gráficos.

O projeto também permite registrar as respostas do quiz e utilizar esses dados para apresentar informações sobre o perfil de jogo do usuário e tendências observadas entre os participantes.

## Funcionalidades

- **Página inicial:** apresentação do projeto e acesso às demais áreas do site.
- **Cadastro e login:** criação de conta e autenticação de usuários.
- **Mural:** página de boas-vindas e navegação principal.
- **Personagens:** conteúdo informativo sobre personagens do jogo.
- **Mapas:** página dedicada aos mapas de *Dead by Daylight*.
- **Quiz de estilo de jogo:** perguntas sobre situações e preferências de jogo para identificar afinidades entre diferentes estilos de Sobrevivente e Assassino.
- **Dashboard:** visualização dos resultados do quiz por meio de indicadores e gráficos, incluindo:
  - perfil predominante do usuário;
  - proporção de afinidade entre Sobrevivente e Assassino;
  - gráfico radar com os estilos de jogo do usuário;
  - ranking dos estilos registrados pela comunidade;
  - comparação geral entre os lados Sobrevivente e Assassino.

## Tecnologias utilizadas

- **HTML5** — estrutura das páginas.
- **CSS3** — estilização e organização visual.
- **JavaScript** — interatividade, validações e comunicação com o servidor.
- **Node.js** — ambiente de execução do back-end.
- **Express** — criação do servidor e das rotas da aplicação.
- **MySQL** — armazenamento dos dados.
- **mysql2** — conexão entre a aplicação e o banco de dados.
- **Chart.js** — criação dos gráficos da dashboard.
- **Web Data Viz** — estrutura de referência utilizada no desenvolvimento da aplicação.

## Organização do projeto

A aplicação está organizada, principalmente, da seguinte forma:

```text
projeto-dbk/
├── app.js
├── package.json
├── public/
│   ├── Assets/
│   ├── css/
│   ├── dashboard/
│   ├── js/
│   ├── index.html
│   ├── cadastro.html
│   ├── login.html
│   ├── mural.html
│   ├── personagens.html
│   ├── mapas.html
│   └── quiz.html
└── src/
    ├── controllers/
    ├── database/
    ├── models/
    └── routes/
```

- `public/`: reúne as páginas HTML, folhas de estilo, scripts do front-end, imagens e a dashboard.
- `src/controllers/`: recebe as requisições e coordena as operações da aplicação.
- `src/models/`: contém as consultas e operações relacionadas ao banco de dados.
- `src/routes/`: define os caminhos da API.
- `src/database/`: contém a configuração de conexão e arquivos SQL relacionados ao banco.
- `app.js`: configura e inicia o servidor Express.

O arquivo `DERdbk.png`, localizado na pasta principal do projeto, apresenta o diagrama entidade-relacionamento do banco de dados.

## Como executar o projeto

### Pré-requisitos
Antes de iniciar, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/) ou um servidor MySQL acessível
- Um navegador atualizado

### 1. Acessar a pasta da aplicação

No terminal, entre na pasta `web-data-viz`, onde está localizado o arquivo `package.json`.

### 2. Configurar o banco de dados

Configure o banco MySQL de acordo com a estrutura utilizada pela aplicação. Os arquivos SQL disponíveis estão em `src/database/`. O diagrama `DERdbk.png`, na pasta principal, pode ser consultado para visualizar a estrutura do banco.

### 3. Configurar as variáveis de ambiente

Preencha o arquivo `.env` ou `.env.dev` com as credenciais e configurações de conexão do banco de dados e do servidor, conforme os nomes de variáveis esperados pela aplicação.

**Importante:** não compartilhe arquivos `.env` com senhas ou credenciais reais. Utilize valores próprios no seu ambiente.

### 4. Instalar as dependências

Execute no terminal:

```bash
npm install
```

### 5. Iniciar o servidor

Execute:

```bash
npm start
```

O servidor será iniciado utilizando a porta e o endereço configurados nas variáveis de ambiente. Acesse no navegador o endereço indicado no terminal.
Para encerrar a execução, utilize `Ctrl + C` no terminal.

## Rotas da aplicação
As rotas da API são registradas no arquivo `app.js`. Entre os grupos de rotas implementados estão:

| Rota base | Finalidade |
| `/usuarios` | Cadastro e autenticação de usuários |
| `/quiz` | Registro de respostas e atualização do perfil |
| `/kpis` | Consulta de indicadores do perfil e da afinidade do usuário |
| `/usuarioEstilo` | Consulta dos resultados de estilo de jogo de um usuário |
| `/estiloComunidade` | Consulta do ranking de estilos e comparação entre os lados |

## Aviso
**Este é um projeto desenvolvido exclusivamente para fins acadêmicos, como parte do aprendizado e da prática de desenvolvimento de sistemas web. Não possui finalidade comercial.**
