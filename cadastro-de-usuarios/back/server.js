import express, { response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {
    // users.push(req.body)

    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    });

    res.status(201).send('Ok, deu certo') //201 significa que eu criei e estou respondendo, é um padrão
});

app.get('/users', async (req, res) => {
    // res.send('OK, deu bom')

    const users = await prisma.user.findMany()

    res.status(200).json(users)
});

app.put('/users/:id', async (req, res) => {
    // users.push(req.body)

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    });

    res.status(201).send('Ok, deu certo') //201 significa que eu criei e estou respondendo, é um padrão
})

// app.delete()

app.listen(3000)

//Erros do tipo 4xx são erros na parte do cliente quando ele requisita algo q n existe
//Erros do tipo 5XX são relacionados ao servidor