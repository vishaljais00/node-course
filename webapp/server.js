const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // accessing the public folder

app.use((req, res, next) => {

    var now = new Date().toString();

    var log = `${now}: ${req.method}: ${req.url}`;
    console.log(log)
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append to server.log')
        }
    })
    next();
})

// app.use((req ,res,next) => {

//     res.render('maintainence.hbs')
// })


// this is our helper to feed some perticular information to our html page 
hbs.registerHelper('getCurrentyear', () => {

    return new Date().getFullYear()
});


hbs.registerHelper('Scream', (text) => {

    return text.toUpperCase();
})

// helper is ended 
app.get('/', (req, res) => {


    res.render('home.hbs', {

        pageTitle: 'Home Page',
        Welcome_message: ' welcome to the brand new website',

    });

});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        pageTitle: 'About page',
    });

});

app.get('/project', (req, res) => {

    res.render('project.hbs', {

        pageTitle: 'Project page',

    });
})

app.get('/bad', (req, res) => {

    res.send({
        errorMessage: ' Unable to handel request'

    })

})
app.listen(port, () => {

    console.log(`Server is strated on port ${port} ...`)
});