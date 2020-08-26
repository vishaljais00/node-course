const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=512a894868b13073fe35dac8581577d7&query=London?units=f';

const request = http.request(url , (response) => {

    let data = ''
    response.on('data', (chunk) => {

        data = data + chunk.toString()
        console.log(chunk)
    })

response.on('End', () => {

})

})

request.end()
