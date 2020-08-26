const fs = require('fs')


// const book = {
//     title: "My secret places",
//     author: " Vishal ",
// };

// const Jsonbook = JSON.stringify(book);
//  console.log(Jsonbook);

//  const parsedata = JSON.parse(Jsonbook)
//  console.log(parsedata.title)
// fs.writeFileSync('!-jason.json', Jsonbook)

// const databuffer = fs.readFileSync('1-json.json')
// const Jsondata = databuffer.toString()

// const data = JSON.parse(Jsondata)
// console.log(data.title)

const binarydata = fs.readFileSync('1-json.json')

debugger

const Jsondata = binarydata.toString()
const parsedata = JSON.parse(Jsondata)
parsedata.name = 'Raghav'
parsedata.age = '30'

const Userdata =  JSON.stringify(parsedata)
fs.writeFileSync('1-json.json', Userdata)
console.log(parsedata.name)