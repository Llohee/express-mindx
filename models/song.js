const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nggiang141:Agera141@cluster0.inysgaa.mongodb.net/mindx')

const songSchema = new mongoose.Schema({
    name: String,
    author: String
})

const songModel = mongoose.model('songs', songSchema)

module.exports = { songModel }