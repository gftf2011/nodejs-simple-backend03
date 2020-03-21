<h1 align="center">
  <img alt="Imagem da Logo do Framework node.js" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" height="120" />
  <br />
  <img alt="Imagem da Logo do Framework express.js" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="90" />
  <br />
  <img alt="Imagem da Logo do Framework express.js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" height="90" />
</h1>
<h2 align="center">Node.JS simple backend project | version: 3</h2>

<h3 align="center">Este é um projeto para testar rotas de Back-end e persistência de dados em um banco de dados relacional!</h3>

### :ferris_wheel: Para rodar a Aplicação
  
1.  Instale o node.js em [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2.  Instale o YARN em [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/)

3. Instale o postgresql de acordo com sua preferência:

-  Instale o postgres diretamente em [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
>  #### OBS.: Garanta que os seguintes atributos tenham os seguintes atributos:
>  Port: 5432 <br />
>  Username: postgres <br />
>  Password: docker

-  Instale usando o Docker :whale:

>  1.  Instale o Docker em https://www.docker.com/products/docker-desktop
>  2.  Abra o terminal do Docker e digite o comando:
>      ```bash
>      docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
>      ```
>  3.  Rode o comando, para iniciar o banco de dados:
>      ```bash
>      docker start database
>      ```
4.  Instale o Postbird em [https://github.com/Paxa/postbird/releases](https://github.com/Paxa/postbird/releases)

5.  Conecte-se ao Postbird com as informações:
  -  Host: 127.0.0.1
  -  Port: 5432
  -  Username: postgres
  -  Password: docker
  
#### OBS.: Caso seja necessário altere o host dentro da pasta *src/config/database.js* para localhost ou IPV4 dado pelo seu docker se utilizar um ambiente virtualizado!
```javascript
module.exports = {
  dialect: "postgres",
  host: "127.0.0.1", //IP given by your docker machine OR your localhost
  username: "postgres",
  password: "docker",
  database: "users_database",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
```
