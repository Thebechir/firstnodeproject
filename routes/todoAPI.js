
// separate roots apis

const express  = require ("express")
const router = express.Router()

const Todo = require('../models/todoSchema');



// get all todos
router.get('/todos' , async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// get todo by id
router.get('/todos/:id' , async(req, res) => {
    const todos = await Todo.findById(req.params.id).exec();
    res.json(todos);
});

// add todo
router.post('/todos' , async(req, res) => {
    const createtodo = await Todo.create(req.body)
    res.json(createtodo);

});

// update toodo by id 
router.put('/todos/:id' , async(req, res) => {
    const upadted = await Todo.findByIdAndUpdate(req.params.id,req.body,{new : true}).exec();

    res.json(upadted);
});

// delete todo by id 
router.delete('/todos/:id' , async(req, res) => {
    const todos = await Todo.findByIdAndDelete(req.params.id,req.body).exec();
    res.json({message : "deleted todo"});
});


module.exports = router ;