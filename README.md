# Node CRUD API com MongoDB

Este projeto foi desenvolvido como parte do meu aprendizado em Node.js. Ele implementa uma API REST completa para cadastro, listagem, atualização e remoção de usuários, utilizando Express e MongoDB (via Prisma ORM). Posteriormente, este backend foi consumido pelo projeto de página de cadastro em React.

## Objetivos do Projeto

- Praticar conceitos fundamentais de Node.js e Express.
- Realizar operações CRUD integradas com um banco de dados MongoDB.
- Utilizar Prisma como ORM para facilitar a comunicação com o banco.
- Disponibilizar uma API RESTful para ser consumida por aplicações front-end ([Pagina-de-cadastro-e-lista-de-usuarios ](https://github.com/Victor-Avilla/Pagina-de-cadastro-e-lista-de-usuarios)).
- Explorar ferramentas de teste de API como Thunder Client.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Prisma ORM**
- **Thunder Client**
- **CORS**

## Endpoints Disponíveis

- **GET `/usuarios`**: Lista todos os usuários cadastrados.
- **POST `/usuarios`**: Cria um novo usuário (validação: apenas maiores de 18 anos).
- **PUT `/usuarios/:id`**: Atualiza dados de um usuário existente.
- **DELETE `/usuarios/:id`**: Remove um usuário do banco.
