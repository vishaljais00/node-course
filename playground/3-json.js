// setTimeout(() =>{

//     console.log('2 seconds are up')
// } , 2000)

// const names = ['Vishal' , 'angad', 'gulbaz']
// const shortname = names.filter((name) => {

//   return  name.length >= 4 
// })


// const geocode = (address , callback) => {

//     setTimeout(()=> {

//         const data = {

//             longitude : 0,
//             latitude : 0
//         }
//       const dataa = JSON.stringify(data)

//       const parse =JSON.parse(dataa)

//         callback(parse)
//     }, 2000)

// }

// geocode('India' , (data) => {

// console.log(data)
// })

const add = (a, b, callback) => {

    setTimeout(() => {

        const sum = a + b
        callback(sum)
    }, 2000)

 
}

add(1, 4, (sum) => {

    console.log(sum)
    console.log('2 seconds are up ')
})