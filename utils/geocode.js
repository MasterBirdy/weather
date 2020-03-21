const request = require("request");

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        address
    )}.json?access_token=pk.eyJ1IjoibWFzdGVyYmlyZHkiLCJhIjoiY2s3dWM0ZzVjMTltNjNlbHVyMTlldDZ0ZSJ9.kxv9VJJ27Yi-92RMn2ttMg&limit=1`;
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback("Unable to connect to location services!", undefined);
        } else if (body.features.length === 0) {
            callback(
                "Unable to find location. Try again with a different search term.",
                undefined
            );
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
