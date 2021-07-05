const express = require('express');
const BookData = require('./src/model/Bookdata');
const AuthorData = require('./src/model/Authordata');
//const User = require('./src/model/user');
const User = require('./src/model/Userdata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

  app.get('/',function(req,res){  
     res.send(home);
});

app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var book = {       
        title : req.body.book.title,
        author : req.body.book.author,
        genre : req.body.book.genre,
        image : req.body.book.image,
   }       
   var book = new BookData(book);
   book.save();
});
app.get('/books',function(req,res){
    
    BookData.find()
                .then(function(books){
                    res.send(books);
                });
});

//app.get('/:id',  (req, res) => {
 // app.get('/books/:id',  (req, res) => {
  app.get('/books/:_id',  (req, res) => {     
  //const id = req.params.id;
  const id = req.params._id;
    BookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    });

})

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      title = req.body.title,
      author = req.body.author,
      genre = req.body.genre,
      image = req.body.image
     BookData.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "title":title,
                                  "author":author,
                                  "genre":genre,
                                  "image":image}})
     .then(function(){
         res.send();
     })
   })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     BookData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })

app.post('/insertauthor',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var author = {       
        name : req.body.author.name,
        age : req.body.author.age,
        type : req.body.author.type,
        image : req.body.author.image,
   }       
   var author = new AuthorData(author);
   author.save();
});
app.get('/authors',function(req,res){
    
    AuthorData.find()
                .then(function(authors){
                    res.send(authors);
                });
});
//app.get('/:id',  (req, res) => {
 // app.get('/authors/:id',  (req, res) => {
  app.get('/authors/:_id',  (req, res) => {     

  //const id = req.params.id;
  const id = req.params._id;  
    AuthorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    });

})

app.put('/updateauthor',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  name = req.body.name,
  age = req.body.age,
  type = req.body.type,
  image = req.body.image
 AuthorData.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "name":name,
                              "age":age,
                              "type":type,
                              "image":image}})
 .then(function(){
     res.send();
 })
})

app.delete('/removeauthor/:id',(req,res)=>{

 id = req.params.id;
 AuthorData.findByIdAndDelete({"_id":id})
 .then(()=>{
     console.log('success')
     res.send();
 })
})

app.listen(3000, function(){
    console.log('listening to port 3000');
});

