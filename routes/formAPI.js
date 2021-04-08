
// separate roots apis

const express  = require ("express")
const router = express.Router()

const form = require('../models/formSchema');

router.get('/forms' , async(req, res) => {
    const forms = await form.find();
    res.json(forms);
});

// get form by id
router.get('/forms/:id' , async(req, res) => {
    const forms = await form.findById(req.params.id).exec();
    res.json(forms);
});

// add form
router.post('/forms' , async(req, res) => {
    const createform = await form.create(req.body)
    res.json(createform);

});

// update toodo by id 
router.put('/forms/:id' , async(req, res) => {
    const upadted = await form.findByIdAndUpdate(req.params.id,req.body,{new : true})

    res.json(upadted);
});

// delete form by id 
router.delete('/forms/:id' , async(req, res) => {
    const forms = await form.findByIdAndDelete(req.params.id,req.body).exec();
    res.json({message : "deleted form"});
});

// <25 all forms
router.get('/forms/filterbechir/:minage' , async(req, res) => {
    const age = await form.find({"age": {$gt :req.params.minage}} );
    res.json(age);
});
module.exports = router ;