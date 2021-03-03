const express = require('express');
const elements = require('./elements.js');
const app = express();

app.set('view engine','ejs');

app.get('/', (req, res) => { 
    res.render('index', { data: elements });
});

app.get('/elements/:elementName', (req, res) => {
    elements.forEach(element => {
        if (element.name == req.params.elementName){
            res.render('element',{
                element : element
            });
        }
    });
});

app.listen(3000);