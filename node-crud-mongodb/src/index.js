const express = require("express")
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000
mongoose.connect('mongodb+srv://dpdo1:adm123@node-mongo.8iq2q.mongodb.net/?retryWrites=true&w=majority&appName=node-mongo')

const Movie = mongoose.model('Movie', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});

app.get("/", (rep, res) => {
    res.send("Hello World");
});

app.post("/", async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    });

    await movie.save();
    res.send(movie);
});

app.listen(port, () => {
    console.log('App running');
});


