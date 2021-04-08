
// separate roots apis

const express  = require ("express")
const router = express.Router()

const userD = require('../models/userdetailsSchema');



// get all userDs
router.get('/userDs' , async(req, res) => {
    const userDs = await userD.find();
    res.json(userDs);
});

// get userD by id
router.get('/userDs/:id' , async(req, res) => {
    const userDs = await userD.findById(req.params.id).exec();
    res.json(userDs);
});

// add userD
router.post('/userDs' , async(req, res) => {
    const createuserD = await userD.create(req.body)
    res.json(createuserD);

});

// update toodo by id 
router.put('/userDs/:id' , async(req, res) => {
    const upadted = await userD.findByIdAndUpdate(req.params.id,req.body,{new : true}).exec();

    res.json(upadted);
});

// delete userD by id 
router.delete('/userDs/:id' , async(req, res) => {
    const userDs = await userD.findByIdAndDelete(req.params.id,req.body).exec();
    res.json({message : "deleted userD"});
});


module.exports = router ;