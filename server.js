import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/usuarios', async (req, res) => {
  const users = await prisma.user.findMany()
  res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
  try {
    if (req.body.age < 18) throw new Error("Você é menor de idade")//verifica se o usuario é maior de idade

    // users.push(req.body)

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })


    res.status(201).json(user)//feedback indicando sucesso no metodo
  }

  catch (err) {
    return res.status(400).json({ error: err.message });//apresenta erro se o usuario for menor de idade
  }
  finally { console.log(users) }
})

app.put('/usuarios/:id', async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })
  res.status(201).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
  try { 
    const deletedUser = await prisma.user.delete({
    where: {
      id: req.params.id,},
  })
  res.status(200).json(deletedUser)
  }
  catch (err) {
    res.status(400).json({ error: err.message });//apresenta erro se o usuario for menor de idade
 }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})




// senha: UzzBBueP9Sx7SqMS