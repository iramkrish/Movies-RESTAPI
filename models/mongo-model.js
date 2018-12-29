const mongoose = require('mongoose');

//create schema for mongodb collection
const schema = mongoose.Schema;

// create scheme and model
const movieSchema = new schema(
    {
        name : {
            type : String,
            required : [true,'name field is required']
        },
        review : {
            type : String
        },
        availableAtTheaters : {
            type : Boolean,
            default : false,
        }
    }
);

const  Movies = mongoose.model('movies',movieSchema);

module.exports = Movies;