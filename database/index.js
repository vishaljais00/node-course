const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopingkart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {

//     console.log('we are connected bro ...')
// });

// With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our kittens.
const kittySchema = new mongoose.Schema({
    name: String
});




kittySchema.methods.speak = function() {
    var greeting = "My name is " + this.name
    console.log(greeting);
}

// So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
const Kitten = mongoose.model('Kitten', kittySchema);

const katty = new Kitten({
    name: 'Syria'
});
const katty2 = new Kitten({
    name: 'Neve'
});
// console.log(katty.name);
// katty.speak();

katty2.save(function (err, katty2) {
    if (err) return console.error(err);
    // katty2.speak();
  });


//Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.

  Kitten.find( { name : "Syria"} , function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })