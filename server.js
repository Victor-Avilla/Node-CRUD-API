import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
const users = []

app.get('/usuarios', (req, res) => {

  res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
  try {
    users.push(req.body)

    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    })

  if(req.body.age < 18) throw new Error("Você é menor de idade")

  res.status(201).json(user)
  }
  catch (err) {
  return res.status(400).json({ error: err.message });
}
finally{console.log(users)}
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
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  })
  res.status(204).json({ message: "usurio deletado com sucesso" })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})




// senha: UzzBBueP9Sx7SqMS