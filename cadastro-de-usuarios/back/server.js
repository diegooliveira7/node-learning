import express, { response } from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    users.push(req.body)

    res.status(201).send('Ok, deu certo') //201 significa que eu criei e estou respondendo, é um padrão
})

app.get('/users', (req, res) => {
    // res.send('OK, deu bom')
    res.status(200).json(users)
});

app.listen(3000)

//Erros do tipo 4xx são erros na parte do cliente quando ele requisita algo q n existe
//Erros do tipo 5XX são relacionados ao servidor