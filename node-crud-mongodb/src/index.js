const express = require("express")
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const port = 3000

const Movie = mongoose.model('Movie', {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});

app.get("/", async (rep, res) => {
    const movies = await Movie.find()
    return res.send(movies);
});

app.delete("/:id", async(req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    return res.send(movie)
})

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
    mongoose.connect('mongodb+srv://dpdo1:adm123@node-mongo.8iq2q.mongodb.net/?retryWrites=true&w=majority&appName=node-mongo')
    console.log('App running');
});


