const express = require('express');
const router = express.Router();
const movie = require('../models/mongo-model');

// get list of movies from database
router.get('/movie',async (req,res,next)=>{
    const getResponse = await movie.find();
    res.send(getResponse);
});

// add a movie to database
router.post('/movie',async (req,res,next) => {

    try
    {const Movie = new movie(req.body);
    await Movie.save();
    res.send(Movie);}
    catch(err){
        next(err);
    }

});

// update a movie from database
router.put('/movie/:id',async (req,res,next)=>{
    try {
    await movie.findByIdAndUpdate({ _id:req.params.id },req.body);
    const putResponse = await movie.findOne({_id:req.params.id});
    res.send(putResponse);}
    catch(err){
        next(err);
    }
});

// delete a movie from database
router.delete('/movie/:id',async(req,res,next)=>{
    try{
    const deleteResponse = await movie.findByIdAndRemove({_id:req.params.id});
    res.send(deleteResponse);}
    catch(err){
        next(err);
    }
});

module.exports = router;
