import express, { response } from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.send('OK, deu bom')
});

app.listen(3000)