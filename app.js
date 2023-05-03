// var express = require('express');
// var http=require('http')

// var mydb=require("./db")
// var path = require('path'); 
// // var dir = path.join(__dirname, 'images');

// mydb.connect((err)=>{
//     if(err)
//     console.log('Database connection Error :'+err);
//     else
//     console.log('db connect')
// });

// const cors = require("cors");
// const app = express();
// const listener = app.listen(process.env.PORT || 8888, '0.0.0.0',() => { })

// app.use(cors());
// app.use(express.json()); 

// app.use('/images', express.static('images'));
// app.use(require('./modules/route'))

const express = require('express');
const fileUpload = require('express-fileupload');
var mydb=require("./db")
var path = require('path'); 



mydb.connect((err)=>{
    if(err)
    console.log('Database connection Error :'+err);
    else
    console.log('db connect')
});

const cors = require("cors");
const app = express();
var path = require('path'); 
const listener = app.listen(process.env.PORT || 8000, '0.0.0.0',() => { })

app.use(cors());
app.use(express.json()); 
//app.use(fileUpload());

app.set('views', path.join(__dirname, 'views'));
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(path.join(__dirname,'appartment')));
app.use(express.static(path.join(__dirname,'appartprint')));
app.use(express.static(path.join(__dirname, 'cottage')));
app.use(express.static(path.join(__dirname, 'cottprint')));
app.use(express.static(path.join(__dirname, 'farm')));
app.use(express.static(path.join(__dirname, 'farmprint')));
app.use(express.static(path.join(__dirname, 'modern')));
app.use(express.static(path.join(__dirname, 'modernprint')));
app.use(express.static(path.join(__dirname, 'palace')));
app.use(express.static(path.join(__dirname, 'palaceprint')));
app.use(express.static(path.join(__dirname, 'studio')));
app.use(express.static(path.join(__dirname, 'studioprint')));
app.use(express.static(path.join(__dirname, 'eco')));
app.use(express.static(path.join(__dirname, 'ecoprint')));
app.use(express.static('public')); 


// app.use('/images', express.static('uploads'));
// app.post('/upload', require('./modules/conroller').image);

app.use(require('./modules/route'));
