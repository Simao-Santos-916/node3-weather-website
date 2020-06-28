const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=579c42d39e8c230924dd49c8a56ec562&query=' 
        + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Enable to connetc', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                weather_description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                temperature_feels: body.current.feelslike
            })
        }
    })
}

module.exports = forecast;