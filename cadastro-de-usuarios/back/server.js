import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors()) //dessa forma, está habilitando qualquer página de acessar

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

    let users = [];
    if(req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        });
    } else {
        users = await prisma.user.findMany()
    }

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

    res.status(201).json(req.body) //201 significa que eu criei e estou respondendo, é um padrão
})

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({message: 'Usuário deletado com sucesso!'})
});

app.listen(3000)

//Erros do tipo 4xx são erros na parte do cliente quando ele requisita algo q n existe
//Erros do tipo 5XX são relacionados ao servidor