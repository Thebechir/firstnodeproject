// create an app
const express = require('express');
const app = express();
const port = 3000;

// connect to database
// const connect = require('./database/connect');

// cors config
const cors = require('cors');
app.use(cors());

// morgan config
const morgan = require('morgan');
app.use(morgan('dev'));

// body_parser config
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// import connection to database
const formconnect = require('./database/connect');



app.get('/', (req, res) => {
  res.json({message : 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// import connection to database
const connect = require('./database/connect');
// import routing
const todoAPI = require ('./routes/todoAPI')

const formAPI = require ('./routes/formAPI')
const tagAPI = require ('./routes/tagAPI')
const tutoAPI = require ('./routes/tutoAPI')
const userdetailsAPI = require ('./routes/userdetailsAPI')

// the commented part is separted into two files to organize 
// the commented part is separted into two files to organize 
// the commented part is separted into two files to organize 
// the commented part is separted into two files to organize 
// require todo schema
// const Todo = require('../models/todoSchema');



// // get all todos
// app.get('/todos' , async(req, res) => {
//     const todos = await Todo.find();
//     res.json(todos);
// });

// // get todo by id
// app.get('/todos/:id' , async(req, res) => {
//     const todos = await Todo.findById(req.params.id).exec();
//     res.json(todos);
// });

// // add todo
// app.post('/todos' , async(req, res) => {
//     const createtodo = await Todo.create(req.body)
//     res.json(createtodo);

// });

// // update toodo by id 
// app.put('/todos/:id' , async(req, res) => {
//     const upadted = await Todo.findByIdAndUpdate(req.params.id,req.body,{new : true}).exec();

//     res.json(upadted);
// });

// // delete todo by id 
// app.delete('/todos/:id' , async(req, res) => {
//     const todos = await Todo.findByIdAndDelete(req.params.id,req.body).exec();
//     res.json({message : "deleted todo"});
// });


// forms ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


// require form schema
// const form = require('../models/formSchema');



// get all forms
// app.get('/forms' , async(req, res) => {
//     const forms = await form.find();
//     res.json(forms);
// });

// // get form by id
// app.get('/forms/:id' , async(req, res) => {
//     const forms = await form.findById(req.params.id).exec();
//     res.json(forms);
// });

// // add form
// app.post('/forms' , async(req, res) => {
//     const createform = await form.create(req.body)
//     res.json(createform);

// });

// // update toodo by id 
// app.put('/forms/:id' , async(req, res) => {
//     const upadted = await form.findByIdAndUpdate(req.params.id,req.body,{new : true})

//     res.json(upadted);
// });

// // delete form by id 
// app.delete('/forms/:id' , async(req, res) => {
//     const forms = await form.findByIdAndDelete(req.params.id,req.body).exec();
//     res.json({message : "deleted form"});
// });

// // <25 all forms
// app.get('/forms/filterbechir/:minage' , async(req, res) => {
//     const age = await form.find({"age": {$gt :req.params.minage}} );
//     res.json(age);
// });



// use routing to be able to read it
app.use('',todoAPI)
app.use('',formAPI)
app.use('',tagAPI)
app.use('',tutoAPI)
app.use('',userdetailsAPI)