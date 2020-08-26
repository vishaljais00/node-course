const request = require("request");



const forecast = (address, callback) => {

    const uri =
        'http://api.weatherstack.com/current?access_key=512a894868b13073fe35dac8581577d7&query=' + address + '?units=f';

    request({
        uri,
        json: true
    }, (error, {body}) => {

        if (error) {
            callback('Unable to connect to the weather server !', undefined)
        } else if (body.error) {

            callback('Unable to connect to location try another search !', undefined)
        } else {
            callback(undefined , 
                {   temperature: body.current.temperature,
                    rain :body.current.precip,
                    latitude : body.location.lat,
                    longitude : body.location.lon,
                })
        }

    })
}

module.exports = forecast