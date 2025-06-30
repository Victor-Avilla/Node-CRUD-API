
# 🧩 Node CRUD API com MongoDB | Node CRUD API with MongoDB

Este projeto foi desenvolvido como parte do meu aprendizado em Node.js.  
This project was developed as part of my Node.js learning process.

Ele implementa uma API REST completa para cadastro, listagem, atualização e remoção de usuários, utilizando Express e MongoDB (via Prisma ORM). Posteriormente, este backend foi consumido pelo projeto de página de cadastro em React.  
It implements a full REST API for user creation, listing, updating, and deletion using Express and MongoDB (via Prisma ORM). This backend was later consumed by my user registration React project.

---

## 🎯 Objetivos do Projeto | Project Goals

- Praticar conceitos fundamentais de Node.js e Express  
  Practice core concepts of Node.js and Express  
- Realizar operações CRUD com MongoDB  
  Perform CRUD operations with MongoDB  
- Utilizar Prisma como ORM para facilitar a comunicação  
  Use Prisma ORM to simplify database communication  
- Criar uma API RESTful para ser consumida por aplicações front-end  
  Provide a RESTful API to be consumed by front-end apps  
- Explorar ferramentas de teste como Thunder Client  
  Explore API testing tools like Thunder Client

---

## ⚙️ Tecnologias Utilizadas | Technologies Used

- Node.js  
- Express  
- MongoDB  
- Prisma ORM  
- Thunder Client  
- CORS

---

## 🔌 Endpoints Disponíveis | Available Endpoints

- `GET /usuarios`  
  Lista todos os usuários cadastrados  
  Returns a list of all registered users

- `POST /usuarios`  
  Cria um novo usuário (validação: apenas maiores de 18 anos)  
  Creates a new user (validation: must be over 18)

- `PUT /usuarios/:id`  
  Atualiza dados de um usuário existente  
  Updates an existing user's data

- `DELETE /usuarios/:id`  
  Remove um usuário do banco de dados  
  Deletes a user from the database
