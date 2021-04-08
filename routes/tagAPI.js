
// separate roots apis

const express  = require ("express")
const router = express.Router()

const tag = require('../models/tagSchema');



// get all tag
router.get('/tag' , async(req, res) => {
    const tag = await tag.find();
    res.json(tag);
});

// get tag by id
router.get('/tag/:id' , async(req, res) => {
    const tag = await tag.findById(req.params.id).exec();
    res.json(tag);
});

// add tag
router.post('/tag' , async(req, res) => {
    const createtag = await tag.create(req.body)
    res.json(createtag);

});

// update toodo by id 
router.put('/tag/:id' , async(req, res) => {
    const upadted = await tag.findByIdAndUpdate(req.params.id,req.body,{new : true}).exec();

    res.json(upadted);
});

// delete tag by id 
router.delete('/tag/:id' , async(req, res) => {
    const tag = await tag.findByIdAndDelete(req.params.id,req.body).exec();
    res.json({message : "deleted tag"});
});


module.exports = router ;