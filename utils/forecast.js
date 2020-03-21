const request = require("request");
const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/4353187597387b0363114419dd6456f7/${lat},${long}`;
    request({ url, json: true }, (err, { body: responseBody }) => {
        if (err) {
            callback("Unable to connec to weather service.", undefined);
        } else if (responseBody.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(undefined, {
                summary: responseBody.daily.data[0].summary,
                temperature: responseBody.currently.temperature,
                rainChance: responseBody.currently.precipProbability
            });
        }
    });
};

module.exports = forecast;
