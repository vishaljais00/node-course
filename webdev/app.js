const express = require('express')

const app = express();
const port = 80;

app.get("/" , (req , res) =>{

    res.send('this is my request for home page')
})

app.get("/about" , (req , res) =>{

    res.send('this is my request for about page')
})
app.get("/contact" , (req , res) =>{

    res.send('this is my request for contact')
})


app.listen(port , ()=>{

    console.log(`Server is started on port ${port}`)
}) 