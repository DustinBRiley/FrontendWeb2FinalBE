const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)