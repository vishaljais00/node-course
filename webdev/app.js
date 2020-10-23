const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port = 80;

//express specific stuff using middleware
app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded());

//pug specific stuff
app.set('view engine', 'pug')//set the template engie using pug
app.set('views', path.join(__dirname, 'views'))// set the views directory



// our  end point

    app.get('/' , (req ,res) => {
        
        const con = " this the best game so use it wisely" 
        const params = { 'title': 'pubg is the best game', 'content' : con}
        res.status(200).render('index.pug' , params)
    })

    app.post('/' , (req, res,) => {

        name = req.body.name
        age= req.body.age
        gender = req.body.gender
        address = req.body.address
        about = req.body.more

        let OutputToWrite = `The name of the person is ${name} , ${age} years old ${gender}, residing at ${address}. More about ${name} : ${about} .  `

        fs.writeFileSync('output.txt' , OutputToWrite)
        const params = { 'message': ' your form is been submitted'}
        res.status(200).render('index.pug',params)
    })

// server listining 
app.listen(port, () => {

    console.log(`Server is started on port ${port}`)
})