<h1 align="center">
  <img alt="Imagem da Logo do Framework node.js" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png" height="200" />
  <br />
  <img alt="Imagem da Logo do Framework express.js" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" height="150" />
  <br />
  <img alt="Imagem da Logo do Framework express.js" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" height="150" />
</h1>
<h2 align="center">Node.JS simple backend project | version: 3</h2>

<h3 align="center">Este é um projeto para testar rotas de Back-end e persistência de dados em um banco de dados relacional!</h3>

### :ferris_wheel: Para rodar a Aplicação
  
1.  Instale o node.js em [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2.  Instale o YARN em [https://classic.yarnpkg.com/en/docs/install/](https://classic.yarnpkg.com/en/docs/install/)

#### OBS.: Caso já tenha o postgres ignore os passos 3, 4 & 5, caso não queira fazer a instalação do Docker :whale:;

3. Instale o Docker em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

4. Abra o terminal do Docker e digite o comando abaixo:
```bash
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

5.  Rode o comando abaixo, para iniciar o banco de dados:
```bash
docker start database
```
6.  Instale o Postbird em [https://github.com/Paxa/postbird/releases](https://github.com/Paxa/postbird/releases)

7.  Conecte-se ao Postbird com as informações:
  -  Host: 'IP da sua máquina'
  -  Port: 5432
  -  Username: postgres
  -  Password: docker
  
  #### OBS.: Caso seja necessário altere o host de conexão dentro do index.js para 127.0.0.1 ou o IP da sua máquina Docker, caso rode docker em ambiente virtualizado!;

8.  Dentro do Postbird crie um Database chamado 'users', uma tabela chamada 'user' e crie os campos "name", "email" & password
sendo estes do tipo 'text'

9.  Clone o projeto em uma pasta no seu PC :computer:

10.  Abra o projeto em um editor de texto e rode o comando 'yarn' para baixar as depêndencias

11.  Faça o download do Postman em (https://www.getpostman.com/downloads/)[https://www.getpostman.com/downloads/]

12.  Utilize o comando 'yarn dev' para subir :rocket: a aplicação

### Rotas da aplicação

- `POST /users`: A rota deve receber `name`, `email` e `password` dentro do corpo e cadastrar um novo usuário no seguinte formato: `{ name: "Gabriel Ferraz", email: 'example@gmail.com', password: '123456' }`; Certifique-se de enviar tanto o NOME, EMAIL e PASSWORD do projeto no formato string com aspas duplas.

- `GET /users`: Rota que lista todos os usuários;

- `PUT /users/:id`: A rota deve alterar apenas o email do usuário com o `id` presente nos parâmetros da rota;

- `DELETE /users/:id`: A rota deve deletar o usuário com o `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /users` repassando `{ nome: 'Gabriel', email: 'example@gmail.com', password: '123456' } a resposta deve ser:

```js
{
  id: "1",
  nome: "Gabriel",
  email: "example@gmail.com",
  password: "123456"
}
```
