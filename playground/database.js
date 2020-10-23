
// Inserting Data into DB mongo

const { query } = require("express")

use shopingkart
db.items.insertMany([{
    name: "smasung m31",
    price: 17500,
    rating : 4.5,
    qty : 220,
    sold : 85
}, {
    name: "smasung m30s",
    price: 15500,
    rating : 4,
    qty : 250,
    sold : 185
},{
    name: "Moto Fusion",
    price: 19500,
    rating : 4.2,
    qty : 100,
    sold : 45
},{
    name: "smasung m31s",
    price: 22500,
    rating : 4.5,
    qty : 300,
    sold : 285
},{
    name: "Nokia",
    price: 14000,
    rating : 3.5,
    qty : 150,
    sold : 35
}])

// Searching for data in mongodb using AND query
 use shopintgkart

 db.items.find({ rating : 3.5}) // this query will give return the object whose rating is 3.5
 db.items.find({rating : {$gte: 4}})
 db.items.find({price : {$gte : 20000}, rating : {$gt : 4.4}}) // herewe are using "AND" gte means greater than equal to & gt means greqater then only ( , ) this comma is use as AND 

 // now using or operator

 db.items.find({
      $or:[
          {price : {$gte : 20000}},     // using OR query 1. put the obects in curly braces 
          {rating : {$gt : 4.4}}        // close all the object using ARRAY 
        ]                               // before that put $or: keyword
    })

  
  // Using projection method 

  db.items.find({rating : {$gt :4}} , {rating : 1}) // here rating 1 means we only want the data of rating nothing else
  // output -> { "_id" : ObjectId("5f5415007d078d75f2b28543"), "rating" : 4.5 }
  //           { "_id" : ObjectId("5f5415007d078d75f2b28545"), "rating" : 4.2 }
  //           { "_id" : ObjectId("5f5415007d078d75f2b28546"), "rating" : 4.5 }

   
  db.items.find({rating : {$gt :4}} , {rating : 1 , qty : 1 }) // projecting rating as well as quantity 


  // deleting an item from MONGODB 

  db.items.deleteOne({price : 17500})  //  deleteOne will delete the matching objects and will delete first entry in case of multiple match objects

  db.items.deleteMany({ price : { $gte :20000} , name : "iphone" })   // delete all the objext which will match the query

  // Updating an item from mongo db

  db.items.updateOne({ name : "Nokia"},{$set : {price : 4500}})  // This will update the price of your matches Object in the query 
  
  db.items.updateMany({ name : "iphone"},{$set : {price : 40 , rating : 1 }}) // here we are updating mutiple items in object 