import express from 'express'

const app = express()
app.use(express.json())
const users = []

app.get('/usuarios',(req, res) =>{
  res.status(200).json(users)
})

app.post('/usuarios',(req,res) =>{
    users.push(req.body)
    res.status(201).json({message:"usuario criado"})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})




// senha: UzzBBueP9Sx7SqMS