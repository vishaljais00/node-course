const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 5000;
const app = express();
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/Contactdance', {
	useNewUrlParser: true
});
const bodyparser = require("body-parser")

// Define mongoose Schema
var ContactSchema = new mongoose.Schema({
	name: String,
	phone: String,
	email: String,
	address: String,
	desc: String

});

var Contact = mongoose.model('Contact', ContactSchema);

// using middleware
app.use('/static', express.static('static')) // fpr serving static files
app.use(express.urlencoded())

// USING PUG

app.set('view engine', 'pug') // setbthe templaten engine as pug
app.set('views', path.join(__dirname, 'views')) // set the views directory

// END POINT 

app.get('/', (req, res) => {


	const params = {};
	res.status(200).render('home.pug', params)
})

app.get('/contact', (req, res) => {

	const params = {}
	res.status(200).render('contact.pug', params)
})

app.post('/contact', (req, res) => {

	var myDATA = new Contact(req.body);
	myDATA.save().then(() => {
		res.send(" this item has been save to database")
	}).catch(() => {

		res.status(400).send("this item cannot be saved to the database")
	});

	var DEl1 = new Contact(req.body.name)
	var Del2 = new Contact(req.body.email)

	
	//  res.status(200).render('contact.pug')
})

app.delete('/contact' , )

app.listen(port, () => {

	console.log(`your port is running on port : ${port}`)
})