const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const hbs = require('hbs');
const app = express();
PORT = 8000;
const templatePath = path.join(__dirname, "../Templates/views");
const partialsPath = path.join(__dirname,"../Templates/partials");
 
app.set("view engine", "hbs");
app.set("views" ,templatePath);
hbs.registerPartials(partialsPath);

app.get('',(req,res)=>{

    res.render('index');
})
app.get('/contactus',(req,res)=>{
    res.render('contactus');
})
app.get('/services',(req,res)=>{
    res.render('services');
})

const staticpath = path.join(__dirname, "../public");
app.use(express.static(staticpath));


app.get('',(req,res)=>{
    res.send("bhgh");
})

app.listen(PORT,()=>{
    console.log("Listening at port 8000");
})