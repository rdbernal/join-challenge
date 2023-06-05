# Desafio Join

Sistema que permita ao usuário cadastrar produtos e suas categorias.

Requisitos:

- CRUD de categorias de produto: Cadastrar categoria, alterar categoria, listar categorias e excluir categoria
- CRUD de produtos: Cadastrar produto, alterar produto, listar produto e excluir produto

## 🛠️ Tecnologias e dependências

### Back-end

- PHP com Laravel
- Banco de dados MySQL

### Front-end

- React.js com Next.js
- Material UI
- React Hook Form
- Axios
- Luxon (tratativa de datas)

## 📂 Rodando o projeto

1. Clone do repositório

   ```
   git clone <url_do_repositorio>
   ```

### Back-end (/server)

1. Instalar Docker e Docker Compose

- https://www.docker.com/
- https://docs.docker.com/compose/

3. Entrar na pasta do servidor

   ```
   cd server
   ```

4. Criar arquivo .env com as mesmas variáveis presentes no arquivo .env.example

5. Rodar o projeto

   ```
   sudo docker-compose up
   ```

### Front-end (/client)

1. Instalar Node.js

- https://nodejs.org/en

2. Entrar na pasta do front-end

   ```
   cd client
   ```

3. Instalar as dependências

   ```
   npm install
   ```

4. Rodar o projeto

   ```
   npm run dev
   ```

## 💻 Utilizando o sistema

1. Fazer login com a conta demo.

   - login: admin@sneat.com
   - senha: admin

2. Cadastrar uma categoria

3. Cadastrar um produto
