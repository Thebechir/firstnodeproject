
// separate roots apis

const express  = require ("express")
const router = express.Router()

const Tuto = require('../models/tutoSchema');



// get all tuto
router.get('/tuto' , async(req, res) => {
    const tuto = await Tuto.find();
    res.json(tuto);
});

// get Tuto by id
router.get('/tuto/:id' , async(req, res) => {
    const tuto = await Tuto.findById(req.params.id).exec();
    res.json(tuto);
});

// add Tuto
router.post('/tuto' , async(req, res) => {
    const createTuto = await Tuto.create(req.body)
    res.json(createTuto);

});

// update toodo by id 
router.put('/tuto/:id' , async(req, res) => {
    const upadted = await Tuto.findByIdAndUpdate(req.params.id,req.body,{new : true}).exec();

    res.json(upadted);
});

// delete Tuto by id 
router.delete('/tuto/:id' , async(req, res) => {
    const tuto = await Tuto.findByIdAndDelete(req.params.id,req.body).exec();
    res.json({message : "deleted Tuto"});
});


module.exports = router ;