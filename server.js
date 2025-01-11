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
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }
  })

  res.status(201).json(user)
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

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})




// senha: UzzBBueP9Sx7SqMS