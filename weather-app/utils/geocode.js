const request = require("request");




const geocode = (latitude, longitude, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/london.json?proximity='+latitude+','+longitude+'&access_token=pk.eyJ1IjoidmlzaGFsMDAiLCJhIjoiY2tkOWZrbXl3MHVwZTJ5bm4zMW96Z29hZSJ9.w25iKul4bj_170noi7fGTg&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
