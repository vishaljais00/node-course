// object property short hand

const name = 'Vishal'
const userage = 27

const user = {

    name : name,
    age :  userage,
    location : 'Delhi',
    password : 'Windows10',
    rating : 4.5

}

// object desturcturing

// const { name:username, password , rating} = user

// console.log(username)
// console.log(password)
// console.log(rating)

const person = (type , {name , location , password}) => {

    console.log( 
         type ,
         name , 
         location , 
         password)
}

person('Male' , user)