const request = require("request");
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// const url =
//   "http://api.weatherstack.com/current?access_key=512a894868b13073fe35dac8581577d7&query=India?units=f";

// request(
//   {
//     url: url,
//     json: true,
//   },
//   (err, responce) => {
//     // console.log(responce.body.current)
//     console.log(
//       "the temperature is currently " +
//         responce.body.current.temperature +
//         " degree and there is " +
//         responce.body.current.precip +
//         " % of chances of rain"
//     );
//   }
// );

const address = process.argv[2]
if (!address) {

    console.log(' Please provide an right address')

} else {

    forecast(address, (error, {temperature , rain , latitude , longitude}) => {

        if (error) {
            return console.log(error)
        }
         geocode(latitude,longitude, (error, data) => {

             if (error) {

                 return console.log(error)
             }

            console.log('Data => ', temperature , 'Rain => ', rain, 'Latitude =>', latitude , 'Longitude => ', longitude)
            console.log('Data', data.location)
        })

    })
}